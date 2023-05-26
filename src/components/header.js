// import React from "react";
// function Header() {
//     let darkModeIcon = document.querySelector('#darkMode-icon');
//     darkModeIcon.onclick = () =>{
//       darkModeIcon.classList.toggle('bx-sun');
//       document.body.classList.toggle('dark-mode');
//     };
  
//     return (
//         <>
//             <header className="header" />
//             <a href="/" className="logo">Portfolio</a>
//             <nav className="navbar">
//                 <a href="#home" className="active">Home</a>
//                 <a href="#about">About</a>
//                 <a href="#services">Services</a>
//                 <a href="#portfolio">Portfolio</a>
//                 <a href="#contact">Contact</a>
//             </nav>


//             <div className="bx bx-moon" id="darkMode-icon"></div>
//             <div><i className='bx bx-menu' id="menu-icon"></i></div>
//         </>
//     );
// };
// export default Header;

import React from "react";

function Header() {
  // useEffect(() => {
  //   const darkModeIcon = document.querySelector("#darkMode-icon");

  //   const handleDarkModeToggle = () => {
  //     darkModeIcon.classList.toggle("bx-sun");
  //     document.body.classList.toggle("dark-mode");
  //   };

  //   darkModeIcon.addEventListener("click", handleDarkModeToggle);

  //   return () => {
  //     darkModeIcon.removeEventListener("click", handleDarkModeToggle);
  //   };
  // }, []);

//   return (
//     <header className="header">
//       <a href="/" className="logo">Portfolio</a>
//       <nav className="navbar">
//         <a href="#home" className="active">Home</a>
//         <a href="#about">About</a>
//         <a href="#services">Services</a>
//         <a href="#portfolio">Portfolio</a>
//         <a href="#contact">Contact</a>
//       </nav>
//       <div className="bx bx-moon" id="darkMode-icon"></div>
//       <div><i className="bx bx-menu" id="menu-icon"></i>
//       </div>
//     </header>
//   );
// }

// export default Header;


return (

<header>
      <div>
        <nav className="topheader navbar navbar-expand-md p-4 navbar-dark bg-dark fixed-top ">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">Portfolio</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <a className="nav-link" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
              {/* <div className=" bx bx-moon" id="darkMode-icon"></div>
        <div><i className="bx bx-menu" id="menu-icon"></i></div> */}

    </header>
    );
}
    export default Header;
