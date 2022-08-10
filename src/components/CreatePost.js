import React from "react";
import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";

export const CreatePost = ({ uid, displayName }) => {
  const message = useRef();

  const handlePost = async (e) => {
    e.preventDefault();
    const data = {
      author: displayName,
      authorId: uid,
      message: message.current.value,
      comments: null,
      date: Date.now()
    };
    // console.log(data);
    // rajouter les éléments dans la collection db qui s'appel posts et enfin on donne la data à traiter
    await addDoc(collection(db, "posts"), data);
    message.current.value = "";
  };
  return (
    <div className="new-post-modal">
      <form onSubmit={(e) => handlePost(e)}>
        <textarea placeholder="Message..." ref={message}></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};
