import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/"><font color="white">Home</font></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/"><font color="white">Logout</font></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export class AdminHeaderComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Navbar color="dark" light expand="md">
                    <NavbarBrand href="/"><font color="white">Home</font></NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar left>
                            <DropdownToggle nav caret>
                                Options
                            </DropdownToggle>
                            <DropdownMenu left>
                                <DropdownItem>
                                    Create Role
                  </DropdownItem>
                                <DropdownItem>
                                    Create User
                  </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <NavLink href="/"><font color="white">Logout</font></NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default HeaderComponent;