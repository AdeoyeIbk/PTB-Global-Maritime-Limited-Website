import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
// video formats
import maritimeHeroBg from "@/assets/maritime-hero-bg.jpg";
import maritimeVideoMp4 from "@/assets/videos/maritime_video_custom.mp4";

const Index = () => {

  const services = [
    "Supply Of Offshore Support Vessels (OSV)",
    "Supply Of Anchor Handling Tug Supply Vessels (AHTS)",
    "All Kinds Of Security Escort And Field Security Vessels",
    "Supply Of House Boats, Barges For Cargo",
    "Speed Trial And Inspection Of Security Vessels",
    "Crewing Of Offshore Support Vessels & Security Vessels",
    "Supply Of Petroleum Products (Haulage)",
    "Supply Of Engine Room Accessories And Consumables (Fueling, Lube Oil, Engine Filters, Valves, Hydraulics)",
    "Vessel Food Chandling",
    "Sand-Blasting And Painting Of Rigs, FPSO, And Rig Platforms",
    "We Do All Your Company Logistics In Both Sea & Land In As Much As It Is Oil & Gas"
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${maritimeHeroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Global Leaders in
            <span className="block text-secondary"> Maritime & Offshore</span>
            Resource Management
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Delivering excellence in offshore logistics, resource management, and oil & gas support services with unmatched expertise and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-4">
              <Link to="/services">Learn More</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-foreground animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>
{/* video section */}
            <section className="flex justify-center items-center">
              <div className="bg-primary shadow-2xl overflow-hidden border w-full max-w-6.5xl">
                <div className="w-full flex justify-center">
                  <video
                    className="w-full"
                    style={{ maxHeight: "550px", objectFit: "cover" }}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={maritimeVideoMp4} type="video/mp4" />
                    {/* <source src="../assets/videos/maritime-video.ogv" type="video/ogv" /> */}
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
      </section>
      
      {/* Services Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-1">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive maritime and offshore solutions tailored to meet the demanding requirements of the industry.
            </p>
          </div>
          {/* services here */}
          <ul className="flex flex-col gap-3 mb-10 list-none">
            {services.map((service) => (
              <li key={service} className="flex items-center justify-start">
                <span className="w-3 h-3 rounded-full bg-secondary mr-4 border-primary" />
                <h3 className="text-md md:text-xl font-regular text-primary">{service}</h3>
              </li>
            ))}
          </ul>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Services On a Special Note!
            </h2>
          </div>
          <p className="text-center text-lg text-muted-foreground mx-auto">
            PTB GLOBAL MARITIME RESOURCES handles your already won marine contracts, in terms of managing your vessels both offshore support vessels (OSV) and Security Escort Vessels. We go as low as Sort for vessel of all kind, check all the current required vessel documentation, We inspect the Engine condition to confirm fit to a task, We Carry Out Speed trial test to ensure contract agreed speed or knots, Crewing the vessel with a qualify Sea men with their various positions in their minimize Salaries, including Armed Navy officers onboard security vessel. We ensure Supply of food/provision (food chandling), including the Supply of bunker to the vessel.

 'ENGAGE US, LET US MANAGE YOUR VESSELS AND YOUR MARINE COMPANY WITH A VERY MINIMIZE COST AND ON TIME TASK/SERVICES DELIVERY.'
          </p></div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
            </div>
            </section>
           
            

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Maritime Leaders?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Let's discuss how PTB Global Maritime Resource can optimize your offshore operations and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;