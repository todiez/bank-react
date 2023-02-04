import React from "react";
import { useState } from "react";
import { useBankContext } from "../utils/BankContext";
import Card from "./Card";

function CreateAccount() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext

  const { bankUser, setBankUser } = useBankContext();

  const [show, setShow] = useState(true);
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   function validate(field, label) {
  //     if (!field) {
  //       setStatus("Error: " + label);
  //       setTimeout(() => setStatus(""), 100);
  //       return false;
  //     }
  //     return true;
  //   }

  function handleCreate() {
    if (name.length == 0) {
      alert("Please enter a name");
    } else if (email.length == 0) {
      alert("Please enter an email address");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address")
    } else if (password.length < 8) {
      alert("Password needs to be at least 8 characters long");
    } else {

      const id = bankUser.length;
      setBankUser([
        ...bankUser,
        { id: id, name: name, email: email, password: password, balance: 0 },
      ]);
      alert("Successfully created Account")
      setShow(false);
    }
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      txtcolor="black"
      header="Create Account"
      title="Input necessary Data:"
      status={status}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <br />
            E-Mail Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another Account
            </button>
          </>
        )
      }
    />
  );
}

export default CreateAccount;
