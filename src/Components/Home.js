import React from 'react'
import styled from 'styled-components'
import Startinvesting from './Startinvesting'



function Home() {
    return (
        <div>

        <Startinvesting/>
          
        </div>
    )
}

export default Home


const Head = styled.div`
margin:2rem;
display: flex;
flex-wrap:wrap;
width:80%;
justify-content: space-between;
margin-inline: 10rem;
`
const Card = styled.div`
font-family: 'Baloo Bhaina 2', cursive;
width: 17rem;
padding:2rem;
border-radius: 1rem;
background-color: rgb(229, 119, 119);
text-align:center;
cursor: pointer;
transition: 0.17s all ease;
h1{
    color: black;
}
box-shadow: 1px 10px 25px black;
&:hover{
    transform: scale(1.05);
    box-shadow: 5px 1px 25px black;
}
`