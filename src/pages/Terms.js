import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import FooterPagePro from "./Footer";

 
 
const Terms = () => {
    return (
      <>
        <div className="jumbotron text-danger h1 font-weight-bold text-center">
          <Jumbotron text={[ "Please Read Carefully All The Terms And Conditions"]} />
        </div>
  
        <h1 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Terms and Conditions
        </h1>
       <p>Please read these Terms and Conditions carefully before using the <em>www.roomonline.in</em> website</p>
  <br/>
  <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service. You warrant that you are at least 18- years-old and you are legally capable of entering into binding contracts. If you are under 18-years-old, you warrant that you have obtained consent from your parent or guardian and they agree to be bound by these Terms on your behalf.</p>
  <br/>
  <p>By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>
  <br/>
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
         Booking
        </h4>
        <p>Your booking will not be confirm until you contact the owner and after that when he gives you approval to visit that site then your booking gets confirm. The owner has that rights to cancel the booking or confirm the Booking. Make sure to contact owner before visite that Home Or Room. </p>
        <br/>
        <p>Once Booking is confiremed then that customer need to visit that site within 7  days to take that service otherwise if the customer is not visited that place within 7days then that booking may get cancelled.</p>
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
         Cash On Visit (COV)
        </h4>
        <p>If you wish to purchase any product or service made available through the Service (COV), we will not aks  you to supply any information relevant to your purchase including online transactions, insted we only accept the cash on the time of visit when you visit your selected room or homes location.</p>
        <br/>
        <p>We are constantly updating our offerings of products and services on the Service. The products or services

available on our Service may be mispriced, described inaccurately, or unavailable, and we may experience delays in updating information on the Service and in our advertising on other web sites.</p>
        <br/>
        <p>We cannot and do not guarantee the accuracy or completeness of any information, including prices, product images, specifications, availability, and services. We reserve the right to change or update information and to correct errors, inaccuracies, or omissions at any time without prior notice.</p>
  
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Refunds
        </h4>
        <p>Except when required by law, we are not responsible to any refunde on any booking so the fees are non-refundable through ous.</p>
        
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Pandemic Terms
        </h4>
        <p>We are just providing a service to our customers but we cannot make sure that the place you  choose is safe for you. so this will be copletely depend on precautions that you take by your own self to protect your self from Pandemic conditions. </p>
        <br/>
        <p>Take More and More precautions by yourself to protect yourself from Pandemic. because we are not taken any responsibility to protect you from any kind of Pandemic</p>
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Content
        </h4>
        <p>Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material (“Content”). You are responsible for the Content that you post to the Service, including its legality, reliability, and appropriateness.</p>
       <br/>
       <p>By posting Content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and
        distribute such Content on and through the Service. You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.</p>
        <br/>
        <p>You agree that this license includes the right for us to make your Content available to other users of the Service, who may also use your Content subject to these Terms. Like reviews and Way more about this services made available by ous </p>
        <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
        Accounts
        </h4>
        <p>When you create an account with us, you must provide us information that is accurate, complete, and current at all times.
           Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
           You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
           You agree not to disclose your password to any third party. You agree to be fully responsible for activities that relate to your account or your password. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
           You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trade mark that is subject to any rights of another person or entity other than you without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.</p>
        <br />
        <br />
        <div  className="futer">
      <FooterPagePro/>
      </div>
      </>
    );
  };
  
  export default Terms;
  