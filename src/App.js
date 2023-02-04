import "./App.css";
import NavBar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

//Pages
import Home from "./components/Home";
import CreateAccount from "./components/CreateAccount";
import DepositFunds from "./components/DepositFunds";
import WithdrawFunds from "./components/WithdrawFunds";
import AllData from "./components/AllData";

//Context
import UserProvider from "./utils/BankContext";

//Styling
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="App">
     
        <Router>
          <NavBar />
          <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CreateAccount/" element={<CreateAccount />} />
            <Route path="/deposit/" element={<DepositFunds />} />
            <Route path="/withdraw/" element={<WithdrawFunds />} />
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
          </UserProvider>
        </Router>
      
    </div>
  );
}

export default App;
