import React from "react";
import { Button, Modal, Progress, } from "antd";

import "./index.scss";

function FileUploadmodal({
  modalOpen,
  setModalOpen,
  getImage,
  uploadImage,
  currentImage,
  progress
}) {
  return (
    <div>
      <Modal
        title="Add a new profile Image"
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button
            disabled={currentImage.name ? false : true}
            key="submit"
            type="primary"
            onClick={uploadImage}
          >
            Upload Profile
          </Button>
        ]}
      >
        <div className="image-upload-main">
          <p>{currentImage.name}</p>
          <label htmlFor="image-upload" className="upload-btn">
            {" "}
            Add an image
          </label>
          {progress==0 ? (<></>):(<div className="progress-bar">
            <Progress type="circle" percent={progress} />
          </div>)}
          

          <input hidden id="image-upload" type={"file"} onChange={getImage} />
        </div>
      </Modal>
    </div>
  );
}

export default FileUploadmodal;
