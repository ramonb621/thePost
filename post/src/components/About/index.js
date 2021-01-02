import React from "react";
import "./style.css";

export function AboutMe({ children }) {
    return (
        <div className="about-me">
            <p className="about-head">About Me:</p>
            <p className="about-body">{ children }</p>
        </div>
    )
}