import { useParams, Link, Navigate } from "react-router";
import { MessageSquare, Gavel, UserCheck, DollarSign, CheckCircle, FileSignature, FileText, Scale, CheckCircle2 } from "lucide-react";

export function ServiceDetail() {
  const { serviceId } = useParams();

  const servicesData: Record<string, any> = {
    "legal-consultation": {
      icon: MessageSquare,
      title: "الاستشارات القانونية",
      description: "نوفر استشارات قانونية متخصصة في كافة المجالات لحماية حقوقك ومصالحك القانونية.",
      fullDescription: "تعتبر الاستشارة القانونية الخطوة الأولى والأهم في حماية حقوقك القانونية. نوفر لك فريقاً من المحامين المتخصصين في مختلف المجالات القانونية لتقديم المشورة الدقيقة والفعالة.",
      benefits: [
        "تحليل قانوني شامل وموضوعي لحالتك",
        "فهم واضح لحقوقك والتزاماتك القانونية",
        "حلول قانونية عملية وقابلة للتنفيذ",
        "توفير الوقت والمال بتجنب الأخطاء القانونية",
        "تقييم المخاطر والفرص القانونية",
      ],
      process: [
        "حجز موعد الاستشارة",
        "تقديم المستندات والمعلومات ذات الصلة",
        "جلسة استشارية مع محامي متخصص",
        "الحصول على رأي قانوني مكتوب",
        "متابعة وإجابة أي استفسارات",
      ],
    },
    "representation": {
      icon: Gavel,
      title: "التمثيل والترافع",
      description: "نمثلك أمام المحاكم والجهات القضائية بكل احترافية لضمان أفضل النتائج.",
      fullDescription: "التمثيل القانوني الفعال يتطلب خبرة واسعة ومعرفة عميقة بالإجراءات القضائية. نوفر لك محامين متمرسين في الترافع أمام جميع درجات المحاكم والجهات القضائية.",
      benefits: [
        "محامون ذوو خبرة في الترافع والمرافعات",
        "إعداد مذكرات قانونية قوية ومؤثرة",
        "متابعة دقيقة لجميع إجراءات القضية",
        "الدفاع القوي عن حقوقك ومصالحك",
        "تقديم الطعون عند الحاجة",
      ],
      process: [
        "دراسة القضية بشكل شامل",
        "جمع الأدلة والمستندات",
        "إعداد المذكرات القانونية",
        "حضور جلسات المحكمة",
        "متابعة الحكم وتنفيذه",
      ],
    },
    "investigations": {
      icon: UserCheck,
      title: "حضور التحقيقات",
      description: "نرافقك في التحقيقات لحماية حقوقك وضمان سير الإجراءات بشكل قانوني سليم.",
      fullDescription: "مرحلة التحقيق حساسة وقد تؤثر بشكل كبير على مسار قضيتك. نوفر لك محامياً متخصصاً لمرافقتك وحماية حقوقك خلال جميع إجراءات التحقيق.",
      benefits: [
        "حماية حقوقك القانونية أثناء التحقيق",
        "مشورة قانونية فورية ومباشرة",
        "ضمان سلامة الإجراءات القانونية",
        "منع أي انتهاكات لحقوقك",
        "توثيق جميع الإجراءات",
      ],
      process: [
        "التنسيق المسبق قبل التحقيق",
        "مراجعة القضية والمستندات",
        "الحضور الفعلي مع الموكل",
        "تقديم المشورة الفورية",
        "متابعة ما بعد التحقيق",
      ],
    },
    "debt-collection": {
      icon: DollarSign,
      title: "تحصيل الديون",
      description: "نساعدك في استرداد حقوقك المالية بالطرق القانونية السريعة والفعالة.",
      fullDescription: "استرداد الديون يتطلب خبرة قانونية ومهارات تفاوضية عالية. نساعدك في تحصيل حقوقك المالية بأسرع الطرق القانونية وأكثرها فعالية.",
      benefits: [
        "استرداد أموالك بطرق قانونية فعالة",
        "التفاوض الاحترافي مع المدينين",
        "إقامة دعاوى قضائية عند الحاجة",
        "متابعة التنفيذ حتى التحصيل الكامل",
        "تقليل الوقت والجهد المبذول",
      ],
      process: [
        "تقييم الدين والمستندات الثبوتية",
        "التواصل والتفاوض مع المدين",
        "إقامة الدعوى القضائية إن لزم",
        "الحصول على حكم قضائي",
        "متابعة التنفيذ والتحصيل",
      ],
    },
    "judgment-execution": {
      icon: CheckCircle,
      title: "تنفيذ الأحكام",
      description: "نتابع تنفيذ الأحكام القضائية لضمان حصولك على حقوقك كاملة.",
      fullDescription: "الحصول على حكم قضائي لصالحك هو نصف الطريق فقط. نوفر لك خدمات متابعة تنفيذ الأحكام لضمان حصولك على حقوقك الكاملة.",
      benefits: [
        "متابعة احترافية لتنفيذ الأحكام",
        "التعامل مع محاكم التنفيذ",
        "الحجز على أموال وممتلكات المحكوم عليه",
        "ضمان التنفيذ الكامل للحكم",
        "حل أي عقبات تنفيذية",
      ],
      process: [
        "مراجعة الحكم القضائي",
        "تقديم طلب التنفيذ",
        "متابعة إجراءات التنفيذ",
        "الحجز على الأموال إن لزم",
        "استلام المبلغ المحكوم به",
      ],
    },
    "contracts": {
      icon: FileSignature,
      title: "صياغة العقود",
      description: "نصيغ العقود القانونية المحكمة التي تحمي مصالحك وتمنع النزاعات المستقبلية.",
      fullDescription: "العقد المحكم هو أساس أي علاقة تجارية أو مدنية ناجحة. نوفر لك خدمات صياغة ومراجعة العقود بأعلى معايير الدقة والاحترافية.",
      benefits: [
        "صياغة عقود محكمة ودقيقة",
        "حماية مصالحك وحقوقك",
        "منع النزاعات المستقبلية",
        "ضمان الامتثال القانوني",
        "مراجعة وتعديل العقود الموجودة",
      ],
      process: [
        "فهم احتياجاتك ومتطلباتك",
        "صياغة العقد الأولي",
        "المراجعة والتعديل",
        "التفاوض على البنود",
        "إصدار النسخة النهائية",
      ],
    },
    "complaints": {
      icon: FileText,
      title: "إعداد الشكاوى",
      description: "نعد الشكاوى القانونية الدقيقة التي تضمن حفظ حقوقك أمام الجهات المختصة.",
      fullDescription: "الشكوى القانونية الدقيقة والمحكمة هي مفتاح حماية حقوقك. نساعدك في إعداد وتقديم الشكاوى للجهات المختصة.",
      benefits: [
        "إعداد شكاوى قانونية دقيقة",
        "صياغة احترافية ومؤثرة",
        "تقديمها للجهات الصحيحة",
        "متابعة الشكوى حتى البت فيها",
        "حماية حقوقك القانونية",
      ],
      process: [
        "دراسة الحالة والمستندات",
        "صياغة الشكوى القانونية",
        "مراجعة وتدقيق الشكوى",
        "تقديمها للجهة المختصة",
        "متابعة إجراءات الشكوى",
      ],
    },
    "settlements": {
      icon: Scale,
      title: "التسويات القانونية",
      description: "نساعدك في الوصول إلى تسويات عادلة تحفظ حقوقك وتوفر الوقت والجهد.",
      fullDescription: "التسوية القانونية الجيدة توفر الوقت والمال وتحقق مصالح جميع الأطراف. نساعدك في التفاوض والوصول إلى تسويات عادلة ومنصفة.",
      benefits: [
        "توفير الوقت والتكاليف",
        "التفاوض الاحترافي",
        "حماية مصالحك",
        "صياغة اتفاقيات تسوية محكمة",
        "تجنب المحاكم الطويلة",
      ],
      process: [
        "تقييم القضية والخيارات",
        "التفاوض مع الطرف الآخر",
        "الوصول إلى اتفاق مبدئي",
        "صياغة اتفاقية التسوية",
        "توثيق الاتفاقية",
      ],
    },
  };

  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen">
      <section className="bg-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-6"
            >
              <span>→</span>
              <span>العودة إلى الخدمات</span>
            </Link>

            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 backdrop-blur-sm rounded-xl">
                  <ServiceIcon className="w-10 h-10 text-accent" />
                </div>
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-primary-foreground/90">{service.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-muted-foreground">{service.fullDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">فوائد الخدمة</h2>
              <ul className="space-y-3">
                {service.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6">خطوات العمل</h2>
              <ol className="space-y-3">
                {service.process.map((step: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-accent/10 text-accent rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground mt-0.5">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">جاهز للبدء؟</h2>
            <p className="text-muted-foreground mb-6">
              تواصل معنا الآن للحصول على استشارة مجانية حول هذه الخدمة
            </p>
            <Link
              to="/contact"
              className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg hover:bg-accent/90 transition-colors"
            >
              اطلب استشارة الآن
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
