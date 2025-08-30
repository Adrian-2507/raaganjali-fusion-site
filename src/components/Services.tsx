import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Music, Volume2, Users, Calendar, Star, Heart } from "lucide-react";

const Services = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we bring the magic of Indian 
            classical fusion music to every occasion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Music Performance Service */}
          <Card className="p-8 performance-card warm-glow">
            <div className="flex items-center mb-6">
              <Music className="h-12 w-12 text-primary mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Live Music Performances</h3>
                <p className="text-muted-foreground">Classical fusion for every occasion</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-gold mr-3" />
                <span>Cultural celebrations (Diwali, Independence Day)</span>
              </div>
              <div className="flex items-center">
                <Heart className="h-5 w-5 text-accent mr-3" />
                <span>Wedding ceremonies and receptions</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-secondary mr-3" />
                <span>Corporate events and community gatherings</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-primary mr-3" />
                <span>Festival performances and cultural shows</span>
              </div>
            </div>
            
            <Button variant="hero" className="w-full">
              Book Our Performance
            </Button>
          </Card>

          {/* Sound System Rental Service */}
          <Card className="p-8 performance-card cultural-glow">
            <div className="flex items-center mb-6">
              <Volume2 className="h-12 w-12 text-secondary mr-4" />
              <div>
                <h3 className="text-2xl font-bold">Sound System Rental</h3>
                <p className="text-muted-foreground">Professional audio equipment</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-gold mr-3" />
                <span>High-quality professional sound systems</span>
              </div>
              <div className="flex items-center">
                <Music className="h-5 w-5 text-primary mr-3" />
                <span>Microphones and mixing equipment</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 text-accent mr-3" />
                <span>Setup and technical support included</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-secondary mr-3" />
                <span>Flexible rental duration</span>
              </div>
            </div>
            
            <Button variant="cultural" className="w-full">
              Rent Sound Equipment
            </Button>
          </Card>
        </div>

        {/* Service Packages */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">Service Packages</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center performance-card">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Essential</h4>
              <p className="text-muted-foreground mb-4">
                Perfect for intimate gatherings and small celebrations
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• 2-3 musicians</li>
                <li>• 1-2 hours performance</li>
                <li>• Basic sound setup</li>
                <li>• Traditional repertoire</li>
              </ul>
              <Button variant="outline" className="w-full">
                Get Quote
              </Button>
            </Card>

            <Card className="p-6 text-center performance-card border-2 border-primary">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Premium</h4>
              <p className="text-muted-foreground mb-4">
                Ideal for weddings and cultural celebrations
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• 4-5 musicians</li>
                <li>• 3-4 hours performance</li>
                <li>• Professional sound system</li>
                <li>• Classical + fusion repertoire</li>
              </ul>
              <Button variant="hero" className="w-full">
                Most Popular
              </Button>
            </Card>

            <Card className="p-6 text-center performance-card">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3">Deluxe</h4>
              <p className="text-muted-foreground mb-4">
                Complete cultural experience for grand events
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                <li>• Full ensemble (6+ musicians)</li>
                <li>• Full day performance</li>
                <li>• Complete A/V setup</li>
                <li>• Custom repertoire</li>
              </ul>
              <Button variant="gold" className="w-full">
                Contact Us
              </Button>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom package? We're happy to create something special for your event.
          </p>
          <Button variant="cultural" size="lg">
            Discuss Your Event
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;