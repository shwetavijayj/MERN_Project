import React, { Component } from "react";
import { InputGroup, Input, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AdminHeaderComponent } from './header.jsx';
class UserlistComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <AdminHeaderComponent></AdminHeaderComponent>
                <div className="container col-sm-6" style={{ 'paddingTop': '50px' }}>
                    <h2><font color="white">Create User</font></h2><hr />
                </div>
            </div>
        );
    }
}

export default UserlistComponent;