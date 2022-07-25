import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import { useAddUsersContext } from "../contexts/NewUserContext";
import { Dropdown } from "react-bootstrap";
import { v4 as uuidV4 } from "uuid";

export default function AddNewUser({ show, handleClose }) {
  const firstName = useRef();
  const lastName = useRef();
  const contact = useRef();

  const { addUser, loggedInUser } = useAddUsersContext();
  const memType = ["Normal", "Normal + Cardio", "CrossFit"];
  const [selectedDropDown, setSelectedDropDown] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loggedInUser);
    addUser({
      name: firstName.current.value,
      lastName: lastName.current.value,
      contact: contact.current.value,
      type: selectedDropDown,
    });
    setSelectedDropDown("Type of gym membership");
    handleClose();
  };

  const handleCloseButton = (e) => {
    e.preventDefault();
    setSelectedDropDown("Type of gym membership");
    handleClose();
  };

  return (
    <Form>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>New User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-1 mt-1" controlId="formBasicName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              ref={firstName}
              type="name"
              placeholder="Enter the First Name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-1 mt-2" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              ref={lastName}
              type="lastName"
              placeholder="Enter the Last name"
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-1 mt-2" controlId="formBasicContact">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              ref={contact}
              type="lastName"
              placeholder="Enter Contact"
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose the type of the membership</Form.Label>
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
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="seconday" onClick={handleCloseButton}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Form>
  );
}
