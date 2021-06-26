import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React, { useState, useContext } from "react";
import Link from "next/link";
import { AppContext } from "./contex/AppContex";

const Header = () => {
  const { cart, toggleCart, price, togglePrice, count, toggleCount } =
    useContext(AppContext);

  return (
    <>
      <Navbar className="Header navbar" fixed="top" expand="lg">
        <div className="container justify-content-between">
          <Navbar.Brand className="Header__logo" href="/">
            <img className="img-fluid logoPng" src="/logo.png" alt="" />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="Header__collapse" id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/damskie">DAMSKIE</Nav.Link>
              <Nav.Link href="/meskie">MĘSKIE</Nav.Link>
              <Nav.Link href="/zegary">ZEGARY</Nav.Link>
              <Nav.Link href="/zzgrawer">GRAWER</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <div className="Header__icons">
            <Nav.Link href="#home">{count}</Nav.Link>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
