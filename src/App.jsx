import { useState } from "react";
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Instagram,
} from "lucide-react";
import Header from "./components/Header";
import UsernameModal from "./components/UsernameModal";

function App() {
  // Inicializar estados direto com localStorage (lazy initialization)
  const [currentUser, setCurrentUser] = useState(() =>
    localStorage.getItem("instalite_user_id")
  );
  const [currentUsername, setCurrentUsername] = useState(() =>
    localStorage.getItem("instalite_username")
  );

  // Estado para controlar o modal
  const [isUserModalOpen, setIsUserModalOpen] = useState(!currentUser);

  const handleUsernameSet = (userId, username) => {
    setCurrentUser(userId);
    setCurrentUsername(username);
    setIsUserModalOpen(false); // Fecha o modal após definir username
  };

  return (
    <div className="min-h-screen bg-instalite-light">
      <Header username={currentUsername} />

      <main className="w-full flex justify-center">
        <div className="w-full max-w-[470px] pt-8 pb-10 px-4">
          <div className="bg-white border border-instalite-border rounded-lg mb-6">
            <div className="p-4">
              <h3 className="font-semibold text-instalite-dark mb-3">
                Criar novo post
              </h3>
              <label className="flex flex-col items-center justify-center h-[120px] border-2 border-dashed border-instalite-border rounded-lg cursor-pointer hover:border-instalite-gray transition">
                <Instagram className="text-instalite-gray mb-2" size={32} />
                <span className="text-sm text-instalite-gray">
                  Clique para adicionar uma foto
                </span>
              </label>
            </div>
          </div>

          <article className="bg-white border border-instalite-border rounded-lg mb-4">
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-instalite-secondary to-instalite-primary flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">J</span>
                </div>
                <span className="text-sm font-semibold text-instalite-dark">
                  joao_santos
                </span>
              </div>
              <button>
                <MoreHorizontal size={20} className="text-instalite-dark" />
              </button>
            </div>

            <div className="w-full aspect-square bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"></div>

            <div className="px-3 pt-2 pb-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <button className="hover:opacity-60 transition">
                    <Heart size={24} className="text-instalite-dark" />
                  </button>
                  <button className="hover:opacity-60 transition">
                    <MessageCircle size={24} className="text-instalite-dark" />
                  </button>
                  <button className="hover:opacity-60 transition">
                    <Send size={24} className="text-instalite-dark" />
                  </button>
                </div>
                <button className="hover:opacity-60 transition">
                  <Bookmark size={24} className="text-instalite-dark" />
                </button>
              </div>

              <div className="mb-1">
                <span className="text-sm font-semibold text-instalite-dark">
                  24 curtidas
                </span>
              </div>

              <div className="mb-1">
                <span className="text-sm font-semibold text-instalite-dark mr-1">
                  joao_santos
                </span>
                <span className="text-sm text-instalite-dark">
                  Que vista incrível! 🏔️
                </span>
              </div>

              <button className="text-sm text-instalite-gray mb-1">
                Ver todos os 3 comentários
              </button>

              <time className="text-[10px] uppercase text-instalite-gray block">
                HÁ 2 HORAS
              </time>
            </div>
          </article>

          <article className="bg-white border border-instalite-border rounded-lg">
            <div className="flex items-center justify-between px-3 py-2.5">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-instalite-primary to-orange-400 flex items-center justify-center">
                  <span className="text-white text-sm font-semibold">A</span>
                </div>
                <span className="text-sm font-semibold text-instalite-dark">
                  ana_costa
                </span>
              </div>
              <button>
                <MoreHorizontal size={20} className="text-instalite-dark" />
              </button>
            </div>

            <div className="w-full aspect-square bg-gradient-to-br from-green-300 via-teal-400 to-blue-500"></div>

            <div className="px-3 pt-2 pb-1">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <button className="hover:opacity-60 transition">
                    <Heart
                      size={24}
                      className="fill-instalite-primary text-instalite-primary"
                    />
                  </button>
                  <button className="hover:opacity-60 transition">
                    <MessageCircle size={24} className="text-instalite-dark" />
                  </button>
                  <button className="hover:opacity-60 transition">
                    <Send size={24} className="text-instalite-dark" />
                  </button>
                </div>
                <button className="hover:opacity-60 transition">
                  <Bookmark size={24} className="text-instalite-dark" />
                </button>
              </div>

              <div className="mb-1">
                <span className="text-sm font-semibold text-instalite-dark">
                  147 curtidas
                </span>
              </div>

              <div className="mb-1">
                <span className="text-sm font-semibold text-instalite-dark mr-1">
                  ana_costa
                </span>
                <span className="text-sm text-instalite-dark">
                  Paz e tranquilidade 🌅
                </span>
              </div>

              <button className="text-sm text-instalite-gray mb-1">
                Ver todos os 12 comentários
              </button>

              <time className="text-[10px] uppercase text-instalite-gray block">
                HÁ 5 HORAS
              </time>
            </div>
          </article>
        </div>
      </main>

      {/* Modal renderizado condicionalmente POR CIMA */}
      {isUserModalOpen && <UsernameModal onUsernameSet={handleUsernameSet} />}
    </div>
  );
}

export default App;
