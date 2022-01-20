import React from "react"
import Logo from "./Logo"
import { Container, NavLink } from "./styles"


const Navbar = () => (
    <Container>
        <NavLink to='/'> 
            <Logo />
        </NavLink>
        <NavLink to='/search'> 
            Search
        </NavLink> 
     </Container>
)

export default Navbar