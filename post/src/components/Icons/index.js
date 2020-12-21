import React from "react";
import "./style.css";

export function SignIn({children}) {
    return <button className="login">{children}</button>
};

export function Close({children}) {
    return <div>{children}</div>
};

export function Submit({children}) {
    return <button className="submit">{children}</button>
};