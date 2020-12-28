import React from "react";
import "./style.css";

export function Banner({ children }) {
    return <div className="main-banner">
                <div className="name-holder">
                    <p className="name">Name Holder
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
                    <p className="social-head">Social Media Links:</p>
                    <li>
                        <i className="fab fa-twitter-square">
                            <a className="twitter-link"></a>
                        </i>
                    </li>
                    <li>
                        <i className="fab fa-instagram-square">
                            <a className="insta-link"></a>
                        </i>
                    </li>
                    <li>
                        <i className="fab fa-facebook-square">
                            <a className="fb-link"></a>
                        </i>
                    </li>
                </div>
            </div>
};