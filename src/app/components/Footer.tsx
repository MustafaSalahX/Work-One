import { Link } from "react-router";
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter, Scale } from "lucide-react";

export function Footer() {

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-accent p-0 rounded-lg">
                <img
                  src="/logo.png"
                  alt="مكتب المحامية جمانة نجم الفرس و عبدالعزيز محمد الفرس"
                  className="w-10 h-10 rounded-xl border-2 border-amber-400 object-cover flex-shrink-0"
                />
              </div>
              مكتب المحامية جمانة نجم الفرس <br></br>و عبدالعزيز محمد الفرس
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              مكتب قانوني متخصص في تقديم الخدمات القانونية المتكاملة لحماية واسترداد حقوقك بكل احترافية وسرية.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  المدونة
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">معلومات قانونية</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  شروط الخدمة
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  إخلاء المسؤولية
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />


                <a href="tel:+96596055558" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm rtl-number" style={{ direction: 'ltr', display: 'inline-block' }}>
                  +965 9605 5558
                </a>



              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <a href="mailto:jumanafaras3@gmail.com" className="text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  jumanafaras3@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm leading-relaxed block max-w-sm">
                  صباح السالم - ق1 - شارع 102 - بناية 409 - برج 3 - الدور السادس - مكتب 24 مباشر علي طريق الفحيحيل أبراج العربيد
                </span>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a
                  href="https://www.facebook.com/share/17mzmdbf9q/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary w-9 h-9 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/lawyer.jumanafaras/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary w-9 h-9 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://x.com/jumanafaras?s=11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary w-9 h-9 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@jumanafaras3?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-primary w-9 h-9 rounded-full flex items-center justify-center hover:bg-accent/90 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02L12.5 0C12.5 0 12.5 0 12.525.02zM12.5 0H12.5v16.03c0 2.22-1.78 4.02-3.98 4.02-2.2 0-3.98-1.8-3.98-4.02s1.78-4.02 3.98-4.02c.31 0 .61.03.89.1v-3.41c-.29-.02-.59-.03-.89-.03-4.09 0-7.4 3.33-7.4 7.44s3.31 7.44 7.4 7.44c3.96 0 7.18-3.1 7.38-6.99h.02V7.12c1.78 1.48 4.09 2.37 6.6 2.37v-3.47c-2.48 0-4.66-1.1-6.1-2.82C15.9 2.59 15.36 1.41 15 0h-2.5z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()}  مكتب المحامية جمانة نجم الفرس
            و عبدالعزيز محمد الفرس. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
