import { useState } from "react";
import { useBankContext } from "../utils/BankContext";
import Card from "./Card";

function WithdrawFunds() {
  const { bankUser, setBankUser } = useBankContext();

  const [withdraw, setWithdraw] = useState(0);
  const [status, setStatus] = useState(true);

  function handleWithdraw(e) {
    e.preventDefault();
    alert("Sucessfull Withdraw!");
    const withdrawInt = parseFloat(withdraw);
    const newBalance = bankUser[0].balance - withdrawInt;

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
      header="Withdraw"
      title={"Balance: $" + bankUser[0].balance}
      body={
        <div>
          <br />
          <form>
            <div className="form-group">
              <label htmlFor="Withdraw">Withdraw Amount:</label>
              <br />
              <br />
              <input
                type="number"
                className="form-control"
                id="withdraw"
                min="0"
                max="9999"
                value={withdraw}
                onChange={(e) => {
                  console.log(withdraw);
                  setStatus(false);
                  if (withdraw > bankUser[0].balance) alert("You are overdrafting your Account");
                  else if (withdraw < 0) alert("Please enter a positive number");
                  else if (withdraw > 1000) alert("Max withdraw amount per transaction is $1,000");
                  else if (isNaN(withdraw))
                    alert("Please insert a valid number");
                  else setWithdraw(e.currentTarget.value);
                }}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-light"
              disabled={status}
              onClick={handleWithdraw}
            >
              Withdraw
            </button>
          </form>
        </div>
      }
    />
  );
}

export default WithdrawFunds;
