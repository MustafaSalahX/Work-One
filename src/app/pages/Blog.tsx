import { Link } from "react-router";
import { useState } from "react";
import { BlogPostModal } from "../components/BlogPostModal";

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<any>(null);

  const categories = [
    { id: "all", name: "جميع المقالات" },
    { id: "labor-law", name: "قانون العمل" },
    { id: "consumer-protection", name: "حماية المستهلك" },
    { id: "commercial-law", name: "القانون التجاري" },
    { id: "personal-status", name: "الأحوال الشخصية" },
  ];

  const blogPosts = [
    {
      id: 1,
      category: "labor-law",
      categoryName: "قانون العمل",
      title: "حقوق الموظف عند إنهاء العقد",
      excerpt: "تعرف على حقوقك الكاملة عند إنهاء عقد العمل وفقاً لنظام العمل السعودي، بما في ذلك مكافأة نهاية الخدمة والتعويضات.",
      date: "2026-04-10",
    },
    {
      id: 2,
      category: "labor-law",
      categoryName: "قانون العمل",
      title: "كيفية التعامل مع النزاعات العمالية",
      excerpt: "دليل شامل للتعامل مع النزاعات في بيئة العمل وحلها بالطرق القانونية الصحيحة.",
      date: "2026-04-08",
    },
    {
      id: 3,
      category: "consumer-protection",
      categoryName: "حماية المستهلك",
      title: "كيف تسترد أموالك من المنتجات المعيبة",
      excerpt: "الخطوات القانونية لحماية حقوقك كمستهلك واسترداد أموالك من المنتجات أو الخدمات المعيبة.",
      date: "2026-04-05",
    },
    {
      id: 4,
      category: "consumer-protection",
      categoryName: "حماية المستهلك",
      title: "حقوقك عند التسوق الإلكتروني",
      excerpt: "ما هي حقوقك القانونية عند الشراء عبر الإنترنت وكيف تحمي نفسك من الاحتيال.",
      date: "2026-04-03",
    },
    {
      id: 5,
      category: "commercial-law",
      categoryName: "القانون التجاري",
      title: "أهمية التوثيق في العقود التجارية",
      excerpt: "لماذا يجب توثيق كل عقد تجاري وكيف يحميك قانونياً من النزاعات المستقبلية.",
      date: "2026-04-01",
    },
    {
      id: 6,
      category: "commercial-law",
      categoryName: "القانون التجاري",
      title: "تأسيس الشركات في السعودية",
      excerpt: "دليل شامل للخطوات القانونية اللازمة لتأسيس شركتك في المملكة العربية السعودية.",
      date: "2026-03-28",
    },
    {
      id: 7,
      category: "personal-status",
      categoryName: "الأحوال الشخصية",
      title: "الحضانة وحقوق الأطفال",
      excerpt: "ما هي حقوق الوالدين والأطفال في قضايا الحضانة وفقاً للأنظمة السعودية.",
      date: "2026-03-25",
    },
    {
      id: 8,
      category: "personal-status",
      categoryName: "الأحوال الشخصية",
      title: "الإجراءات القانونية للطلاق",
      excerpt: "فهم الإجراءات القانونية للطلاق وحقوق كل طرف في هذه العملية.",
      date: "2026-03-22",
    },
  ];

  const filteredPosts = selectedCategory === "all"
    ? blogPosts
    : blogPosts.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <section className="bg-hero text-primary-foreground pt-32 pb-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">المدونة القانونية</h1>
            <p className="text-xl text-primary-foreground/90">
              مقالات ونصائح قانونية لمساعدتك في فهم حقوقك والتزاماتك
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-lg transition-colors ${selectedCategory === category.id
                  ? "bg-accent text-accent-foreground"
                  : "bg-secondary text-foreground hover:bg-accent/10"
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all cursor-pointer group"
                onClick={() => setSelectedPost(post)}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                      {post.categoryName}
                    </div>

                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-accent transition-colors">{post.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-accent group-hover:gap-2 font-medium inline-flex items-center gap-1 transition-all">
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

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                لا توجد مقالات في هذا التصنيف حالياً
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
