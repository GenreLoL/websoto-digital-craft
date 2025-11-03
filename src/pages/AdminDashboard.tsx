import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { LogOut, Mail, Clock, AlertCircle } from "lucide-react";
import SEO from "@/components/SEO";

interface Ticket {
  id: string;
  subject: string;
  message: string;
  user_name: string;
  user_email: string;
  status: string;
  priority: string;
  admin_notes: string | null;
  created_at: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [adminNotes, setAdminNotes] = useState("");

  useEffect(() => {
    checkAdminAccess();
    fetchTickets();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      navigate("/admin/login");
      return;
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .single();

    if (roleData?.role !== "admin") {
      toast.error("Access denied");
      navigate("/");
    }
  };

  const fetchTickets = async () => {
    try {
      const { data, error } = await supabase
        .from("tickets")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTickets(data || []);
    } catch (error: any) {
      toast.error("Failed to load tickets");
    } finally {
      setLoading(false);
    }
  };

  const updateTicket = async (ticketId: string, updates: Partial<Ticket>) => {
    try {
      const { error } = await supabase
        .from("tickets")
        .update(updates)
        .eq("id", ticketId);

      if (error) throw error;
      
      toast.success("Ticket updated");
      fetchTickets();
      setSelectedTicket(null);
    } catch (error: any) {
      toast.error("Failed to update ticket");
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive/20 text-destructive";
      case "medium": return "bg-accent/20 text-accent";
      case "low": return "bg-muted/20 text-muted-foreground";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open": return "bg-accent/20 text-accent";
      case "in_progress": return "bg-primary/20 text-primary";
      case "resolved": return "bg-muted/20 text-muted-foreground";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEO 
        title="Admin Dashboard - WebSoto"
        description="Support ticket management dashboard"
      />
      <Header />
      
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Support Dashboard</h1>
            <Button onClick={handleLogout} variant="outline">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          <div className="grid gap-6">
            {tickets.length === 0 ? (
              <Card className="bg-card border-border">
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground">No tickets yet</p>
                </CardContent>
              </Card>
            ) : (
              tickets.map((ticket) => (
                <Card key={ticket.id} className="bg-card border-border">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="mb-2">{ticket.subject}</CardTitle>
                        <div className="flex gap-2 flex-wrap">
                          <Badge className={getPriorityColor(ticket.priority)}>
                            {ticket.priority}
                          </Badge>
                          <Badge className={getStatusColor(ticket.status)}>
                            {ticket.status}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <Mail className="w-4 h-4" />
                          {ticket.user_email}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {new Date(ticket.created_at).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-semibold mb-1">From: {ticket.user_name}</p>
                      <p className="text-sm text-muted-foreground">{ticket.message}</p>
                    </div>

                    {ticket.admin_notes && (
                      <div className="mb-4 p-3 bg-muted/50 rounded">
                        <p className="text-sm font-semibold mb-1">Admin Notes:</p>
                        <p className="text-sm">{ticket.admin_notes}</p>
                      </div>
                    )}

                    {selectedTicket?.id === ticket.id ? (
                      <div className="space-y-3">
                        <Textarea
                          placeholder="Add admin notes..."
                          value={adminNotes}
                          onChange={(e) => setAdminNotes(e.target.value)}
                          className="min-h-24"
                        />
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            onClick={() => updateTicket(ticket.id, { 
                              admin_notes: adminNotes,
                              status: "in_progress"
                            })}
                            className="bg-accent text-accent-foreground"
                          >
                            Save & Mark In Progress
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateTicket(ticket.id, { 
                              admin_notes: adminNotes,
                              status: "resolved"
                            })}
                          >
                            Save & Resolve
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {
                              setSelectedTicket(null);
                              setAdminNotes("");
                            }}
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          setSelectedTicket(ticket);
                          setAdminNotes(ticket.admin_notes || "");
                        }}
                      >
                        Manage Ticket
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AdminDashboard;
