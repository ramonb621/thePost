import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Title() {
    return (
        <div className="title">
            <Link to="/" className="title-link">The Posts</Link>
        </div>
    );
}

export default Title;