import { React, useState } from "react";
import { CreatePost } from "./components/CreatePost";
import ConnectModal from "./components/ConnectModal";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase.config";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { collection } from "firebase/firestore";
import { db } from "./utils/firebase.config";
import Post from "./components/Post";

const App = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  // Dans auth tu va regarder si un utilisateur est là
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  // permet de read nos elements avec le methodes getsDocs
  useEffect(() => {
    getDocs(collection(db, "posts")).then((res) =>
      setPosts(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    );
  }, []);
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
        {user ? (
          <CreatePost uid={user.uid} displayName={user.displayName} />
        ) : (
          <ConnectModal />
        )}
      </div>
      <div className="posts-container">
        {posts.length > 0 &&
          posts
            .sort((a, b) => b.date - a.date)
            .map((post) => <Post post={post} key={post.id} user={user} />)}
      </div>
    </div>
  );
};

export default App;
