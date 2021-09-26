
import DetailsComponent from '../DetailsComponent/DetailsComponent';
import React, { useEffect, useState } from 'react';
import RightBody from '../RightBody/RightBody';
import './BodyComponent.css'
import LeftBody from '../LeftBody/LeftBody';

const BodyComponent = () => {
    const [programmerDatas, setProgrammerData] = useState([]);
    useEffect(() => {
        fetch('./programmerData.json')
            .then(res => res.json())
            .then(data => setProgrammerData(data));
    }, [])
    
    const handleAddToSumary = (person) => {
    
    }


    return (
        <div className='body-component'>
            
        
        {
                programmerDatas.map(data => <LeftBody
                    data={data}
                    key={data.id}
                    handleAddToSumary = {handleAddToSumary}
                ></LeftBody>)
        }
   
            
        </div>
    );
};

export default BodyComponent;