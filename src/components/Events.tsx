import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import culturalEvent from "@/assets/cultural-event.jpg";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Diwali Cultural Celebration",
      date: "November 15, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Helsinki Cultural Center",
      description: "Join us for an enchanting evening celebrating the Festival of Lights with traditional music, dance, and community spirit.",
      status: "upcoming",
      attendees: "200+"
    },
    {
      id: 2,
      title: "Winter Fusion Concert",
      date: "December 22, 2024",
      time: "6:30 PM - 9:00 PM",
      location: "Tampere Concert Hall",
      description: "A magical winter evening blending Indian classical ragas with contemporary arrangements.",
      status: "upcoming",
      attendees: "150+"
    },
    {
      id: 3,
      title: "Republic Day Celebration",
      date: "January 26, 2025",
      time: "5:00 PM - 8:00 PM",
      location: "Turku Community Center",
      description: "Honoring India's Republic Day with patriotic songs and classical performances.",
      status: "upcoming",
      attendees: "300+"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Independence Day Gala",
      date: "August 15, 2024",
      location: "Helsinki Senate Square",
      description: "A grand celebration of India's Independence Day with over 500 attendees.",
      status: "completed"
    },
    {
      id: 5,
      title: "Monsoon Melodies",
      date: "July 20, 2024",
      location: "Espoo Cultural Center",
      description: "An intimate evening of classical ragas inspired by the monsoon season.",
      status: "completed"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Events & Performances
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the magic of Indian classical fusion music at our upcoming events 
            and revisit the memories of our past celebrations.
          </p>
        </div>

        {/* Featured Event */}
        <Card className="mb-16 overflow-hidden cultural-glow">
          <div className="grid md:grid-cols-2 gap-0">
            <div 
              className="h-64 md:h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${culturalEvent})` }}
            />
            <div className="p-8">
              <Badge className="mb-4 bg-primary text-primary-foreground">Featured Event</Badge>
              <h3 className="text-3xl font-bold mb-4">Diwali Cultural Celebration 2024</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join us for our biggest celebration of the year! This Diwali, we're bringing together 
                the entire Finnish-Indian community for an evening of music, dance, food, and joy.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-primary mr-3" />
                  <span className="font-semibold">November 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-secondary mr-3" />
                  <span>7:00 PM - 10:00 PM</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-accent mr-3" />
                  <span>Helsinki Cultural Center</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-gold mr-3" />
                  <span>200+ Expected</span>
                </div>
              </div>
              
              <Button variant="hero" size="lg" className="w-full">
                Register for Diwali Event
              </Button>
            </div>
          </div>
        </Card>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="p-6 performance-card warm-glow">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{event.status}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 text-primary mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 text-secondary mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 text-accent mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">Past Celebrations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map((event) => (
              <Card key={event.id} className="p-6 opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{event.status}</Badge>
                </div>
                
                <h4 className="text-xl font-bold mb-3">{event.title}</h4>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {event.description}
                </p>
                
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2" />
                  {event.date} • {event.location}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Want us to perform at your event?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether it's a cultural celebration, wedding, corporate event, or private gathering, 
            we'd love to bring the magic of Indian classical fusion music to your special occasion.
          </p>
          <Button variant="cultural" size="lg" className="px-8">
            Book Us for Your Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Events;