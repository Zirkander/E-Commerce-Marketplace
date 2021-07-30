import React, { useContext, useEffect }  from 'react'
import { Link } from '@reach/router';
import { ShopContext } from '../context/shopContext'
import Loading from '../sharedComponents/Loading'
import Client from "shopify-buy";
import { Image,Container,Row,Col, Carousel } from 'react-bootstrap';
import logo1 from '../imgs/logoSeattle1.jpeg'
import knit from '../imgs/seattle-knit.jpeg'
import pant from '../imgs/seattle-pants.jpeg'
import watch from '../imgs/seattle-watch.jpeg'
import blazer from '../imgs/seattle-blazer.jpeg'
import model from '../imgs/seattle-model.jpeg'
import shirt from '../imgs/seattle-Shirt4.jpeg'
import model1 from '../imgs/seattle-model2.jpeg'
import jeans from '../imgs/seattle-jeans.jpeg'  
import HomeCarousel from "../sharedComponents/Carousel"


const FilterProductPage = () => {
  const {fetchAllProducts, products, activeFilters} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products){ return <Loading />}
    return (  
        <div>
          <SideBar/>
          <Container style={{marginTop: '50px'}}>
            <HomeCarousel />
            <Row>
                {products.map(product => (
                    <Col><Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}><img src={product.images[0].src} className="homeImage" ></img></Link></Col>))};
            </Row>
          </Container>
        </div>
    )
}

export default FilterProductPage;