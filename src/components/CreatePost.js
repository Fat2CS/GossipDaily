import React from "react";
import { useRef } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../actions/post.action";

export const CreatePost = ({ uid, displayName }) => {
  const message = useRef();
  const dispatch = useDispatch();

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
    // rajouter les éléments dans la collection db qui s'appel posts et enfin on donne la data à traiter pn fait le dispatch
    await dispatch(addPost(data));
    message.current.value = "";
    dispatch(getPosts());
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
