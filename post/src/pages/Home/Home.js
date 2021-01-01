import React, { Component, Fragment } from "react";
import { Navbar, Search } from "../../components/Navbar";
import { Banner } from "../../components/Banner";
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
                <Navbar />
                <Search />
                <p className="main-heading">Home</p>
                <Banner />
            </div>
        )
    }
}
export default Home;