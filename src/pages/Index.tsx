import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  GraduationCap,
  Globe,
  FileText,
  Users,
  Award,
  CheckCircle,
  Star,
  ArrowRight,
  MapPin,
  TrendingUp,
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "University Selection",
      description:
        "Expert guidance to find the perfect university that matches your academic goals and budget.",
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Application Assistance",
      description:
        "Complete support with applications, essays, and documentation for your dream university.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Visa Guidance",
      description:
        "Step-by-step visa application support to ensure smooth approval process.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Scholarship Help",
      description:
        "Identify and apply for scholarships to make your education more affordable.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Master's Student at MIT",
      content:
        "StudyAbroad Pro made my dream of studying at MIT come true. Their guidance was invaluable throughout the entire process.",
      avatar: "/placeholder.svg",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "PhD Student at Oxford",
      content:
        "The visa guidance and scholarship assistance helped me secure funding for my PhD at Oxford. Highly recommended!",
      avatar: "/placeholder.svg",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Undergraduate at Stanford",
      content:
        "From university selection to application essays, they supported me every step of the way. Now I'm studying at Stanford!",
      avatar: "/placeholder.svg",
      rating: 5,
    },
  ];

  const stats = [
    { number: "500+", label: "Students Placed" },
    { number: "50+", label: "Partner Universities" },
    { number: "95%", label: "Success Rate" },
    { number: "15+", label: "Countries" },
  ];

  const countries = [
    "United States",
    "United Kingdom",
    "Canada",
    "Australia",
    "Germany",
    "France",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="h-4 w-4 mr-2" />
              #1 Study Abroad Consultant
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Gateway to
              <span className="text-primary"> Global Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Expert guidance to help you study abroad at top universities
              worldwide. From application to visa, we're with you every step of
              the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-sm lg:text-base opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Study Abroad Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From university selection to visa approval, we provide end-to-end
              support for your international education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Study in Top Destinations
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We help students get into universities across the world's most
              popular study destinations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {countries.map((country, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-sm"
              >
                <MapPin className="h-4 w-4 text-primary" />
                <span className="font-medium">{country}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our students who are now studying at their dream
              universities around the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose StudyAbroad Pro?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Expert Counselors</h3>
                    <p className="text-gray-600">
                      Our experienced counselors have helped hundreds of
                      students achieve their study abroad dreams.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Personalized Guidance
                    </h3>
                    <p className="text-gray-600">
                      Every student is unique. We provide tailored advice based
                      on your specific goals and background.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">End-to-End Support</h3>
                    <p className="text-gray-600">
                      From university selection to visa approval, we support you
                      throughout your entire journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      95% success rate with students now studying at top
                      universities worldwide.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Scholarship Assistance
                    </h3>
                    <p className="text-gray-600">
                      We help identify and apply for scholarships to make your
                      education more affordable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Post-Arrival Support</h3>
                    <p className="text-gray-600">
                      Our support doesn't end with admission. We help with
                      pre-departure and post-arrival guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Study Abroad Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation with our expert counselors and take the
              first step towards your international education.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Book Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
