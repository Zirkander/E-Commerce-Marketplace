import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import Loading from '../sharedComponents/Loading';
import { Container,Row,Form,Carousel,Col,Image } from 'react-bootstrap';
import jeans from '../imgs/seattle-jeans.jpeg'
import logo1 from '../imgs/logoSeattle1.jpeg'

const ProductPage = (props) => {
    let { id } = props.id;
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)
    // const [product, setProduct] = useState(null)
    // async function fetchData() {
    //     const fetchedProduct = await fetchProductWithId(id)
    //     setProduct(fetchedProduct)
    // }

    useEffect(() => {
        fetchProductWithId(id)
        
        // fetchData()
        return () => {
            // setProduct(null)
        };
    }, [ fetchProductWithId, id])

    //if (!product.title) return <Loading />
    return (
        <>
<Image className="mt-5" src={logo1} fluid />
<Container>
<Row className="mb-big">
    <div className="mb-huge"></div>
    <Col>
<Carousel>
<Carousel.Item>
    <img
      className="d-block w-100"
      src={jeans}
      alt="First slide"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={jeans}
      alt="Second slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={jeans}
      alt="Third slide"
    />

    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Col>
<Col md>
<h2>The Shop Shirt in Indigo Boss Duck</h2>
<h1>$168</h1>
<Form>
<Form.Select aria-label="Default select example">
  <option>Small</option>
  <option value="1">Medium</option>
  <option value="2">Large</option>
  <option value="3">Xl</option>
</Form.Select>
<Form.Select aria-label="Default select example">
  <option>Grey</option>
  <option value="Blue"></option>
  <option value="Green">Two</option>
</Form.Select>
</Form>
</Col>
</Row>
</Container>
</>
  );
        
}

export default ProductPage

// <div>
        //     <div>
        //         <div>
        //             <img src={product.images}/>
        //         </div>
        //         <div>
        //             <p>{product.title}</p>
        //             <p>${product.variants}</p>
        //             <p>{product.description}</p>
        //             <button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</button>
        //         </div>
        //     </div>
        // </div>