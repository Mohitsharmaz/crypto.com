import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'


function Allcrypto() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [more, setMore] = useState(20)

    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
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
            )
    }, [])
    console.log(items)
    const loadMore = () => {
        return setMore(more + 20)
    }
    return (
        <Allcryp>
            <thead>
                <th>#</th>
                <th>NAME</th>
                <th>PRICE</th>
                <th>24H CHANGE</th>
                <th>24H VOLUME</th>
                <th></th>
            </thead>
            {loading && <Loader> <img src="./images/Circle-Loading.svg" /></Loader>}

            {items.slice(0, more).map((item, index) => {
                return (
                    <Home>
                        <tr key={item.symbol}>
                            <td><Price> {index + 1} </Price></td>
                            <td><IMG src={item.image} /> {item.name}</td>
                            <td>${item.current_price}</td>
                            <td style={{ color: Math.sign(item.price_change_percentage_24h) === -1 ? "red" : "green" }}>{item.price_change_percentage_24h}%</td>
                            <td>${item.total_volume}</td>
                            <td> <Link to={`/trade/:${item.id}`}> <button >Trade</button> </Link> </td>
                        </tr>
                    </Home>)
            })}
            <NextPrev><button onClick={loadMore}  >More</button></NextPrev>

        </Allcryp>

    )
}

export default Allcrypto
const Allcryp = styled.div`
// padding: 4rem 15rem;
margin: 4rem;
th{
    width:15rem;
padding:1rem;
font-size: 0.8rem;
font-weight: 400;
@media  (max-width: 480px){
   padding: 0.5rem;
   font-size: 0.5rem;
   font-weight: 600;
    }
}


td{
background:white;
width:15rem;
padding:1rem;
font-size: 0.8rem;
font-weight: 700;
color: rgb(109,100,127);

@media  (max-width: 480px){
    padding: 0.5rem;
    font-size: 0.5rem;
     }
 }


@media  (max-width: 600px) {
 margin: 1rem;
  }

`
const Home = styled.div`
border-top: 1px solid rgb(237,242,247);
border-bottom: 1px solid rgb(237,242,247);
transition: all 0.10s ease-in-out;
cursor:pointer;

button{
    border:none;
    outline:none;
    background-color:rgb(17,153,250);
    padding:0.2rem 1rem;
    border-radius:1rem;

    &:hover{
        background-color:rgb(17,153,200)
    }
}
&:hover{
    box-shadow: 0 0px 8px 2px black;
    tranform: scale(1.05);
}
`
const Symbol = styled.p`
`

const Loader = styled.div`
margin-left: 45%;
`
const Price = styled.p`
font-weight: 600;`

const NextPrev = styled.div`

button{
    margin: 2rem 40%;
    border: none;
    outline:none;
    background-color:rgb(157,152,152);
    padding: 0.5rem 1rem;
cursor: pointer;
    &:hover{
        background-color: rgb(157,152,200)
    }
}
`

const IMG = styled.img`
width:1.5rem;
margin-right:0.5rem;
`