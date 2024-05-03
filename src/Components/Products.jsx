import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Product.scss";
export default function Products(props) {
  const baseUrl = "https://fakestoreapi.com/products";
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((response) => {
        const JsonData = response.data;

        if (props.sort === "Dsc") {
          setProducts(JsonData.sort((a, b) => a.price - b.price));
        } else if (props.sort === "Asc") {
          setProducts(JsonData.sort((a, b) => b.price - a.price));
        } else {
          setProducts(JsonData);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [props.sort]);
  
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  console.log(products);

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="column" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="prod_price">
            <p>{product.title}</p>
            <p>₹  {product.price}</p>
            </div>
           
            <button className="view_btn"
              onClick={() => {
                handleClick(product.id);
              }}
            >
              View Product
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
