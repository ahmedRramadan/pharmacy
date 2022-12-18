import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Pagination,Autoplay } from "swiper";
import "../../node_modules/swiper/swiper.min.css";
import evento from '../Images/evento.png'
function Clients() {

return (
    <section className='clients-section position-relative'>
        <div className='clients-section-bg position-absolute w-100 h-75'></div>
        <Container>
            <div className='numbers-box text-white d-flex gap-5 justify-content-center text-align-center'>
                <div>
                    <p className='display-4 text-center'>22</p>
                    <p className='text-uppercase text-cente'>Existing Pharmacies</p>
                </div>
                <div>
                    <p className='display-4 text-cente'>3,500</p>
                    <p className='text-cente'>EMPLOYEES</p>
                </div>
                <div>
                    <p className='display-4 text-cente'>800</p>
                    <p className='text-uppercase text-cente'>Upcoming Pharmacies</p>
                </div>
                <div>
                    <p className='display-4 text-cente'>29</p>
                    <p className='text-uppercase text-cente'>Covered Governorat</p>
                </div>
            </div>
            <Row className='clients-message-box position-absolute'>
                <Col md={6}><div className='clients-message golden-color-bg  p-5 h4 rounded-top m-0 h-100'>WE’RE COMMITTED TO DELIVER <br/> HIGH QUALITY PROJECTS .</div></Col>
                <Col md={6}><div className='clients-message bg-white p-5 h3 rounded-top end-0 m-0 h-100' id='clients-message'>WE’RE TRUSTED BY <br/> MORE THAN 6260 CLIENTS.</div></Col>
            </Row>
        </Container>
    </section>
);
}

export default Clients;
