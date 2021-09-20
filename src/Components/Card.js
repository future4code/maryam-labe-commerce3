import React from "react";
import styled from "styled-components";

const ContainerCard = styled.div `
    border: 2px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 3px 3px 3px 2px #0e3364;
    transition: all .2s ease-in-out;
    &:hover{
        top:-4px;box-shadow:3px 4px 3px  #999;
    }

    

    h3 {
        margin-bottom: -5px;
        color: white;
        text-align: center;
    }

    p {
        color: white;
    }

    button {
        margin-bottom: 5px;
        border-radius: 10px;
        border: none;

        &:hover{
            background-color: #0c5e96;
            color: white;
        }
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
                <button  onClick={() => props.addToCart(props.product.id)}>Adicionar ao foguete 🚀</button>
            </ContainerCard>
    )
}

export default Card