import React from "react";
// import Cvfile from "./components/cvfile.pdf";
// import Contact from "./components/contact.js";


function Home (){
    const CvFileUrl = process.env.PUBLIC_URL + "/cvfile.pdf";

return(
    <>
<section className="home" id="home">
    <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Ravinder Prasad Gairola</h1>
        <p>I am a visionary web developer, weaving digital landscapes that transport users to extraordinary realms. With a harmonious fusion of HTML, CSS, and JavaScript, I orchestrate intricate symphonies of code, breathing life into virtual worlds. Fuelled by an insatiable curiosity.</p>
        <div className="social-media">
            <a href="https://www.facebook.com/sheesha.sheesha.144" target="_blank"><i className="bx bxl-facebook"></i></a>
            <a href="https://twitter.com" target="_blank"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.instagram.com" target="_blank"><i className="bx bxl-instagram-alt"></i></a>
            <a href="https://www.linkedin.com/in/ravi-gairola-b54519198" target="_blank"><i className='bx bxl-linkedin'></i></a>
        </div>
        <a href={CvFileUrl} download="cv.pdf" className="btn">Download CV</a>
    </div>

    <div className="profession-container">
        <div className="profession-box">

        </div>
        <div className="overlay"></div> 
    </div>

    <div className="home-img">
        <img src="\ravinew.webp" alt="img" />
    </div>
</section>
    </>

);
};
export default Home;


            {/* <div className="profession" style= {{"--i" :0}}>
                <i className='bx bx-code-alt'></i>
                <h3>Web Developer</h3>
            </div> */}
{/*             
            <div className="profession" style= {{"--i" :1}}>
                <i className='bx bx-camera'></i>
                <h3>Photographer</h3>
            </div> */}
                {/* <div className="profession" style= {{"--i" :2}}>
                    <i className='bx bx-palette'></i>
                    <h3>Web Desiner</h3>
                </div> */}
            {/* <div className="profession" style= {{"--i" :3}}>
                <i className='bx bx-video-recording'></i>
                <h3>Videographper</h3>
            </div> */}

        {/* <div className="circle"></div> */}