import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { useAddUsersContext } from "../contexts/NewUserContext";
import RegisterUser from "./RegisterUser";

export default function LoginScreen() {
  const email = useRef();
  const password = useRef();
  const [showRegisterUser, setShowRegisterUser] = useState(false);

  const { logIn } = useAddUsersContext();
  function handleLoggin(e) {
    e.preventDefault();
    logIn({
      inputEmail: email.current.value,
      inputPassword: password.current.value,
    });
  }
  function registerUser(e) {
    e.preventDefault();
    setShowRegisterUser(true);
  }
  return (
    <>
      <Container style={{ width: "500px" }} className="mt-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" ref={email} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={password}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={handleLoggin}>
            Log in
          </Button>
          <Button
            variant="secondary"
            type="submit"
            onClick={registerUser}
            className=" ms-3"
          >
            Register
          </Button>
        </Form>
      </Container>
      <RegisterUser
        show={showRegisterUser}
        handleClose={() => {
          setShowRegisterUser(false);
        }}
      />
    </>
  );
}

/* 
add registration modal
2 paswords check if they the same
save localy
after save exit 

in context make a getter or something to get the stuff from memory,comapre it in this component




*/
