import React, { Component, Fragment } from "react";
import { SignIn, Close, Submit } from "../../components/Icons";
import "./Login.css";

class Login extends Component {

    componentDidMount() {

    };

    render() {
        return (
            <div className="log-cont">
                <SignIn />
            </div>
        )
    }
}

export default Login;