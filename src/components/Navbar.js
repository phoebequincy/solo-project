import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink as NavbarLink,
    NavItem }

from 'reactstrap';
import '../stylesheets/Navstyle.css';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto"></NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>

              <NavItem>
                <NavbarLink href="/">Home</NavbarLink>
              </NavItem>

              <NavItem>
                <NavbarLink href="/About">About</NavbarLink>
              </NavItem>

              <NavItem>
                <NavbarLink href="/Resume">Resume</NavbarLink>
              </NavItem>

              <NavItem>
                <NavbarLink href="/Projects">Projects</NavbarLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
