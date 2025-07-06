import { Globe, FileText, Users, Award, BookOpen, Plane } from "lucide-react";


export const services = [
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