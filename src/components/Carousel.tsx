import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Music, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-raaganjali.jpg";
import groupPerformance from "@/assets/group-performance.jpg";
import culturalEvent from "@/assets/cultural-event.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      title: "Welcome to Raaganjali",
      subtitle: "Celebrating Indian Music and Culture in Finland",
      description: "A passionate collective bringing the rich tapestry of Indian classical and devotional music to life through performance, collaboration, and community.",
      cta: "Book a Performance",
      ctaLink: "/contact"
    },
    {
      image: groupPerformance,
      title: "Live Performances",
      subtitle: "Traditional Meets Contemporary",
      description: "Experience the magic of Indian classical fusion music at weddings, cultural celebrations, and community events across Finland.",
      cta: "View Our Services",
      ctaLink: "/services"
    },
    {
      image: culturalEvent,
      title: "Cultural Celebrations",
      subtitle: "Diwali, Independence Day & More",
      description: "Join us for authentic Indian cultural celebrations that bring the community together through music, tradition, and shared joy.",
      cta: "Upcoming Events",
      ctaLink: "/events"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carousel Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 pattern-overlay opacity-30" />
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <div className="musical-float">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
            {slides[currentSlide].title.split(' ').map((word, i) => 
              word === 'Raaganjali' ? (
                <span key={i} className="text-gradient-primary">{word}</span>
              ) : word + ' '
            )}
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light">
            {slides[currentSlide].subtitle}
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {slides[currentSlide].description}
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link to={slides[currentSlide].ctaLink}>
            <Button variant="hero" size="lg" className="px-8 py-6 text-lg">
              <Music className="mr-2 h-5 w-5" />
              {slides[currentSlide].cta}
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="cultural" size="lg" className="px-8 py-6 text-lg">
              <Users className="mr-2 h-5 w-5" />
              Meet Our Team
            </Button>
          </Link>
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

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-gold scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;