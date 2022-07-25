import React, { useState } from "react";
import { Modal, ModalBody, Button } from "react-bootstrap";
import { useAddUsersContext } from "../contexts/NewUserContext";
import { v4 as uuidV4 } from "uuid";
import { Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

export default function EditUser({ userId, handleClose }) {
  const { users, removeUser, editType } = useAddUsersContext();
  const curUser = users.find((u) => u.id === userId);
  const [selectedDropDown, setSelectedDropDown] = useState();
  const memType = ["Normal", "Normal + Cardio", "CrossFit"];

  function changeType(e) {
    e.preventDefault();
    editType({ testId: curUser.id, newType: selectedDropDown });
  }
  const handleCloseButton = (e) => {
    e.preventDefault();
    setSelectedDropDown("Type of gym membership");
    handleClose();
  };
  //load the id compare and find the user name
  //make the change type invisible till you choose a different type
  return (
    <>
      <Modal
        show={userId != null}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>
            {curUser ? curUser.name + " " + curUser.lastName : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Click on delete button to delete the user!</Modal.Body>
        <Modal.Footer>
          <DropdownButton
            id="dropdown-basic-button"
            title={
              selectedDropDown ? selectedDropDown : "Type of gym membership"
            }
          >
            {memType.map((type) => {
              return (
                <Dropdown.Item
                  onClick={() => setSelectedDropDown(type)}
                  key={uuidV4()}
                >
                  {type}
                </Dropdown.Item>
              );
            })}
          </DropdownButton>
          <Button variant="secondary" onClick={changeType}>
            Change Type
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              removeUser(curUser);
              handleClose();
            }}
          >
            Delete
          </Button>
          <Button variant="seconday" onClick={handleCloseButton}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
