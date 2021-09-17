import React from 'react';
import styled from 'styled-components';
import Carrinho from "./Components/ShoppingCart"
import './App.css';
import Filter from './Components/Filter';
import ProductList from './Data/Product.json'
import Card from './Components/Card';

const CotainerSite = styled.div `
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  gap: 10px;
`

const ContainerCards = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`

const TextoAcima = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
`


class App extends React.Component {
  
  state = {
    products: ProductList,
    search: "",
    minPrice: "",
    maxPrice: "",
    order: "",
  }

  updateSearch = (event) => {
    this.setState({
        search: event.target.value
    })
}

  updateMinPrice = (event) => {
    this.setState({
      minPrice: event.target.value
    })
  }

  updateMaxPrice = (event) => {
    this.setState({
      maxPrice: event.target.value
    })
  }

  updateOrder = (event) => {
    this.setState({
      order: event.target.value
    })
  }


  render () {
    return (
      <CotainerSite>
        <Filter 
          search={this.state.search} 
          updateSearch={this.updateSearch}
          minPrice={this.state.minPrice}
          updateMinPrice={this.updateMinPrice}
          maxPrice={this.state.maxPrice}
          updateMaxPrice={this.updateMaxPrice}

        />
        <div>
          <TextoAcima>
            <p>Quantidade de protudos: {this.state.products.length}</p>
            <label>
              Ordenação: 
              <select value={this.state.order} onChange={this.updateOrder}>
                <option value="" data-default disabled selected></option>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
                {this.state.order}
              </select>
            </label>
          </TextoAcima>
          <ContainerCards>
            {this.state.products
            .filter((product) => {
              return product.name.toLowerCase().includes(this.state.search.toLowerCase())
            })
            .filter((product) => {
              return (this.state.minPrice === "") || (this.state.minPrice <= product.value)
            })
            .filter((product) => {
              return (this.state.maxPrice === "") || (this.state.maxPrice >= product.value)
            })
            .sort((currentProduct, nextProduct) => {
              switch (this.state.order) {
                case "crescente":
                  return 1 * (currentProduct.value - nextProduct.value)
                case "decrescente":
                  return -1 * (currentProduct.value - nextProduct.value)
              }
            })
            .map((product) => {
              return <Card key={product.id} product={product} />
            })}
          </ContainerCards>
        </div>
        <Carrinho></Carrinho> 
    </CotainerSite>
    )
  }
}

export default App;
