import React from "react";
import { useBankContext } from "../utils/BankContext";
import Card from "./Card";

function AllData() {
  //access shared context with help of react native function useContext and reference
  //to the created context with UserContext
  const { bankUser, setBankUser } = useBankContext();
  console.log(bankUser);

 

  return (
      <Card
        txtcolor="black"
        header="All Data"
        title="Have a look on our data base"
        text="You can use this for nothing"
        body={<p>{JSON.stringify(bankUser)}</p>}
      />
    // <div>
    //   <h1>Welcome to BAD BANK</h1>
    //   <h2>Your are at All Data</h2>
    //   <p>{JSON.stringify(bankUser)}</p>
    // </div>
  );
}

export default AllData;