import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import { Container, Nav, Navbar, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import "./Header.css";
const Header = () => {
  const products = useSelector((state) => state.products);
  const totalPrice = useSelector((state) => state.products.totalPrice);
  const navigate = useNavigate();

  const { allProducts, wishList } = products;

  const cart = useSelector((state) => state.products.cart);

  // states for drwer
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <div>
      {/* topheader  */}
      <div className="short-nav">
        <div className="top-item">
          <ul className="list-item ">
            <li className="item">My Account</li>
            <li>Wishlist</li>
            <li>My Card</li>
            <li>Chackout</li>
            <li>Login</li>
          </ul>
        </div>
      </div>
      <div>
        <hr className="witerow" />
        <Navbar style={{ backgroundColor: "#157ED2" }} expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src="https://i.postimg.cc/x1b06w39/logo.png" alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Form className=" mx-auto search-form grid-search-form">
                <div className="input-group border p-1">
                  <input
                    type="search"
                    placeholder="search here ..."
                    aria-describedby="button-addon3"
                    className="form-control border-0 "
                  />
                  <div className="input-group-append border-0">
                    <button
                      id="button-addon3"
                      type="button"
                      className="btn mt-1 btn-link text-black"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </Form>

              <Nav.Item>
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  onClick={toggleDrawer("right", true)}
                >
                  <div className="d-flex">
                    <div className="mt-2 position-relative">
                      <img
                        className=""
                        src="https://i.postimg.cc/65pVzMdQ/shopingcart.png"
                      />
                      <span
                        style={{ margin: "10px -20px" }}
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger "
                      >
                        {cart.length}
                        <span className="visually-hidden">Card</span>
                      </span>
                    </div>
                    <div className="ms-3">
                      <h5 style={{ color: "rgba(255,255,255,0.8)" }}>
                        Shoping Cart
                      </h5>
                      <h3 style={{ color: "white" }}>${totalPrice}</h3>
                    </div>
                  </div>
                </a>
                <Drawer
                  anchor={"right"}
                  open={state["right"]}
                  sx={{ width: "300px" }}
                  onClose={toggleDrawer("right", false)}
                >
                  <Cart />
                </Drawer>
              </Nav.Item>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
