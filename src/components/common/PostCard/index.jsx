import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsPencil, BsTrash } from "react-icons/bs";
import LikeButton from "../LikeButton";
import { getCurrentUser, getAllUsers,deletePost } from "../../../api/FireStoreApi";
import "./index.scss";

function PostCard({ posts, id, getEditData }) {
  let navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
    getAllUsers(setAllUsers);
  }, []);
  return (
    <>
      <div className="posts-card" key={id}>
        <div className="post-image-wrapper">
        {currentUser.userID === posts.userID ? (
          <div className="action-container">
            <BsPencil
              size={20}
              className="action-icon"
              onClick={() => getEditData(posts)}
            />
            <BsTrash
              size={20}
              className="action-icon"
              onClick={() => deletePost(posts.id)}
            />
          </div>
        ) : (
          <></>
        )}

          <img
            className="profile-image"
            src={
              allUsers
                .filter((item) => item.userID === posts.userID)
                .map((item) => item.imageLink)[0]
            }
            alt="profile"
          />
          <p
            className="name"
            onClick={() => {
              console.log(posts.userEmail);
              navigate("/profile", {
                state: { id: posts?.userID, email: posts.userEmail }
              });
            }}
          >
            {" "}
            {posts.user}
          </p>
        </div>

        <p className="timestamp"> {posts.timeStamp} </p>
        <p className="status">{posts.status}</p>
        <LikeButton
          userId={currentUser?.userID}
          postId={posts.id}
          currentUser={currentUser}
        />
      </div>
    </>
  );
}

export default PostCard;
