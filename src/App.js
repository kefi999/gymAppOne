import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import AddNewUser from "./components/AddNewUser";
import { useState } from "react";
import UserTable from "./components/UserTable";
import { useAddUsersContext } from "./contexts/NewUserContext";
import EditUser from "./components/EditUser";
import LoginScreen from "./components/LoginScreen";
function App() {
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [viewEditUser, setViewEditUser] = useState();
  const random1 = true;
  const { users } = useAddUsersContext();
  return (
    <>
      {random1 ? (
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 0 }} className="mt-2 mb-2">
              <Button
                variant="primary"
                className="col-md text right"
                onClick={() => setShowAddUserModal(true)}
              >
                Add New User
              </Button>
            </Col>
          </Row>
          <Row id={"firstLine"}>
            <Col md={{ span: 10, offset: 0 }}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Contact</th>
                  </tr>
                </thead>
              </Table>
            </Col>
          </Row>
          <div>
            {users.map((user, i) => {
              console.log(user);

              return (
                <UserTable
                  key={user.id}
                  id={i + 1}
                  name={user.name}
                  lastName={user.lastName}
                  contact={user.contact}
                  type={user.type}
                  onEditUser={() => setViewEditUser(user.id)}
                />
              );
            })}
          </div>

          <AddNewUser
            show={showAddUserModal}
            handleClose={() => setShowAddUserModal(false)}
          />
          <EditUser
            userId={viewEditUser}
            handleClose={() => setViewEditUser()}
          />
        </Container>
      ) : (
        <LoginScreen></LoginScreen>
      )}
    </>
  );
}

export default App;
