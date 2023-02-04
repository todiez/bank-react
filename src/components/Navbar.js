import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light" 
      style={{background: "#e3f2fd"}}
    >
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#">
          Navbar
        </a> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Bad Bank
              </Link>
              {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/CreateAccount">
                Create Account
              </Link>
            </li>          
            <li className="nav-item">
              <Link className="nav-link" to="/Deposit">Deposit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Withdraw">Whithdraw</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Alldata">All Data</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;