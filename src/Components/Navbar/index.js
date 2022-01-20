import React from "react"
import Logo from "./Logo"
import { Container, NavLink } from "./styles"


const Navbar = () => (
    <Container>
        <NavLink to='/'> 
            <Logo />
        </NavLink>
     </Container>
)

export default Navbar
