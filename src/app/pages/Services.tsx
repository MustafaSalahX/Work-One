import { Link } from "react-router";
import { MessageSquare, Gavel, UserCheck, DollarSign, CheckCircle, FileSignature, FileText, Scale } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "legal-consultation",
      icon: MessageSquare,
      title: "الاستشارات القانونية",
      description: "نوفر استشارات قانونية متخصصة في كافة المجالات لحماية حقوقك ومصالحك القانونية.",
      features: [
        "استشارات قانونية في كافة التخصصات",
        "تحليل قانوني شامل لوضعك",
        "توضيح الحقوق والواجبات",
        "تقديم حلول قانونية فعالة",
      ],
    },
    {
      id: "representation",
      icon: Gavel,
      title: "التمثيل والترافع",
      description: "نمثلك أمام المحاكم والجهات القضائية بكل احترافية لضمان أفضل النتائج.",
      features: [
        "التمثيل أمام جميع درجات المحاكم",
        "إعداد المذكرات القانونية",
        "متابعة القضايا حتى صدور الحكم",
        "الطعن على الأحكام عند الحاجة",
      ],
    },
    {
      id: "investigations",
      icon: UserCheck,
      title: "حضور التحقيقات",
      description: "نرافقك في التحقيقات لحماية حقوقك وضمان سير الإجراءات بشكل قانوني سليم.",
      features: [
        "الحضور مع الموكل في التحقيقات",
        "حماية الحقوق القانونية",
        "تقديم المشورة القانونية الفورية",
        "ضمان سلامة الإجراءات",
      ],
    },
    {
      id: "debt-collection",
      icon: DollarSign,
      title: "تحصيل الديون",
      description: "نساعدك في استرداد حقوقك المالية بالطرق القانونية السريعة والفعالة.",
      features: [
        "استرداد الديون المتعثرة",
        "التفاوض مع المدينين",
        "إقامة الدعاوى القضائية",
        "متابعة الإجراءات حتى التحصيل",
      ],
    },
    {
      id: "judgment-execution",
      icon: CheckCircle,
      title: "تنفيذ الأحكام",
      description: "نتابع تنفيذ الأحكام القضائية لضمان حصولك على حقوقك كاملة.",
      features: [
        "متابعة تنفيذ الأحكام",
        "الحجز على الأموال والممتلكات",
        "التعامل مع محاكم التنفيذ",
        "ضمان تحصيل الحقوق",
      ],
    },
    {
      id: "contracts",
      icon: FileSignature,
      title: "صياغة العقود",
      description: "نصيغ العقود القانونية المحكمة التي تحمي مصالحك وتمنع النزاعات المستقبلية.",
      features: [
        "صياغة عقود محكمة",
        "مراجعة العقود الموجودة",
        "التفاوض على بنود العقود",
        "ضمان حماية المصالح",
      ],
    },
    {
      id: "complaints",
      icon: FileText,
      title: "إعداد الشكاوى",
      description: "نعد الشكاوى القانونية الدقيقة التي تضمن حفظ حقوقك أمام الجهات المختصة.",
      features: [
        "إعداد شكاوى قانونية دقيقة",
        "تقديمها للجهات المختصة",
        "متابعة الشكاوى",
        "حماية الحقوق القانونية",
      ],
    },
    {
      id: "settlements",
      icon: Scale,
      title: "التسويات القانونية",
      description: "نساعدك في الوصول إلى تسويات عادلة تحفظ حقوقك وتوفر الوقت والجهد.",
      features: [
        "التفاوض على التسويات",
        "صياغة اتفاقيات التسوية",
        "حماية مصالح الموكل",
        "توفير الوقت والتكاليف",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا القانونية</h1>
            <p className="text-xl text-primary-foreground/90">
              نوفر مجموعة شاملة من الخدمات القانونية المتخصصة لتلبية احتياجاتك
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-accent/10 rounded-lg">
                      <service.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-semibold mb-3">ما نقدمه:</h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/services/${service.id}`}
                  className="inline-block w-full bg-accent text-accent-foreground text-center px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors"
                >
                  اطلب استشارة في هذه الخدمة
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            هل تحتاج إلى خدمة قانونية أخرى؟
          </h2>
          <p className="text-muted-foreground mb-8">
            تواصل معنا للحصول على استشارة قانونية مخصصة لاحتياجاتك
          </p>
          <Link
            to="/contact"
            className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors"
          >
            تواصل معنا الآن
          </Link>
        </div>
      </section>
    </div>
  );
}
