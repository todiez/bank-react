import { useState } from "react";
import { useBankContext } from "../utils/BankContext";
import Card from "./Card";

function DepositFunds() {
  const { bankUser, setBankUser } = useBankContext();
  
  const [deposit, setDeposit] = useState(0);
  const [status, setStatus] = useState(true);

  function handleDeposit(e) {
    e.preventDefault();
    alert("Sucessfull Deposit!")
    const depositInt = parseFloat(deposit);
    const newBalance = depositInt + bankUser[0].balance;

    setBankUser([
      {
        id: 0,
        name: "Paz",
        email: "paz@dog.co",
        password: "password",
        balance: newBalance,
      },
      {
        id: 1,
        name: "IDa",
        email: "ida@dog.co",
        password: "password",
        balance: 200,
      },
    ]);
  }

  return (
    <Card
      header="Deposit"
      title={"Balance: $" + bankUser[0].balance}
      body={
        <div>
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="Withdraw">Deposit Amount:</label>
              <br />
              <br />
              <input
                type="number"
                className="form-control"
                id="deposit"
                min="0"
                max="9999"
                value={deposit}
                onChange={(e) => {
                  console.log(deposit);
                  setStatus(false);
                  if (deposit < 0) alert("Please enter a positive number");
                  else if (isNaN(deposit))
                    alert("Please insert a valid number");
                  else setDeposit(e.currentTarget.value);
                }}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={status}
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </form>
        </div>
      }
    />
  );
}

export default DepositFunds;
