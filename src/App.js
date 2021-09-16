import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Product from './Components/Product/Product';
import { ListContainer } from './style';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
