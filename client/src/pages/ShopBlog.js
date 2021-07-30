import { Card,CardGroup,Container } from 'react-bootstrap';
import blog2 from '../imgs/seattle-blog2.png';


function ShopBlog() {
  return (
<> 
<h1 className="mb-5" >Mens Blog</h1> 
<Container>
<CardGroup className="mt-5">
  <Card>
    <Card.Img className="blogImg" variant="top" src={blog2} />
    <Card.Body>
      <Card.Title>
        SPRING 2020 COLLECTIONS HAVE STARTED TO ARRIVE!</Card.Title>
      <Card.Text>
      The Spring 2020 Collections have started to arrive!  This coming spring and summer season you will see a lot of natural tones of tan, khaki, off-white, rusty red, faded olive, and light brown.There will also be plenty of nature-inspired summer pastels such as mint green, teal, mauve, purple, and pink.  It's a bold new decade and it's time to refresh your look with a few new key pieces!
      </Card.Text>
    <Card.Link href="#">Read Full Article</Card.Link>
    
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="blogImg" variant="top" src={blog2} />
    <Card.Body>
      <Card.Title>2019 Holiday Gift Guide</Card.Title>
      <Card.Text>
      Seattle Thread Company welcomes you to our 2019 Holiday Gift Guide! We bring you plenty of gift ideas, from thoughtful accessories to unique big ideas! Click any of the product listings to view their details.  As always we strive to find the best quality products available to keep our customers stylish, comfortable, and confident. Most important of all, we hope that you and your family have a wonderful and safe holiday season!{' '}
      </Card.Text>
      <Card.Link href="#">Read Full Article</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="blogImg" variant="top" src={blog2} />
    <Card.Body>
      <Card.Title>New Arrivals for Fall 2019</Card.Title>
      <Card.Text>
This fall we are featuring plenty of olive and burgundy knits and sweaters, earthy natural tones in pants, light and vintage wash denim, suede and leather lace up boots and chelseas, unstructured soft blazers in subtle solid patterns, and woven shirts in berry, burgundy, teal and charcoal. We have an excellent collection of lightweight fall raincoats, shells and vests from Barbour, Relwen, Fisher + Baker, Nau, and Alchemy.
      </Card.Text>
      <Card.Link href="#">Read Full Article</Card.Link>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
</Container> 
</>
  );
}

export default ShopBlog;