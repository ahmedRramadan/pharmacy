import React from 'react';
import Clients from './Clients';
import Experience from './experiences';
import Main from './Main';
import Navbarf from './Nav';
import Products from './Products';
import Quote from './quote';
import Services from './Services';
import Team from './Team';


function Home() {

return (
    <>
        <Main />
        <Services />
        <Experience />
        <Quote />
        <Team/>
        <Clients />
        <Products />
    </>
);
}

export default Home;
