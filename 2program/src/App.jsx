
import React from "react"; 
import Header from "./components/Header"; 
import Footer from "./components/footer"; 
import "./style.css";  
 
function App() { 
  return ( 
    <div className="container"> 
      {/* Passing props to Header and Footer */} 
      <Header title="My React App" /> 
      <Footer tagline="Learning React Props &copy; 2025 My Website, All rights reserved."/> 
    </div> 
  ); 
} 
export default App; 