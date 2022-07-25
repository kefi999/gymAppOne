import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useAddUsersContext } from "../contexts/NewUserContext";
export default function UserTable({
  name,
  id,
  lastName,
  contact,
  type,
  onEditUser,
}) {
  return (
    <Container>
      <Row>
        <Col md={{ span: 10, offset: 0 }}>
          <Table striped bordered hover variant="dark">
            <tbody>
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lastName}</td>
                <td>{contact}</td>
                <td>{type}</td>
                <td>
                  <Button variant="secondary" onClick={() => onEditUser()}>
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
