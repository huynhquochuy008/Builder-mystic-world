import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-blue-600" />,
      title: "Office Address",
      details: [
        "123 Business Street",
        "Suite 100",
        "City, State 12345",
        "United States & Canada",
      ],
    },
    {
      icon: <Phone className="h-6 w-6 text-red-600" />,
      title: "Phone Numbers",
      details: [
        "+1 (555) 123-4567 (US)",
        "+1 (555) 987-6543 (CA)",
        "WhatsApp: +1 (555) 111-2233",
      ],
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-600" />,
      title: "Email Addresses",
      details: [
        "info@mywebsite.com",
        "support@mywebsite.com",
        "hello@mywebsite.com",
      ],
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: "Office Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
        "Emergency Support: 24/7",
      ],
    },
  ];