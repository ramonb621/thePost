import React from "react";
import "./style.css";

export function Showcase({ children }) {
    return (
        <div className="showcase-cont">
            <p className="showcase-head">Showcase: </p>
            <div className="showcase">
                { children }
            </div>
        </div>
    )
};