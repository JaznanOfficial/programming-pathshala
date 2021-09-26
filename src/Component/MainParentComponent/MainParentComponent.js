import React from 'react';
import BodyComponent from '../Body-component/BodyComponent';

import RightBody from '../RightBody/RightBody';
import './MainParentComponent.css'

const MainParentComponent = () => {
    return (
        <div className='main-body'> 
            <BodyComponent></BodyComponent>
        </div>
    );
};

export default MainParentComponent;