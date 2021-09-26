import DetailsComponent from "../DetailsComponent/DetailsComponent";
import React, { useEffect, useState } from "react";
import RightBody from "../RightBody/RightBody";
import "./BodyComponent.css";
import LeftBody from "../LeftBody/LeftBody";

const BodyComponent = () => {
    const [programmerDatas, setProgrammerData] = useState([]);
    const [summary, setSummary] = useState([]);
    useEffect(() => {
        fetch("./programmerData.json")
            .then((res) => res.json())
            .then((data) => setProgrammerData(data));
    }, []);

    const handleAddToSumary = (person) => {
        const newPerson = [...summary, person];
        setSummary(newPerson);
    };

    return (
        <div className="body-component">
            <div className="single-card">
                {programmerDatas.map((data) => (
                    <LeftBody
                        data={data}
                        key={data.id}
                        handleAddToSumary={handleAddToSumary}
                    ></LeftBody>
                ))}
            </div>
            <div>
               <RightBody summary={summary}></RightBody>
            </div>
        </div>
    );
};

export default BodyComponent;
