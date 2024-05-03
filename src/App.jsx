import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Products from "./Components/Products";

// const baseUrl = "https://fakestoreapi.com/products";
function App() {
  return (
   <>
   <div className="container">
   <Products />
   </div>
   </>
      
 
  );
}

export default App;
