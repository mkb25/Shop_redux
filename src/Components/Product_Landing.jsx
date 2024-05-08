import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import '../styles/Landing.scss';
import { AddProd } from "../Redux/Actions/ProdActions";

export default function Product_Landing() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
        setError(error); // Set error state
      } finally {
        setIsLoading(false); // Always set loading to false after fetch
      }
    };

    fetchData();
  }, [id]);

  const addToCart = (prod) => {
    console.log(prod);
    dispatch(AddProd(prod));
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : error ? (
        <div className="error">Error fetching product: {error.message}</div>
      ) : (
        <div className="grid_container">
          <div className="grid_item item1">
            <img src={product?.image} alt={product?.title} className="prod_img" />
          </div>
          <div className="grid_item item2">
            <h1>{product.title}</h1>
            <h3>{product.category}</h3>
            <h4>₹ {product.price}</h4>
            <p>{product.description}</p>
            <br />
            <button className="add_to_cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
