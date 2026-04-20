import { Link } from "react-router";
import { useState } from "react";
import { Shield, Users, Award, Clock, Scale, FileText, Gavel, UserCheck, DollarSign, CheckCircle, MessageSquare, FileSignature } from "lucide-react";
import { BlogPostModal } from "../components/BlogPostModal";

export function Home() {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const services = [
    {
      id: "legal-consultation",
      icon: MessageSquare,
      title: "الاستشارات القانونية",
      description: "نوفر استشارات قانونية متخصصة في كافة المجالات لحماية حقوقك ومصالحك القانونية.",
    },
    {
      id: "representation",
      icon: Gavel,
      title: "التمثيل والترافع",
      description: "نمثلك أمام المحاكم والجهات القضائية بكل احترافية لضمان أفضل النتائج.",
    },
    {
      id: "investigations",
      icon: UserCheck,
      title: "حضور التحقيقات",
      description: "نرافقك في التحقيقات لحماية حقوقك وضمان سير الإجراءات بشكل قانوني سليم.",
    },
    {
      id: "debt-collection",
      icon: DollarSign,
      title: "تحصيل الديون",
      description: "نساعدك في استرداد حقوقك المالية بالطرق القانونية السريعة والفعالة.",
    },
    {
      id: "judgment-execution",
      icon: CheckCircle,
      title: "تنفيذ الأحكام",
      description: "نتابع تنفيذ الأحكام القضائية لضمان حصولك على حقوقك كاملة.",
    },
    {
      id: "contracts",
      icon: FileSignature,
      title: "صياغة العقود",
      description: "نصيغ العقود القانونية المحكمة التي تحمي مصالحك وتمنع النزاعات المستقبلية.",
    },
    {
      id: "complaints",
      icon: FileText,
      title: "إعداد الشكاوى",
      description: "نعد الشكاوى القانونية الدقيقة التي تضمن حفظ حقوقك أمام الجهات المختصة.",
    },
    {
      id: "settlements",
      icon: Scale,
      title: "التسويات القانونية",
      description: "نساعدك في الوصول إلى تسويات عادلة تحفظ حقوقك وتوفر الوقت والجهد.",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      category: "labor-law",
      categoryName: "قانون العمل",
      title: "حقوق الموظف عند إنهاء العقد",
      excerpt: "تعرف على حقوقك الكاملة عند إنهاء عقد العمل وفقاً لنظام العمل السعودي.",
      date: "2026-04-10",
    },
    {
      id: 2,
      category: "consumer-protection",
      categoryName: "حماية المستهلك",
      title: "كيف تسترد أموالك من المنتجات المعيبة",
      excerpt: "الخطوات القانونية لحماية حقوقك كمستهلك واسترداد أموالك.",
      date: "2026-04-05",
    },
    {
      id: 3,
      category: "commercial-law",
      categoryName: "القانون التجاري",
      title: "أهمية التوثيق في العقود التجارية",
      excerpt: "لماذا يجب توثيق كل عقد تجاري وكيف يحميك قانونياً.",
      date: "2026-04-01",
    },
    {
      id: 4,
      category: "personal-status",
      categoryName: "الأحوال الشخصية",
      title: "الحضانة وحقوق الأطفال",
      excerpt: "ما هي حقوق الوالدين والأطفال في قضايا الحضانة.",
      date: "2026-03-25",
    },
  ];

  const trustFactors = [
    {
      icon: Shield,
      title: "حماية الحقوق",
      description: "نلتزم بحماية حقوقك القانونية بأعلى معايير الاحترافية.",
    },
    {
      icon: Users,
      title: "خبرة قانونية",
      description: "فريق من المحامين ذوي الخبرة الواسعة في كافة المجالات القانونية.",
    },
    {
      icon: Award,
      title: "المهنية",
      description: "نلتزم بأعلى معايير المهنية والأخلاقيات في تقديم خدماتنا.",
    },
    {
      icon: Clock,
      title: "متابعة مستمرة",
      description: "نوفر متابعة دائمة لقضيتك حتى تحصل على حقوقك كاملة.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-hero text-primary-foreground pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Scale className="w-5 h-5 text-accent" />
              <span className="text-accent">خدمات قانونية متكاملة</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              مكتب المحامية جمانة نجم فرس و عبدالعزيز محمد فرس
            </h1>

            <p className="text-xl md:text-2xl text-primary-foreground mb-8 leading-relaxed">
              نقدم خدمات قانونية متكاملة بأعلى معايير الاحترافية لحماية واسترداد حقوقك
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-all shadow-lg hover:shadow-xl"
              >
                احجز استشارتك القانونية
              </Link>
              <Link
                to="/services"
                className="bg-white/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
              >
                تعرف على خدماتنا
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="sr-only">لماذا تختارنا</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustFactors.map((factor, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <factor.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{factor.title}</h3>
                <p className="text-muted-foreground text-sm">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خدماتنا القانونية</h2>
            <p className="text-muted-foreground text-lg">
              نوفر مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/10 rounded-lg mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="text-accent hover:text-accent/80 text-sm font-medium inline-flex items-center gap-1"
                >
                  اطلب استشارة
                  <span>←</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              عرض جميع الخدمات
            </Link>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">المدونة القانونية</h2>
            <p className="text-muted-foreground text-lg">
              مقالات ونصائح قانونية لمساعدتك في فهم حقوقك
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm mb-3">
                    {post.categoryName}
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-accent group-hover:gap-2 text-sm font-medium inline-flex items-center gap-1 transition-all">
                    اقرأ المزيد
                    <span className="group-hover:translate-x-[-4px] transition-transform">←</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <BlogPostModal
            post={selectedPost || {}}
            isOpen={!!selectedPost}
            onClose={() => setSelectedPost(null)}
          />

          <div className="text-center mt-12">
            <Link
              to="/blog"
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              عرض جميع المقالات
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-hero relative overflow-hidden text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            هل تحتاج إلى استشارة قانونية؟
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            تواصل معنا الآن للحصول على استشارة قانونية متخصصة من فريقنا
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-all shadow-lg"
            >
              احجز استشارتك الآن
            </Link>
            <a
              href="https://wa.me/+96596055558"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تواصل معنا عبر واتساب"
              className="bg-white/10 backdrop-blur-sm text-primary-foreground px-8 py-4 rounded-lg hover:bg-white/20 transition-all border border-white/20"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
