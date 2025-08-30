import Carousel from "@/components/Carousel";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <Carousel />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
