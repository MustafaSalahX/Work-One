import { useState, useMemo } from "react";
import { BlogPostModal } from "../components/BlogPostModal";
import { blogPosts, categories } from "../data/blogData";

export function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedPost, setSelectedPost] = useState<any>(null);

  // Shuffle the "all" posts only once when the component mounts to give a dynamic feel
  const shuffledAllPosts = useMemo(() => {
    return [...blogPosts].sort(() => Math.random() - 0.5);
  }, []);

  const filteredPosts = selectedCategory === "all"
    ? shuffledAllPosts
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
            <h2 className="sr-only">تصنيفات المقالات</h2>
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
                  <div 
                    className="text-muted-foreground text-sm mb-4 line-clamp-3 text-right" 
                    style={{ unicodeBidi: 'plaintext' }}
                  >
                    {post.excerpt}
                  </div>
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
