import React from 'react'
import styled from 'styled-components'
import PokeImg from '../images/pokemon.png'

const Img = styled.img`
    max-width: 300px;
    margin: 0 auto;
`
const Button = styled.button`
    padding: 10px;
    border-radius: 5px;
    margin: 5px;
    justify-content: center;
    background-color: #ffcb00;
    color: #00428a;
    border: 1px solid #00428a;
    font-weight: 700;
`

const Header = () => {
	return (
		<section className="py-5 text-center container">
			<div className="row py-lg-5">
				<div className="col-lg-6 col-md-8 mx-auto">
					<Img src={PokeImg} alt="..." />
					<p>
						<Button type="button" class="btn btn-warning">Gen 1</Button>
						<Button type="button" class="btn btn-warning">Gen 2</Button>
						<Button type="button" class="btn btn-warning">Gen 3</Button>
						<Button type="button" class="btn btn-warning">Gen 4</Button>
						<Button type="button" class="btn btn-warning">Gen 5</Button>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Header