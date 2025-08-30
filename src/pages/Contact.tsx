import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        <section className="py-20 px-6 bg-muted/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to bring the magic of Indian classical fusion to your event? 
                Let's discuss how we can make your celebration unforgettable.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8 warm-glow">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+358 XX XXX XXXX"
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="eventType">Event Type</Label>
                    <Input
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      placeholder="Wedding, Cultural Event, Corporate, etc."
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your event, preferred dates, number of guests, and any special requirements..."
                      required
                      className="mt-2 min-h-[120px]"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" className="w-full" size="lg">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <Card className="p-8 cultural-glow">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-muted-foreground">info@raaganjali.fi</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-secondary" />
                      </div>
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground">+358 XX XXX XXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold">Location</p>
                        <p className="text-muted-foreground">Helsinki, Finland</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8">
                  <h4 className="text-xl font-bold mb-4">Quick Response</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    We typically respond to all inquiries within 24 hours. For urgent 
                    booking requests, please call us directly.
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Response Time:</span>
                      <span className="text-muted-foreground">Within 24 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Booking Lead Time:</span>
                      <span className="text-muted-foreground">2-4 weeks preferred</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Service Area:</span>
                      <span className="text-muted-foreground">All of Finland</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-secondary text-white">
                  <h4 className="text-xl font-bold mb-4">Ready to Book?</h4>
                  <p className="opacity-90 mb-6 leading-relaxed">
                    Let's start planning your perfect musical experience. Our team 
                    is ready to discuss your vision and create something magical together.
                  </p>
                  <Button variant="gold" className="w-full">
                    Schedule a Consultation Call
                  </Button>
                </Card>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-bold mb-8">Frequently Asked Questions</h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="p-6 text-left">
                  <h5 className="font-bold mb-2">How far in advance should I book?</h5>
                  <p className="text-muted-foreground text-sm">
                    We recommend booking 2-4 weeks in advance, especially for popular dates 
                    like cultural holidays and weekend events.
                  </p>
                </Card>
                
                <Card className="p-6 text-left">
                  <h5 className="font-bold mb-2">Do you travel outside Helsinki?</h5>
                  <p className="text-muted-foreground text-sm">
                    Yes, we perform throughout Finland. Travel costs may apply for 
                    events outside the Helsinki metropolitan area.
                  </p>
                </Card>
                
                <Card className="p-6 text-left">
                  <h5 className="font-bold mb-2">What's included in your packages?</h5>
                  <p className="text-muted-foreground text-sm">
                    Our packages include musicians, instruments, basic sound setup, and 
                    consultation. Premium packages include enhanced audio equipment.
                  </p>
                </Card>
                
                <Card className="p-6 text-left">
                  <h5 className="font-bold mb-2">Can you customize the music selection?</h5>
                  <p className="text-muted-foreground text-sm">
                    Absolutely! We work with you to select music that fits your event's 
                    theme and cultural significance.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;