// import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap'

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header() {
  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Brand
          style={{ "font-size": "30px", "font-weight": "bold" }}
          href="/"
        >
          Faiza
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="/home">
                Feed
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/post-question">
                Post Question
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/view-profile">
                View Profile
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login">
                Log in
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Navbar>
  );
}