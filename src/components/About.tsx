import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import groupPerformance from "@/assets/group-performance.jpg";

const About = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Raaganjali is more than just a music group - we are cultural ambassadors, 
            bringing the soul of India to Finland through the universal language of music.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={groupPerformance} 
              alt="Raaganjali group performance" 
              className="rounded-2xl shadow-2xl w-full h-[400px] object-cover performance-card"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">Our Musical Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by passionate musicians who share a deep love for Indian classical traditions 
              and contemporary fusion, Raaganjali represents the beautiful harmony that emerges 
              when different musical worlds unite.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our unique sound combines the intricate ragas of Indian classical music with 
              modern instrumentation, creating performances that resonate with audiences 
              from all cultural backgrounds.
            </p>
            <Button variant="hero" className="mt-6">
              Learn More About Our Music
            </Button>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 cultural-glow">
            <h4 className="text-2xl font-bold mb-4 text-primary">Our Mission</h4>
            <p className="text-muted-foreground leading-relaxed">
              To preserve, celebrate, and evolve Indian classical music traditions 
              while fostering cross-cultural understanding through the power of music. 
              We believe music transcends boundaries and brings people together.
            </p>
          </Card>
          <Card className="p-8 warm-glow">
            <h4 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h4>
            <p className="text-muted-foreground leading-relaxed">
              To be Finland's premier Indian cultural music collective, inspiring 
              future generations to embrace their heritage while building bridges 
              between diverse communities through artistic excellence.
            </p>
          </Card>
        </div>

        {/* Key Highlights */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Why Choose Raaganjali?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <p className="text-lg font-semibold mb-2">Years of Experience</p>
              <p className="text-muted-foreground">Decades of combined musical expertise</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <p className="text-lg font-semibold mb-2">Cultural Events</p>
              <p className="text-muted-foreground">Performances across Finland and beyond</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-accent mb-2">100%</div>
              <p className="text-lg font-semibold mb-2">Passion Driven</p>
              <p className="text-muted-foreground">Authentic cultural representation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;