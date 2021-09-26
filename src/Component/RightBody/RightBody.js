import React from "react";
import "./RightBody.css";

const RightBody = (props) => {
    const { summary } = props;
    let total = 0;
    let addedPerson = '';
    for (const person of summary) {
        total = total + person.salary
        addedPerson = addedPerson + person.name
    }
    return (
        <div className='sticky-div'>
            <div className="summary-div">
                <h3>Total Summary</h3>
                <div className='total-summery-value'>
                    <h5>Total Added:{props.summary.length} </h5>
                    <h5>Total Salary: {total}</h5>
                <h5>Person Name: {addedPerson}</h5>
                </div>
            </div>
        </div>
    );
};

export default RightBody;
