import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { SignIn, Close, Submit } from "../../components/Icons";
import { User, Password } from "../../components/Inputs";
import "./Login.css";

class Login extends Component {

    componentDidMount() {

    };

    render() {
        return (
            <div className="log-cont">
                <p className="main-heading">Login</p>
                <p className="cont-desc">Please enter log in information below...</p>
                <p className="user-input">Username: <User /></p>
                <p className="password-input">Password: <Password /></p>
                <Link to="/signup" className="join">Sign Up!</Link>
                <SignIn>Sign In</SignIn>
            </div>
        )
    }
}

export default Login;