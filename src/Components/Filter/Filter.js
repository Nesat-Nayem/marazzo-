import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Filter.css";
const Filter = () => {
  return (
    <div>
      <Navbar className="category container my-2 z">
        <Container className="d-flex justify-content-between align-items-center flex-wrap">
          <Nav.Item
            as={NavLink}
            to="/products/shorts"
            className="text-white text-decoration-none mx-2"
          >
            Shorts
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            to="/products/t-shirt"
            className="text-white text-decoration-none mx-2"
          >
            T-shirt
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            to="/products/jacket"
            className="text-white text-decoration-none mx-2"
          >
            Jacket
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            to="/products/coat"
            className="text-white text-decoration-none mx-2"
          >
            Coat
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            to="/products/socks"
            className="text-white text-decoration-none mx-2"
          >
            Socks
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            to="/products/tracksuit"
            className="text-white text-decoration-none mx-2"
          >
            Tracksuit
          </Nav.Item>
          <Nav.Item
            as={NavLink}
            to="/products/jeans"
            className="text-white text-decoration-none mx-2"
          >
            Jeans
          </Nav.Item>
        </Container>
      </Navbar>
    </div>
  );
};

export default Filter;
