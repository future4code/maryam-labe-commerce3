import React from "react";
import styled from "styled-components";

const ContainerCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    height: 600px;
    color: white;
`
const InfosCarrinho = styled.div`
    display: flex;
    gap: 4px;
    justify-content: space-between;
    align-items: center;

    p {
        text-align: center;
    }
`

function Carrinho (props) {
    return (
        <div>
        <ContainerCart>
            <h3>Foguete 🚀</h3>
        <div>
            {props.productsInCart.map((product) => {
                return (
                <InfosCarrinho>
                    <p>{product.itens}x</p>
                    <p>{product.name}</p>
                    <button onClick={() => props.removeProductCart(product.id)}>
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