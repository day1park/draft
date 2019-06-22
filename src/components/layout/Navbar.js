import React, { Component } from "react";
import "./Navbar.css";
import dp from "../../images/icons/dp.png";

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
          <div className="dp-title">
            <a href="#home">
              {" "}
              <img className="dp-logo" src={dp} alt="dp" />
            </a>
            <span className="title-text">Day Park</span>
          </div>
          <ul>{navLinks}</ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
