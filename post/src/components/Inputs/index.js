import React from "react";
import "./style.css";

export function User({ children }) {
    return <input className="username">{ children }</input>
}

export function Password({ children }) {
    return <input className="pass-input">{ children }</input>
}