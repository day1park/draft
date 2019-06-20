import React, { Component } from "react";
import "./Navbar.css";

export class Navbar extends Component {
  render() {
    const selections = ["Home", "Projects", "Skills", "Contact", "About"];

    const navLinks = selections.map(selection => {
      return (
        <li>
          <a href={"#" + selection}>{selection}</a>
        </li>
      );
    });
    return (
      <div>
        <nav>
          <span className="logo">
            <a href="#home">Day Park</a>
          </span>
          <ul>{navLinks}</ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
