import React from "react";
import styled from "styled-components";

const ContainerCart = styled.div`
    display: block;
    padding: 8px;
    align-items: center;
    border: 1px solid black;
    height: 600px;
`
const InfosCarrinho = styled.div`
    display: grid;
    grid-auto-flow: column;
    gap: 4px;
    -webkit-box-align: center;
    align-items: center;
`

class Carrinho extends React.Component {
    render() {
    return (
        <div>
        <ContainerCart>
            <h3>Carrinho</h3>
        
        <InfosCarrinho>
            <p>
            1x
            </p>
            <p>Produto x</p>
            <button>Remover</button>
        </InfosCarrinho>

        <InfosCarrinho>
            <p>
            2y
            </p>
            <p>Produto y</p>
            <button>Remover</button>
        </InfosCarrinho>

        <p>
            Valor total:
            R$ 100,00
            </p>

        </ContainerCart>
            
        </div>
        );
    }
}

export default Carrinho