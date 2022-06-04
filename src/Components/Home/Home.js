import React, { useEffect } from "react";

// import CustomerReview from '../CustormerReview/CustomerReview';

import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { addProduct, addWishList, setProducts } from "../../redux/slice";
import { useNavigate } from "react-router-dom";
import Banner from "../Banner/Banner";
import Filter from "../Filter/Filter";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // add to cart
  const addToCart = (product) => {
    const obj = { ...product };
    obj.quantity = 1;
    dispatch(addProduct(obj));
  };
  // add to wish list
  const addToWishlist = (product) => {
    const obj = { ...product };
    obj.quantity = 1;
    dispatch(addWishList(obj));
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => dispatch(setProducts(data)));
  }, []);

  const products = useSelector((state) => state.products.allProducts);
  return (
    <div>
      <Banner></Banner>
        <Filter></Filter>
      <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto my-5">
        {products.slice(0, 8).map((pro) => {
          return (
            <Card
              key={pro.id}
              product={pro}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            ></Card>
          );
        })}
        <button
          onClick={() => navigate("/products")}
          className="btn btn-success d-block mx-auto my-5"
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Home;
