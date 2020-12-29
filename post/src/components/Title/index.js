import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Title() {
    return (
        <Link to="/" className="title">The Posts</Link>
    );
}

export default Title;