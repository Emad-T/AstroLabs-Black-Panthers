import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
      <div className="container-fluid">
        {/* TODO: insert logo */}
        <a class="navbar-brand" href="#">
          LOGO
          {/* <img src="./logo.svg" width="25" /> */}
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              props.links.map(
                (linkObj) => {
                  return <li className="nav-item">
                    <Link className="nav-link" to={linkObj.path}>{linkObj.label}</Link>
                  </li>
                }
              )
            }
          </ul>
          <button class="btn btn-outline-success" type="submit">Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;