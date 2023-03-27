import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';









const Emailjs = () => {

  const form = useRef();




  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_um2xtn9', 'template_b2vjsa5', form.current, '7LBu4kSgGpdIHFdd7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  
  return (
      

      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>



    
  );
};

export default Emailjs;





