import React from 'react';
import BodyComponent from '../Body-component/BodyComponent';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import './MainParentComponent.css'

const MainParentComponent = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <BodyComponent></BodyComponent>
        </div>
    );
};

export default MainParentComponent;