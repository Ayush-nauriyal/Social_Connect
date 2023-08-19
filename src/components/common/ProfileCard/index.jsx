import React, { useState, useMemo } from "react";
import "./index.scss";
import { getSingleUser, getSingleStatus } from "../../../api/FireStoreApi";
import { useLocation } from "react-router-dom";
import PostCard from "../PostCard";
import { MdEdit } from "react-icons/md";
import { uploadImage as uploadimageapi } from "../../../api/ImageUpload";
import FileUploadmodal from "../FileUploadModal";

function ProfileCard({ currentUser, onEdit }) {
  let location = useLocation();
  const [allStatuses, setAllStatus] = useState([]);
  const [currentProfile, setCurrentProfile] = useState({});
  const [currentImage, setCurrentImage] = useState({});
  const [modalOpen, setModalOpen] = useState(false);
  const [progress,setProgress]=useState(0);

  const getImage = (event) => {
    setCurrentImage(event.target.files[0]);
  };
  const uploadImage = () => {
    uploadimageapi(currentImage, currentUser?.userID,setModalOpen,setProgress,setCurrentImage);
  };

  useMemo(() => {
    if (location?.state?.id) {
      getSingleStatus(setAllStatus, location?.state?.id);
    }
    if (location?.state?.email) {
      getSingleUser(setCurrentProfile, location?.state?.email);
    }
  }, []);

  return (
    <>
      <FileUploadmodal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        getImage={getImage}
        uploadImage={uploadImage}
        currentImage={currentImage}
        progress={progress}
      />
      <div className="profile-card">
        <div className="edit-btn">
          <MdEdit className="edit-icon" onClick={onEdit} />
        </div>
        <div className="profile-info">
          <div>
            <img
              className="profile-image"
              onClick={()=> setModalOpen(true)}
              src={currentUser?.imageLink}
              alt="profile-img"
            />
            <h3 className="userName">
              {Object.values(currentProfile).length == 0
                ? currentUser.name
                : currentProfile?.name}{" "}
            </h3>
            <p className="heading">
              {" "}
              {Object.values(currentProfile).length == 0
                ? currentUser.headline
                : currentProfile?.headline}
            </p>
            <p className="location">
              {Object.values(currentProfile).length == 0
                ? `${currentUser.city}, ${currentUser.country} `
                : `${currentProfile?.city}, ${currentUser.country}`}
            </p>
          </div>

          <div className="right-info ">
            <p className="college">
              {" "}
              {Object.values(currentProfile).length == 0
                ? currentUser.college
                : currentProfile?.college}
            </p>
            <p className="company">
              {Object.values(currentProfile).length == 0
                ? currentUser.company
                : currentProfile?.company}
            </p>
          </div>
        </div>
        <p className="about-me">
          {Object.values(currentProfile).length === 0
            ? currentUser.aboutMe
            : currentProfile?.aboutMe}
        </p>
        {currentUser.skills || currentProfile?.skills ? (
          <p className="skills">
            <span className="skill-label">Skills</span>:&nbsp;
            {Object.values(currentProfile).length === 0
              ? currentUser.skills
              : currentProfile?.skills}
          </p>
        ) : (
          <></>
        )}
      </div>
      <div className="post-status-main">
        {allStatuses.map((posts) => {
          return (
            <div key={posts.id}>
              <PostCard posts={posts} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProfileCard;
