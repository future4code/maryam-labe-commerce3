import React from 'react';
import styled from 'styled-components';
import Carrinho from "./Components/ShoppingCart"
import './App.css';
// import Product from './Components/Product/Product';
import { ListContainer } from './style';
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
    products: ProductList
  }


  render () {
    return (
      <CotainerSite>
        <Filter></Filter>
        <div>
          <TextoAcima>
            <p>Quantidade de protudos: 6</p>
            <label>
              Ordenação: 
              <select>
                <option value="crescente">Crescente</option>
                <option value="decrescente">Decrescente</option>
              </select>
            </label>
          </TextoAcima>
          <ContainerCards>
            {this.state.products.map((product) => {
              return <Card key={product.id} product={product} />
            })}
          </ContainerCards>
        </div>
        <Carrinho></Carrinho> 
    </CotainerSite>
    )
  }
  
    

}

        {/* <ListContainer>
          {this.state.products
          .filter(product => {
            return product.filter.toLowerCase().includes(this.state.query.toLowerCase())
            // description.filter.toLowerCase().includes(this.state.query.toLowerCase())
          })
          .filter(product => {
            return this.state.minPrice === "" || product.Price >== this.state.minPrice
          })
          .filter(product => {
            return this.state.maxPrice === "" || product.Price <== this.state.maxPrice
          })
          // .sort((a,b) => {
          //   switch (this.state.sortingparameter) {
          //     case "Crescente":
          //       return a.price - b.price
          //     default:
          //       return b.price - a.price
          //   }
          // })
          .map(product =>{
            return <card key={product.id} product={product} />
          })}
        </ListContainer> */}


export default App;
