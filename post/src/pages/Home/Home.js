import React, { Component, Fragment } from "react";
import { Navbar, Search } from "../../components/Navbar";
import { Banner } from "../../components/Banner";
import { AboutMe } from "../../components/About";
import { Showcase } from "../../components/Showcase";
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
                <AboutMe />
                <Showcase />
            </div>
        )
    }
}
export default Home;