import React from 'react';
import LeftBodyComponent from '../Left-body/LeftBodyComponent';
import RightBody from '../RightBody/RightBody';
import './BodyComponent.css'

const BodyComponent = () => {
    return (
        <div className='body-component'>
            <LeftBodyComponent></LeftBodyComponent>
            <RightBody></RightBody>
        </div>
    );
};

export default BodyComponent;