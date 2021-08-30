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
import SideBar from "../sharedComponents/Sidebar";
import Cart from "../sharedComponents/Cart";

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
    <Cart />
    <Container>
      <Row className="mb-big">
        <div className="mb-huge"></div>
        <Col>
        <Image className="productImg" src={product.images[0].src} fluid />
        <hr className="toRight"></hr>
        </Col>
        <Col className="itemBack  leftBorder px-4" >
          <h2 className="my-4">{product.title}</h2>
          <h1 className="my-4">{product.variants[0].price}</h1>
          <Form >
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Size:
          </Form.Label>
            <Col sm="10">
            <Form.Select aria-label="Default select example" className="input">
              <option>Small</option>
              <option value="1">Medium</option>
              <option value="2">Large</option>
              <option value="3">Xl</option>
            </Form.Select>
            </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Form.Label column sm="2">
            Color:
            </Form.Label>
            <Col sm="10">
            <Form.Select aria-label="Default select example">
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Green">Green</option>
            </Form.Select>
            </Col>
            </Form.Group>
            <Button className="my-3" rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</Button>
            <hr className="my-4"></hr>
            <p className="mt-3"></p>
            
          </Form>
        <div>
          <ul class="list-group pb-5">
            <li className="pb-3">Vendor: {product.vendor}</li>
            <li className="pb-3">Description: {product.description}</li>
            {/* <li class="list-group-item">Collection: {collection.collection}</li>  */}
            <li className="pb-3">Type: {product.productType}</li>
            <li className="pb-3">View More From <a href="">{product.vendor}</a> </li> 
          </ul>
        </div>
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
