import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Allcrypto from './Allcrypto'


function Trading() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch("https://api.coingecko.com/api/v3/search/trending")
            .then(res => res.json())
            .then(
                (result) => {
                    setLoading(false);
                    setItems(result);
                },
                (error) => {
                    setLoading(true)
                    console.log(error)
                }
            ).catch((error) => {
                console.log(error)
            })
    }, [])


    console.log(items)


    return (
        <>
            <Heading>Top Movers</Heading>
            {loading && <Loader> <img src="./images/Circle-Loading.svg" /></Loader>}
            <TradingContainer>

                {
                    items.coins && items.coins.map((item) => {
                        console.log(item.item.name)
                        return <>
                            <Card>
                                <img src={item.item.small} />
                                <Info>
                                    <h3>{item.item.name}</h3>
                                </Info>

                                <PriceChange>
                                    <h2>$ {Math.round(item.item.price_btc * 67888.90 * 100000) / 100000}</h2>
                                </PriceChange>
                            </Card>
                        </>
                    })
                }
            </TradingContainer>

            <Allcrypto />
        </>
    )
}

export default Trading

const TradingContainer = styled.div`
display: flex;
flex-wrap: wrap;
padding:   0 3rem;

@media  (max-width: 480px){
   padding: 0 1rem;
    }
`

const Card = styled.div`
background-color: white;
width: 18rem;
padding:0.5rem;
border-radius: 0.2rem;
margin:0.7rem;
box-shadow: 2px 5px 15px black;
cursor: pointer;
transition: all 0.17s ease-in-out;

@media  (max-width: 480px){
    width: 8rem;
    }

&:hover{
    transform: scale(1.1)
}
`

const Info = styled.div`

h3{
    font-size: 1rem;
    font-family: 'Roboto Mono', monospace;
}
`

const PriceChange = styled.div`
display: flex;
justify-content: space-between;
align-items: end;
position: relative;
bottom: 0;
padding:-02rem;
h2{
    font-size: 1.5rem;

    @media  (max-width: 480px){
        font-size:1rem;
        }
}
p{
    margin: 1rem;
    color: red;
    font-weight:bold;
}
`
const Heading = styled.div`
padding: 1rem 2rem;
font-size:1.5rem;
font-weight:500;
`

const Loader = styled.div`
margin-left: 45%;
`