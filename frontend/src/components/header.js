import React from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {FaShoppingCart,FaUsers} from 'react-icons/fa'
const header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect >
            <Container>
                <Navbar.Brand  href='/'>
                    C-cart
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link href='/cart'><FaShoppingCart/>Cart</Nav.Link>
                        <Nav.Link href='/Login'><FaUsers/>Login </Nav.Link>
                        <Nav.Link href='/'><FaUsers/>LogOut</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </header>
  )
}

export default header