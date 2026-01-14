import {
  Instagram,
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-instalite-light">
      {/* Header - Fixo no topo */}
      <header className="bg-white border-b border-instalite-border sticky top-0 z-50">
        <div className="max-w-[935px] mx-auto px-5 h-[60px] flex items-center justify-between">
          <h1 className="text-[28px] font-semibold text-instalite-dark">
            InstaLite
          </h1>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-instalite-primary to-instalite-secondary flex items-center justify-center">
              <span className="text-white text-sm font-semibold">M</span>
            </div>
            <span className="text-sm font-semibold text-instalite-dark hidden sm:block">
              maria_silva
            </span>
          </div>
        </div>
      </header>

      {/* Main Feed - CENTRALIZADO */}
      <main className="w-full flex justify-center">
        <div className="w-full max-w-[470px] pt-8 pb-10 px-4">
          {/* Card Criar Post */}
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

          {/* Post Card 1 */}
          <article className="bg-white border border-instalite-border rounded-lg mb-4">
            {/* Header do Post */}
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

            {/* Imagem do Post */}
            <div className="w-full aspect-square bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400"></div>

            {/* Ações */}
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

              {/* Curtidas */}
              <div className="mb-1">
                <span className="text-sm font-semibold text-instalite-dark">
                  24 curtidas
                </span>
              </div>

              {/* Caption */}
              <div className="mb-1">
                <span className="text-sm font-semibold text-instalite-dark mr-1">
                  joao_santos
                </span>
                <span className="text-sm text-instalite-dark">
                  Que vista incrível! 🏔️
                </span>
              </div>

              {/* Ver comentários */}
              <button className="text-sm text-instalite-gray mb-1">
                Ver todos os 3 comentários
              </button>

              {/* Timestamp */}
              <time className="text-[10px] uppercase text-instalite-gray block">
                HÁ 2 HORAS
              </time>
            </div>
          </article>

          {/* Post Card 2 */}
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
    </div>
  );
}

export default App;
