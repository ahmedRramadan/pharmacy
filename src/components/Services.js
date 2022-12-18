import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer  } from '@fortawesome/free-solid-svg-icons';
import { faPrescriptionBottleMedical  } from '@fortawesome/free-solid-svg-icons';
import { faPersonBreastfeeding  } from '@fortawesome/free-solid-svg-icons';
import { faPersonHalfDress  } from '@fortawesome/free-solid-svg-icons';
import { faUserDoctor  } from '@fortawesome/free-solid-svg-icons';
import { faClock  } from '@fortawesome/free-solid-svg-icons';
import { faAccessibleIcon  } from '@fortawesome/free-brands-svg-icons';


function Services() {

return (
    <section className='services-section py-5'>
        <Container>
            <Row className='mt-5 justify-content-start '>
                <Col xl={6} className='mb-4'>
                    <p className='display-5 text-white'>WE PROVIDE THE BEST CARE.</p>
                    <p className='text-white opacity-75 h5'>The easiest way to order and follow up with your monthly medications.All medicines are dispensed from pharmacies licensed by the Egyptian ministry of health.</p>
                </Col>
                <Col xl={3} sm={6}>
                    <div className='services-box p-5 d-flex justify-content-between mb-4'>
                        <div>
                            <p className='text-white opacity-50 h4 mb-5'>01</p>
                            <p className='service-name text-white h6'>HEALTH <br/> INDICATOR</p>
                        </div>
                        <FontAwesomeIcon icon={faPrescriptionBottleMedical} className='services-icon h2' />
                    </div>
                </Col>
                <Col xl={3} sm={6}>
                    <div className='services-box p-5 d-flex justify-content-between mb-4'>
                        <div>
                            <p className='text-white opacity-50 h4 mb-5'>02</p>
                            <p className='service-name text-white h6'>PERSONAL <br/> CARE</p>
                        </div>
                        <FontAwesomeIcon icon={faPersonBreastfeeding} className='services-icon h2' />
                    </div>
                </Col>
                <Col xl={3} sm={6}>
                    <div className='services-box p-5 d-flex justify-content-between mb-4'>
                        <div>
                            <p className='text-white opacity-50 h4 mb-5'>03</p>
                            <p className='service-name text-white h6'>BODY <br/> CARE</p>
                        </div>
                        <FontAwesomeIcon icon={faPersonHalfDress} className='services-icon h2' />
                    </div>
                </Col>
                <Col xl={3} sm={6}>
                    <div className='services-box p-5 d-flex justify-content-between mb-4'>
                        <div>
                            <p className='text-white opacity-50 h4 mb-5'>04</p>
                            <p className='service-name text-white h6'>MEDICAL <br/> DEVICES</p>
                        </div>
                        <FontAwesomeIcon icon={faAccessibleIcon} className='services-icon h2' />
                    </div>
                </Col>
                <Col xl={3} sm={6}>
                    <div className='services-box p-5 d-flex justify-content-between mb-4'>
                        <div>
                            <p className='text-white opacity-50 h4 mb-5'>05</p>
                            <p className='service-name text-white h6'>MEDICAL <br/> CONSULTATION</p>
                        </div>
                        <FontAwesomeIcon icon={faUserDoctor} className='services-icon h2' />
                    </div>
                </Col>
                <Col xl={3} sm={6}>
                    <div className='services-box p-5 d-flex justify-content-between mb-4'>
                        <div>
                            <p className='text-white opacity-50 h4 mb-5'>06</p>
                            <p className='service-name text-white h6'>ALL DAY <br/> SERVICES</p>
                        </div>
                        <FontAwesomeIcon icon={faClock} className='services-icon h2' />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
);
}

export default Services;
