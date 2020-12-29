import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import FooterPagePro from "./Footer";
import {Img} from "react-image";


const About = () => {
    return (
      <>
      <div >
        <div className="jumbotron text-danger h1 font-weight-bold text-center">
          <Jumbotron text={[ "ABOUT US"]} />
        </div>
       
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          Simple Introduction
        </h4>
        
       
        <Img src="https://images.unsplash.com/photo-1576675784201-0e142b423952?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80" style={{ maxHeight: "60%", maxWidth: "60%" }}/>
        <br/>
        <br/>
        <h6>
          We are the <em>www.roomonline.in</em> we provides the details of rooms including flates, hostels and row houses on rent basis in different areas.
          We give opportunities to our customers to get a specific room for their needs as per their requirements in their selected Areas.
        </h6>
        <br/>
       
       
   
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
          Join Us
        </h4>
        <Img src="https://cf.bstatic.com/images/hotel/max1024x768/239/239163829.jpg" style={{ maxHeight: "60%", maxWidth: "60%" }}/>
        <br/>
        <br/>
        <h3>Join With Us</h3>
        <h6>To start a Business with us, Please Contact us with the help of following details.</h6>
        <br/>
        <h4>Contact Us</h4>
        <br/>
        <h6>Hitesh Borse</h6>
        <br/>
        <p>Email - nskhitesh2016@gmail.com</p>
        <br/>
        <p>Contact - 8208267094</p>
        <br/>
        <h6>Paresh Gosavi</h6>
        <br/>
        <p>Email - pareshgosavi97@gmail.com</p>
        <br/>
        <p>Contact - 9545250572</p>
        <br />
        <br />
        </div>
        <div  className="futer">
      <FooterPagePro/>
      </div>
      </>
    );
  };
  
  export default About;
  