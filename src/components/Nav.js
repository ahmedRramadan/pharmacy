import React, { useState } from 'react';
import {Container} from 'react-bootstrap'
import chatIcon from '../Images/chat-icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faCircleXmark  } from '@fortawesome/free-solid-svg-icons'
function Navbarf() {
    const [menu,setMenu] = useState(false)

return (
    <>
        <Container>
            <nav className='my-5 d-flex justify-content-between align-items-center'>
                <h1 ><a href = '#home' className='text-white'>Pharmacy</a></h1>
                <ul className='d-lg-flex d-none gap-5 list-style-none'>
                    <li><a className='text-white' href = '#home'>Home</a></li>
                    <li><a className='text-white' href = '#services'>Services</a></li>
                    <li><a className='text-white' href = '#about'>About</a></li>
                    <li><a className='text-white' href = '#contact'>Contact</a></li>
                </ul>
                <div className='phone d-lg-flex d-none align-items-center' >
                    <img src = {chatIcon} alt='chat icon' className='me-3'/>
                    <div className='d-flex flex-column'>
                        <span className='text-white' style={{fontSize : '12px', fontWeight:'bold'}}>CALL ANYTIME</span>
                        <a href='tel:+201118623766' className='text-white'>+201118623766</a> 
                    </div>
                </div>
                    <FontAwesomeIcon icon={faBars} className='cursor-pointer d-lg-none h1 text-white' onClick={()=>setMenu(!menu)}/>
                </nav>
        </Container>
        <div className='h-100 w-100 position-absolute top-0 py-5' style={{left: menu? '0': '-100%' , transition: '0.6s ease', backgroundColor : '#eceeef'}}>
            <Container>
                <button className='border-0 float-right'  onClick={()=>setMenu(!menu)}><FontAwesomeIcon icon={faCircleXmark} className='h1'/></button>
                <ul className='d-flex flex-column gap-3 list-style-none py-5 ps-0'>
                    <li><a href = '#home'>Home</a></li>
                    <li><a href = '#services'>Services</a></li>
                    <li><a href = '#about'>About</a></li>
                    <li><a href = '#news'>News</a></li>
                    <li><a href = '#contact'>Contact</a></li>
                </ul>
                <p className=''>Linoor is a premium Template for Digital Agencies, Start Ups, Small Business and a wide range of other agencies.</p>
                <div className='my-5'>
                    <a href = "mailto: abc@example.com" className='d-block'>info@digitalcastle.com</a>
                    <a href='tel:+201118623766'>+201118623766</a> 
                </div>
            </Container>
        </div>
    </>
);
}

export default Navbarf;
