import Link from "next/link";
import { Button } from "@/components/ui/button";
import { services } from "@/data/home/services";
import { testimonials } from "@/data/home/testimonials";
import { stats } from "@/data/home/stats";
import { locations } from "@/data/home/locations";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Flag from "@/components/Flag";
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-red-50 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge
              variant="secondary"
              className="mb-4 bg-blue-100 text-blue-700 border-blue-200"
            >
              <TrendingUp className="h-4 w-4 mr-2" />
              #1 Trusted Partner
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Achieve Your <span className="text-blue-600">Global Success</span>
              <br />
              with <span className="text-red-600">Expert Guidance</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto">
              Personalized support to unlock your dream career or education path
              in the USA, Canada, or Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button
                size="lg"
                asChild
                className="bg-blue-500 hover:bg-blue-700 w-full sm:w-auto text-white shadow-md"
              >
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                asChild
                className="bg-red-500 hover:bg-red-700 w-full sm:w-auto text-white shadow-md"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-red-600 to-blue-600 text-white">
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From planning to execution, we provide end-to-end support for your
              journey to success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow border-gray-200"
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

      {/* Featured Countries Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Primary Focus Countries
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized expertise in helping you succeed in these three major
              destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <Flag country="US" size="xl" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  United States
                </h3>
                <p className="text-gray-600 mb-4">
                  Land of opportunities with world-class universities and
                  diverse career paths.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-red-200">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <Flag country="CA" size="xl" />
                </div>
                <h3 className="text-2xl font-bold text-red-600 mb-2">Canada</h3>
                <p className="text-gray-600 mb-4">
                  Welcoming nation known for quality education and excellent
                  quality of life.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-white border-2 border-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-blue-200">
              <CardContent className="pt-8 pb-6">
                <div className="flex justify-center mb-4">
                  <Flag country="AU" size="xl" />
                </div>
                <h3 className="text-2xl font-bold text-blue-600 mb-2">
                  Australia
                </h3>
                <p className="text-gray-600 mb-4">
                  Dynamic country offering excellent education and vibrant
                  multicultural environment.
                </p>
                <div className="flex justify-center space-x-2">
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Reach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Global Reach
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We also help people achieve success across other popular
              international destinations.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {locations.map((location, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-3 bg-white rounded-lg px-6 py-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
              >
                <Flag country={location.code as any} size="lg" />
                <span
                  className={`font-medium ${location.color === "blue" ? "text-blue-600" : "text-red-600"}`}
                >
                  {location.name}
                </span>
                <MapPin
                  className={`h-4 w-4 ${location.color === "blue" ? "text-blue-600" : "text-red-600"}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from people who have achieved their dreams with our guidance
              and support.
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
                      <AvatarFallback className="bg-blue-100 text-blue-600">
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Expert Team</h3>
                    <p className="text-gray-600">
                      Our experienced team has helped hundreds of people achieve
                      their dreams and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Personalized Guidance
                    </h3>
                    <p className="text-gray-600">
                      Every person is unique. We provide tailored advice based
                      on your specific goals and situation.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">End-to-End Support</h3>
                    <p className="text-gray-600">
                      From initial planning to final success, we support you
                      throughout your entire journey.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">
                      95% success rate with people now living their dreams and
                      achieving their goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Ongoing Assistance</h3>
                    <p className="text-gray-600">
                      We help identify opportunities and resources to make your
                      dreams more achievable.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-2">Continued Support</h3>
                    <p className="text-gray-600">
                      Our support doesn't end with success. We provide ongoing
                      guidance and assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Take the First Step Toward Success
            </h2>
            <p className="text-lg lg:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Book a free consultation today and let our experts guide you to
              your future in the USA, Canada, or Australia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 shadow-md"
              >
                <Link href="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

              <Button
                size="lg"
                asChild
                className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 shadow-md"
              >
                <Link href="/services">
                  See All Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
