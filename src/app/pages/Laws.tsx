import { Book, FileText, Download } from "lucide-react";

export function Laws() {
  return (
    <div className="min-h-screen">
      <section className="bg-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">القوانين و الاحكام</h1>
            <p className="text-xl text-primary-foreground/90">
              دليلك إلى القوانين والأحكام القانونية المعتمدة
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4"> التشريعات القانونية والأحكام </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent/50 transition-all group flex flex-col sm:flex-row items-start gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors shrink-0">
                <Book className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">قانون الأحوال الشخصية وتعديلاته</h3>
                <p className="text-muted-foreground mb-6">عرض وتحميل نص قانون الأحوال الشخصية مع كافة التعديلات المعتمدة.</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href="/1.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-accent/10 text-accent hover:bg-accent/20 rounded-lg gap-2 text-sm font-medium transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>قراءة الملف</span>
                  </a>
                  <a href="/1.pdf" download className="flex items-center px-4 py-2 border border-border hover:border-accent/50 hover:text-accent rounded-lg gap-2 text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    <span>تحميل</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent/50 transition-all group flex flex-col sm:flex-row items-start gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors shrink-0">
                <Book className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">قانون المرافعات المدنية والتجارية</h3>
                <p className="text-muted-foreground mb-6">وثيقة كاملة لاجراءات وقوانين المرافعات المدنية والتجارية.</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href="/2.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-accent/10 text-accent hover:bg-accent/20 rounded-lg gap-2 text-sm font-medium transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>قراءة الملف</span>
                  </a>
                  <a href="/2.pdf" download className="flex items-center px-4 py-2 border border-border hover:border-accent/50 hover:text-accent rounded-lg gap-2 text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    <span>تحميل</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent/50 transition-all group flex flex-col sm:flex-row items-start gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors shrink-0">
                <Book className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">قانون الجزاء الكويتي</h3>
                <p className="text-muted-foreground mb-6">النسخة الرسمية الشاملة لقانون الجزاء الكويتي وتفاصيله.</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href="/3.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-accent/10 text-accent hover:bg-accent/20 rounded-lg gap-2 text-sm font-medium transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>قراءة الملف</span>
                  </a>
                  <a href="/3.pdf" download className="flex items-center px-4 py-2 border border-border hover:border-accent/50 hover:text-accent rounded-lg gap-2 text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    <span>تحميل</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-accent/50 transition-all group flex flex-col sm:flex-row items-start gap-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors shrink-0">
                <Book className="w-8 h-8 text-accent" />
              </div>
              <div className="flex-1 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">حكم أول درجة واستئناف</h3>
                <p className="text-muted-foreground mb-6">استعراض ومتابعة قضايا وحكم أول درجة وإجراءات الاستئناف.</p>
                
                <div className="flex flex-wrap items-center gap-4 mt-auto">
                  <a href="/4.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-2 bg-accent/10 text-accent hover:bg-accent/20 rounded-lg gap-2 text-sm font-medium transition-colors">
                    <FileText className="w-4 h-4" />
                    <span>قراءة الملف</span>
                  </a>
                  <a href="/4.pdf" download className="flex items-center px-4 py-2 border border-border hover:border-accent/50 hover:text-accent rounded-lg gap-2 text-sm font-medium transition-colors">
                    <Download className="w-4 h-4" />
                    <span>تحميل</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
