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
          <div 
            className="text-foreground text-lg leading-relaxed whitespace-pre-wrap text-right" 
            style={{ unicodeBidi: 'plaintext' }}
          >
            {post.excerpt}
          </div>
        </div>
      </div>
    </div>
  );
}
