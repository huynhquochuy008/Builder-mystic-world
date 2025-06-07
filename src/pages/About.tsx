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

const About = () => {
  const stats = [
    {
      number: "500+",
      label: "Students Placed",
      icon: <Users className="h-6 w-6" />,
    },
    {
      number: "50+",
      label: "Partner Universities",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      number: "95%",
      label: "Success Rate",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      number: "8+",
      label: "Years Experience",
      icon: <Award className="h-6 w-6" />,
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Williams",
      role: "Founder & CEO",
      education: "PhD in Education, Harvard University",
      experience: "15+ years in international education",
      specialties: [
        "University Admissions",
        "Educational Strategy",
        "Student Counseling",
      ],
      avatar: "/placeholder.svg",
      bio: "Former admissions officer at top universities, helping students achieve their dreams for over a decade.",
    },
    {
      name: "Michael Chen",
      role: "Senior Counselor",
      education: "Master's in International Relations, Oxford",
      experience: "10+ years in visa consulting",
      specialties: ["Visa Applications", "Immigration Law", "Documentation"],
      avatar: "/placeholder.svg",
      bio: "Expert in visa processes across multiple countries with a 98% approval rate.",
    },
    {
      name: "Emily Rodriguez",
      role: "Application Specialist",
      education: "Master's in English Literature, Stanford",
      experience: "8+ years in application writing",
      specialties: [
        "Essay Writing",
        "Application Strategy",
        "Scholarship Applications",
      ],
      avatar: "/placeholder.svg",
      bio: "Award-winning writer who has helped students craft compelling application essays.",
    },
    {
      name: "David Kumar",
      role: "Test Prep Coordinator",
      education: "Master's in Mathematics, MIT",
      experience: "12+ years in test preparation",
      specialties: ["IELTS/TOEFL", "GRE/GMAT", "SAT Preparation"],
      avatar: "/placeholder.svg",
      bio: "Expert test prep instructor with a track record of significant score improvements.",
    },
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description:
        "We strive for excellence in every aspect of our service, ensuring the highest quality guidance for our students.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description:
        "We maintain the highest ethical standards and provide honest, transparent advice to all our students.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Personalization",
      description:
        "Every student is unique. We provide personalized guidance tailored to individual goals and circumstances.",
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Perspective",
      description:
        "Our international experience and network enable us to provide insights into education systems worldwide.",
    },
  ];

  const milestones = [
    {
      year: "2016",
      event:
        "Founded StudyAbroad Pro with a mission to democratize international education",
    },
    {
      year: "2018",
      event: "Reached 100 successful student placements across 10 countries",
    },
    {
      year: "2020",
      event: "Launched online consultation services during the pandemic",
    },
    {
      year: "2022",
      event: "Established partnerships with 50+ universities worldwide",
    },
    {
      year: "2024",
      event:
        "Celebrated 500+ successful student placements with 95% success rate",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Award className="h-4 w-4 mr-2" />
              Trusted by 500+ Students
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              USA, Canada & Australia Specialists
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We are passionate about helping students achieve their dreams of
              studying in the top three English-speaking destinations. With
              specialized expertise in USA, Canada, and Australia, we provide
              focused guidance for maximum success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-2">
                  <div className="text-primary mx-auto">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To empower students worldwide by providing expert guidance and
                comprehensive support for their international education journey.
                We believe that every student deserves the opportunity to pursue
                their academic dreams, regardless of their background or
                circumstances.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                To empower students by providing specialized guidance for
                studying in USA, Canada, and Australia. We believe in focused
                expertise over broad coverage, ensuring maximum success rates
                for students pursuing education in these top three
                English-speaking destinations.
              </p>
              <ul className="space-y-3">
                {[
                  "Specialize in USA, Canada & Australia admissions",
                  "Provide country-specific expert guidance",
                  "Ensure transparent and ethical practices",
                  "Maximize success through focused expertise",
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Eye className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                To be the world's most trusted partner for international
                education, creating a global community of successful graduates
                who go on to make positive impacts in their chosen fields.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-3">By 2030, we aim to:</h3>
                <ul className="space-y-2 text-sm">
                  <li>• Help 1000+ students annually</li>
                  <li>• Partner with 100+ universities globally</li>
                  <li>• Maintain 98%+ success rate</li>
                  <li>• Expand to 25+ countries</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve
              our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6 space-y-4">
                  <div className="mx-auto">{value.icon}</div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our experienced counselors are committed to helping you achieve
              your study abroad goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="text-lg">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-3">
                    {member.education}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.experience}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <Badge
                        key={specialtyIndex}
                        variant="secondary"
                        className="text-xs"
                      >
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-2">
                    <Button size="sm" variant="outline">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From a small startup to a trusted global partner in international
              education.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="flex-grow bg-white p-6 rounded-lg shadow-sm">
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let our experienced team guide you towards your study abroad
              goals. Book a free consultation to get started today.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
