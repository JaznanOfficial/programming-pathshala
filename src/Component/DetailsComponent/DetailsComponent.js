import React from "react";
import './DetailsComponent.css'

const DetailsComponent = () => {
    return (
        <div className="card-parent-div">
            <div>
                <img src="./Programming-Pathshala.jpg" alt="img not found" srcset="" width="200px" />
            </div>
            <div>
                <h3>Name</h3>
                <h5>Country</h5>
                <h4>Creation</h4>
                <h6>DOB</h6>
                <h4>Salary</h4>
            </div>
        </div>
    );
};

export default DetailsComponent;

