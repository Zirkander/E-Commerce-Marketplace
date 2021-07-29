import React, { useEffect, useContext } from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/shopContext";
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
import logoSeattle from "../imgs/logoSeattle.png";

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
    // <Container>
    //     <Row m={{ b: "2rem" }} p="2rem">
    //         <Col>
    //             <img src={product.images[0].src}/>
    //         </Col>
    //         <Col>
    //             <Text tag="h1" textColor="bl  ack500" textWeight="200" m={{ y: '2rem' }}>{product.title}</Text>
    //             <Text tag="h3" m={{ y: '2rem' }} textWeight="200">${product.variants[0].price}</Text>
    //             <Text tag="p" textSize="paragraph" textColor="gray900" textWeight="200">{product.description}</Text>
    //             <Button rounded="0" shadow="3" bg="black500" m={{ y: '2rem' }} onClick={() => addItemToCheckout(product.id, 1)}>Add To Cart</Button>
    //         </Col>
    //     </Row>
    //     <Image className="mt-5" src={logoSeattle} fluid />
    <Container>
      <Row className="mb-big">
        <div className="mb-huge"></div>
        <Col>
          <Carousel>
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

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="blog-img"
                src={product.images[0].src}
                alt="Third slide"
              />

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
          <h2>{product.title}</h2>
          <h1>{product.variants[0].price}</h1>
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
  );
};

export default ProductPage;
