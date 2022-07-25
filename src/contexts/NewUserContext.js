import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../custom/useLocalStorage";

const NewUserContext = React.createContext();

export function useAddUsersContext() {
  return useContext(NewUserContext);
}
//instead of making it as an array make it as an object.

export const NewUserProvider = ({ children }) => {
  const [users, setUsers] = useLocalStorage("users", []);
  const [savedUser, setSavedUser] = useLocalStorage("registered", []);

  function addUser({ name, lastName, contact, type }) {
    setUsers((prevUsers) => {
      /*
      //possible check to not allow same user to be found
      //   if (prevUsers.find((user) => user.name === name && prevUsers.find((user)=>user.lastName === lastName))) {
      //     return prevUsers;
      //   }*/

      return [...prevUsers, { id: uuidV4(), name, lastName, contact, type }];
    });
  }
  function removeUser({ id }) {
    setUsers((user) => {
      return user.filter((toDel) => toDel.id !== id);
    });
  }
  function editType({ testId, newType }) {
    console.log(testId);
    console.log(newType);
    setUsers((prevUser) => {
      return prevUser.map((user) => {
        if (user.id !== testId) return user;
        return { ...user, type: newType };
      });
    });
  }
  function createAccount({ emailAddress, password }) {
    console.log(emailAddress, password);
    setSavedUser((registered) => {
      return [...registered, { emailAddress, password }];
    });
  }

  function logIn({ inputEmail, inputPassword }) {
    savedUser.forEach((user, i) => {
      if (user.emailAddress === inputEmail && user.password === inputPassword) {
        console.log("saved");
      }
    });
  }

  return (
    <NewUserContext.Provider
      value={{
        users,
        addUser,
        removeUser,
        editType,
        createAccount,
        logIn,
      }}
    >
      {children}
    </NewUserContext.Provider>
  );
};
