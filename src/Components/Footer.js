import React from "react";
import styled from "styled-components";
import facebook from "../imgs/facebook.png"
import instagram from "../imgs/instagram.png"
import twitter from "../imgs/twitter.png"


const ContainerFooter = styled.div`
    display: flex;
    width: 100%;
    background-color: rgb(12, 94, 150);
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid rgb(255, 255, 255);
    margin-top: 50px;
    height: 100px;

    p {
        color: white;
    }
`
const Icons = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const ImagesIcons = styled.div `
        display: flex;
        width: 207px;
        justify-content: space-around;
        margin-top: -7px;
        margin-bottom: 10px;

    img {
        width: 30px;
        &:hover{
            width: 32px;
        }
    }

`

class Footer extends React.Component {
    render(){
        return (
            <ContainerFooter>
                <p>Space Odyssey © 2021 - Todos os direitos reservados.</p>
                
                <Icons>
                    <p>Conheça nossas redes sociais:</p>
                    <ImagesIcons>
                        <a href="https://www.instagram.com/" target="_blank"><img src={instagram} alter="Ícone Instagram"/></a>
                        <a href="https://www.twitter.com/" target="_blank"><img src={twitter} alter="Ícone Twitter"/></a>
                        <a href="https://www.facebook.com/" target="_blank"><img src={facebook} alter="Ícone Facebook"/></a>
                    </ImagesIcons>
                </Icons>
            </ContainerFooter>
        );
    }
}

export default Footer