import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSyringe } from '@fortawesome/free-solid-svg-icons';

import React from 'react';
import { Container } from 'react-bootstrap';



function Quote() {

return (
    <section className='quote-section position-relative'>
        <div className='quote-section-bg'></div>
        <Container>
            <div className='quote-box position-absolute'>
                <FontAwesomeIcon icon={faSyringe} className='golden-color display-1 p-5'  />
                <h2 className='text-white font-weight-bold text-uppercase'>To be the top healthcare service provider and partner, expanding our international services to bring wellness in each community we serve.</h2>
            </div>
        </Container>
    </section>
);
}

export default Quote;
