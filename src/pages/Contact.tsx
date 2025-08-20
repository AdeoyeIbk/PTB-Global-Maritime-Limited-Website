import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: "Email",
      value: "ptbglobal2025@gmail.com",
      icon: "📧"
    },
    {
      title: "Phone", 
      value: "+234 708 801 6138, +234 707 180 8611",
      icon: "📞"
    },
    {
      title: "Address",
      value: "No. 7 Orange Drive, Cedar Wood Garden Estate Off SARS Road, Port Harcourt Rivers State",
      icon: "📍"
    },
    {
      title: "Business Hours",
      value: "Mon-Fri: 8:00 AM - 6:00 PM CST",
      icon: "🕐"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-foreground/10">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 text-primary-foreground">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl leading-relaxed opacity-90">
            Ready to discuss your maritime project? Get in touch with our experts today.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Send us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="fullName" className="text-primary font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="mt-2 border-border focus:ring-primary focus:border-primary"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-primary font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 border-border focus:ring-primary focus:border-primary"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-primary font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="mt-2 border-border focus:ring-primary focus:border-primary"
                        placeholder="Brief description of your inquiry"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-primary font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="mt-2 border-border focus:ring-primary focus:border-primary resize-none"
                        placeholder="Provide details about your project or requirements..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Get in Touch
              </h2>
              <p className="text-muted-foreground mb-8">
                Our team is ready to assist you with your maritime and offshore requirements.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex items-center space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {info.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder
              <Card className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-64 bg-muted flex items-center justify-center relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20"></div>
                    <div className="relative text-center text-primary">
                      <div className="text-4xl mb-2">🗺️</div>
                      <p className="font-semibold">PTB Global Maritime Resource</p>
                      <p className="text-sm text-muted-foreground">Houston, TX - Maritime District</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-primary mb-2">Our Location</h3>
                    <p className="text-muted-foreground text-sm">
                      Strategically located in Houston's maritime district, providing easy access to major ports and offshore operations.
                    </p>
                  </div>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "What types of maritime projects do you handle?",
                answer: "We handle a wide range of projects including offshore logistics, oil & gas support, renewable energy installations, marine construction, and subsea operations."
              },
              {
                question: "How quickly can you respond to urgent requests?",
                answer: "We maintain 24/7 emergency response capabilities and can typically mobilize resources within 4-6 hours for critical situations."
              },
              {
                question: "Do you operate internationally?",
                answer: "Yes, we provide services globally with operations across North America, Europe, Asia-Pacific, and emerging markets in Africa and South America."
              },
              {
                question: "What safety certifications do you maintain?",
                answer: "We maintain all major international certifications including ISM, ISPS, MLC, and comply with flag state and port state requirements worldwide."
              }
            ].map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardContent className="p-8">
                  <h3 className="font-semibold text-primary mb-3 text-lg">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            24/7 Emergency Response
          </h2>
          <p className="text-lg mb-8 opacity-90">
            For urgent maritime assistance or emergency situations, contact our rapid response team immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Emergency Hotline: +1 (555) 911-HELP
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Email: emergency@ptbglobal.com
            </Button>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Contact;