import React from "react";
import styled from "styled-components";

const ContainerFilter = styled.div `
    display: flex;
    flex-direction: column;
    padding: 5px;
    align-items: center;
    height: 600px;
    color: white;

    input {
        margin-bottom: 10px;
    }
`

function Filter (props) {
    return (
        <div>
                <ContainerFilter>
                    <h3>Filtros</h3>
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