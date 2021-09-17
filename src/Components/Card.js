import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div `
    border: 1px solid black;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h3 {
        margin-bottom: -5px;
    }

    button {
        margin-bottom: 5px;
    }
`

function Card(props) {
    return (
            <ContainerCard>
                <div>
                    <img src={props.product.imageUrl} alt={props.product.name}/>
                </div>
                <h3>{props.product.name}</h3>
                <p>R$ {props.product.value},00</p>
                <button>Adicionar ao carrinho</button>
            </ContainerCard>
    )
}

export default Card