import React, { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    // Validate the form fields
    if (!form.current.user_name.value.trim()) {
      errors.name = 'Name is required';
      isValid = false;
    }
    if (!form.current.user_email.value.trim()) {
      errors.email = 'Email is required';
      isValid = false;
    }
    if (!form.current.user_number.value.trim()) {
      errors.number = 'Mobile Number is required';
      isValid = false;
    }
    if (!form.current.subject.value.trim()) {
      errors.subject = 'Subject is required';
      isValid = false;
    }
    if (!form.current.user_message.value.trim()) {
      errors.message = 'Message is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const clearError = (fieldName) => {
    setFormErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: ''
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; // Stop here if form validation fails
    }

    emailjs.sendForm(
      'service_pguqe7b',
      'template_v47ixlw',
      form.current,
      'fkgx8jlcVIcDC9QK1'
    )
      .then((result) => {
        console.log(result.text);
        setSubmissionStatus('success');
        form.current.reset();
        setTimeout(() => {
          setSubmissionStatus('');
          window.location.reload(); // Refresh the page
        }, 3000); // Reset the submission status after 3 seconds and then refresh the page
      })
      .catch((error) => {
        console.log(error.text);
        setSubmissionStatus('failure');
        setTimeout(() => {
          setSubmissionStatus('');
          window.location.reload(); // Refresh the page
        }, 3000); // Reset the submission status after 3 seconds and then refresh the page
      });
  };

  let message = null;
  if (submissionStatus === 'success') {
    message = (
      <div className="alert alert-success alert-dismissible fade show my-4" role="alert">
        <span style={{ fontSize: '20px', color: 'blue' }}>Email sent successfully!</span>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );
  } else if (submissionStatus === 'failure') {
    message = (
      <div className="alert alert-success alert-dismissible fade show my-4" role="alert">
        <span style={{ fontSize: '20px', color: 'red' }}>
          Failed to send email.</span>
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span> </h2>

            {message}

            <form ref={form} onSubmit={sendEmail}>
              <div className="input-group">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Full Name"
                  className={`form-control ${formErrors.name ? 'is-invalid' : ''}`}
                  onFocus={() => clearError('name')}
                />
                {formErrors.name && (
                  <div className="invalid-feedback">{formErrors.name}</div>
                )}
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email Address"
                  className={`form-control ${formErrors.email ? 'is-invalid' : ''}`}
                  onFocus={() => clearError('email')}
                />
                {formErrors.email && (
                  <div className="invalid-feedback">{formErrors.email}</div>
                )}
              </div>

              <div className="input-group">
                <input
                  type="number"
                  name="user_number"
                  placeholder="Mobile Number"
                  className={`form-control ${formErrors.number ? 'is-invalid' : ''}`}
                  onFocus={() => clearError('number')}
                />
                {formErrors.number && (
                  <div className="invalid-feedback">{formErrors.number}</div>
                )}
                <input
                  type="text"
                  name="subject"
                  placeholder="Email subject"
                  className={`form-control ${formErrors.subject ? 'is-invalid' : ''}`}
                  onFocus={() => clearError('subject')}
                />
                {formErrors.subject && (
                  <div className="invalid-feedback">{formErrors.subject}</div>
                )}
              </div>

              <textarea
                name="user_message"
                cols="30"
                rows="10"
                placeholder="Message"
                className={`form-control ${formErrors.message ? 'is-invalid' : ''}`}
                onFocus={() => clearError('message')}
              ></textarea>
              {formErrors.message && (
                <div className="invalid-feedback">{formErrors.message}</div>
              )}

              <input type="submit" value="Send Message" className="btn btn-primary mt-3" />
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;




// import React, {useRef}from "react";
// import emailjs from '@emailjs/browser';
//   const Contact = () => {

// const form = useRef()

//     const sendEmail = (e) => {
//       e.preventDefault();

//       emailjs.sendForm
//         ('service_pguqe7b',
//           'template_v47ixlw',
//           form.current,
//           'fkgx8jlcVIcDC9QK1')
//         .then((result) => {
//           console.log(result.text);
//           if (result.isSuccessful) {
//             return (
//               <div>
//                 {<div class="alert alert-warning alert-dismissible fade show" role="alert">
//                   <strong>Holy guacamole!</strong> You should check in on some of those fields below.
//                   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//                 </div>}
//               </div>
//             );
//             e.target.reset();
//           } else {
//             return (
//               <div>
//                 {/* HTML code */}
//               </div>
//             );
//           }
//         })
//         .catch((error) => {
//           console.log(error.text);
//         });

//     };

//       return (
//           <div>
//               <section className="contact" id="contact">
//               <h2 className="heading">Contact <span>Me</span> </h2>

//               <form ref= {form} onSubmit={sendEmail}>
//                   <div className="input-box">
//                       <input type="text" name="user_name" placeholder="Full Name" />
//                       <input type="email" name="user_email"
//                       // onChange={(e)=>setEmail(e.target.value)}
//                       placeholder="Email Address"/>
//                   </div>
//                   <div className="input-box">
//                       <input type="number" name="user_number" placeholder="Mobile Number"/>
//                       <input type="text" name="subject" placeholder="Email subject"/>
//                   </div>
//                   <textarea name="user_message" id="" cols="30" rows="10" placeholder="Meassage"></textarea>
//                   <input type="submit"
//                   //  onClick={sendEmail}
//                    value="Send Meassage" className="btn"/>
//               </form>
//           </section>
//           </div>
//   )
//   }
//   export default Contact;












          // .then((result) => {
        //   console.log(result.text);
        // }, (error) => {
        //   console.log(error.text);
        // });
        // e.target.reset()


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

