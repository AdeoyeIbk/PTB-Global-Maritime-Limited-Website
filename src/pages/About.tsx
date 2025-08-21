import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import executive1 from "@/assets/executive-1.jpg";
import executive2 from "@/assets/executive-2.jpg";

const About = () => {
  const executives = [
    {
      name: "Anthony Omolu",
      position: "Director/Chief Executive Officer",
      bio: "With over 15 years of experience in maritime, oil and gas industry in Nigeria. Anthony leads PTB Maritime Resources Limited with a vision for innovation and excellence. His expertise spans from deep-water drilling operations to complex supply chain management.",
      image: executive1
    },
    {
      name: "Gregory David Harrison",
      position: "Executive Director",
      bio: "Greg has a strong background in communication technology and infrastructure. Having been a technician and progressing on to lead a team of technician as a manager and supervisor in Telecommunications and maintenance. Greg is highly skilled in customer relations and problem solving. Greg as One of the PTB Global Maritime foreign Executive Director, is to ensure transparent business engagement/relationship with our clients home and abroad, and will also Supervise on the note of task Successful accomplish.",
      image: executive2
    }
  ];

const values = [
  {
    title: "Teamwork",
    description: "We believe in collaboration, unity, and working together to achieve common goals.",
    icon: "🤝"
  },
  {
    title: "Professionalism",
    description: "We uphold the highest standards of competence, reliability, and excellence in all we do.",
    icon: "💼"
  },
  {
    title: "Integrity",
    description: "We conduct our business with honesty, transparency, and strong ethical principles.",
    icon: "🛡️"
  },
  {
    title: "Commitment",
    description: "We are dedicated to delivering value and exceeding expectations for our clients and partners.",
    icon: "🔥"
  }
];


  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-foreground/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About PTB Global
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Pioneering maritime excellence through innovation, safety, and unwavering commitment to our clients' success.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Mission */}
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At PTB Global Maritime Resource, we create value through excellence and innovation, prioritizing safety, sustainability, and professionalism while ensuring financial stability, efficiency, and a high-performing workforce.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🔭</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                 To be known as an outstanding Indegenous Maritime logistics and General Maritime Contractor
                </p>
              </CardContent>
            </Card>

            {/* Values Preview */}
            <Card className="bg-card border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💎</span>
                </div>
                <h2 className="text-2xl font-bold text-primary mb-4">Our Values</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Built on a foundation of safety, excellence, innovation, and integrity, our values guide every aspect of our operations and relationships with clients and partners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              These fundamental principles drive our decision-making and shape our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals leading PTB Global Maritime Resource.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {executives.map((executive, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={executive.image}
                      alt={executive.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {executive.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-4">
                      {executive.position}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {executive.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              By the Numbers
            </h2>
            <p className="text-lg opacity-90">
              Our track record speaks for itself
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Years Experience" },
              { number: "500+", label: "Projects Completed" },
              { number: "50+", label: "Global Clients" },
              { number: "99.9%", label: "Safety Record" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;