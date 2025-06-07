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
  GraduationCap,
  Plane,
  Home,
  DollarSign,
  BookOpen,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "University Selection",
      description:
        "Find the perfect university in USA, Canada, or Australia that matches your academic goals and career aspirations.",
      features: [
        "Personalized recommendations for US, Canadian & Australian universities",
        "Program matching across all three countries",
        "Country-specific admission requirements",
        "Ranking analysis and reputation insights",
        "Cost comparison between countries",
      ],
      price: "From $199",
    },
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      title: "Application Assistance",
      description:
        "Complete support with university applications, essays, and all required documentation.",
      features: [
        "Application form completion",
        "Statement of purpose writing",
        "Letter of recommendation guidance",
        "Document preparation",
        "Application tracking",
      ],
      price: "From $299",
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Visa Guidance",
      description:
        "Expert visa support for F-1 (USA), Study Permit (Canada), and Student Visa (Australia).",
      features: [
        "Country-specific visa application assistance",
        "F-1, Study Permit & Student Visa expertise",
        "SEVIS, GIC & health insurance guidance",
        "Interview preparation for US consulates",
        "Post-graduation work permit advice",
      ],
      price: "From $249",
    },
    {
      icon: <Award className="h-12 w-12 text-primary" />,
      title: "Scholarship Help",
      description:
        "Identify and apply for scholarships to make your education more affordable.",
      features: [
        "Scholarship research and identification",
        "Application essay writing",
        "Merit-based scholarship guidance",
        "Need-based aid assistance",
        "Scholarship interview prep",
      ],
      price: "From $179",
    },
    {
      icon: <BookOpen className="h-12 w-12 text-primary" />,
      title: "Test Preparation",
      description:
        "Prepare for standardized tests like IELTS, TOEFL, GRE, GMAT, and SAT.",
      features: [
        "Personalized study plans",
        "Practice tests and materials",
        "One-on-one tutoring",
        "Score improvement strategies",
        "Test registration assistance",
      ],
      price: "From $149",
    },
    {
      icon: <Plane className="h-12 w-12 text-primary" />,
      title: "Pre-Departure Support",
      description:
        "Essential guidance for your journey including travel, accommodation, and cultural preparation.",
      features: [
        "Travel planning assistance",
        "Accommodation guidance",
        "Cultural orientation",
        "Banking and insurance setup",
        "Airport pickup coordination",
      ],
      price: "From $99",
    },
    {
      icon: <Home className="h-12 w-12 text-primary" />,
      title: "Post-Arrival Support",
      description:
        "Continued support after you arrive in your destination country.",
      features: [
        "University registration help",
        "Local orientation assistance",
        "Emergency support hotline",
        "Career guidance",
        "Alumni network access",
      ],
      price: "From $79",
    },
    {
      icon: <DollarSign className="h-12 w-12 text-primary" />,
      title: "Financial Planning",
      description:
        "Comprehensive financial planning for your study abroad journey.",
      features: [
        "Education loan guidance",
        "Budget planning",
        "Currency exchange advice",
        "Cost estimation",
        "Financial aid applications",
      ],
      price: "From $129",
    },
  ];

  const packages = [
    {
      name: "Basic Package",
      price: "$499",
      description: "Essential support for independent applicants",
      features: [
        "University selection guidance",
        "Application assistance for 3 universities",
        "Basic visa guidance",
        "Email support",
      ],
      popular: false,
    },
    {
      name: "Premium Package",
      price: "$999",
      description: "Comprehensive support for serious applicants",
      features: [
        "Everything in Basic Package",
        "Application assistance for 5 universities",
        "Essay writing support",
        "Scholarship assistance",
        "Interview preparation",
        "Phone/video support",
      ],
      popular: true,
    },
    {
      name: "VIP Package",
      price: "$1,999",
      description: "White-glove service with personal counselor",
      features: [
        "Everything in Premium Package",
        "Unlimited university applications",
        "Dedicated counselor",
        "Priority support",
        "Test preparation guidance",
        "Post-arrival support",
        "Alumni network access",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              USA, Canada & Australia Study Services
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized consulting services for the top three English-speaking
              destinations. Expert guidance for universities in United States,
              Canada, and Australia.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{service.icon}</div>
                  <CardTitle className="text-xl mb-2">
                    {service.title}
                  </CardTitle>
                  <div className="text-2xl font-bold text-primary">
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
                  <Button className="w-full" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Package
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select a comprehensive package that best fits your needs and
              budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative ${pkg.popular ? "ring-2 ring-primary shadow-lg" : ""}`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">
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
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={pkg.popular ? "default" : "outline"}
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
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure your success at every step of your
              study abroad journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description:
                  "Free consultation to understand your goals and preferences",
              },
              {
                step: "02",
                title: "University Selection",
                description:
                  "Personalized recommendations based on your profile",
              },
              {
                step: "03",
                title: "Application & Visa",
                description:
                  "Complete assistance with applications and visa process",
              },
              {
                step: "04",
                title: "Pre & Post Support",
                description: "Guidance before departure and after arrival",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
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
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book a free consultation to discuss your study abroad goals and
              find the perfect service package for you.
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

export default Services;
