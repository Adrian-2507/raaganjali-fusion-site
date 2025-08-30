import { Button } from "@/components/ui/button";
import { Music, Users, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-raaganjali.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="musical-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            Welcome to <span className="text-gradient-primary">Raaganjali</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            Celebrating Indian Music and Culture in Finland
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            A passionate collective bringing the rich tapestry of Indian classical and devotional music to life through performance, collaboration, and community.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
            <Music className="mr-2 h-5 w-5" />
            Book a Performance
          </Button>
          <Button variant="cultural" size="lg" className="px-8 py-6 text-lg">
            <Users className="mr-2 h-5 w-5" />
            Meet Our Team
          </Button>
        </div>
        
        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 cultural-glow">
            <Music className="h-12 w-12 mb-4 mx-auto text-gold" />
            <h3 className="text-xl font-semibold mb-2">Classical Fusion</h3>
            <p className="opacity-90">Traditional Indian instruments meet modern rock elements</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 warm-glow">
            <Calendar className="h-12 w-12 mb-4 mx-auto text-gold" />
            <h3 className="text-xl font-semibold mb-2">Cultural Events</h3>
            <p className="opacity-90">Independence Day, Diwali, and community celebrations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 cultural-glow">
            <Users className="h-12 w-12 mb-4 mx-auto text-gold" />
            <h3 className="text-xl font-semibold mb-2">Community</h3>
            <p className="opacity-90">Building bridges through music and shared experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;