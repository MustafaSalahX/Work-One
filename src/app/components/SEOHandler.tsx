import { useEffect } from "react";
import { useLocation } from "react-router";

const routeConfig: Record<string, { title: string; description: string }> = {
  "/": {
    title: "مكتب المحامية جمانة نجم فرس و عبدالعزيز محمد فرس | محاماة واستشارات قانونية الكويت",
    description: "الموقع الرسمي لمكتب المحامية جمانة نجم فرس و عبدالعزيز محمد فرس. نخبة من المحامين لتقديم الحلول القانونية المتكاملة في الكويت.",
  },
  "/about": {
    title: "من نحن | مكتب المحامية جمانة نجم فرس",
    description: "تعرف على فريقنا القانوني وخبراتنا في تقديم الخدمات القانونية في الكويت.",
  },
  "/services": {
    title: "خدماتنا | مكتب المحامية جمانة نجم فرس",
    description: "نقدم مجموعة واسعة من الخدمات القانونية تشمل قضايا الأحوال الشخصية، القانون التجاري، والعمال.",
  },
  "/blog": {
    title: "المدونة والقوانين | مكتب المحامية جمانة نجم فرس",
    description: "مقالات قانونية وشروحات تهدف لزيادة الوعي القانوني في المجتمع الكويتي.",
  },
  "/laws": {
    title: "القوانين والأحكام | مكتب المحامية جمانة نجم فرس",
    description: "استعراض وتحميل أهم القوانين والأحكام القضائية المعتمدة في دولة الكويت.",
  },
  "/contact": {
    title: "اتصل بنا | مكتب المحامية جمانة نجم فرس",
    description: "تواصل معنا للحصول على استشارة قانونية مهنية وموثوقة في الكويت.",
  },
  "/terms": {
    title: "الشروط والأحكام | مكتب المحامية جمانة نجم فرس",
    description: "الشروط والأحكام الخاصة باستخدام خدماتنا وموقعنا الإلكتروني.",
  },
  "/privacy": {
    title: "سياسة الخصوصية | مكتب المحامية جمانة نجم فرس",
    description: "نلتزم بحماية خصوصيتك وبياناتك الشخصية وفقاً لأعلى المعايير.",
  },
  "/disclaimer": {
    title: "إخلاء المسؤولية | مكتب المحامية جمانة نجم فرس",
    description: "إخلاء مسؤولية قانونية بخصوص المعلومات المقدمة على الموقع الإلكتروني.",
  },
};

export function SEOHandler() {
  const location = useLocation();

  useEffect(() => {
    const defaultSEO = routeConfig["/"];
    
    // Check for exact matches
    let currentSEO = routeConfig[location.pathname];

    // Handle dynamic routes (like blog posts)
    if (!currentSEO) {
      if (location.pathname.startsWith("/blog/")) {
        currentSEO = {
          title: "مقال قانوني | مكتب المحامية جمانة نجم فرس",
          description: "اقرأ المزيد عن المواضيع القانونية المتخصصة في مدونتنا القانونية.",
        };
      } else if (location.pathname.startsWith("/services/")) {
        currentSEO = {
          title: "خدمة قانونية متخصصة | مكتب المحامية جمانة نجم فرس",
          description: "تفاصيل الخدمة القانونية المقدمة من مكتبنا لضمان حقوقك.",
        };
      }
    }

    const { title, description } = currentSEO || defaultSEO;

    document.title = title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }
  }, [location]);

  return null;
}
