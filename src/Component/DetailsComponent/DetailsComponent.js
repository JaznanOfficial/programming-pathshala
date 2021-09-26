import React from "react";
import './DetailsComponent.css'

const DetailsComponent = (props) => {
    console.log(props.data);
    const { name, country, creation, dob, salary } = props;
    return (
        <div className="card-parent-div">
            <div>
                <img src="./Programming-Pathshala.jpg" alt="img not found" srcset="" width="200px" />
            </div>
            <div>
                <h3>Name: {name}</h3>
                <h5>Country: {country}</h5>
                <h4>Creation: {creation}</h4>
                <h6>DOB: {dob}</h6>
                <h4>Salary: {salary}</h4>
            </div>
        </div>
    );
};

export default DetailsComponent;

