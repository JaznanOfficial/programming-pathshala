import React from "react";
import './DetailsComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const DetailsComponent = (props) => {
    console.log(props.data);
    const { name, country, creation, dob, salary } = props
    return (
        <div className="card-parent-div">
            <div>
                <img src="shorturl.at/gxFKL" alt="img not found" srcset="" width="200px" />
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h5>Country: {country}</h5>
                <h5>Creation: {creation}</h5>
                <h5>DOB: {dob}</h5>
                <h4>Salary: {salary}</h4>
                <button><FontAwesomeIcon icon={faShoppingCart} /> Add to Summary</button>
            </div>
        </div>
    );
};

export default DetailsComponent;

