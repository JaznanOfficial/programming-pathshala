import React from "react";
import './DetailsComponent.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


const DetailsComponent = (props) => {
    const { name, country, creation, dob, salary, img, id } = props.data || {}
    return (
        <div className="card-parent-div">
            <div>
                <img src={img} alt="img not found"/>
            </div>
            <div className='details-div'>
                <h2>{name}</h2>
                <h4 className='id'>ID: {id}</h4>
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

