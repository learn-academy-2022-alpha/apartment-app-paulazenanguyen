import React, { Component } from 'react'
import {
  Navbar,
  NavItem,
  NavLink,
  NavbarToggler,
  NavbarBrand,
  Collapse,
  Nav,
  NavbarText} from 'reactstrap';

class Home extends Component {
  render() {
    return(
    <>
    <div>
  <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="http://localhost:3000">
      Apartment App
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="http://localhost:3000/apartmentindex">
            Listings
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="http://localhost:3000/apartmentnew">
            Create An Account
          </NavLink>
        </NavItem>
      </Nav>
      <NavbarText>
        Log In
      </NavbarText>
    </Collapse>
  </Navbar>
</div>
    </>
    )
  }
}

export default Home
