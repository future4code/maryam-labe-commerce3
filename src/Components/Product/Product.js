import React from 'react' 
import styled from 'styled-components'

class Product extends React.Component {
    render() {
        return(
<div>
    <p>Quantidade de protudos: 2</p>
    <p>Ordenação:</p>
    <img src="https://picsum.photos/200/200?random=1" alt="imagem aleatória"></img>
    <p>Produto 1</p>
    <p>Preço tal</p>
    <button>Adicionar ao carrinho</button>
    <img src="https://picsum.photos/200/200?random=2" alt="imagem aleatória"></img>
    <p>Produto 1</p>
    <p>Preço tal</p>
    <button>Adicionar ao carrinho</button>
</div>
        )
    }
}

export default Product