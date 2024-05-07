import React from 'react'
import {Container,Row,Col}  from 'react-bootstrap'

const footer = () => {
  return (
    <footer>
    <Row>
        <Container>
            <Col className='text-center py-3'>
                @ Made by Arpan Kumar
            </Col>
        </Container>
    </Row>
    </footer>
  )
}

export default footer