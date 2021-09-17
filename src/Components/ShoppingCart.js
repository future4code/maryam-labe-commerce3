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
    display: flex;
    gap: 4px;
    justify-content: space-between;
    align-items: center;

`

function Carrinho (props) {
    return (
        <div>
        <ContainerCart>
            <h3>Carrinho</h3>
        
        <div>
            {props.productsInCart.map((product) => {
                return (
                <InfosCarrinho>
                    <p>{product.itens}x</p>
                    <p>{product.name}</p>
                    <hr/>
                    <button 
                    onClick={() => props.removeProductCart(product.id)}
                    >
                    Remover
                    </button>    
                </InfosCarrinho>)
            })}
        </div>
        <p>
            Valor da compra: R$ {props.finalPrice()},00
        </p>

        </ContainerCart>
            
        </div>
    );
}

export default Carrinho