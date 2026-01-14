import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function LikeButton({ postId, currentUser }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const fetchLikes = async () => {
      // Contar total de likes
      const { count } = await supabase
        .from("likes")
        .select("*", { count: "exact", head: true })
        .eq("post_id", postId);

      if (isMounted) {
        setLikeCount(count || 0);
      }

      // Verificar se usuário atual curtiu
      if (currentUser) {
        const { data } = await supabase
          .from("likes")
          .select()
          .eq("post_id", postId)
          .eq("user_id", currentUser)
          .single();

        if (isMounted) {
          setLiked(!!data);
        }
      }
    };

    fetchLikes();

    return () => {
      isMounted = false;
    };
  }, [postId, currentUser]);

  const toggleLike = async () => {
    if (!currentUser || loading) return;

    setLoading(true);

    try {
      if (liked) {
        // Descurtir
        await supabase
          .from("likes")
          .delete()
          .eq("post_id", postId)
          .eq("user_id", currentUser);

        setLiked(false);
        setLikeCount((prev) => prev - 1);
      } else {
        // Curtir
        await supabase.from("likes").insert({
          post_id: postId,
          user_id: currentUser,
        });

        setLiked(true);
        setLikeCount((prev) => prev + 1);
      }
    } catch (error) {
      console.error("Erro ao curtir:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleLike}
        disabled={loading}
        className="hover:opacity-60 transition disabled:opacity-50 active:scale-90"
      >
        <Heart
          size={24}
          className={
            liked
              ? "fill-instalite-primary text-instalite-primary"
              : "text-instalite-dark"
          }
        />
      </button>
      <span className="text-sm font-semibold text-instalite-dark">
        {likeCount} {likeCount === 1 ? "curtida" : "curtidas"}
      </span>
    </div>
  );
}
