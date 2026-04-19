import { Shield, Target, Award, Users } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Shield,
      title: "الاحترافية",
      description: "نلتزم بأعلى معايير الاحترافية في تقديم خدماتنا القانونية.",
    },
    {
      icon: Target,
      title: "السرية",
      description: "نحافظ على سرية معلوماتك وبياناتك بكل دقة واحترافية.",
    },
    {
      icon: Award,
      title: "التميّز",
      description: "نسعى دائماً للتميز في تقديم أفضل الحلول القانونية.",
    },
    {
      icon: Users,
      title: "الالتزام",
      description: "نلتزم بمتابعة قضيتك حتى تحصل على حقوقك كاملة.",
    },
  ];

  return (
    <div className="min-h-screen">
      <section className="bg-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">من نحن</h1>
            <p className="text-xl text-primary-foreground/90">
              مكتب قانوني متخصص في تقديم الخدمات القانونية المتكاملة
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">نبذة عن المكتب</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  مكتب محاماة متخصص في تقديم الخدمات القانونية المتكاملة لحماية واسترداد حقوق عملائنا. نؤمن بأن حماية الحقوق هي حجر الأساس لمجتمع عادل ومستقر.
                </p>
                <p>
                  يتمتع فريقنا بخبرة واسعة في مختلف المجالات القانونية، بما في ذلك القانون التجاري، قانون العمل، الأحوال الشخصية، القضايا المدنية والجنائية، وغيرها من التخصصات القانونية.
                </p>
                <p>
                  نحن ملتزمون بتقديم خدمات قانونية عالية الجودة تتميز بالاحترافية والسرية والشفافية، مع التركيز على تحقيق أفضل النتائج لعملائنا.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">رؤيتنا</h3>
              <p className="text-muted-foreground mb-6">
                أن نكون المكتب القانوني الرائد في تقديم الخدمات القانونية المتميزة، ونموذجاً يحتذى به في الاحترافية والنزاهة.
              </p>

              <h3 className="text-2xl font-bold mb-6">رسالتنا</h3>
              <p className="text-muted-foreground">
                تقديم خدمات قانونية متكاملة بأعلى معايير الجودة والاحترافية، مع الحفاظ على مصالح عملائنا وحماية حقوقهم القانونية.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">قيمنا الأساسية</h2>
            <p className="text-muted-foreground text-lg">
              المبادئ التي نلتزم بها في عملنا اليومي
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card border border-border rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">خبرتنا القانونية</h2>
            <p className="text-muted-foreground text-lg">
              نتخصص في مجموعة واسعة من المجالات القانونية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "القانون التجاري",
              "قانون العمل",
              "الأحوال الشخصية",
              "القضايا المدنية",
              "القضايا الجنائية",
              "العقود والاتفاقيات",
              "حماية المستهلك",
              "الملكية الفكرية",
              "القضايا العقارية",
            ].map((area, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 flex items-center gap-3"
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
