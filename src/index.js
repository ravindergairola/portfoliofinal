import React from "react";
import Header from "./components/header.js";
import  ReactDOM  from "react-dom";
import Home from "./components/home.js";
import About from "./components/about.js";
import Portfolio from "./components/portfolio.js";
import Testimonial from "./components/testimonial.js";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";

ReactDOM.render(
    <div>
    <Header/>
    <Home/>
    <About/>
    <Portfolio/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </div>,
    document.getElementById("root")
    );







// /*========= Menu icon toolbar ========*/

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// menuIcon.onclick = ()=>{
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
    
// };




// /*=========scroll sections active link========*/
// let sections = document.querySelectorAll('section')
// let navLinks = document.querySelectorAll('header nav a')


// window.onscroll = () => {

//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');
//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links =>{
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id +']').classList.add('active');
//             })
//         }
//     })




// /*=========scroll sections active link========*/

    
// let header = document.querySelector('.header');


//  header.classList.toggle("sticky", window.scrollY > 100);
// /*========= remove menu icon navbar when click navbarlink(scroll) ========*/

// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');

// };


// /*=========Swipper========*/
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 1,
//     spaceBetween: 50,
//     loop: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });


//   /*========= Dark night mode ========*/
//   let darkModeIcon = document.querySelector('#darkMode-icon');
//   darkModeIcon.onclick = () =>{
//     darkModeIcon.classList.toggle('bx-sun');
//     document.body.classList.toggle('dark-mode');
//   }

//   /*========= Scroll Reveal ========*/


//   ScrollReveal({
//      reset: true,
//      distance:'80px',
//      duration: 2000,
//      delay: 200,
//     });

//     ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
//     ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
//     ScrollReveal().reveal('.home-content h1, .about-img img ', { origin: 'left' });

//     ScrollReveal().reveal('.home-content h3,.home-content p, .about-content', { origin: 'right' });










