import { Send, Bookmark, MoreHorizontal } from "lucide-react";
import LikeButton from "./LikeButton";
import CommentSection from "./CommentSection";

export default function PostCard({ post, currentUser }) {
  return (
    <article className="bg-white border border-instalite-border rounded-lg mb-4">
      {/* Header do Post */}
      <div className="flex items-center justify-between px-3 py-2.5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-linear-to-br from-instalite-secondary to-instalite-primary flex items-center justify-center">
            <span className="text-white text-sm font-semibold">
              {post.users?.username?.charAt(0).toUpperCase()}
            </span>
          </div>
          <span className="text-sm font-semibold text-instalite-dark">
            {post.users?.username}
          </span>
        </div>
        <button>
          <MoreHorizontal size={20} className="text-instalite-dark" />
        </button>
      </div>

      {/* Imagem do Post */}
      <img
        src={post.image_url}
        alt={post.caption || "Post"}
        className="w-full aspect-square object-cover"
      />

      {/* Ações */}
      <div className="px-3 pt-2 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <LikeButton postId={post.id} currentUser={currentUser} />

            <button className="hover:opacity-60 transition">
              <Send size={24} className="text-instalite-dark" />
            </button>
          </div>
          <button className="hover:opacity-60 transition">
            <Bookmark size={24} className="text-instalite-dark" />
          </button>
        </div>

        {/* Caption */}
        {post.caption && (
          <div className="mb-2">
            <span className="text-sm font-semibold text-instalite-dark mr-1">
              {post.users?.username}
            </span>
            <span className="text-sm text-instalite-dark">{post.caption}</span>
          </div>
        )}

        {/* Timestamp */}
        <time className="text-[10px] uppercase text-instalite-gray block mb-2">
          {new Date(post.created_at).toLocaleDateString("pt-BR")}
        </time>

        {/* Seção de Comentários */}
        <CommentSection postId={post.id} currentUser={currentUser} />
      </div>
    </article>
  );
}
