import React from "react";
import PokeBall from "../images/pokeball.png";
import styled from "styled-components";
import "./navbar.css";

const Img = styled.img`
  max-width: 80px;
  margin: 0 auto;
`;
// const Nav = styled.div`
//     background-image: url('../images/sky.png');
//     background-repeat: no-repeat;
//     background-size:cover;
//     background-position:center;
// `

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <Img src={PokeBall} alt="" />

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Pokemons
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Gyms
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trainers
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Favorites
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Acción
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar"
              />
              <button className="btn btn-outline-warning" type="submit">
                Buscar
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
