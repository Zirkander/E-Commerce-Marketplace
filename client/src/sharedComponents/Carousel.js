import React from 'react';
import '../css/Carousel.css';
import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
	return (
		<div className="col d-flex align-items-center justify-content-center">
			<Carousel className="mt-huge">
				<Carousel.Item>
					<img
						className="d-block w-100 mx-auto"
						src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
						alt="First slide"
					/>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100 mx-auto"
						src="https://assets2.mr-mag.com/wp-content/uploads/2019/05/Russell-Wilson-Amazon-Fashion.jpg"
						alt="Second slide"
					/>
				
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100 mx-auto"
						src="https://images.squarespace-cdn.com/content/v1/550b72b2e4b0c1da40f96d23/1502672089165-782XSTIVF9R351SHEGSO/CaptureNGingold_Rodd%2BGunn_170810_001.jpg?format=2500w"
						alt="Third slide"
					/>
					{/* <Carousel.Caption>
						<h3 className="capText">Carefully Crafted.</h3>
					</Carousel.Caption> */}
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default HomeCarousel;