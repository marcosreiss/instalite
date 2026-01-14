import { useState } from "react";
import { Instagram, X } from "lucide-react";
import { supabase } from "../lib/supabase";

export default function CreatePost({ currentUser, onPostCreated }) {
  const [caption, setCaption] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setImageFile(file);

    // Preview da imagem
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile || !currentUser || uploading) return;

    setUploading(true);

    try {
      // Upload da imagem
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from("post-images")
        .upload(fileName, imageFile);

      if (uploadError) throw uploadError;

      // Obter URL pública
      const { data: urlData } = supabase.storage
        .from("post-images")
        .getPublicUrl(fileName);

      // Criar post no banco
      const { data: newPost, error: insertError } = await supabase
        .from("posts")
        .insert({
          user_id: currentUser,
          image_url: urlData.publicUrl,
          caption: caption.trim(),
        })
        .select("*, users(username)")
        .single();

      if (insertError) throw insertError;

      // Notificar componente pai
      onPostCreated(newPost);

      // Limpar formulário
      setCaption("");
      setImageFile(null);
      setImagePreview(null);
    } catch (error) {
      console.error("Erro ao criar post:", error);
      alert("Erro ao criar post. Tente novamente.");
    } finally {
      setUploading(false);
    }
  };

  const clearImage = () => {
    setImageFile(null);
    setImagePreview(null);
  };

  return (
    <div className="bg-white border border-instalite-border rounded-lg mb-6">
      <div className="p-4">
        <h3 className="font-semibold text-instalite-dark mb-3">
          Criar novo post
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Preview ou área de upload */}
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: "400px" }}
              />
              <button
                type="button"
                onClick={clearImage}
                className="absolute top-2 right-2 bg-black bg-opacity-60 text-white rounded-full p-2 hover:bg-opacity-80 transition"
              >
                <X size={20} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center h-30 border-2 border-dashed border-instalite-border rounded-lg cursor-pointer hover:border-instalite-gray transition">
              <Instagram className="text-instalite-gray mb-2" size={32} />
              <span className="text-sm text-instalite-gray">
                Clique para adicionar uma foto
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                disabled={uploading}
              />
            </label>
          )}

          {/* Caption */}
          <textarea
            placeholder="Escreva uma legenda..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            className="w-full border border-instalite-border rounded-lg px-4 py-2 text-base focus:outline-none focus:ring-2 focus:ring-instalite-primary focus:border-transparent resize-none"
            rows={3}
            disabled={uploading}
          />

          {/* Botão de publicar */}
          <button
            type="submit"
            disabled={!imageFile || uploading}
            className="w-full bg-instalite-primary text-white py-2.5 px-4 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition active:scale-95"
          >
            {uploading ? "Publicando..." : "Publicar"}
          </button>
        </form>
      </div>
    </div>
  );
}
