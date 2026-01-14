import { useState, useEffect } from "react";
import { MessageCircle, Send } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function CommentSection({ postId, currentUser }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [commentCount, setCommentCount] = useState(0);

  // Buscar contagem de comentários sempre
  useEffect(() => {
    let isMounted = true;

    const fetchCommentCount = async () => {
      const { count } = await supabase
        .from("comments")
        .select("*", { count: "exact", head: true })
        .eq("post_id", postId);

      if (isMounted) {
        setCommentCount(count || 0);
      }
    };

    fetchCommentCount();

    return () => {
      isMounted = false;
    };
  }, [postId]);

  // Buscar comentários completos apenas quando abrir
  useEffect(() => {
    if (showComments) {
      let isMounted = true;

      const fetchComments = async () => {
        const { data, error } = await supabase
          .from("comments")
          .select("*, users(username)")
          .eq("post_id", postId)
          .order("created_at", { ascending: true });

        if (isMounted && !error && data) {
          setComments(data);
        }
      };

      fetchComments();

      return () => {
        isMounted = false;
      };
    }
  }, [postId, showComments]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newComment.trim() || !currentUser || loading) return;

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from("comments")
        .insert({
          post_id: postId,
          user_id: currentUser,
          content: newComment.trim(),
        })
        .select("*, users(username)")
        .single();

      if (!error && data) {
        setComments((prev) => [...prev, data]);
        setCommentCount((prev) => prev + 1);
        setNewComment("");
      }
    } catch (error) {
      console.error("Erro ao comentar:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-t border-instalite-border pt-2 mt-2">
      <button
        onClick={() => setShowComments(!showComments)}
        className="flex items-center gap-2 text-instalite-gray hover:text-instalite-dark transition text-sm mb-2"
      >
        <MessageCircle size={16} />
        <span className="font-semibold">
          {commentCount === 0
            ? "Clique e seja o primeiro a comentar!"
            : `${showComments ? "Ocultar" : "Ver"} ${commentCount} ${
                commentCount === 1 ? "comentário" : "comentários"
              }`}
        </span>
      </button>

      {showComments && (
        <div className="space-y-3 animate-in slide-in-from-top-2 duration-200">
          {/* Lista de comentários */}
          {comments.length > 0 ? (
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-linear-to-br from-instalite-secondary to-instalite-primary flex items-center justify-center shrink-0">
                    <span className="text-white text-xs font-bold">
                      {comment.users?.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1 bg-instalite-light rounded-lg px-3 py-2">
                    <span className="font-semibold text-xs text-instalite-dark block mb-0.5">
                      {comment.users?.username}
                    </span>
                    <span className="text-sm text-instalite-dark">
                      {comment.content}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-4 text-instalite-gray text-sm">
              💬 Nenhum comentário ainda
            </div>
          )}

          {/* Formulário de novo comentário */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Adicione um comentário..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="flex-1 border border-instalite-border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-instalite-primary focus:border-transparent"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !newComment.trim()}
              className="text-instalite-primary disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-70 transition active:scale-90"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
