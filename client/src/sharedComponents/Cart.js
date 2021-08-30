import React, { useContext } from 'react'
import { Div, SideDrawer, Text, Row, Col, Anchor, Button, Container, Icon } from "atomize";
import {ShopContext} from '../context/shopContext'

const Cart = () => {

    const { isCartOpen, closeCart, checkout } = useContext(ShopContext)

    if (checkout.lineItems) {
        return (
            <SideDrawer isOpen={isCartOpen} onClose={closeCart} w={{ xs: "100vw", sm: "16rem" }} >
                <Container d="flex" flexDir="column" h="500px" style={{border: "1px black solid"}}>
                    <Row justify="space-between" border={{ b: '1px solid' }} p="0.7rem" borderColor="gray300">
                        <Text tag="h1" textColor="black500" textSize="paragraph" hoverTextColor="black700" transition="0.3s">Bag</Text>
                        <button onClick={(  ) => closeCart()} >Close</button>
                    </Row>
                    <Row flexGrow="1" p="0.7rem" overflow="auto" flexWrap="nowrap" flexDir="column">
                        {checkout.lineItems.length < 1 ?
                            <Row>
                                <Col><Text tag="h1" textColor="black500" textSize="paragraph" hoverTextColor="black700" transition="0.2s">Cart Is Empty</Text></Col>
                            </Row>  
                            :
                            <>
                                {checkout.lineItems && checkout.lineItems.map(item => (
                                    <Row key={item.id} p={{ t:"5px" }}>
                                        <Col>
                                            <Div bgImg={item.variant.image.src} bgSize="cover" bgPos="center" h="0.1rem" w="1rem"/>
                                        </Col>  
                                        <Col>
                                            <Text>{item.title}</Text>
                                            <Text>{item.variant.title}</Text>
                                            <Text>{item.quantity}</Text>
                                        </Col>
                                        <Col>
                                            <Text>{item.variant.price}</Text>
                                        </Col>
                                    </Row>
                                ))}
                            </>
                        }
                    </Row>
                    <Row border={{ t: '1px solid' }} p="0.7rem" borderColor="gray300">
                        <Anchor w="100%" href={checkout.webUrl} target="_blank" rel="noopener noreferrer">
                            <Button w="100%" rounded="0" bg="black500" shadow="2" hoverShadow="3" m={{t: '1rem'}}>
                                Checkout
                            </Button>
                        </Anchor>
                    </Row>
                </Container>
                <Div d="flex" m={{ b: "4rem" }}>
        <Icon name="AlertSolid" color="warning700" />
        <Text p={{ l: "0.5rem", t: "0.25rem" }}>This is the modal</Text>
                </Div>
            </SideDrawer>
        )
    }

    return null

}

// <Div d="flex" justify="flex-end">
// <Button
// onClick={closeCart}
// bg="gray200"
// textColor="medium"
// m={{ r: "1rem" }}
// >
// Cancel
// </Button>
// <Button onClick={closeCart} bg="info700">
// Submit
// </Button>
// </Div>

export default Cart