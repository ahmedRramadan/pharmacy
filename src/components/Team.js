import React from 'react';
import { Card, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide, } from "swiper/react";
import { Pagination,Autoplay } from "swiper";
import "../../node_modules/swiper/swiper.min.css";
import "../../node_modules/swiper/modules/pagination/pagination.min.css";
import imageTeam1 from '../Images/team-1.jpg';
import imageTeam2 from '../Images/team-2.jpg';
import imageTeam3 from '../Images/team-3.jpg';
import imageTeam4 from '../Images/team-4.jpg';
import imageTeam5 from '../Images/team-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faInstagramSquare, faLinkedin, faSquareFacebook, faTwitter  } from '@fortawesome//free-brands-svg-icons'
function Team() {

return (
    <section className='team-section py-5' >
        <Container>
            <h2 className='display-5 text-center'>MEET THE EXPERT TEAM</h2>
        </Container>
        <Swiper 
        slidesPerView={1}
        spaceBetween={50}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={imageTeam1} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                HR
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={imageTeam2} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                doctor
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={imageTeam3} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                doctor
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={imageTeam4} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                Manager
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={imageTeam5} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                doctor
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={imageTeam3} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                doctor
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        <SwiperSlide>
          <Card >
            <Card.Img variant="top" src={imageTeam2} />
            <div className='d-flex justify-content-center gap-3 '>
              <FontAwesomeIcon icon={faSquareFacebook} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faTwitter} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faInstagramSquare} className='h5 social-media-icons' />
              <FontAwesomeIcon icon={faLinkedin} className='h5 social-media-icons' />
            </div>
            <Card.Body>
              <Card.Title>Kevin Martin</Card.Title>
              <Card.Text>
                doctor
              </Card.Text>
            </Card.Body>
          </Card >
        </SwiperSlide>
        
      </Swiper>
    </section>
);
}

export default Team;
