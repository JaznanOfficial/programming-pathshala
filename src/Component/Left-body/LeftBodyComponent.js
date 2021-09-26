import React, { useEffect, useState } from 'react';
import DetailsComponent from '../DetailsComponent/DetailsComponent';
import './LeftBodyComponent.css';
// import './programmerData.json';

const LeftBodyComponent = () => {

    const [programmerDatas, setProgrammerData] = useState([]);
    useEffect(() => {
        fetch('./programmerData.json')
            .then(res => res.json())
            .then(data => setProgrammerData(data));
    },[])
    return (
        <div className='left-body'>
            <DetailsComponent></DetailsComponent>
            
            {
                programmerDatas.map(data => <DetailsComponent
                    data={data}
                    key={data.id}
                ></DetailsComponent>)
            }
        </div>
    );
};

export default LeftBodyComponent;