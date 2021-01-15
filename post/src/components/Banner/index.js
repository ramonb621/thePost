import React from "react";
import "./style.css";

export function Banner({ name, headshot, twitter, instagram, facebook }) {
    return <div className="main-banner">
                <div className="name-holder">
                    <p className="name">Name Holder
                        { name }
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
                            <a className="twitter-link">{ twitter }</a>
                        </i>
                    </li>
                    <li>
                        <i className="fab fa-instagram-square">
                            <a className="insta-link">{ instagram }</a>
                        </i>
                    </li>
                    <li>
                        <i className="fab fa-facebook-square">
                            <a className="fb-link">{ facebook }</a>
                        </i>
                    </li>
                </div>
            </div>
};