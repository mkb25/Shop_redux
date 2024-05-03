// import React from 'react'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { DecQuant, IncQuant, RemoveProd } from "../Redux/Actions/ProdActions";
import "../styles/Cart.scss";
export default function Cart() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProdReducer.cart);
  const quant = useSelector((state) => state.ProdReducer.quant);
  const sum = useSelector((state) => state.ProdReducer.TotalSum);
  console.log(products);
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">
          {products?.map((product) => (
            <div className="grid_container1" key={product.id}>
              <div className="gridImg">
                {product?.image && <img src={product.image} alt="product" />}
              </div>
              <div className="gridDesc">
                <p>{product.title}</p>
                {product?.Sum && <p> ₹ {product.Sum.toFixed(3)}</p>}
                <button
                  onClick={() => {
                    dispatch(IncQuant(product));
                  }}
                >
                  +
                </button>{" "}
                {product.quant} <button  onClick={() => {
                    dispatch(DecQuant(product));
                  }}>-</button>
                <br />
                <button
                  onClick={() => {
                    dispatch(RemoveProd(product));
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="grid-item1">
          <div className="statement">
            <h3>Cart Summary</h3>
            <p>Total Items: {quant}</p>
            <p>Total Amount: ₹ {sum.toFixed(3)}</p>
          </div>
        </div>
      </div>
    </>
  );
}
