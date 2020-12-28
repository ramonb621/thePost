import React from "react";
import "./style.css";

export function Banner({ children }) {
    return <div className="main-banner">
                <div className="name-holder">
                    <p className="name">blah
                        {/* member name */}
                    </p>
                </div>
                <div className="headshot-cont">
                    <img className="headshot">
                        {/* profile pic upload? */}
                    </img>
                </div>
                <div className="link-cont">
                    {/* social media links (twitter, instagram, facebook) */}
                </div>
            </div>
};