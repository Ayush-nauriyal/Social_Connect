import React, { useState } from "react";
import { editProfile } from "../../../api/FireStoreApi";
import { AiOutlineClose } from "react-icons/ai";

import "./index.scss";

function ProfileEdit({ onEdit, currentUser }) {
  const [editInputs, setEditInputs] = useState(currentUser);
  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };

  const updateProfileData = async () => {
    await editProfile(currentUser?.userID, editInputs);
    console.log(editInputs);
    await onEdit();
  };

  return (
    <div className="profile-card">
      <div className="edit-btn">
      <AiOutlineClose className="close-icon" onClick={onEdit} size={25} />
      </div>

      <div className="profile-edit-inputs">
      <label>Name</label>

        <input
          type="text"
          placeholder="name"
          className="common-input"
          name="name"
          onChange={getInput}
          value={editInputs.name}

        />
        <label>Current Job/Experience</label>

        <input
          type="text"
          placeholder="headline"
          className="common-input"
          name="headline"
          onChange={getInput}
          value={editInputs.headline}
        />
        <label>City</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="City"
          name="city"
          value={editInputs.city}
        />

        <label>Country</label>
        <input
          type="text"
          placeholder="Location"
          className="common-input"
          name="country"
          onChange={getInput}
          value={editInputs.country}


        />
        <label>Company</label>

        <input
          type="text"
          placeholder="Company"
          className="common-input"
          name="company"
          value={editInputs.company}
          onChange={getInput}
        />

      <label>College</label>

        <input
          type="text"
          placeholder="college"
          className="common-input"
          name="college"
          onChange={getInput}
          value={editInputs.college}

        />
        <label>Something About You</label>
        <textarea
          placeholder="About Me"
          className="common-textArea"
          onChange={getInput}
          rows={5}
          name="aboutMe"
          value={editInputs.aboutMe}
        />

        <label>Skills</label>
        <input
          onChange={getInput}
          className="common-input"
          placeholder="Profession"
          name="skills"
          value={editInputs.skills}
        />



        <div className="save-container">
          <button className="save-btn" onClick={updateProfileData}>
            Save{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
