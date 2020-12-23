import React, { Component, Fragment } from "react";
import "./Home.css";

class Home extends Component {
    
    componentDidMount() {

    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        }); 
    };

    render() {
        return (
            <div className="container">
            <p className="main-heading">Home</p>
            </div>
        )
    }
}
export default Home;