import React from "react";
import styled from "styled-components";

const ContainerFilter = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    height: 600px;

    input {
        margin-bottom: 10px;
    }
`


class Filter extends React.Component {
    render() {
        return (
            <div>
                <ContainerFilter>
                    <h2>Filtros</h2>
                    <label for="valorMin">Valor mínimo: </label>
                    <input type="number" id="valorMin" name="valorMin" min="0" max="infinite"/>
                    <label for="valorMax">Valor máximo: </label>
                    <input type="number" id="valorMax" name="valorMax" min="0" max="infinite"/>
                    <label for="nomeProduto">Busca por nome: </label>
                    <input type="text" id="nomeProduto" name="nomeProduto" placeholder="Produto"/>
                </ContainerFilter>
            </div>
        )
    } 
}


export default Filter