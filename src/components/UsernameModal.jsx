import { useState } from "react";
import { supabase } from "../lib/supabase";

export default function UsernameModal({ onUsernameSet }) {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError("");

    try {
      // Verificar se usuário já existe
      const { data: existingUser } = await supabase
        .from("users")
        .select()
        .eq("username", username.trim())
        .single();

      let userId;
      if (existingUser) {
        userId = existingUser.id;
      } else {
        // Criar novo usuário
        const { data: newUser, error: insertError } = await supabase
          .from("users")
          .insert({ username: username.trim() })
          .select()
          .single();

        if (insertError) throw insertError;
        userId = newUser.id;
      }

      // Salvar no localStorage
      localStorage.setItem("instalite_user_id", userId);
      localStorage.setItem("instalite_username", username.trim());

      // Notificar componente pai
      onUsernameSet(userId, username.trim());
    } catch (err) {
      setError("Erro ao criar usuário. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-transparent bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-50 px-4 animate-in fade-in duration-200"
      onClick={(e) => e.stopPropagation()} // Prevenir propagação
    >
      <div
        className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()} // Prevenir fechar ao clicar no modal
      >
        <div className="text-center mb-6">
          <div className="w-20 h-20 mx-auto mb-4 bg-linear-to-br from-instalite-primary to-instalite-secondary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-4xl">📸</span>
          </div>
          <h2 className="text-2xl font-bold text-instalite-dark mb-2">
            Bem-vindo ao InstaLite!
          </h2>
          <p className="text-instalite-gray text-sm">
            Escolha um nome de usuário para começar
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Digite seu username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-instalite-border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-instalite-primary focus:border-transparent transition"
            disabled={loading}
            autoFocus
          />

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2 rounded-lg animate-in slide-in-from-top-2 duration-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading || !username.trim()}
            className="w-full bg-instalite-primary text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition active:scale-95"
          >
            {loading ? "Carregando..." : "Entrar"}
          </button>
        </form>
      </div>
    </div>
  );
}
