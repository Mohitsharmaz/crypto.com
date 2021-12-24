import { Markup } from 'interweave'
import React, { useState } from 'react'
import styled from 'styled-components'

function Brief(props) {
    const [button, setbutton] = useState("marketdata")
    return (
        <>

            {props.items.description && <Container>
                <Buttons>
                <button onClick={() => { setbutton('marketdata') }} >Market Data</button>
                    <button onClick={() => { setbutton('description') }} >Description</button>
                </Buttons>
                <MiniContainer>
                    {button === "marketdata" &&
                        <MarketData>
                            <PriceChange>Price Change (24h) :
                                <span style={{ color: Math.sign(props.items.market_data.price_change_percentage_24h) === -1 ? "red" : "green" }}>
                                    {" " + props.items.market_data.price_change_percentage_24h} %</span> </PriceChange>

                            <p >24H High : <span style={{ color: "green" }} > ${props.items.market_data.high_24h.usd} </span> </p>

                            <p >24H Low : <span style={{ color: "red" }}> ${props.items.market_data.low_24h.usd}</span></p>

                            <p>Market Cap Change (24H) :
                                <span style={{ color: Math.sign(props.items.market_data.market_cap_change_24h) === -1 ? "red" : "green" }} > ${props.items.market_data.market_cap_change_24h}</span> </p>
                        </MarketData>}

                        {button === "description" && <Markup content={props.items.description.en} />}
                </MiniContainer>
            </Container>}
        </>)}

export default Brief

const Container = styled.div`
margin: 2rem;
background-color: white;
box-shadow: 0 2px 6px 0 rgba(173,175,182,03);
overflow-y: scroll;
`
const Buttons = styled.div`

button{
    outline: none;
    border:none;
    background-color: rgba(241,241,241,1);
    padding: 1rem;

    &:hover{
        background-color: grey;
    }
}

button:focus{
    background-color:grey;
}

`
const MiniContainer = styled.div`
margin:1rem 2rem;

`
const MarketData = styled.div`
color: grey;
transition: all 0.17s;
span{
    font-weight: bold;
}
`
const PriceChange = styled.p`

span{
    font-size:2rem;
}

`