import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import PostCard from "./PostCard";

export default function PostList({ currentUser }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*, users(username)")
        .order("created_at", { ascending: false });

      if (isMounted) {
        if (!error && data) {
          setPosts(data);
        }
        setLoading(false);
      }
    };

    fetchPosts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="inline-block w-8 h-8 border-4 border-instalite-primary border-t-transparent rounded-full animate-spin"></div>
        <p className="text-instalite-gray mt-2 text-sm">Carregando posts...</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="bg-white border border-instalite-border rounded-lg p-8 text-center">
        <p className="text-instalite-gray">
          Nenhum post ainda. Seja o primeiro a publicar! 🎉
        </p>
      </div>
    );
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} currentUser={currentUser} />
      ))}
    </div>
  );
}
