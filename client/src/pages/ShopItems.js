import React, { useContext, useEffect }  from 'react'
import { Link } from '@reach/router';
import { ShopContext } from '../context/shopContext'
import Loading from '../sharedComponents/Loading'
import Client from "shopify-buy";
import { Image,Container,Row,Col, Carousel } from 'react-bootstrap';
import Sidebar from '../sharedComponents/Sidebar';
import Footer from '../sharedComponents/Footer'
import Navbar from '../sharedComponents/Navbar'
import "../App.css";


const HomePage = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products){ return <Loading />}
    return (  
        <> 
        <Navbar /> 
      <h1 className="mt-5 text-center font-Nato Sans">Shop.</h1>
    <Sidebar />
      <div>
          <Container style={{marginTop: '50px'}}>
            <HomeCarousel />
            <Row>
                {products.map(product => (
                    <Col><Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}><img src={product.images[0].src} className="homeImage" ></img></Link></Col>))};
            </Row>
          </Container>
        </div>
        <Footer />
  </>
    )
}

export default HomePage