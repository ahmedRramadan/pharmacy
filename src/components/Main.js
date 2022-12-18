import React from 'react';
import leftLine from '../Images/left-curve-line.png';
import rightGoldenCurve from '../Images/right-golden-curve.png';
import rightWhiteCurve from '../Images/right-white-curve.png';
import Navbarf from './Nav';

function Main() {

return (
    <section className='main-section'>
        <div className='main-section-bg'></div>
        <Navbarf />
        <div className='main-section-content '>
            <img className = 'left-line d-none d-sm-block' src = {leftLine} alt = 'animation line' />
            <img className = 'right-golden-curve d-none d-sm-block ' src = {rightGoldenCurve} alt = 'animation line' />
            <img className = 'right-white-curve d-none d-sm-block' src = {rightWhiteCurve} alt = 'animation line' />
            <div className='text-main-box text-white d-flex justify-content-center align-items-sm-start align-items-center flex-column ms-0 ms-sm-5 container'>
                <h3 className='h5'>Welcome To Pharmacy</h3>
                <p className='display-5 display-sm-1' id='main-tittle'>ORDER ALL YOUR PHARMACY NEEDS</p>
                <a className='golden-btn'><p>Descover More</p></a>
            </div>
        </div>
    </section>
);
}

export default Main;
