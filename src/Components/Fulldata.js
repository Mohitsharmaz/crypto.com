import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Brief from './Brief'
import Chart from './Chart'




function Fulldata() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    let { Id } = useParams()
    Id = Id.replace(":", "")

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${Id}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setItems(result);
                    setLoading(false);
                },
                (error) => {
                    setLoading(true)
                    console.log(error)
                }
            ).catch((error) => {
                setLoading(true)
                console.log(error)
            })
    }, [])
    console.log(items)


    console.log(Id)
    return (<>
        {loading && <Loader> <img src="./images/Circle-Loading.svg" /></Loader>}
        {!loading && <Detail>


            <BasicInfo>
                <Symbol>
                    <img src={items.image.small} />
                </Symbol>
                <Name>
                    {items.name}
                </Name>
                <Price>
                    Current Price : <Spcl> $ {items.market_data.current_price.usd} </Spcl>
                </Price>
                <MarketCap>
                    Market Cap : <Spcl> $ {items.market_data.market_cap.usd}</Spcl>
                </MarketCap>
                <Volume>
                    Total Volume : <Spcl> {items.market_data.total_volume.usd}</Spcl>
                </Volume>
            </BasicInfo>

        </Detail>}
        <Brief items={items} />
    </>
    )
}

export default Fulldata

const Detail = styled.div`
display:flex;
height: fit-content;
`

const BasicInfo = styled.div`
background-color: white;
padding: 1rem;
width: 25%;
height: fit-content;
margin: 2rem;
box-shadow: 0 2px 6px 0 rgba(173,175,182,03);
font-family: 'Baloo Bhaina 2', cursive;

@media  (max-width: 480px){
    width: 100%;
     }
 }

`


const Name = styled.p`
font-size:1.8rem;
font-weight: bolder;
color: black;
`
const Price = styled.p``
const MarketCap = styled.p``
const Volume = styled.p``

const Loader = styled.div`
margin-left: 45%;

img{
    width: 2rem;
}

@media  (max-width: 480px){
    margin-left:30%;
     }
`

const PriceChange = styled.table``
const Spcl = styled.span`
font-weight:bold;
color: rgb(109,100,168);
`

const Symbol = styled.div`

`