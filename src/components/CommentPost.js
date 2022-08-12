import React, { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useRef } from "react";

import CommentCard from "./CommentCard";
import { useDispatch } from "react-redux";
import { addComment } from "../actions/post.action";

const CommentPost = ({ post }) => {
  const [user, setUser] = useState(null);
  const answerContent = useRef();
  const dispatch = useDispatch();
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  const handleComment = (e) => {
    e.preventDefault();
    let data = [];
    if (post.comments === null) {
      data = [
        {
          commentAuthor: user.displayName,
          text: answerContent.current.value
        }
      ];
    } else {
      data = [
        ...post.comments,
        {
          commentAuthor: user.displayName,
          text: answerContent.current.value
        }
      ];
    }

    // dispatch
    dispatch(addComment(post.id, data));
    answerContent.current.value = "";
  };

  // console.log(answerContent.current.value);

  return (
    <div className="comment-container">
      <h5 className="comment-title"> Commentaires</h5>
      {/* s'il y a des commentaires de post il faut la mapper */}
      {post.comments &&
        post.comments.map((comment, index) => (
          <CommentCard key={index} comment={comment} />
        ))}
      {/* MAP */}

      {user ? (
        <form onSubmit={(e) => handleComment(e)}>
          <textarea
            placeholder="Envoyer un commentaire"
            ref={answerContent}
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      ) : (
        <p>Vous devez être connecté pour poster un commentaire</p>
      )}
    </div>
  );
};

export default CommentPost;
