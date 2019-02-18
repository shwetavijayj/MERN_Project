import React, { Component } from "react";
import { InputGroup, Input, Button } from 'reactstrap';
import HeaderComponent from './header.jsx';
import history from '../history';
class displayPersonalInfoComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Gender: "",
            maritalstatus: "",
            eduStatus: "",
            firstname: "",
            middlename: "",
            lastname: "",
            gender: "",
            dob: 0,
            age: 0,
            addr1: "",
            addr2: "",
            addr3: "",
            city: "",
            state1: "",
            pin: 0,
            phone: 0,
            mobile: 0,
            mstatus: "",
            edustatus: ""
        }
    }

    componentDidMount() {
        const history = this.props.history;
        let id = sessionStorage.getItem("UserId");
        fetch(`http://localhost:8080/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => response.json())
            .then(resData => {
                const data = resData.data;
                console.log("data", data);
                this.setState({
                    maritalstatus: data.MaritalStatus,
                    eduStatus: data.EduStatus,
                    firstname: data.FullName.fname,
                    middlename: data.FullName.mname,
                    lastname: data.FullName.lname,
                    gender: data.Gender,
                    dob: data.DateOfBirth,
                    age: data.Age,
                    addr1: data.Address.Addr1,
                    addr2: data.Address.Addr2,
                    addr3: data.Address.Addr3,
                    city: data.City,
                    state1: data.State,
                    pin: data.Pincode,
                    phone: data.Phone,
                    mobile: data.Mobile
                })
                console.log("Mobile-->", this.state.mobile + "--->" + this.state.phone + "--->" + this.state.pin + "-->" + this.state.dob);
            });
    }
    handleOnChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    render() {
        return (
            <div>
                <HeaderComponent></HeaderComponent>
                <div className="container col-sm-10" style={{ 'paddingTop': '50px' }}>
                    <h2><font color="white">Create User</font></h2><hr />
                    <font color="white"><label>Name</label></font><hr />
                    <div style={{ 'width': '33%', 'float': 'left' }}>
                        <Input type="text" name="firstname" value={this.state.firstname} onChange={this.handleOnChange.bind(this)} />
                    </div>
                    <div style={{ 'width': '32%', 'float': 'left' }}>
                        <Input placeholder="Middle Name" type="text" readOnly name="middlename" onChange={this.handleOnChange.bind(this)} defaultValue={this.state.middlename} />
                    </div>
                    <div style={{ 'width': '32%', 'float': 'left' }}>
                        <Input placeholder="Last Name" type="text" readOnly name="lastname" defaultValue={this.state.lastname} />
                    </div>
                    <hr />
                    <div style={{ 'width': '33%', 'float': 'left' }}>
                        <Input type="text" name="gender" readOnly placeholder="gender" defaultValue={this.state.gender}>
                            <option>{this.state.gender}</option>
                        </Input>
                    </div>
                    <div style={{ 'width': '32%', 'float': 'left' }}>
                        <Input type="text" placeholder="Date of Birth" readOnly name="dob" defaultValue={this.state.dob}
                        />
                    </div>
                    <div style={{ 'width': '32%', 'float': 'left' }}>
                        <Input type="text" readOnly placeholder="Age" readOnly name="age" defaultValue={this.state.age} />
                    </div> <br />
                    <hr />
                    <font color="white"><label>Address</label></font>
                    <div style={{ 'width': '97%', 'float': 'left' }}>
                        <Input type="text" readOnly placeholder="Address Line 1" name="addr1" defaultValue={this.state.addr1} /><br />
                        <Input type="text" readOnly placeholder="Address Line 2" name="addr2" defaultValue={this.state.addr2} /><br />
                        <Input type="text" readOnly placeholder="Address Line 3" name="addr3" defaultValue={this.state.addr3} /><br />
                        <Input type="text" readOnly placeholder="City dropdown" name="city" defaultValue={this.state.city} />
                    </div>
                    <div style={{ 'width': '48.5%', 'float': 'left' }}>
                        <Input type="select" name="state1" readOnly defaultValue={this.state.state1}>
                            <option>{this.state.state1}</option>
                        </Input>
                    </div>
                    <div style={{ 'width': '48.5%', 'float': 'left' }}>
                        <Input type="text" placeholder="Pincode" readOnly name="pin" value={this.state.pin} />
                    </div>
                    <div style={{ 'width': '48.5%', 'float': 'left' }}>
                        <Input type="text" placeholder="Phone Number" readOnly name="phone" value={this.state.phone} />
                    </div>
                    <div style={{ 'width': '48.5%', 'float': 'left' }}>
                        <Input type="text" placeholder="Mobile Number" readOnly name="mobile" value={this.state.mobile} />
                    </div>
                    <hr />
                    <div style={{ 'width': '48.5%', 'float': 'left' }}>
                        <small><font color="white">Marital Status</font></small>
                        <Input type="select" name="maritalstatus" readOnly defaultValue={this.state.maritalstatus}>
                            <option>{this.state.maritalstatus}</option>
                        </Input>
                    </div>
                    <div style={{ 'width': '48.5%', 'float': 'left' }}>
                        <small><font color="white">Educational Status</font></small>
                        <Input type="select" name="edustatus" readOnly defaultValue={this.state.eduStatus}>
                            <option>{this.state.eduStatus}</option>
                        </Input>
                    </div>
                </div>
            </div >

        );
    }

}
export default displayPersonalInfoComponent;