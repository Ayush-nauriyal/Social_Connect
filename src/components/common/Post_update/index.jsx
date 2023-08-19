import React, { useState, useMemo } from "react";
import "./index.scss";
import ModalComponent from "../Modal";
import { postStatus, getStatus ,updatePost } from "../../../api/FireStoreApi";
import PostCard from "../PostCard";
import { getCurrentTimeStamp } from "../../../helpers/useMoment";
import { getUniqueId } from "../../../helpers/getuniqueid";

function PostStatus({ currentUser }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [allStatuses, setAllStatus] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  let userEmail = localStorage.getItem("userEmail");

  const sendStatus = async () => {
    let object = {
      status: status,
      timeStamp: getCurrentTimeStamp("LLL"),
      userEmail: userEmail,
      user: currentUser.name,
      postID: getUniqueId(),
      userID: currentUser.userID
    };
    await postStatus(object);
    await setModalOpen(false);
    await setStatus("");
    setIsEdit(false);

    if (status.length == 0) {
      console.log("error");
    }
  };
  const getEditData = (posts) => {
    setModalOpen(true);
    setStatus(posts?.status);
    setCurrentPost(posts);
    setIsEdit(true);
  };
  const updateStatus = () => {
    console.log(currentPost);
     updatePost(currentPost.id,status);
     setModalOpen(false);


  };

  useMemo(() => {
    getStatus(setAllStatus);
  }, []);
  
  
  return (
    <>
      <div className="post-status-main">
        <div className="post-status">
          <button
            className="open-post-modal"
            onClick={() => {
              setModalOpen(true);
              setIsEdit(false);
            }}
          >
            share a post
          </button>
        </div>
        <ModalComponent
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          status={status}
          setStatus={setStatus}
          sendStatus={sendStatus}
          isEdit={isEdit}
          updateStatus={updateStatus}
        />
        <div>
          {allStatuses.map((posts) => {
            return (
              <div key={posts.id}>
                <PostCard posts={posts} getEditData={getEditData} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PostStatus;
