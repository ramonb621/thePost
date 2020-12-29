import React from "react";
import "./style.css";

export function User({ children }) {
    return <input type="text" className="username">{ children }</input>
}

export function Password({ children }) {
    return <input type="text" className="pass-input">{ children }</input>
}