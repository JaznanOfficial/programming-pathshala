import React from "react";
import "./HeaderComponent.css";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "../../Photos/Programming-Pathshala.jpg";
import { Color } from "react-bootstrap/esm/types";

const HeaderComponent = () => {
    return (
        <div className="header-div">
            <Navbar bg="dark" variant="dark" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQbrLRq5eQr8yOwsPz9DIm0MTypdqMavqbabKF7LJhv_rfSmWxp"
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                        />{" "}
                        <h1>Programming Pathshala</h1>
                        <h3>A programming world, you will surprized there!</h3>
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <div className='sub-header-div'>
                <h4>Top programmer total salary $ 150000000 in my company</h4>
            </div>
        </div>
    );
};

export default HeaderComponent;
