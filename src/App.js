import React from 'react';
import styled from 'styled-components';
import Carrinho from "./Components/ShoppingCart"

const ImagemMeme = styled.img`
  width: 400px;
  margin-top: 10px;
  margin-left: 470px;
`

function App() {
  return (
    <div>
      <ImagemMeme src="https://preview.redd.it/mslaumxlj5b41.jpg?auto=webp&s=5b121134932932de4a9267f6b54557b5f43679f5" alt="meme the office"/>
      <Carrinho></Carrinho> 
    </div>
  );
}

export default App;
