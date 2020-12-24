import React, { Component, Fragment } from "react";
import { SignIn, Close, Submit } from "../../components/Icons";
import { User, Password } from "../../components/Inputs";
import "./Signup.css";

class Signup extends Component {

    componentDidMount() {

    };

    render() {
        return (
            <div className="log-cont">
                <p className="main-heading">Register</p>
                <p className="user-input">Username: <User /></p>
                <p className="password-input">Password: <Password /></p>
                <a className="join" href="#" target="_blank">Login</a>
                <Submit>Submit</Submit>
            </div>
        )
    }
}

export default Signup;