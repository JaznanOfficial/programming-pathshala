
import DetailsComponent from '../DetailsComponent/DetailsComponent';
import React, { useEffect, useState } from 'react';
import RightBody from '../RightBody/RightBody';
import './BodyComponent.css'

const BodyComponent = () => {
    const [programmerDatas, setProgrammerData] = useState([]);
    useEffect(() => {
        fetch('./programmerData.json')
            .then(res => res.json())
            .then(data => setProgrammerData(data));
    },[])
    return (
        <div className='body-component'>
        
        {
                programmerDatas.map(data => <DetailsComponent
                    data={data}
                    key={data.id}
                ></DetailsComponent>)
        }
   
            
        </div>
    );
};

export default BodyComponent;