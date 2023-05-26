import React from "react";



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
            <a href="https://www.facebook.com/sheesha.sheesha.144" target="_blank" rel="noreferrer"><i className="bx bxl-facebook"></i></a>
            <a href="https://twitter.com/RaviGairola7" target="_blank" rel="noreferrer"><i className="bx bxl-twitter"></i></a>
            <a href="https://www.instagram.com/garhwali_launda/" target="_blank" rel="noreferrer"><i className="bx bxl-instagram-alt"></i></a>
            <a href="https://www.linkedin.com/in/ravi-gairola-b54519198" target="_blank" rel="noreferrer"><i className='bx bxl-linkedin'></i></a>
        </div>
        <a href={CvFileUrl} download="cv.pdf" className="btn" rel="noreferrer">Download CV</a>
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
