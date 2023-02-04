import React from "react";
import { useBankContext } from "../utils/BankContext";

function AllData() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const { bankUser, setBankUser } = useBankContext();
  console.log(bankUser);

  return (
    <div>
      
      <h1 style={{textAlign: "left", paddingLeft: "150px", paddingTop: "50px"}}>All Data</h1>
      

      <div className="table" style={{maxWidth: "900px", paddingLeft: "150px", paddingTop: "50px", }}>
        <table className="table table-hover table-bordered table-striped">
          <thead style={{background: "#e3f2fd"}}>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Code</th>
              <th scope="col">Password</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>

          {bankUser?.map((user, counter) => (
            <tbody key={user.id}>
              <tr>
                <th scope="row">{counter + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default AllData;
