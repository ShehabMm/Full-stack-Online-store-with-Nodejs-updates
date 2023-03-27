import "./RealContact.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
import ScrollReveal from 'scrollreveal';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


const RealContact = () => {

  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);




  const sendEmail = (eo) => {



    emailjs.sendForm('service_um2xtn9', 'template_b2vjsa5', form.current, '7LBu4kSgGpdIHFdd7')
      .then(
        (result) => {
          console.log(result.text);
          setsendForm(true);
          setTimeout(() => {
            setsendForm(false);

          }, 4000);


        },
        (error) => {
          console.log(error.text);
        }
      );
  };







  const form = useRef();



  const [sendForm, setsendForm] = useState(false);


  return (
    <div className="hero" >
      <form ref={form}
        onSubmit={handleSubmit(sendEmail, onSubmit)}


      >
        <div className="row">
          <div className="input-group">
            <TextField color='primary' autoComplete="off" id="" label="Name" variant="outlined" name="user_name"

              {...register("user_name", {
                required: { value: true, message: "Your name is required" },
                minLength: {
                  value: 3,
                  message: "Name field minimum Length is 3 characters",
                },
              })}
            />
          </div>

          <div className="input-group">
            <TextField autoComplete="off" id="" label="Email Adress" variant="outlined" name="user_email"


              {...register("user_email", {
                required: { value: true, message: "Your email is required" },
                minLength: {
                  value: 3,
                  message: "email field minimum Length is 3 characters",
                },
              })}

            />
          </div>
        </div>

        <div className="input-group">
          <TextField autoComplete="off" id="" label="Subject" variant="outlined" sx={{ width: "420px" }} name="subject" />
        </div>

        <div className="input-group">
          <TextField id="" label="Message" rows={4}
            multiline variant="filled" sx={{ border: "1px solid black" }} name="message" />
        </div>

        <Button
          onClick={(eo) => {



          }}

          size="large" variant="contained" color="info" type="submit"
          sx={{ display: "flex", width: "150px", marginLeft: "center", marginRight: "center" }}
          endIcon={<SendIcon />}          >

          Send


        </Button  >



        {errors.user_name?.type === "required" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_name?.message}</>
          </p>
        )}

        {errors.user_name?.type === "minLength" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_name?.message}</>
          </p>
        )}

        {errors.user_email?.type === "required" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_email?.message}</>
          </p>
        )}
        {errors.user_email?.type === "minLength" && (
          <p className="popupp" style={{ marginTop: "20px" }} role="alert">
            <>{errors.user_email?.message}</>
          </p>
        )}
        <br />

        {sendForm && (
          <p className="popupp">
            Your message has been sent successfully
            <FavoriteBorderIcon  sx={{position:"relative", top:"7px", left:"5px"}} />
          
          </p>
        )}







      </form>
    </div>
  );
};
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400

});
ScrollReveal().reveal('.hero', { delay: 500, origin: 'bottom' });

export default RealContact;
