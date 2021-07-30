import React, { useEffect, useContext } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
import logo1 from '../imgs/logoSeattle1.jpeg'
import {
  Image,
  Container,
  Row,
  Col,
  Carousel,
  Form,
  Button,
} from "react-bootstrap";
import atomize, { Text } from "atomize";
import Loading from "../sharedComponents/Loading";

const ProductPage = (props) => {
  let id = props.id;
  const { fetchProductWithId, addItemToCheckout, product } =
    useContext(ShopContext);
  // const [product, setProduct] = useState(null)
  // async function fetchData() {
  //     const fetchedProduct = await fetchProductWithId(id)
  //     setProduct(fetchedProduct)
  // }

  useEffect(() => {
    fetchProductWithId(id);

    // fetchData()
    return () => {
      // setProduct(null)
    };
  }, [fetchProductWithId, id]);

  if (!product.title) return <Loading />;
  return (
      <>
    <Container>
      <Row className="mb-big">
        <div className="mb-huge"></div>
        <Col>
        <Image className="mt-5 homeImage" src={product.images[0].src} fluid />
        <hr className="toRight"></hr>
        </Col>
        <Col className="itemBack  leftBorder px-4" >
          <h2 className="my-4">{product.title}</h2>
          <h1 className="my-3">{product.variants[0].price}</h1>
          <Form >
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
          
            <Button className="my-3" rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.id, 1)}>Add To Cart</Button>
            <hr className="my-4"></hr>
            <p className="mt-3">{product.description}</p>
            
          </Form>
          <ul class="list-group pb-5">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item">A fourth item</li>
  <li class="list-group-item">And a fifth one</li>
</ul>
        </Col>
      </Row>
    </Container>
    </>
  );
};
{/* <Carousel>
<Carousel.Item>
  <img
    className="blog-img"
    src={product.images[0].src}
    alt="First slide"
  />
  <Carousel.Caption></Carousel.Caption>
</Carousel.Item>
<Carousel.Item>
  <img
    className="blog-img"
    src={product.images[0].src}
    alt="Second slide"
  />
</Carousel.Item>
<Carousel.Item>
  <img
    className="blog-img"
    src={product.images[0].src}
    alt="Third slide"
  />

  <Carousel.Caption></Carousel.Caption>
</Carousel.Item>
</Carousel> */}
export default ProductPage;
