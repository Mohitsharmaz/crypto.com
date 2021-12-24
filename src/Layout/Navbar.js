import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Nav>
      <div>
       <Link to ="/"> <img src="https://crypto.com/static/cae522dc778b83946d0bbe0ee927090c/fdead/white.png" alt="crypto.com" /></Link>
      </div>
      <Menu>
        <ul>
          <li>
            Products
          </li>
          <li>
            Company
          </li>
          <li>
            Price
          </li>
          <li>
            English
          </li>
        </ul>
      </Menu>

      <Icons>
        <img src="https://crypto.com/static/5f2474c2c715110494bd43d974977709/78b85/playstore.png" alt="" />

        <img src="https://crypto.com/static/cc7033183c8571140900fe8f6c8227f8/78b85/appstore.png" alt="" />
      </Icons>

    </Nav>
  )
}

export default Navbar


const Nav = styled.div`
padding-inline: 10rem;
background-color: rgb(6,17,33);
height:6rem;
display:flex;
align-items:center;
img{
  margin: auto;
}
justify-content: space-between;

@media  (max-width: 600px) {
 background: color;
  padding-inline:0rem;

}
`

const Menu = styled.div`

ul{
  display:flex;
  margin:0px;
}
ul li{
  list-style: none;
  color: rgb(121,126,135);
  padding:1rem;
  font-weight:bold;
  font-size:1.1rem;
  cursor:pointer;
}

ul li:hover{
  color:white;
}

@media  (max-width: 600px) {
 
display:none;
  
}
`


const Icons = styled.div`
img{
  margin: 0.8rem;
}

`