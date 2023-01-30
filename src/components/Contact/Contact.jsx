import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Person, GitHub, LinkedIn } from "@mui/icons-material";
import "./contact.scss";
import { saveAs } from "file-saver";
import PDF from "./MendyMichaeliResume.pdf";


export default function Contact() {
  const [message, setMessage] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (e.target.name.value.length < 2 || e.target.message.value.length < 2) {
      console.log("erorr")
      alert("oops! You forgot to fill the contact fields.")
      return
    }
    setMessage(true)

    emailjs.sendForm('203259791', 'template_grtf993', form.current, 'M5iN9i8_V0APKIKbZ')
      .then((result) => {
          console.log(result.text);
          setMessage(true)
      }, (error) => {
          console.log(error.text);
          alert("oops! Something went wrong!.")
      }); 

    e.target.reset()

  };
  const DownloadCV = () => {
    saveAs(
      PDF,
      "Mendy Michaeli Resume"
    );
  };


  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="../../assets/contactMe.jpg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" name="name" />
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          <div className="thanxMessage">
            {message && <span>Thanks, I'll reply ASAP :)</span>}
          </div>
        </form>
        <div className="contactOptions">
          <div className="itemContainer">
            <Person className="icon" />
            <span><a href="tel:0584077744">058-4077744</a></span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span> <a href={"mailto:Mendym88@gmail.com"}>Mendym88@gmail.com</a></span>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <span><a href="https://www.linkedin.com/in/mendymichaeli">linkedin.com/in/mendymichaeli</a></span>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <span> <a href="https://github.com/mendymichaeli">github.com/mendymichaeli</a></span>
          </div>
        </div>
        <button className="resume" onClick={DownloadCV}>Download Resume</button>
      </div>
    </div>

  )
}




