  // import e from "express";
// import e from "express";
import React, {useRef}from "react";
import emailjs from '@emailjs/browser';
  const Contact = () => {

const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm
        ('service_pguqe7b',
          'template_v47ixlw',
          form.current,
          'fkgx8jlcVIcDC9QK1')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        e.target.reset()
    };

      return (
          <div>
              <section className="contact" id="contact">
              <h2 className="heading">Contact <span>Me</span> </h2>

              <form ref= {form} onSubmit={sendEmail}>
                  <div className="input-box">
                      <input type="text" name="user_name" placeholder="Full Name" />
                      <input type="email" name="user_email" 
                      // onChange={(e)=>setEmail(e.target.value)} 
                      placeholder="Email Address"/>
                  </div>
                  <div className="input-box">
                      <input type="number" name="user_number" placeholder="Mobile Number"/>
                      <input type="text" name="subject" placeholder="Email subject"/>
                  </div>
                  <textarea name="user_message" id="" cols="30" rows="10" placeholder="Meassage"></textarea>
                  <input type="submit"
                  //  onClick={sendEmail} 
                   value="Send Meassage" className="btn"/>
              </form>
          </section>
          </div>
  )
  }
  export default Contact;


// import React, { useState } from 'react';
// import axios from 'axios';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post('http://localhost:3000/api/send-email', {
//         name,
//         email,
//         message
//       });

//       // Clear form inputs on successful submission
//       setName('');
//       setEmail('');
//       setMessage('');

//       alert('Email sent successfully!');
//     } catch (error) {
//       console.error(error);
//       alert('Failed to send email.');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Name:</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label htmlFor="message">Message:</label>
//         <textarea
//           id="message"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           required
//         ></textarea>
//       </div>
//       <button type="submit">Send</button>
//     </form>
//   );
// };

// export default ContactForm;

// import React, { useState } from "react";

// function Contact() {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform any additional validation here if needed

//     // Send the form data to your email or desired endpoint
//     // You can use fetch or axios to make an HTTP request

//     // Clear the form fields
//     setFullName("");
//     setEmail("");
//     setPhoneNumber("");
//     setSubject("");
//     setMessage("");

//     setStatus("Message sent successfully!");
//   };

//   return (
//     <section className="contact" id="contact">
//       <h2 className="heading">Contact <span>Me</span></h2>

//       <div>
//       {/* <div className=" ">
//       <br/>
//       <br/>
//       <br/>
//         <h1><i class='bx bxl-gmail'></i> your_email@example.com</h1>
//         <br/>
//         <br/>
//         <br/>
//         <h1> <i class='bx bxs-phone'></i>+1234567890</h1>
//       </div> */}
//         {/* Add other contact information as needed */}
//       </div>

//       <div className="contact-form">
//         <form onSubmit={handleSubmit}>
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Email Address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-box">
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               value={phoneNumber}
//               onChange={(e) => setPhoneNumber(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Subject"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//             />
//           </div>
//           <textarea
//             cols="30"
//             rows="10"
//             placeholder="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//           <input type="submit" value="Send Message" className="btn" />
//         </form>

//         {status && <p>{status}</p>}
//       </div>
//     </section>
//   );
// }

// export default Contact;

