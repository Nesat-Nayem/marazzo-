import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
const Header = () => {
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
      <Navbar style={{backgroundColor:'#157ED2', padding:'20px 0'}} expand="lg">
  <Container >
    <Navbar.Brand href="#">
        <img src="https://i.postimg.cc/x1b06w39/logo.png" alt="logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
    
      <Form className=" mx-auto search-form grid-search-form">
        <div className="input-group border p-1">
            <input type="search" placeholder="search here ..." aria-describedby="button-addon3" className="form-control border-0 " />
            <div className="input-group-append border-0">
                <button id="button-addon3" type="button" className="btn mt-1 btn-link text-black"><i className="fa fa-search"></i></button>
            </div>
        </div>
       
      </Form>

      <Nav.Item>
    <a href="">
    <div className="d-flex">
            <div className="mt-2">
                <img className="position-relative" src="https://i.postimg.cc/65pVzMdQ/shopingcart.png" />
                <span className="position-absolute quantity translate-middle ">
                    10
                    <span className="visually-hidden">
                        Card
                    </span>
                </span>
            </div>
            <div className="ms-3">
                <h5 style={{color:'rgba(255,255,255,0.8)'}}>Shoping Cart</h5>
                <h3 style={{color:"white"}}>$500</h3>
            </div>
        </div>
    </a>
        
      </Nav.Item>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </div>
    </div>
  );
};

export default Header;
