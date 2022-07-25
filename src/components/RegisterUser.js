import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useAddUsersContext } from "../contexts/NewUserContext";

export default function RegisterUser({ show, handleClose }) {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const registerPasswordRepeat = useRef();

  const { createAccount } = useAddUsersContext();
  function handleRegistration() {
    if (
      registerPassword.current.value === registerPasswordRepeat.current.value
    ) {
      createAccount({
        emailAddress: registerEmail.current.value,
        password: registerPassword.current.value,
      });
      handleClose();
    }
  }
  return (
    <>
      <Form>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>Please input your Email and Password</Modal.Header>

          <Modal.Body>
            <Form.Group className="mb-1 mt-1" controlId="formBasicEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                ref={registerEmail}
                type="email"
                placeholder="Enter the Email address"
              ></Form.Control>
            </Form.Group>
            <Form.Group className="mb-1 mt-2" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                ref={registerPassword}
                type="lastName"
                placeholder="Enter your password"
              ></Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-1 mt-2"
              controlId="formBasicRepeatPassword"
            >
              <Form.Label>Re-type password</Form.Label>
              <Form.Control
                ref={registerPasswordRepeat}
                type="lastName"
                placeholder="Enter your password again"
              ></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleRegistration}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
}
