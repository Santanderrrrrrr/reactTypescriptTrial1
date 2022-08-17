import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar as NavBarBs, Container, Nav, Button } from 'react-bootstrap'
import scBtn from "../assets/scBtn2.svg"
import { useShoppingCart } from '../context/ShoppingCartContext'

const NavBar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
  return (
    <NavBarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link to="/store" as={NavLink}>Store</Nav.Link>
                <Nav.Link to="/about" as={NavLink}>About</Nav.Link>
            </Nav>
            {cartQuantity > 0 && (
                <Button 
                    onClick={openCart}
                    style={{width:"3rem", height:"3rem", background:"none", position:"relative"}}
                    variant="outline-warning"
                    className="rounded-circle"
                    >
                    <img src={scBtn} alt="shopping cart" />
                    <div className="rounded-circle bg-warning d-flex justify-content-center align-items-center"
                            style={{color:"white", width:"1.2rem", height:"1.2rem", position:"absolute", bottom:"0", right:"0", transform:"translate(+25%, +25%)"}}>
                        {cartQuantity}
                    </div>
                </Button>
            )}
        </Container>
    </NavBarBs>
  )
}

export default NavBar