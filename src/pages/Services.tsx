import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Globe,
  FileText,
  Users,
  Award,
  BookOpen,
  Plane,
  Home,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Clock,
  Target,
  TrendingUp,
} from "lucide-react";

function Services() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Country Selection Guidance",
      description:
        "Expert advice on choosing between USA, Canada, and Australia based on your goals.",
      features: [
        "Detailed country comparison",
        "Career opportunity analysis",
        "Lifestyle and culture insights",
        "Immigration pathway guidance",
        "Cost of living analysis",
      ],
      price: "From $199",
      popular: false,
    },
    {
      icon: <FileText className="h-12 w-12 text-red-600" />,
      title: "Application Assistance",
      description:
        "Complete support with applications, documentation, and paperwork.",
      features: [
        "Application form completion",
        "Document preparation and review",
        "Statement writing assistance",
        "Portfolio development",
        "Application tracking",
      ],
      price: "From $299",
      popular: true,
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Expert Consultation",
      description:
        "One-on-one guidance from specialists in USA, Canada, and Australia.",
      features: [
        "Personalized consultation sessions",
        "Country-specific expertise",
        "Success strategy development",
        "Timeline planning",
        "Progress monitoring",
      ],
      price: "From $249",
      popular: false,
    },
    {
      icon: <Award className="h-12 w-12 text-red-600" />,
      title: "Success Planning",
      description: "Comprehensive planning for your journey to success.",
      features: [
        "Goal setting and planning",
        "Resource identification",
        "Network building guidance",
        "Skill development recommendations",
        "Success tracking",
      ],
      price: "From $179",
      popular: false,
    },
    {
      icon: <BookOpen className="h-12 w-12 text-blue-600" />,
      title: "Training & Preparation",
      description: "Prepare for success with comprehensive training programs.",
      features: [
        "Skills assessment and development",
        "Interview preparation",
        "Cultural adaptation training",
        "Language enhancement support",
        "Professional development",
      ],
      price: "From $149",
      popular: false,
    },
    {
      icon: <Plane className="h-12 w-12 text-red-600" />,
      title: "Relocation Support",
      description:
        "Complete assistance for your move to USA, Canada, or Australia.",
      features: [
        "Pre-departure planning",
        "Accommodation assistance",
        "Travel arrangement guidance",
        "Local orientation support",
        "Settlement assistance",
      ],
      price: "From $99",
      popular: false,
    },
  ];

  const packages = [
    {
      name: "Starter Package",
      price: "$499",
      description: "Essential support for motivated individuals",
      features: [
        "Country selection guidance",
        "Basic consultation (3 sessions)",
        "Application review",
        "Email support",
        "Resource library access",
      ],
      popular: false,
      color: "blue",
    },
    {
      name: "Success Package",
      price: "$999",
      description: "Comprehensive support for serious achievers",
      features: [
        "Everything in Starter Package",
        "Extended consultation (6 sessions)",
        "Document preparation assistance",
        "Interview preparation",
        "Priority support",
        "Success planning workshop",
      ],
      popular: true,
      color: "red",
    },
    {
      name: "VIP Package",
      price: "$1,999",
      description: "White-glove service with dedicated specialist",
      features: [
        "Everything in Success Package",
        "Unlimited consultations",
        "Dedicated specialist",
        "24/7 priority support",
        "Relocation assistance",
        "6-month post-success support",
        "Alumni network access",
      ],
      popular: false,
      color: "blue",
    },
  ];

  const countries = [
    {
      name: "United States",
      flag: "🇺🇸",
      description: "Land of opportunities with diverse career paths",
      highlights: ["Silicon Valley", "Wall Street", "Hollywood", "Ivy League"],
      color: "blue",
    },
    {
      name: "Canada",
      flag: "🇨🇦",
      description: "Welcoming nation with excellent quality of life",
      highlights: ["Toronto", "Vancouver", "Montreal", "Quality Healthcare"],
      color: "red",
    },
    {
      name: "Australia",
      flag: "🇦🇺",
      description: "Dynamic country with vibrant multicultural cities",
      highlights: [
        "Sydney",
        "Melbourne",
        "Great Lifestyle",
        "Growing Tech Scene",
      ],
      color: "blue",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-red-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-100 text-blue-700 border-blue-200"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              Professional Services
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              <span className="text-blue-600">Comprehensive</span> Success{" "}
              <span className="text-red-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert services to help you achieve success in USA, Canada, and
              Australia. From planning to execution, we support your entire
              journey.
            </p>
          </div>
        </div>
      </section>

      {/* Countries Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Specialized Countries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep expertise in the top three English-speaking destinations for
              international success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card
                key={index}
                className={`text-center hover:shadow-lg transition-shadow border-${country.color}-200`}
              >
                <CardHeader>
                  <div className="text-6xl mb-4">{country.flag}</div>
                  <CardTitle className={`text-2xl text-${country.color}-600`}>
                    {country.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {country.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {country.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-center space-x-2"
                      >
                        <CheckCircle
                          className={`h-4 w-4 text-${country.color}-600`}
                        />
                        <span className="text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive services designed to support every step of your
              success journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`hover:shadow-lg transition-shadow ${service.popular ? "ring-2 ring-red-200" : ""}`}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-gray-900">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={service.popular ? "default" : "outline"}
                    asChild
                  >
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Success Package
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a comprehensive package that best fits your goals and
              budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-red-500 shadow-lg scale-105" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-600">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div
                    className={`text-4xl font-bold ${pkg.color === "blue" ? "text-blue-600" : "text-red-600"}`}
                  >
                    {pkg.price}
                  </div>
                  <CardDescription>{pkg.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <CheckCircle
                          className={`h-5 w-5 mt-0.5 flex-shrink-0 ${pkg.color === "blue" ? "text-blue-600" : "text-red-600"}`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${pkg.color === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-red-600 hover:bg-red-700"}`}
                    asChild
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure your success in USA, Canada, or
              Australia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery Call",
                description:
                  "Free consultation to understand your goals and assess your profile",
                color: "blue",
              },
              {
                step: "02",
                title: "Success Strategy",
                description:
                  "Personalized roadmap and country selection based on your objectives",
                color: "red",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Execute your plan with expert guidance and support",
                color: "blue",
              },
              {
                step: "04",
                title: "Success & Support",
                description:
                  "Achieve your goals with ongoing support and celebration",
                color: "red",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 text-white ${process.color === "blue" ? "bg-blue-600" : "bg-red-600"}`}
                >
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Success Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation to discuss your goals and find the
              perfect service package for you.
            </p>
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
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
}

export default Services;
