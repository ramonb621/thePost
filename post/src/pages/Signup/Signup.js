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
            <div className="signup-cont">
                <p className="reg-head">Registration</p>
                <form>                
                    <div id="f-name">First Name:
                        <input className="f-name" type="text"></input>
                    </div>                                    
                    <div id="l-name">Last Name:
                        <input className="l-name" type="text"></input>
                    </div>                                    
                    <div id="bday">Birtday:
                        <input className="bday" type="text"></input>
                    </div>    
                    <div id="city">City:                 
                        <input className="city" type="text"></input>
                    </div>                                
                    <div id="state">State:
                        <input className="state" type="text"></input>
                    </div>                
                    <div id="email">Email:
                        <input className="email" type="text"></input>
                    </div>              
                    <div id="tweet">Twitter:
                        <input className="tweet" type="text"></input>
                    </div>               
                    <div id="i-gram">Instagram
                        <input className="i-gram" type="text"></input>
                    </div>                
                    <div id="f-book">Facebook:
                        <input className="f-book" type="text"></input>
                    </div>   
                    <div id="about">About Me:
                        <textarea className="about" type="text" rows="4" cols="50"></textarea>
                    </div>         
                    <Submit>Submit</Submit>
                </form>
            </div>
        )
    }
}

export default Signup;