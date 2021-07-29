import React from 'react';
import '../css/Carousel.css';
import { Carousel } from 'react-bootstrap';

function HomeCarousel() {
	return (
		<div className="col d-flex align-items-center justify-content-center">
			<Carousel>
				<Carousel.Item>
					<img
						className="d-block w-100 mx-auto"
						src="https://cdn.shopify.com/s/files/1/0197/9808/collections/banner_rodd_gunn_fall_opt.jpg?v=1477417307"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>Carefully Crafted.</h3>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100 mx-auto"
						src="https://www.roddandgunn.com/on/demandware.static/-/Library-Sites-rodd-shared-library/default/dwdd6fbcab/00%20ANZ/AW18/STORE%20SEARCH%20FOOTER/RG_SEARCH_STORE_FOOTER_AW18.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img
						className="d-block w-100 mx-auto"
						src="https://images.squarespace-cdn.com/content/v1/550b72b2e4b0c1da40f96d23/1502672089165-782XSTIVF9R351SHEGSO/CaptureNGingold_Rodd%2BGunn_170810_001.jpg?format=2500w"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default HomeCarousel;