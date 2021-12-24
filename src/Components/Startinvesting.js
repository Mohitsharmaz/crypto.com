import React from 'react'
import styled from 'styled-components'
import {
    Link
  } from "react-router-dom";

function Startinvesting() {
    return (<>
        <Start>
            <div >
                <img src="https://crypto.com/static/b4294bb911b426799dfae7340dba840a/ff3b2/buy-and-sell.png" alt="start investing" />
            </div>
            <Text>
                <h1>The World’s Fastest Growing Crypto App</h1>
                <p>Join <Spcl>10m+</Spcl> users buying and selling <Spcl> 150+ cryptocurrencies </Spcl>cost</p>
                <p> Spend with the Crypto.com Visa Card and <Spcl> get up to 8% back</Spcl></p>
                <p> Grow your portfolio by receiving rewards up to <Spcl> 14.5% on your crypto</Spcl> assets</p>
                <button><Link to="/trade"> Start Trading &#8594; </Link></button>
            </Text>
        </Start>
    </>
    )
}

export default Startinvesting
const Start = styled.div`
display: flex;
align-items: center;

img{
width: 15rem;
margin:2rem 10rem;


@media  (max-width: 480px){
    margin: 2rem 0rem;
}
}


@media  (max-width: 480px){
    flex-direction: column;
}

`
const Text = styled.div`
font-weight: bold;


@media  (max-width: 480px){
   
}

h1{
    font-size: 3.5rem;

    @media  (max-width: 480px){
       margin: 0 2rem;
       font-size: 2rem;
    }

}
p{
    font-size: 1rem;
    
@media  (max-width: 480px){
font-size:1rem;
margin: 1rem 2rem;
}
}
button{
    width:12rem;
    height:3rem;
    margin: 2rem 10rem;
    border:none;
    outline: none;
    font-size:1.2rem;
    background-color: red;
    color:white;
    font-family: 'Dongle', sans-serif;
    border-radius:1rem;
    transition: all 0.17s ease-in-out;


    @media  (max-width: 480px){
        width: 10rem;
        margin: 2rem 6rem;
    }
    

    &:hover{
        transform: scale(1.05);
        box-shadow: 5px 1px 25px black;
    }
    a{
        text-decoration:none;
        color: white;
    }
}



`

const Spcl = styled.span`
color: blue;
`