import { Tooltip } from "bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [homeIsActive, setHomeIsActive] = useState(true);
  const [creatAccIsActive, setCreatAccIsActive] = useState(false);
  const [depositIsActive, setDepositIsActive] = useState(false);
  const [withdrawIsActive, setWithdrawIsActive] = useState(false);
  const [allDataIsActive, setAllDataIsActive] = useState(false);

  function toggleHomeActive() {
    setHomeIsActive(true);
    setCreatAccIsActive(false);
    setDepositIsActive(false);
    setWithdrawIsActive(false);
    setAllDataIsActive(false);
  }

  function toggleCreatAccActive() {
    setHomeIsActive(false);
    setCreatAccIsActive(true);
    setDepositIsActive(false);
    setWithdrawIsActive(false);
    setAllDataIsActive(false);
  }

  function toggleDepositActive() {
    setHomeIsActive(false);
    setCreatAccIsActive(false);
    setDepositIsActive(true);
    setWithdrawIsActive(false);
    setAllDataIsActive(false);
  }

  function toggleWithdrawActive() {
    setHomeIsActive(false);
    setCreatAccIsActive(false);
    setDepositIsActive(false);
    setWithdrawIsActive(true);
    setAllDataIsActive(false);
  }

  function toggleAllDataActive() {
    setHomeIsActive(false);
    setCreatAccIsActive(false);
    setDepositIsActive(false);
    setWithdrawIsActive(false);
    setAllDataIsActive(true);
  }

  function className(state) {
    return state ? "nav-link active" : "nav-link";
  }

  

  return (
    <>
    
      <ul className="nav nav-tabs" style={{background: "#e3f2fd", paddingTop: "6px"}}>
        
      
        <li className="nav-item">
          
          <Link
            className={className(homeIsActive)}
            to="/"
            name="Home"
            aria-current="page"
            style={{color: "black"}}
            onClick={toggleHomeActive}
            data-toggle="tooltip" 
            title="Go to Home"           
          >
            Bad Bank Home
          </Link>
    
        </li>
       
        <li className="nav-item">
          <Link
            className={className(creatAccIsActive)}
            to="/CreateAccount"
            name="CreateAccount"
            style={{color: "black"}}
            onClick={toggleCreatAccActive}
            data-toggle="tooltip" 
            title="Create a new Account for you"   
          >
            Create Account
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={className(depositIsActive)}
            name="History"
            to="/Deposit"
            style={{color: "black"}}
            onClick={toggleDepositActive}
            data-toggle="tooltip" 
            title="Do you like cash? Then take it!"  
          >
            Deposit
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={className(withdrawIsActive)}
            name="alldatagrade"
            to="/Withdraw"
            style={{color: "black"}}
            onClick={toggleWithdrawActive}
          >
            Withdraw
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={className(allDataIsActive)}
            name="alldata"
            to="/Alldata"
            style={{color: "black"}}
            onClick={toggleAllDataActive}
          >
            All Data
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NavBar;

// import { Link } from "react-router-dom";

// function NavBar() {
//   return (
//     <nav
//       className="navbar navbar-expand-lg navbar-light"
//       style={{background: "#e3f2fd"}}
//     >
//       <div className="container-fluid">
//         {/* <Link className="navbar-brand" href="#">
//           Navbar
//         </Link> */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Bad Bank
//               </Link>
//               {/* <Link className="nav-link active" aria-current="page" href="#">Home</Link> */}
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/CreateAccount">
//                 Create Account
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Deposit">Deposit</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Withdraw">Whithdraw</Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/Alldata">All Data</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;
