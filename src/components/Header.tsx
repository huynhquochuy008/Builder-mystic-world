import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigationClick = () => {
    // Force scroll to top when navigation is clicked
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  };

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm border-red-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <Home className="h-8 w-8 text-blue-600" />
            <span className="font-bold text-xl text-gray-800">MyWebsite</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleNavigationClick}
                className={cn(
                  "text-sm font-medium transition-colors px-3 py-2 rounded-md",
                  isActive(item.href)
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:text-red-600 hover:bg-red-50",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-red-600 hover:bg-red-700 text-white">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col space-y-6 mt-6">
                {/* Mobile Logo */}
                <Link
                  to="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Home className="h-6 w-6 text-blue-600" />
                  <span className="font-bold text-lg text-gray-800">
                    MyWebsite
                  </span>
                </Link>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => {
                        setIsOpen(false);
                        handleNavigationClick();
                      }}
                      className={cn(
                        "text-base font-medium transition-colors px-3 py-2 rounded-md",
                        isActive(item.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-red-600 hover:bg-red-50",
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <Button
                  asChild
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                >
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get In Touch
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
