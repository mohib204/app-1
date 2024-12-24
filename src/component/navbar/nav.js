// import React from "react";
// import { Link } from "react-router-dom";
// import "./nav.css";

// const Nav = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-brand">
//         <Link to="/">WEB LOGO</Link>
//       </div>
//       <input type="checkbox" id="toggle" className="toggle-input" />
//       <label htmlFor="toggle" className="toggle-label">
//         ☰
//       </label>
//       <ul className="navbar-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About The Owner</Link></li>
//         <li><Link to="/projects">The Plans for a Day</Link></li>
//         <li><Link to="/contact">The Website Owner</Link></li>
//         <li><Link to="/contact">Some Stove Iknow About</Link></li>
        
//       </ul>
//     </nav>
//   )
// };

// export default Nav;

// import React, { useState, useRef } from "react";

// import { Link } from "react-router-dom"; // Import Link for routing
// import "./nav.css"; // CSS for styling

// const NavbarWithRope = () => {
//   const [ropePosition, setRopePosition] = useState(0); // Initial rope position
//   const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility
//   const ropeRef = useRef(null); // Reference to rope element
//   const isDragging = useRef(false); // To track if rope is being dragged
//   const imageRef = useRef(null); // Reference to image element

//   // Mouse down event to start dragging the rope
//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };

//   // Mouse move event to handle dragging logic
//   const handleMouseMove = (e) => {
//     if (isDragging.current) {
//       const navbarRect = ropeRef.current.parentElement.getBoundingClientRect();
//       let newPosition = e.clientY - navbarRect.top - 10; // Calculate new position
//       newPosition = Math.max(0, Math.min(newPosition, 100)); // Restrict between 0 and 100px
//       setRopePosition(newPosition);
//       setDropdownVisible(newPosition >= 40); // Show dropdown if rope position is greater than 40
//     }

//     // Calculate the mouse position relative to the image
//     const imageRect = imageRef.current.getBoundingClientRect();
//     const mouseX = e.clientX; // Get mouse X position
//     const imageCenter = imageRect.left + imageRect.width / 2; // Get image center X position

//     // Determine if the mouse is to the left or right of the image
//     const angle = (mouseX - imageCenter) / imageRect.width * 30; // Adjust 30 for maximum rotation
//     imageRef.current.style.transform = `rotate(${angle}deg)`; // Apply the rotation based on mouse X position
//   };

//   // Mouse up event to stop dragging the rope
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   return (
//     <div
//       className="navbar-container"
//       onMouseMove={handleMouseMove}
//       onMouseUp={handleMouseUp}
//       onMouseLeave={handleMouseUp}
//     >
//       {/* Navbar with Links */}
//       <nav className="navbar">
//         <div className="navbar-brand">
//           <Link to="/">WEB LOGO</Link>
//         </div>
//         <input type="checkbox" id="toggle" className="toggle-input" />
//         <label htmlFor="toggle" className="toggle-label">
//           ☰
//         </label>
//         <ul className="navbar-links">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About The Owner</Link></li>
//           <li><Link to="/projects">The Plans for a Day</Link></li>
//           <li><Link to="/contact">The Website Owner</Link></li>
//           <li><Link to="/contact">Some Stove Iknow About</Link></li>
//         </ul>

//         </nav>
//          {/* Rope element */}
//       <div className="rope-wrapper" style={{ position: "absolute", top: "20px", right: "20px" }}>
//         <div
//           className="rope"
//           style={{ top: `${ropePosition}px` }}
//           onMouseDown={handleMouseDown}
//           ref={ropeRef}
//         >
//           {/* Image inside the rope */}
//           <img
//             src='./im-removebg-preview.png' // Replace with your image URL
//             alt=""
//             className="rope-image"
//             ref={imageRef}
//           />
//         </div>
//       </div>

//       {/* Dropdown links */}
     

//       <div
//         className="dropdown-container"
//         style={{
//           opacity: dropdownVisible ? 1 : 0,
//           pointerEvents: dropdownVisible ? "auto" : "none",
//           transform: `translateY(${dropdownVisible ? 0 : -10}px)`, // Smooth transition
//         }}
//       >
//      <div className="dropdown-tem" ></div>
// <li className="dropdown-item" ><Link to="/D">Dropdown</Link></li>
// <li className="dropdown-item" ><Link to="/D1">Dropdown</Link></li>
       
//       </div>
//     </div>
//   );
// };

// export default NavbarWithRope;
 
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import ims from './rich.jpg' // Import Link for routing
import "./nav.css"; // CSS for styling

const NavbarWithRope = () => {
  const [ropePosition, setRopePosition] = useState(0); // Initial rope position
  const [dropdownVisible, setDropdownVisible] = useState(false); // Dropdown visibility
  const ropeRef = useRef(null); // Reference to rope element
  const isDragging = useRef(false); // To track if rope is being dragged
  const imageRef = useRef(null); // Reference to image element

  // Mouse down event to start dragging the rope
  const handleMouseDown = () => {
    isDragging.current = true;
  };

  // Mouse move event to handle dragging logic
  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const navbarRect = ropeRef.current.parentElement.getBoundingClientRect();
      let newPosition = e.clientY - navbarRect.top - 10; // Calculate new position
      newPosition = Math.max(0, Math.min(newPosition, 100)); // Restrict between 0 and 100px
      setRopePosition(newPosition);
      setDropdownVisible(newPosition >= 40); // Show dropdown if rope position is greater than 40
    }

    // Calculate the mouse position relative to the image
    const imageRect = imageRef.current.getBoundingClientRect();
    const mouseX = e.clientX; // Get mouse X position
    const imageCenter = imageRect.left + imageRect.width / 2; // Get image center X position

    // Determine if the mouse is to the left or right of the image
    const angle = (mouseX - imageCenter) / imageRect.width * 30; // Adjust 30 for maximum rotation
    imageRef.current.style.transform = `rotate(${angle}deg)`; // Apply the rotation based on mouse X position
  };

  // Mouse up event to stop dragging the rope
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="navbar-container"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Navbar with Links */}
      <nav className="navbar">
        <div className="navbarbrand">
  <img src={ims} alt="" className="small-image" />
</div>

     <input type="checkbox" id="toggle" className="toggle-input" />
     <label htmlFor="toggle" className="toggle-label">
       ☰
      </label>
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About The Owner</Link></li>
          <li><Link to="/projects">The Plans for a Day</Link></li>
          <li><Link to="/contact">The Website Owner</Link></li>
          <li><Link to="/contact">Some Stove I Know About</Link></li>
        </ul>
      </nav>

      {/* Rope element */}
      <div className="rope-wrapper" style={{ position: "absolute", top: "20px", right: "20px" }}>
        <div
          className="rope"
          style={{ top: `${ropePosition}px` }}
          onMouseDown={handleMouseDown}
          ref={ropeRef}
        >
          {/* Image inside the rope */}
          <img
            src='./im-removebg-preview.png' // Replace with your image URL
            alt="Rope"
            className="rope-image"
            ref={imageRef}
          />
        </div>
      </div>

      {/* Dropdown links */}
      <div
        className="dropdown-container"
        style={{
          opacity: dropdownVisible ? 1 : 0,
          pointerEvents: dropdownVisible ? "auto" : "none",
          transform: `translateY(${dropdownVisible ? 0 : -10}px)`, // Smooth transition
        }}
      >
        <li className="dropdown-item"><Link to="/D">Dropdown</Link></li>
        <li className="dropdown-item"><Link to="/D1">Dropdown</Link></li>
      </div>
    </div>
  );
};

export default NavbarWithRope;
