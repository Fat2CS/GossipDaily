import { React, useState } from "react";
import { CreatePost } from "./components/CreatePost";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";

const App = () => {
  const [user, setUser] = useState(null);
  // Dans auth tu va regarder si un utilisateur est là
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handlelogout = async () => {
    await signOut(auth);
  };
  return (
    <div>
      <div className="app-header">
        {user && (
          <div className="user-infos">
            {/* afficher le première lettre du nom */}
            <span>{user?.displayName[0]}</span>
            <h4>{user?.displayName}</h4>
            <button onClick={() => handlelogout()}>
              {" "}
              <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
            </button>
          </div>
        )}

        {/* si user existe on peux poster  */}
        {user ? <CreatePost /> : <ConnectModal />}
      </div>
      <div className="posts-container"></div>
    </div>
  );
};

export default App;
