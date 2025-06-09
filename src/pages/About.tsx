import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Linkedin,
  Mail,
} from "lucide-react";

function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Award className="h-4 w-4 mr-2" />
              About Our Company
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Learn About Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are passionate about helping people achieve their dreams with
              expert guidance and personalized support.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  To empower individuals by providing expert guidance and
                  comprehensive support for achieving their goals. We believe
                  that everyone deserves the opportunity to pursue their dreams,
                  regardless of their background or circumstances.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Provide personalized, expert guidance</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Ensure transparent and ethical practices</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Build long-term relationships</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Eye className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  To be the world's most trusted partner for achieving personal
                  and professional goals, creating a global community of
                  successful individuals who go on to make positive impacts.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <h3 className="font-semibold mb-3">Our Goals:</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Help 1000+ people annually</li>
                    <li>• Maintain 98%+ success rate</li>
                    <li>• Expand to 25+ countries</li>
                    <li>• Create lasting positive impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve
              our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <Target className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <Heart className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Integrity</h3>
                <p className="text-gray-600">
                  We maintain the highest ethical standards in all our
                  interactions.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Community</h3>
                <p className="text-gray-600">
                  We believe in building strong, supportive communities.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6 space-y-4">
                <Globe className="h-8 w-8 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Innovation</h3>
                <p className="text-gray-600">
                  We continuously innovate to better serve our community.
                </p>
              </CardContent>
            </Card>
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
              Contact us today to learn more about how we can help you achieve
              your goals.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
