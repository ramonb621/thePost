import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function SignIn({ children }) {
    return <Link to="/" className="login">{ children }</Link>
};

export function Close({ children }) {
    return <div>{ children }</div>
};

export function Submit({ children }) {
    return <a className="submit">{ children }</a>
};