import { useState } from "react";
import { Instagram } from "lucide-react";
import Header from "./components/Header";
import UsernameModal from "./components/UsernameModal";
import PostList from "./components/PostList";

function App() {
  const [currentUser, setCurrentUser] = useState(() =>
    localStorage.getItem("instalite_user_id")
  );
  const [currentUsername, setCurrentUsername] = useState(() =>
    localStorage.getItem("instalite_username")
  );

  const [isUserModalOpen, setIsUserModalOpen] = useState(!currentUser);

  const handleUsernameSet = (userId, username) => {
    setCurrentUser(userId);
    setCurrentUsername(username);
    setIsUserModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-instalite-light">
      <Header username={currentUsername} />

      <main className="w-full flex justify-center">
        <div className="w-full max-w-[470px] pt-8 pb-10 px-4">
          {/* Card Criar Post - Por enquanto só visual */}
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

          {/* Lista de Posts do Supabase */}
          <PostList />
        </div>
      </main>

      {isUserModalOpen && <UsernameModal onUsernameSet={handleUsernameSet} />}
    </div>
  );
}

export default App;
