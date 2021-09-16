import React from 'react';
import styled from 'styled-components';
import Carrinho from "./Components/ShoppingCart"
import './App.css';
// import Product from './Components/Product/Product';
import { ListContainer } from './style';
import Filter from './components/filter/Filter';


function App() {
  return (
    <div>

      <Carrinho></Carrinho> 


      <ListContainer>
        {this.state.product
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
      </ListContainer>

      <Filter></Filter>


    </div>
  );
}

export default App;
