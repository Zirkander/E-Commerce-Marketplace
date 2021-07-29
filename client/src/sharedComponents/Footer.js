import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import '../css/Footer.css';

function Footer() {
	return (
		<div className="main-footer">
			<div className="container">
				<div className="row">
					{/* Column 1 */}
					<div className="col">
						<h6 className="foot-title">Contact Us</h6>
						<hr />
						<ul className="list-unstyled">
							<li className="list-title">Address</li>
							<li>9 Lake Street, Kirkland, WA 98033</li>
							<li className="list-title">Email</li>
							<li>info@seattlethread.com</li>
							<li className="list-title">Phone</li>
							<li>(425) 202-7732</li>
						</ul>
					</div>
					{/* Column 2 */}
					<div className="col">
						<h6 className="foot-title">Information</h6>
						<hr />
						<ul className="list-unstyled">
							<li>
								<a href="#">About Us</a>
							</li>
							<li>
								<a href="#">Shipping</a>
							</li>
							<li>
								<a href="#">Returns</a>
							</li>
							<li>
								<a href="#">Terms of Service</a>
							</li>
							<li>
								<a href="#">Privacy</a>
							</li>
						</ul>
					</div>
					{/* Column 3 */}
					<div className="col">
						<h6 className="foot-title">Main Menu</h6>
						<hr />
						<ul className="list-unstyled">
							<li>
								<a href="#">Home</a>
							</li>
							<li>
								<a href="#">Brands</a>
							</li>
							<li>
								<a href="#">Gift Cards</a>
							</li>
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>
					{/* Column 4 */}
					<div className="col">
						<h6 className="foot-title">Email Signup</h6>
						<hr />
						<ul className="list-unstyled">
							<li>Signup for email updates</li>
							<br></br>
							<li>
								<div>
									<FloatingLabel
										controlId="floatingInput"
										label="Email address"
										className="mb-2"
										style={{ color: 'black' }}
									>
										<Form.Control type="email" placeholder="name@example.com" />
									</FloatingLabel>
									<Button variant="dark">Join</Button>{' '}
								</div>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div className="row">
					<p className="col-sm text-center" style={{ fontSize: 12 }}>
						Copyright &copy; {new Date().getFullYear()} Seattle Thread Company |
						Thank You fo Supporting Local Business
					</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;
