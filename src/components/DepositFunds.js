import { useState } from "react";
import { useBankContext } from "../utils/BankContext";
import Card from "./Card";

function DepositFunds() {
  const { bankUser, setBankUser } = useBankContext();
  console.log(bankUser);

  const [ deposit, setDeposit ] = useState(0);

  function handleDeposit(e) {
    e.preventDefault();
    console.log("handle Deposit fired")
    console.log(typeof(deposit));
    const depositInt = parseInt(deposit);
    console.log(typeof(depositInt));
    console.log(depositInt);


    const balance = bankUser[0].balance;
    const newBalance = depositInt + bankUser[0].balance;

    console.log(newBalance)

    setBankUser([
        { id: 0, name: "Paz", email: "paz@dog.co", password: "password", balance: newBalance },
    { id: 1, name: "IDa", email: "ida@dog.co", password: "password", balance: 200 }
    ])



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
                min="0.0"
                max="9999"
                value={deposit}
                onChange={(e) => setDeposit(e.currentTarget.value)}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-light"
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
