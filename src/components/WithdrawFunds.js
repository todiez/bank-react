import { useState } from "react";
import { useBankContext } from "../utils/BankContext";
import Card from "./Card";

function WithdrawFunds() {
  const { bankUser, setBankUser } = useBankContext();
  console.log(bankUser);

  const [withdraw, setWithdraw] = useState(0);

  function handleWithdraw(e) {
    e.preventDefault();
    console.log("handle withdraw fired");
    console.log(typeof withdraw);
    const withdrawInt = parseInt(withdraw);
    console.log(typeof withdrawInt);
    console.log(withdrawInt);

    const balance = bankUser[0].balance;
    const newBalance = withdrawInt + bankUser[0].balance;

    console.log(newBalance);

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
                min="-99999.0"
                max="0.0"
                value={withdraw}
                onChange={(e) => setWithdraw(e.currentTarget.value)}
              />
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-light"
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
