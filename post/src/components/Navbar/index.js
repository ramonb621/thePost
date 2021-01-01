import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export function Navbar() {
    return (
        <div className="main-nav">
            <input className="main-search" type="text" placeholder="Search..."></input>
            <Link to="/" className="search-btn">Search</Link>
            <a className="home" href="/">Home</a>
            <a className="news">News</a>
        </div>
    )
}

export function Search() {
    return  <div className="search-area">
            </div>
}