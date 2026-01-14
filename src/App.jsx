import { useState, useCallback } from "react";
import Header from "./components/Header";
import UsernameModal from "./components/UsernameModal";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  const [currentUser, setCurrentUser] = useState(() =>
    localStorage.getItem("instalite_user_id")
  );
  const [currentUsername, setCurrentUsername] = useState(() =>
    localStorage.getItem("instalite_username")
  );

  const [isUserModalOpen, setIsUserModalOpen] = useState(!currentUser);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleUsernameSet = (userId, username) => {
    setCurrentUser(userId);
    setCurrentUsername(username);
    setIsUserModalOpen(false);
  };

  const handlePostCreated = useCallback(() => {
    setRefreshTrigger((prev) => prev + 1);
  }, []);

  return (
    <div className="min-h-screen bg-instalite-light">
      <Header username={currentUsername} />

      <main className="w-full flex justify-center">
        <div className="w-full max-w-117.5 pt-8 pb-10 px-4">
          <CreatePost
            currentUser={currentUser}
            onPostCreated={handlePostCreated}
          />

          <PostList key={refreshTrigger} currentUser={currentUser} />
        </div>
      </main>

      {isUserModalOpen && <UsernameModal onUsernameSet={handleUsernameSet} />}
    </div>
  );
}

export default App;
