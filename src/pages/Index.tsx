import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
// video formats
import maritimeHeroBg from "@/assets/maritime-hero-bg.jpg";
import maritimeVideoMp4 from "@/assets/videos/maritime-video.mp4";
import maritimeVideoWebm from "@/assets/videos/maritime-video.webm";
// services images
import {
  offshoresupportvessels,
  anchorhandling,
  securityvessel,
  houseboatbarge,
} from "@/assets/services-images/images";

const Index = () => {
const services = [
  {
    title: "Supply of offshore support vessels (OSV)",
    description: "Reliable offshore support vessels to meet diverse operational needs in oil, gas, and maritime industries.",
    features: [
      "Supply vessel management",
      "Cargo handling & storage",
      "Offshore transport support",
      "Fuel and provisions delivery",
      "Emergency response logistics"
    ],
    image: offshoresupportvessels
  },
  {
    title: "Supply of anchor handling tug supply vessels (AHTS)",
    description: "Powerful tug vessels designed for towing, anchor handling, and offshore installation support.",
    features: [
      "Anchor handling operations",
      "Towing and positioning rigs",
      "Heavy lifting support",
      "Rescue and standby services",
      "Deep-water operations"
    ],
    image: anchorhandling
  },
  {
    title: "All kinds of security escort and field security vessel",
    description: "Specialized vessels ensuring maritime security for offshore installations, cargo, and crew.",
    features: [
      "Armed security escort",
      "Surveillance & monitoring",
      "Field security patrols",
      "Crew protection services",
      "Anti-piracy operations"
    ],
    image: securityvessel
  },
  // {
  //   title: "Supply of house boat, barges for cargos",
  //   description: "Comfortable offshore houseboats and reliable barges for transporting cargo and equipment.",
  //   features: [
  //     "Houseboat accommodation",
  //     "Cargo transport barges",
  //     "Storage solutions",
  //     "Crew facilities",
  //     "Shallow water access"
  //   ],
  //   image: houseboatbarge
  // },
  
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
            <section className="mt-20 flex justify-center items-center">
              <div className="bg-primary shadow-2xl rounded-2xl overflow-hidden border border-primary-foreground/10 w-full max-w-4xl">
                <div className="w-full flex justify-center">
                  <video
                    className="w-full"
                    style={{ maxHeight: "550px", objectFit: "cover" }}
                    autoPlay
                    loop
                    muted
                  >
                    <source src={maritimeVideoMp4} type="video/mp4" />
                    <source src={maritimeVideoWebm} type="video/webm" />
                    <source src="../assets/videos/maritime-video.ogv" type="video/ogv" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </section>
      {/* Services Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive maritime and offshore solutions tailored to meet the demanding requirements of the industry.
            </p>
          </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg h-full">
                 <CardContent className="text-center">
                    <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-24 h-24 object-cover"
                        style={{ width: "100%", height: "96px", objectFit: "cover" }}
                      />
                    </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary text-sm mb-3">Key Services:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
            </div>
            </section>
            {/* video section
            <section className="py-20 text-primary-foreground flex justify-center items-center">
              <div className="w-full flex justify-center">
                <iframe
                  width="1120"
                  height="630"
                  src="https://www.youtube.com/embed/8bFW4R_5B9E?si=RH1yP75tK--hQzlq&autoplay=1"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </section> */}
            

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