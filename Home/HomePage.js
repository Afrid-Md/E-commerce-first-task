import React from "react";
import NavBar from "./navBarAndGenerics/NavBar";
import TheGenerics from '../Home/navBarAndGenerics/TheGenerics';
import Footer from '../StorePage/Footer/Footer'
import HomeBody from "./HomeBody/HomeBody";
function HomePage(){
  return(
    <React.Fragment>
      <header>
      <NavBar/>
        <TheGenerics/> 
      </header>
      <body>
        <HomeBody/>
      </body>
      <footer style={{paddingTop:'50px'}}>
           <Footer/>
      </footer>
    </React.Fragment>
  )
}
export default HomePage;