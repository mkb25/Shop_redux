import { Routes, Route, Link } from "react-router-dom";
import "../styles/Navbar.scss";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import Products from "./Products";
// import App from "../App";
import Home from "./Home";
import Product_Landing from "./Product_Landing";
export default function navbar() {
  const quant = useSelector((state) => state.ProdReducer.quant);
  return (
    <>
      <nav className="navbar">
        <ul className="nav_list">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li className="right_nav">
            <Link to="/cart">
              {" "}
              <FaShoppingBag size={30} />
              Cart<span>{quant}</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/" element={<Products/>} /> */}
        <Route path="/product/:id" element={<Product_Landing />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}
