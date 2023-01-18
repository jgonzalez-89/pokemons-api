import React from "react";
import styled from "styled-components";
import PokeImg from "../images/pokemon.png";

const Img = styled.img`
  max-width: 300px;
  margin: 0 auto;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 5px;
  margin: 5px;
  justify-content: center;
  background-color: #ffcb00;
  color: #00428a;
  border: 1px solid #00428a;
  font-weight: 700;
  &:hover {
    background-color: #00428a;
    color: #ffcb00;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <Img src={PokeImg} alt="..." />
          <p>
            <Button type="button" onClick={() => setGeneration(1)}>
              Generation 1
            </Button>
            <Button type="button" onClick={() => setGeneration(2)}>
              Generation 2
            </Button>
            <Button type="button" onClick={() => setGeneration(3)}>
              Generation 3
            </Button>
            <Button type="button" onClick={() => setGeneration(4)}>
              Generation 4
            </Button>
            <Button type="button" onClick={() => setGeneration(5)}>
              Generation 5
            </Button>
            <Button type="button" onClick={() => setGeneration(6)}>
              Generation 6
            </Button>
            <Button type="button" onClick={() => setGeneration(7)}>
              Generation 7
            </Button>
            <Button type="button" onClick={() => setGeneration(8)}>
              Generation 8
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
