import ContactForm from './Form/Form'
import NavBar from '../Home/navBarAndGenerics/NavBar'
import React from 'react';
function ContactUsPage() {
  return (
    <React.Fragment>
        <NavBar/>
        <div style={{display:'flex', justifyContent:'center'}}>
        <ContactForm/>
        </div>
    </React.Fragment>

)}

export default ContactUsPage;
