import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

import {
  offshoresupportvessels,
  anchorhandling,
  securityvessel,
  houseboatbarge,
  speedtrial,
  crewing,
  petroleumhaulage,
  engineaccessories,
  foodchadler,
  sandblasting,
  logistics,
} from "@/assets/services-images/images";

const Services = () => {
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
    {
      title: "Supply of house boat, barges for cargos",
      description: "Comfortable offshore houseboats and reliable barges for transporting cargo and equipment.",
      features: [
        "Houseboat accommodation",
        "Cargo transport barges",
        "Storage solutions",
        "Crew facilities",
        "Shallow water access"
      ],
      image: houseboatbarge
    },
    {
      title: "Speed trial/inspection of security vessels",
      description: "Comprehensive speed trials and inspections to ensure vessel safety, reliability, and compliance.",
      features: [
        "Performance testing",
        "Hull inspection",
        "Engine & propulsion checks",
        "Safety system assessment",
        "Compliance certification"
      ],
      image: speedtrial
    },
    {
      title: "Crewing of offshore support vessels & security vessels",
      description: "Skilled and experienced crew management for offshore and security vessels worldwide.",
      features: [
        "Qualified crew recruitment",
        "Training & certification",
        "Crew welfare management",
        "Rotation planning",
        "Compliance with maritime laws"
      ],
      image: crewing
    },
    {
      title: "Supply of petroleum products (Haulage)",
      description: "Efficient haulage and supply of petroleum products to offshore and onshore facilities.",
      features: [
        "Diesel supply & haulage",
        "Lubricants distribution",
        "Onshore & offshore fueling",
        "Bulk transport management",
        "Safe product handling"
      ],
      image: petroleumhaulage
    },
    {
      title: "Supply of engine room accessories and consumables (Fueling, lube oil, Engine filters, valves, hydraulics)",
      description: "Trusted supply of engine room spares, consumables, and accessories for continuous operations.",
      features: [
        "Lube oil & hydraulic fluids",
        "Engine filters & spares",
        "Fueling accessories",
        "Valves & piping parts",
        "24/7 supply support"
      ],
      image: engineaccessories
    },
    {
      title: "Vessel food chandler",
      description: "Provision of fresh, high-quality food supplies and essentials for offshore vessels.",
      features: [
        "Fresh & dry provisions",
        "Frozen food supply",
        "Beverages & water supply",
        "Storage & packaging solutions",
        "On-time offshore delivery"
      ],
      image: foodchadler
    },
    {
      title: "Sand blasting and painting of rigs, FPSO and rig platforms",
      description: "Professional surface preparation and coating services to extend asset lifespan offshore.",
      features: [
        "Sand/grit blasting",
        "Protective coating application",
        "Corrosion control",
        "Surface treatment",
        "Rig & FPSO maintenance"
      ],
      image: sandblasting
    },
    {
      title: "Complete logistics (Sea & Land) for Oil and Gas",
      description: "End-to-end logistics solutions across land and sea, tailored for oil and gas operations.",
      features: [
        "Integrated transport solutions",
        "Supply chain management",
        "Warehousing & storage",
        "Customs clearance",
        "Sea-land connectivity"
      ],
      image: logistics
    }
  ];

  const processes = [
    {
      step: "01",
      title: "Consultation",
      description: "We begin with a comprehensive consultation to understand your specific requirements and challenges."
    },
    {
      step: "02",
      title: "Planning",
      description: "Our experts develop a detailed plan tailored to your operational needs and objectives."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We execute the plan with precision, ensuring all safety and quality standards are met."
    },
    {
      step: "04",
      title: "Monitoring",
      description: "Continuous monitoring and optimization ensure sustained performance and efficiency."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-foreground/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Comprehensive maritime and offshore solutions designed to meet the most demanding industry requirements.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Complete Maritime Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From offshore logistics to environmental compliance, we provide end-to-end services for maritime operations.
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
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => (
              <Card key={index} className="relative overflow-hidden border-0 shadow-lg group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
                  <div className="text-3xl font-bold text-secondary mb-4">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across multiple sectors of the maritime industry.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Oil & Gas", icon: "🛢️" },
              { name: "Offshore Wind", icon: "💨" },
              { name: "Shipping", icon: "🚢" },
              { name: "Marine Construction", icon: "🏗️" },
              { name: "Subsea Operations", icon: "🌊" },
              { name: "Port Operations", icon: "⚓" },
              { name: "Renewable Energy", icon: "🔋" },
              { name: "Research & Survey", icon: "🔬" }
            ].map((industry, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="font-semibold text-primary text-sm">
                    {industry.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Maritime Operations?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contact our experts to discuss how we can tailor our services to meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;