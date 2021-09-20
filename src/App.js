import React from 'react';
import styled from 'styled-components';
import Carrinho from "./Components/ShoppingCart"
import './App.css';
import Filter from './Components/Filter';
import ProductList from './Data/Product.json'
import Card from './Components/Card';
import Header from './Components/Header';
import Background2 from './imgs/background2.jpg'
import Footer from './Components/Footer';


const ContainerSite = styled.div `
  background-image: url(${Background2});
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`

const ContainerMain = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
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
  color: white;
`


class App extends React.Component {
  
  state = {
    products: ProductList,
    search: "",
    minPrice: "",
    maxPrice: "",
    order: "",
    productsInCart: [
      {
        id: 1,
        name: "Moletom Espacial - Kids",
        value: 75.0,
        imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/KIDS-11-SPACEDUIT-ONESIE-INFANT-ONESIE-WHITE-GREY-FRONT_300x.png?v=1631644276",
        itens: 1
    },
    {   
        id: 2,
        name: "Falcon F9 Camiseta - Feminino",
        value: 30.0,
        imageUrl: "https://cdn.shopify.com/s/files/1/0261/2615/5855/products/WOMENS-F9-T-SHIRT-CHARCOAL-BACKcopy_300x.png?v=1631678515",
        itens: 2
    }
    ]
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

  addToCart = (productId) => {
    const productInCart = this.state.productsInCart.find(product => productId === product.id)
    
    if(productInCart) {
      const newProductsInCart = this.state.productsInCart.map((product) => {
        if(productId === product.id) {
          return {
            ...product,
            itens: product.itens + 1
          }
        }

        return product
      })

      this.setState({productsInCart: newProductsInCart})
    } 
    else {
      const productToAdd = this.state.products.find(product => productId === product.id)

      const newProductsInCart = [...this.state.productsInCart, {...productToAdd, itens: 1}]

      this.setState({productsInCart: newProductsInCart})
    }
  }

  removeProductCart = (productId) => {
    const newProductsInCart = this.state.productsInCart.map((product) => {
      if (productId === product.id) {
        return {
          ...product, 
          itens: product.itens - 1 
        }
      }
      return product
    })
    .filter((product) => {
      return (product.itens > 0)
    })

    this.setState({
      productsInCart: newProductsInCart
    })
  }

  finalPrice = () => {
    let totalPrice = 0

    for(let product of this.state.productsInCart) {
      totalPrice += product.value * product.itens
    }

    return totalPrice
  }

  TotalProducts = () => {
    const minProducts = this.state.products.filter((produto) => {
      if (this.state.minPrice) {
        return produto.value >= this.state.minPrice
      } else {
        return produto
      }
    })

    const maxProducts = minProducts.filter((produto) => {
      if (this.state.maxPrice) {
        return produto.value <= this.state.maxPrice
      } else {
        return produto
      }
    })

    const filterProducts = maxProducts.filter((produto) => {
      return produto.name.includes(this.state.search)
    })

    return filterProducts
  }

  render () {    
    const quantidadeProdutos = this.TotalProducts()  
    return (
        <ContainerSite>
          <Header></Header>
          <ContainerMain>
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
                <p>Quantidade de produtos: {quantidadeProdutos.length}</p>
                <label>
                  Ordenação do preço:
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
                  return <Card addToCart={this.addToCart} key={product.id} product={product} />
                })}
              </ContainerCards>
            </div>
            <Carrinho
              productsInCart={this.state.productsInCart}
              removeProductCart={this.removeProductCart}
              finalPrice={this.finalPrice}
            /> 
        </ContainerMain>
        <Footer></Footer>
      </ContainerSite>
    )
  }
}

export default App;
