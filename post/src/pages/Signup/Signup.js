import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
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
                <p className="cont-desc">Please enter log in information below!</p>
                <p className="user-input">Username: <User /></p>
                <p className="password-input">Password: <Password /></p>
                <Link to="/login" className="join">Login</Link>
                <Submit>Submit</Submit>
            </div>
        )
    }
}

export default Signup;