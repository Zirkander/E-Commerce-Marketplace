import React, { useContext, useEffect } from 'react';
import { Link } from '@reach/router';
import { ShopContext } from '../context/shopContext';
import Loading from '../sharedComponents/Loading';
import Client from 'shopify-buy';
import { Image, Container, Row, Col, Carousel } from 'react-bootstrap';
import logo1 from '../imgs/logoSeattle1.jpeg';
import knit from '../imgs/seattle-knit.jpeg';
import pant from '../imgs/seattle-pants.jpeg';
import watch from '../imgs/seattle-watch.jpeg';
import blazer from '../imgs/seattle-blazer.jpeg';
import model from '../imgs/seattle-model.jpeg';
import shirt from '../imgs/seattle-Shirt4.jpeg';
import model1 from '../imgs/seattle-model2.jpeg';
import jeans from '../imgs/seattle-jeans.jpeg';
import jacketImg from '../imgs/manInJacket.jpg';
import man_in_shirt from '../imgs/man_in_shirt.jpg';
import HomeCarousel from '../sharedComponents/Carousel';
import '../App.css';

const HomePage = () => {
	const { fetchAllProducts, products } = useContext(ShopContext);

	useEffect(() => {
		fetchAllProducts();
		return () => {
			// cleanup
		};
	}, [fetchAllProducts]);

	if (!products) {
		return <Loading />;
	}
	return (
		<>
			<HomeCarousel />
			<h1 className="mt-5 text-center font-Nato Sans">
				Confidence in Every Situation.
			</h1>
			<h3 className="text-center mt-3 font-Nato Sans">
				Independently Owned. Carefully Curated. Exceptional Quality.
			</h3>
			<Container id="homePageImg">
				<Row className="justify-content-md-center">
					<Col>
						<img src={jacketImg} alt="" className="img-fluid"></img>
					</Col>
				</Row>
			</Container>
			<Container className="mt-5">
				<Row className="mt-5">
					<Col>
						<img className="homeImg" src={jeans} alt=""></img>{' '}
						<a className="toCenter" href="">
							Jeans
						</a>{' '}
					</Col>
					<Col>
						<img className="homeImg" src={pant} alt=""></img>{' '}
						<a className="toCenter" href="">
							Pants
						</a>{' '}
					</Col>
					<Col>
						<img className="homeImg" src={blazer} alt=""></img>{' '}
						<a className="toCenter" href="">
							Blazers
						</a>{' '}
					</Col>
					<Col>
						<img className="homeImg" src={shirt} alt=""></img>{' '}
						<a className="toCenter" href="">
							Shirt
						</a>{' '}
					</Col>
				</Row>
				<Row className="mt-4">
					<Col>
						<img className="homeImg" src={watch} alt=""></img>{' '}
						<a className="toCenter more" href="">
							Accessories
						</a>{' '}
					</Col>
					<Col>
						<img className="homeImg" src={model} alt=""></img>{' '}
						<a className="toCenter" href="">
							Taylored
						</a>{' '}
					</Col>
					<Col>
						<img className="homeImg" src={knit} alt=""></img>{' '}
						<a className="toCenter" href="">
							Knits
						</a>{' '}
					</Col>
					<Col>
						<img className="homeImg" src={model1} alt=""></img>{' '}
						<a className="toCenter" href="">
							Jackets
						</a>{' '}
					</Col>
				</Row>
			</Container>
			<section>
				<Container>
					<Col>
						<Image className="mt-5 mb-5" src={logo1} fluid />
						<a className="fs-1 blog" href="/blogs">
							Blog
						</a>
					</Col>
				</Container>
			</section>
		</>
	);
};

export default HomePage;
