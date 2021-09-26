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
                            src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5f4ebe0c87612dab4f12a597%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D292%26cropX2%3D3684%26cropY1%3D592%26cropY2%3D3987"
                            width="30"
                            height="30"
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
