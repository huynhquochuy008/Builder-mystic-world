import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    newsletter: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: "Message Sent!",
      description:
        "Thank you for your inquiry. We'll get back to you within 24 hours.",
      duration: 5000,
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      newsletter: false,
    });
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Office Address",
      details: [
        "123 Business Street",
        "Suite 100",
        "City, State 12345",
        "Country",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Phone Numbers",
      details: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "WhatsApp: +1 (555) 111-2233",
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Addresses",
      details: [
        "info@mywebsite.com",
        "support@mywebsite.com",
        "hello@mywebsite.com",
      ],
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
        "Emergency Support: 24/7",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Ready to start your journey? Contact us for personalized guidance
              and support.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Send className="h-5 w-5 text-primary" />
                  <span>Send us a Message</span>
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="newsletter"
                      checked={formData.newsletter}
                      onCheckedChange={(checked) =>
                        handleInputChange("newsletter", checked as boolean)
                      }
                    />
                    <Label htmlFor="newsletter" className="text-sm">
                      Subscribe to our newsletter for updates and tips
                    </Label>
                  </div>

                  <Button type="submit" className="w-full">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="flex items-start space-x-3">
                          {info.icon}
                          <div>
                            <h3 className="font-semibold mb-2">{info.title}</h3>
                            <div className="space-y-1">
                              {info.details.map((detail, detailIndex) => (
                                <p
                                  key={detailIndex}
                                  className="text-sm text-gray-600"
                                >
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    <span>Quick Actions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Live Chat Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    Schedule a Call
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions.
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        How quickly do you respond to inquiries?
                      </h3>
                      <p className="text-gray-600">
                        We typically respond to all inquiries within 24 hours
                        during business days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        Do you offer free consultations?
                      </h3>
                      <p className="text-gray-600">
                        Yes, we offer a free 30-minute initial consultation to
                        understand your needs.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-2">
                        What are your office hours?
                      </h3>
                      <p className="text-gray-600">
                        We're open Monday-Friday 9AM-6PM, Saturday 10AM-4PM,
                        with 24/7 emergency support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
