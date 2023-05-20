import React from 'react';
import Navbar from '../Home/navBarAndGenerics/NavBar';
import TheGeneric from '../StorePage/Navbar_and_card/TheGenerics';
import AboutBody from './AboutBody/AboutBody';
import Footer from '../StorePage/Footer/Footer'
function AboutPage(){
    return(
        <React.Fragment>
            <Navbar/>
            <TheGeneric/>
            <AboutBody/>
            <Footer/>
        </React.Fragment>
    )
}
export default AboutPage;