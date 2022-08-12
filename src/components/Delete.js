import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../actions/post.action";

export const Delete = ({ postId }) => {
  const dispatch = useDispatch();
  // dispatch

  const handleDelete = () => {
    dispatch(deletePost(postId));
  };
  return (
    <span className="delete" onClick={(e) => handleDelete()}>
      <i className="fa solid fa-trash-can"> </i>
    </span>
  );
};
