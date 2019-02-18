import React, { Component } from "react";
import { InputGroup, Input, Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HeaderComponent from './header.jsx';
class CreateUserComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div className="container col-sm-6" style={{ 'paddingTop': '50px' }}>
                    <h2><font color="white">Create User</font></h2><hr />

                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan="2">
                                    <InputGroup>
                                        <Input placeholder="username" type="text" name="username" />
                                    </InputGroup>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <InputGroup>
                                        <Input placeholder="Email-Address" type="text" name="emailaddress" />
                                    </InputGroup>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <InputGroup>
                                        <Input placeholder="Password" type="text" name="password" />
                                    </InputGroup>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2">
                                    <InputGroup>
                                        <Input placeholder="Confirm Password" type="text" name="cpassword" />
                                    </InputGroup>
                                </td>
                            </tr>
                            <tr>
                                <td><center><Button color="danger">Clear</Button></center></td>
                                <td><center><Button color="success">Create User</Button></center></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default CreateUserComponent;