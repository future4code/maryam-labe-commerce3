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

function Filter (props) {
    return (
        <div>
                <ContainerFilter>
                    <h2>Filtros</h2>
                    <label htmlFor="valorMin">Valor mínimo: </label>
                    <input type="number" id="valorMin" name="valorMin" value={props.minPrice} onChange={props.updateMinPrice} min="0" max="infinite"/>
                    <label htmlFor="valorMax">Valor máximo: </label>
                    <input type="number" id="valorMax" name="valorMax" value={props.maxPrice} onChange={props.updateMaxPrice} min="0" max="infinite"/>
                    <label htmlFor="nomeProduto">Busca por nome: </label>
                    <input type="text" id="nomeProduto" name="nomeProduto" value={props.search} onChange={props.updateSearch} placeholder="Produto"/>
                </ContainerFilter>
            </div>
    )
}



export default Filter