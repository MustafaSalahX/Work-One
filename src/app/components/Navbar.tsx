import { Link, useLocation } from "react-router";
import { Menu, X, Scale } from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const reversedNavLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "من نحن", path: "/about" },
    { name: "خدماتنا", path: "/services" },
    { name: "المدونة", path: "/blog" },
    { name: "القوانين", path: "/laws" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  return (
    <nav
      className={`absolute md:fixed top-0 left-0 right-0 z-[40] transition-all duration-300 pointer-events-none md:pointer-events-auto ${isScrolled ? "bg-transparent md:bg-white md:shadow-md" : "bg-transparent md:bg-white/95"
        }`}
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Branding */}
          <div className="flex items-end gap-3 justify-end pointer-events-auto">
            <Link to="/" aria-label="الصفحة الرئيسية">
              <img
                src="/logo.png"
                alt="مكتب المحامية جمانة نجم فرس و عبدالعزيز محمد فرس"
                className="w-10 h-10 rounded-xl border-2 border-amber-400 object-cover flex-shrink-0"
              />
            </Link>
            <div className="flex flex-col items-end max-w-xs">
              <div className="text-white md:text-cyan-950 text-sm font-bold leading-5 text-right opacity-100">
                مكتب المحامية جمانة نجم فرس <br></br>و عبدالعزيز محمد فرس
              </div>
            </div>
          </div>


          {/* Center: Navigation Links */}
          <div className="hidden md:flex items-center gap-8 justify-end">
            {reversedNavLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors text-base leading-6 ${location.pathname === link.path
                  ? "text-amber-400 font-medium"
                  : "text-cyan-950 font-normal hover:text-amber-400"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Logo & Branding */}
          <Link
            to="/contact"
            className="hidden md:block bg-amber-400 text-cyan-950 px-8 py-3 rounded-xl hover:bg-amber-500 transition-colors font-bold text-sm leading-6"
          >
            احجز استشارتك القانونية
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            className={`md:hidden fixed top-5 left-5 z-[60] p-2.5 rounded-xl transition-all shadow-md border pointer-events-auto ${isScrolled || isOpen
              ? "bg-white text-cyan-950 border-gray-200"
              : "bg-white/90 backdrop-blur-sm text-cyan-950 border-gray-100"
              }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed top-24 left-4 right-4 z-[55] bg-white/95 backdrop-blur-xl border border-border shadow-2xl rounded-2xl overflow-hidden pointer-events-auto transition-all duration-300 origin-top
        ${isOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-4 invisible pointer-events-none"}`}
      >
        <div className="px-4 py-4 space-y-3 max-h-[80vh] overflow-y-auto">
          {/* Render "الرئيسية" first */}
          <Link
            to="/"
            className={`block py-2 transition-colors ${location.pathname === "/"
              ? "text-accent font-medium"
              : "text-foreground"
              }`}
          >
            الرئيسية
          </Link>
          {reversedNavLinks.slice(1).map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-2 transition-colors ${location.pathname === link.path
                ? "text-accent font-medium"
                : "text-foreground"
                }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block w-full bg-accent text-accent-foreground text-center px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
          >
            احجز استشارتك القانونية
          </Link>
        </div>
      </div>
    </nav>
  );
}
