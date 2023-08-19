import React, { useState } from "react";
import { Modal, Button } from "antd";
import "./index.scss";
const ModalComponent = ({
  modalOpen,
  setModalOpen,
  status,
  setStatus,
  sendStatus,
  isEdit,
  updateStatus
}) => {
  return (
    <>
      <Modal
        title="Share out to all"
        centered
        open={modalOpen}
        onOk={() => {
          setModalOpen(false);
          setStatus("");
        }}
        onCancel={() => {
          setModalOpen(false);
          setStatus("");
        }}
        footer={[
          <Button
          onClick={isEdit ? updateStatus : sendStatus}
          key="submit"
            type="primary"
            disabled={status.length > 0 ? false : true}
          >
            {isEdit ? "Update" : "Post"}
          </Button>
        ]}
      >
        <input
          type="text"
          className="modal-input"
          placeholder="what do you wanna share"
          onChange={(event) => {
            setStatus(event.target.value);
          }}
        />
      </Modal>
    </>
  );
};
export default ModalComponent;
