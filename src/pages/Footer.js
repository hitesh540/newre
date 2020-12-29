import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import {InstagramOutlined, FacebookOutlined, YoutubeOutlined} from "@ant-design/icons";




const FooterPagePro = () => {
  return (
    <MDBFooter color="mdb-color" className="font-small lighten-3 pt-4 mt-4 colou">
      <MDBContainer className="text-center text-md-left">
        <MDBRow className="my-4">
          <MDBCol md="4" lg="4">
            <h5 className="text-uppercase mb-4 font-weight-bold">
             RoomOnline
            </h5>
          
            <p>
            We are the <em>www.roomonline.in</em> we provides the details of rooms including flates, hostels and row houses on rent basis in different Areas of different Citys.
            </p>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="ml-auto">
            <h5 className="text-uppercase mb-4 font-weight-bold">Links</h5>
            <ul className="list-unstyled">
              <p>
              <a href="/"className="fute">HOME</a>
              </p>
              <p>
              <a href="/shop"className="fute">SHOP</a>
              </p>
              <p>
              <a href="/about"className="fute">ABOUT US</a>
              </p>
              <p>
              <a href="/terms"className="fute">T & C</a>
              </p>
            </ul>
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="5" lg="3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact Details</h5>
            <h6>
              <span className="bld">Hitesh Borse</span>
            </h6>
            <p>
              nskhitesh2016@gmail.com
            </p>
            <p>
               8208267094
            </p>
            <br/>
            <h6>
              <span className="bld">Paresh Gosavi</span>
            </h6>
            <p>
              pareshgosavi97@gmail.com
            </p>
            <p>
               9545250572
            </p>
           
           
            
          </MDBCol>
          <hr className="clearfix w-100 d-md-none" />
          <MDBCol md="2" lg="2" className="text-center">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Follow us
            </h5>


            <div className="mt-2 ">
          
            <h6><a  href="https://www.instagram.com/leafmeals/"  className="fute"><InstagramOutlined /> Instagram</a></h6>
            <br/>
            <h6><a  href="https://www.facebook.com/leaf.meals.5"  className="fute"><FacebookOutlined /> Facebook</a></h6>
            <br/>
            <h6><a  href="https://www.youtube.com/watch?v=7U7h09OdBYA"  className="fute"><YoutubeOutlined /> Youtube</a></h6>

            </div>

          </MDBCol>


          <hr className="clearfix w-100 d-md-none" />
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a href="https://www.roomonline.in/">RoomOnline.in</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
 
export default FooterPagePro;