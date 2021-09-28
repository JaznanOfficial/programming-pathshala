import React from "react";
import "./RightBody.css";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const RightBody = (props) => {
    const { summary } = props;
    let total = 0;
    
    for (const person of summary) {
        total = total + person.salary
        
    }
    return (
        <div className='sticky-div'>
            <div className="summary-div">
                <h3>Total Summary</h3>
                <div className='total-summery-value'>
                    <h5>Total Added:{props.summary.length} </h5>
                    <h5>Total Salary: {total}</h5>
                    
                    {
                        summary.map(person => <h5 className='added-person'>
                        {person.name} is successfully added <i class="fas fa-check-circle"></i>
                        
                        </h5>)
                }
                    
                </div>
            </div>
        </div>
    );
};

export default RightBody;
