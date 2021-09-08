import { Image,Container,Row,Col } from 'react-bootstrap';
import logo1 from '../imgs/logoSeattle1.jpeg'
import knit from '../imgs/seattle-knit.jpeg'
import pant from '../imgs/seattle-pants.jpeg'
import watch from '../imgs/seattle-watch.jpeg'
import blazer from '../imgs/seattle-blazer.jpeg'
import model from '../imgs/seattle-model.jpeg'
import shirt from '../imgs/seattle-Shirt4.jpeg'
import model1 from '../imgs/seattle-model2.jpeg'
import jeans from '../imgs/seattle-jeans.jpeg'

function ShopBody() {
  return (
  <>
  <Image className="mt-5" src={logo1} fluid />
    <h1 className="mt-4 mb-4 text-center">Confidence in Every Situation.</h1>
    <h3 className="text-center">Independently Owned. Carefully Curated. Exceptional Quality.</h3>
  <Container className="mt-5">
    <Row className="mt-5">
    <Col><img className="img" src={jeans} alt="clothes"></img></Col>
    <Col><img className="img" src={pant} alt="clothes"></img></Col>
    <Col><img className="img" src={blazer} alt="clothes"></img></Col>
    <Col><img className="img" src={shirt} alt="clothes"></img></Col>
  </Row>
  <Row className="mt-4">
    <Col><img className="img" src={watch} alt="clothes"></img></Col>
    <Col><img className="img" src={model} alt="clothes"></img></Col>
    <Col><img className="img" src={knit} alt="clothes"></img></Col>
    <Col><img className="img" src={model1} alt="clothes"></img></Col>
  </Row>
  </Container>
</>
  );
}

export default ShopBody;