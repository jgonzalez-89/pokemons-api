import React from "react";
import styled from "styled-components";
import img from "../images/foot.png";

const Foot = styled.footer`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  position: sticky;
  bottom: 0;
`;

const Footer = () => {
  return (
    <div className="container">
      <Foot className="py-3 my-4 rounded">
        <ul className="nav justify-content-center  pb-0 mb-0">
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2 text-muted">
              About
            </a>
          </li>
        </ul>
        <p className="text-center text-muted">&copy; 2023 Company, Inc</p>
      </Foot>
    </div>
  );
};

export default Footer;
