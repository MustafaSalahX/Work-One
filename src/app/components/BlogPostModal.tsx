import { X, Calendar, Tag } from "lucide-react";
import { useEffect } from "react";

interface BlogPostModalProps {
  post: {
    id: number;
    category: string;
    categoryName?: string;
    title: string;
    excerpt: string;
    date: string;
    content?: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

export function BlogPostModal({ post, isOpen, onClose }: BlogPostModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  if (!isOpen) return null;

  const getFullContent = (postId: number): string => {
    const contents: Record<number, string> = {
      1: `
        <p>إنهاء عقد العمل هو موضوع حساس يهم كل موظف وصاحب عمل في المملكة العربية السعودية. نظام العمل السعودي يحمي حقوق الطرفين ويضمن عدالة الإجراءات.</p>

        <h2>مكافأة نهاية الخدمة</h2>
        <p>يستحق الموظف مكافأة نهاية الخدمة بناءً على مدة خدمته في المنشأة:</p>
        <ul>
          <li>نصف شهر عن كل سنة من السنوات الخمس الأولى</li>
          <li>شهر كامل عن كل سنة من السنوات التالية للخمس الأولى</li>
        </ul>

        <h2>التعويضات عند الإنهاء التعسفي</h2>
        <p>في حالة الإنهاء التعسفي للعقد من قبل صاحب العمل، يستحق الموظف:</p>
        <ul>
          <li>تعويض يعادل أجر 15 يوماً عن كل سنة خدمة</li>
          <li>مكافأة نهاية الخدمة كاملة</li>
          <li>أي مستحقات أخرى متفق عليها</li>
        </ul>

        <h2>الإشعار المسبق</h2>
        <p>يجب على الطرف الراغب في إنهاء العقد إشعار الطرف الآخر قبل 60 يوماً على الأقل. عدم الالتزام بهذا الإشعار يترتب عليه تعويض يعادل أجر فترة الإشعار.</p>
      `,
      2: `
        <p>نظام حماية المستهلك في المملكة العربية السعودية يضمن لك حقوقك عند شراء منتجات أو خدمات معيبة. إليك الخطوات القانونية لاسترداد أموالك.</p>

        <h2>حقوقك كمستهلك</h2>
        <p>بموجب نظام حماية المستهلك، لديك الحق في:</p>
        <ul>
          <li>استبدال المنتج المعيب بآخر سليم</li>
          <li>استرداد المبلغ المدفوع كاملاً</li>
          <li>إصلاح المنتج مجاناً</li>
        </ul>

        <h2>الخطوات العملية</h2>
        <h3>1. التواصل مع البائع</h3>
        <p>ابدأ بالتواصل المباشر مع البائع أو مقدم الخدمة وأطلب:</p>
        <ul>
          <li>استبدال المنتج</li>
          <li>استرداد المبلغ</li>
          <li>إصلاح العيب</li>
        </ul>
      `,
      3: `
        <p>العقود التجارية هي أساس أي علاقة تجارية ناجحة. التوثيق السليم للعقود يحميك من النزاعات ويضمن حقوقك القانونية.</p>

        <h2>لماذا التوثيق مهم؟</h2>
        <ul>
          <li>يعطي العقد قوة قانونية أكبر</li>
          <li>يسهل إثبات الحقوق أمام القضاء</li>
          <li>يمنع التلاعب أو التزوير</li>
          <li>يوضح التزامات كل طرف بشكل دقيق</li>
        </ul>

        <h2>أنواع العقود التي يجب توثيقها</h2>
        <ul>
          <li>عقود البيع والشراء للعقارات</li>
          <li>عقود الشراكة التجارية</li>
          <li>عقود التوكيل التجاري</li>
          <li>عقود القروض والتمويل</li>
        </ul>
      `,
      4: `
        <p>قضايا الحضانة من أهم القضايا التي تؤثر على حياة الأطفال والوالدين. نظام الأحوال الشخصية في المملكة يحمي مصلحة الطفل أولاً.</p>

        <h2>حق الحضانة</h2>
        <p>الحضانة حق للطفل في المقام الأول، وتمنح للأم في الحالات التالية:</p>
        <ul>
          <li>حضانة الأطفال حتى سن معينة</li>
          <li>توفير بيئة مناسبة للطفل</li>
          <li>القدرة على رعاية الطفل</li>
        </ul>

        <h2>شروط الحضانة</h2>
        <ul>
          <li>الأهلية الكاملة للحاضن</li>
          <li>القدرة على رعاية الطفل</li>
          <li>توفير بيئة آمنة ومناسبة</li>
        </ul>
      `,
      5: `
        <p>العقود التجارية هي أساس أي علاقة تجارية ناجحة. التوثيق السليم للعقود يحميك من النزاعات ويضمن حقوقك القانونية.</p>

        <h2>لماذا التوثيق مهم؟</h2>
        <ul>
          <li>يعطي العقد قوة قانونية أكبر</li>
          <li>يسهل إثبات الحقوق أمام القضاء</li>
          <li>يمنع التلاعب أو التزوير</li>
        </ul>
      `,
      6: `
        <p>تأسيس الشركات في المملكة العربية السعودية يتطلب اتباع خطوات قانونية محددة لضمان الامتثال الكامل للأنظمة واللوائح.</p>

        <h2>الخطوات الأساسية</h2>
        <ul>
          <li>اختيار الشكل القانوني المناسب للشركة</li>
          <li>إعداد عقد التأسيس والنظام الأساسي</li>
          <li>الحصول على الموافقات اللازمة</li>
          <li>التسجيل في السجل التجاري</li>
        </ul>
      `,
      7: `
        <p>الحضانة وحقوق الأطفال من أهم القضايا في الأحوال الشخصية، حيث يحمي النظام السعودي مصلحة الطفل أولاً وقبل كل شيء.</p>

        <h2>حقوق الطفل</h2>
        <ul>
          <li>الحق في الرعاية والحضانة</li>
          <li>الحق في النفقة والمسكن</li>
          <li>الحق في التعليم والصحة</li>
        </ul>
      `,
      8: `
        <p>الطلاق إجراء قانوني دقيق يتطلب فهماً واضحاً للحقوق والواجبات لكلا الطرفين.</p>

        <h2>الإجراءات القانونية</h2>
        <ul>
          <li>تقديم طلب الطلاق للمحكمة</li>
          <li>جلسات المصالحة</li>
          <li>تحديد الحقوق المالية</li>
          <li>إصدار صك الطلاق</li>
        </ul>
      `,
    };
    return contents[postId] || post.excerpt;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-card border border-border rounded-lg shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm flex items-center gap-2">
              <Tag className="w-3 h-3" />
              <span>{post.categoryName || post.category}</span>
            </div>

          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full hover:bg-secondary flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(85vh-80px)] px-6 py-6">
          <h2 className="text-3xl font-bold mb-6">{post.title}</h2>
          <article
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: getFullContent(post.id) }}
          />
        </div>
      </div>
    </div>
  );
}
