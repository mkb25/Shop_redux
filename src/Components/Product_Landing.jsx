import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import '../styles/Landing.scss';
import { AddProd } from "../Redux/Actions/ProdActions";
export default function Product_Landing() {
  const { id } = useParams();
  const dispatch = useDispatch();
  let [product, setProduct] = useState({});
  useEffect(()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((response)=>{
      console.log(response);
      setProduct(response.data);
    })
    .catch((error)=>{
      console.error(error);
      
    });
  
  },[])
  const addToCart = (prod) => {
  console.log(prod);
   dispatch(AddProd(prod));
   }

  return(
<>
<div className="grid_container">
    <div className="grid_item item1">
        <img src={product.image} alt={product.title}  className="prod_img"/>
    </div>
    <div className="grid_item item2">
        <h1>{product.title}</h1>
        <h3>{product.category}</h3>
        <h4>₹ {product.price}</h4>
        <p>{product.description}</p>
       
        <br />
        <button className="add_to_cart" onClick={()=>{addToCart(product)}}>Add to Cart</button>
    </div>
</div>
</>
  );
   
}
