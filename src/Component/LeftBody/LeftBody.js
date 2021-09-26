import React from 'react';
import DetailsComponent from '../DetailsComponent/DetailsComponent';

const LeftBody = (props) => {
    return (
        <div>
            <DetailsComponent data={props}></DetailsComponent>
        </div>
    );
};

export default LeftBody;