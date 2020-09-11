import React from 'react';




export default function MessageMe() {
  return (
    <section className="contact" id="contact">
    <h2 data-aos="fade-up" data-aos-duration="700">Message Me</h2>
    <div className="form" data-aos="fade-up" data-aos-duration="700">
    <form id="contact-form" method="POST" action="https://formsubmit.co/f176d227546164d616cc87678928234e" className="login-form">
    <input type="hidden" name="_next" value="https://www.gmjacobsdev.com/thanks" />
    <input type="hidden" name="_subject" value="Enquiry from gmjacobsdev.com" />
  	<div className="form-group" >
      	<label>Name</label>
      	<input
          type="text" 
          className="form-control" 
          id="name" 
          name="Name" 
          placeholder="Name" 
          required="required"
          aria-label="Name"
        />
  	</div>
  	<div className="form-group" >
      	<label>Email address</label>
      	<input 
          type="email" 
          className="form-control" 
          id="email" 
          name="Email" 
          placeholder="Email" 
          required="required" 
          aria-label="Email"
        />
  	</div>
  	<div className="form-group" >
      	<label>Message</label>
      	<textarea 
          type="text" 
          className="form-control"  
          id="message" 
          name="Message" 
          placeholder="Message" 
          required="required" 
          aria-label="Enter your Message"
          rows="5"
        />
  	</div>
  	<button type="submit" className="btn btn-primary" >Submit</button>
    
    </form>
    </div>
  	</section>
  );
}