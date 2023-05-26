// import React from "react";

// function About (){
// return(
// <>
// <section className="about" id="about">
// <div className="about-img">
//     <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt=""/>
// </div>



// <div className="about-content">
//     <h2 className="heading">About<span>Me</span></h2>
//     <h3>Im a web Web Developer. </h3>
//     <p>Hello! I'm Ravinder Prasad Gairola, a passionate and dedicated web developer. As a fresh talent in the field, I bring a fresh perspective and unwavering enthusiasm to my work. Proficient in HTML, CSS, JavaScript, and React, I strive to create immersive digital experiences that blend functionality and aesthetics. With a strong commitment to continuous learning and growth, I am eager to contribute my skills and make a positive impact in the world of web development."</p>
//     <a href="/" className="btn">Read More</a>
// </div>
// </section>
// <section className="services" id="services">
// <h2 className="heading">My <span>Services</span> </h2>



// <div className="services-container">
//     <div className="services-box">
//     <h1>SKILLS</h1>
//         <i className='bx bx-code-alt'></i>
//         <h1>HTML</h1>
//         <h1>css</h1>
//         <h1>bootstrap</h1>

//         <h1>javascript</h1>
//         <h1>react</h1>
// {/* 



//         <p>Create visually appealing and responsive websites using HTML, CSS, and JavaScript. Implement modern design trends and ensure cross-browser compatibility.</p> */}
//         <a href="/" className="btn">Read More</a>
//     </div>
//     <div className="services-box">
//         <i className='bx bx-code-alt'></i>
//         <p>Utilize popular frontend frameworks like Bootstrap and React to build dynamic and interactive user interfaces, enhancing the functionality and user experience of websites..</p>
//         <a href="/" className="btn">Read More</a>
//     </div>
//     <div className="services-box">
//         <i className='bx bx-code-alt'></i>
//         <p>Incorporating logical insights to optimize navigation, streamline user flows, and create intuitive interfaces. By combining user-centric design with logical thinking, the resulting websites maximize user engagement and satisfaction.</p>
//         <a href="/" className="btn">Read More</a>
//     </div>
// </div>
// </section>
// </>
// );
// };

// export default About;


import React, { useState } from "react";

function About() {
  const [showFullText, setShowFullText] = useState({
    about: false,
    service1: false,
    service2: false,
  });



  const toggleText = (section) => {
    setShowFullText((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  // const resetState = () => {
  //   setShowFullText({
  //     about: false,
  //     service1: false,
  //     service2: false,
  //   });
  // };

  const aboutText = "Hello! I'm Ravinder Prasad Gairola, a passionate and dedicated web developer. As a fresh talent in the field, I bring a fresh perspective and unwavering enthusiasm to my work. Proficient in HTML, CSS, JavaScript, and React, I strive to create immersive digital experiences that blend functionality and aesthetics. With a strong commitment to continuous learning and growth, I am eager to contribute my skills and make a positive impact in the world of web development.";


  const service1text= "Utilize popular frontend frameworks like Bootstrap and React to build dynamic and interactive user interfaces, enhancing the functionality and user experience of websites.";


  const service2text ="Incorporating logical insights to optimize navigation, streamline user flows, and create intuitive interfaces. By combining user-centric design with logical thinking, the resulting websites maximize user engagement and satisfaction.";
  return (
    <>
      <section className="about" id="about">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="" />
        </div>

        <div className="about-content">
          <h2 className="heading">About<span>Me</span></h2>
          <h3>Im a web Web Developer. </h3>
          <p>{showFullText.about ? aboutText : `${aboutText.slice(0, 150)}...`}</p>
          <a href="/" className="btn" rel="noreferrer" onClick={() => toggleText("about")}>
            {showFullText.about ? "Read Less" : "Read More"}
          </a>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">My <span>Services</span> </h2>

        <div className="services-container">
          <div className="services-box">
            <h1>SKILLS</h1>
            <i className='bx bx-code-alt'></i>
            <h1>HTML</h1>
            <h1>css</h1>
            <h1>bootstrap</h1>
            <h1>javascript</h1>
            <h1>react</h1>

            {/* <a href="/" className="btn">Read More</a> */}
          </div>
          <div className="services-box">
            <i className='bx bx-code-alt'></i>

            <p>{showFullText.service1 ? service1text : `${service1text.slice(0, 50)}...`}</p>
          <a href="/" className="btn" rel="noreferrer" onClick={() => toggleText("service1")}>
            {showFullText.service1 ? "Read Less" : "Read More"}
          </a>
          </div>
          <div className="services-box">
            <i className='bx bx-code-alt'></i>



            <p>{showFullText.service2 ? service2text : `${service2text.slice(0, 60)}...`}</p>
            <a href="/" className="btn" rel="noreferrer" onClick={() => toggleText("service2")}>
            {showFullText.service2 ? "Read Less" : "Read More"}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
