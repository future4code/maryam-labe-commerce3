import React from 'react';
import styled from 'styled-components';
import logo from '../imgs/spaceodyssey-logo.png'
import compras from '../imgs/carrinho.png'

const ContainerNav = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(12, 94, 150);
    height: 100px;
    display: flex;
    justify-content: space-around;
    -webkit-box-align: center;
    align-items: center;
    border-bottom: 1px solid rgb(255, 255, 255);
`
const LogoImagem = styled.img `
    margin: 0px;
    width: 100px;
`
const Titulo = styled.h1`
    color: white;
    text-decoration: none;
    transition: font-size 4s, color 4s, transform 4s;
    font-size: 25px;
    height: 100px;
    display: flex;
    align-items: center;

    &:hover{
        font-size: 30px;
        transform: rotate(360deg);
        color: black;
    }
`
const Menu = styled.ul`
    display: block;
    text-decoration: none;
    color: white;
`
const TextoLinks = styled.a `
    text-decoration: none;
    color: white;
`
const Botao = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
`
class Header extends React.Component {
    render(){
        return (
            <ContainerNav> 
                
                <LogoImagem src={logo} alt="logo-nave"/>
                
                <Titulo>Space Odyssey</Titulo>
                <Menu>
                    <li><TextoLinks href={"https://space-odyssey-store.surge.sh/"}>Quem Somos</TextoLinks></li>
                    <li><TextoLinks href={"https://space-odyssey-store.surge.sh/"}>Produtos</TextoLinks></li>
                    <li><TextoLinks href={"https://space-odyssey-store.surge.sh/"}>Redes Socias</TextoLinks></li>
                </Menu>
                <Botao>
                    <img src={compras}></img>
                </Botao>
            </ContainerNav>  
        );
    }
}

export default Header