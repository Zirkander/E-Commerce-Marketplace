import React from 'react';
import { Table } from 'react-bootstrap';
import '../css/ViewCart.css';

function ViewCart() {
	return (
		<div className="main-container">
			<heading>
				<h3>this is where the heading will go -------------------------- </h3>
			</heading>
			<body>
				<h4 style={{ marginLeft: '15%' }}>Cart</h4>
			</body>

			<div className="content-view-cart" style={{marginTop : "100px"}}>
				<Table striped hover size="sm">
					<thead>
						<tr>
							<th col span="3">
								Cart (3 items)
							</th>
						</tr>
					</thead>
					<tbody
						style={{
							borderTop: '1px solid black',
						}}
					>
						{/* ITEM 1 */}
						<tr>
							<td>
								<img className="cartImage" src="https://cdn.shopify.com/s/files/1/0197/9808/products/93ab88764d319b516e212f51003bee3d1e466981.jpg?v=1601927313" />
							</td>
							<td>
								<div className="mid-row">
									<p>Billy Reid Herringbone Terry LS Henley</p>
									<p>Long Sleeve Knit</p>
									<p>Size - M</p>
									<div className="cart-action">
										<button
											type="button"
											className="btn btn-link text-decoration-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-trash"
												viewBox="0 0 16 16"
											>
												<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
												<path
													fill-rule="evenodd"
													d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
												/>{' '}
											</svg>
											Remove
										</button>
										<div className="cart-action">
											<button
												type="button"
												className="btn btn-link text-decoration-none"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													class="bi bi-heart"
													viewBox="0 0 16 16"
												>
													<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
												</svg>{' '}
												Add to Wish List
											</button>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div
									className="cart-action count-change item-count"
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: '10px',
										border: '1px solid gray',
									}}
								>
									<button
										type="button"
										className="btn btn-link text-decoration-none"
									>
										{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="30"
											fill="currentColor"
											class="bi bi-cart-plus"
											viewBox="0 0 16 16"
										>
											<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
											<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</button>
									<h3>1</h3>
									<button
										type="button"
										className="btn btn-link text-decoration-none"
									>
										{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="30"
											fill="currentColor"
											class="bi bi-cart-dash"
											viewBox="0 0 16 16"
										>
											<path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
											<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</button>
								</div>
								<div>
									<h3
										className="text-center mt-3"
										style={{ fontSize: 35, fontStyle: 'italic' }}
									>
										<span
											style={{
												fontStyle: 'italic',
												fontSize: 20,
												verticalAlign: 'top',
											}}
										>
											$
										</span>
										98
									</h3>
								</div>
							</td>
							<td></td>
						</tr>

						{/* ITEM 2 */}
						<tr>
							<td>
								<img className="cartImage" src="https://cdn.shopify.com/s/files/1/0197/9808/products/0fd1b401d36e87cb045ee40be4053ab661296abc.jpg?v=1581715253" />
							</td>
							<td>
								<div className="mid-row">
									<p>
										Barbour Cooper Weather Comfort Water Proof Lightweight
										Jacket
									</p>
									<p>Outerwear</p>
									<p>Size - M</p>
									<div className="cart-action">
										<button
											type="button"
											className="btn btn-link text-decoration-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-trash"
												viewBox="0 0 16 16"
											>
												<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
												<path
													fill-rule="evenodd"
													d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
												/>{' '}
											</svg>
											Remove
										</button>
										<div className="cart-action">
											<button
												type="button"
												className="btn btn-link text-decoration-none"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													class="bi bi-heart"
													viewBox="0 0 16 16"
												>
													<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
												</svg>{' '}
												Add to Wish List
											</button>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div
									className="cart-action count-change item-count"
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: '10px',
										border: '1px solid gray',
									}}
								>
									<button
										type="button"
										className="btn btn-link text-decoration-none"
									>
										{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="30"
											fill="currentColor"
											class="bi bi-cart-plus"
											viewBox="0 0 16 16"
										>
											<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
											<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</button>
									<h3>1</h3>
									<button
										type="button"
										className="btn btn-link text-decoration-none"
									>
										{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="30"
											fill="currentColor"
											class="bi bi-cart-dash"
											viewBox="0 0 16 16"
										>
											<path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
											<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</button>
								</div>
								<div>
									<h3
										className="text-center mt-3"
										style={{ fontSize: 35, fontStyle: 'italic' }}
									>
										<span
											style={{
												fontStyle: 'italic',
												fontSize: 20,
												verticalAlign: 'top',
											}}
										>
											$
										</span>
										225
									</h3>
								</div>
							</td>{' '}
							<td></td>
						</tr>

						{/* ITEM 3 */}
						<tr>
							<td>
								<img className="cartImage" src="https://cdn.shopify.com/s/files/1/0197/9808/products/6c2279ee8f3864e3fe9f53e04e9880e950690d09.jpg?v=1625369228" />
							</td>
							<td>
								<div className="mid-row">
									<p>
										Stance Hyper Stripe Mid Cushion Combed Cotton Blend Infiknit
										Socks
									</p>
									<p>Accessories</p>
									<p>Size - L</p>
									<div className="cart-action">
										<button
											type="button"
											className="btn btn-link text-decoration-none"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												fill="currentColor"
												class="bi bi-trash"
												viewBox="0 0 16 16"
											>
												<path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
												<path
													fill-rule="evenodd"
													d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
												/>{' '}
											</svg>
											Remove
										</button>
										<div className="cart-action">
											<button
												type="button"
												className="btn btn-link text-decoration-none"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="16"
													height="16"
													fill="currentColor"
													class="bi bi-heart"
													viewBox="0 0 16 16"
												>
													<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
												</svg>{' '}
												Add to Wish List
											</button>
										</div>
									</div>
								</div>
							</td>
							<td>
								<div
									className="cart-action count-change item-count"
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										borderRadius: '10px',
										border: '1px solid gray',
									}}
								>
									<button
										type="button"
										className="btn btn-link text-decoration-none"
									>
										{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="30"
											fill="currentColor"
											class="bi bi-cart-plus"
											viewBox="0 0 16 16"
										>
											<path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
											<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</button>
									<h3>2</h3>
									<button
										type="button"
										className="btn btn-link text-decoration-none"
									>
										{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="25"
											height="30"
											fill="currentColor"
											class="bi bi-cart-dash"
											viewBox="0 0 16 16"
										>
											<path d="M6.5 7a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4z" />
											<path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</button>
								</div>
								<div>
									<h3
										className="text-center mt-3"
										style={{ fontSize: 35, fontStyle: 'italic' }}
									>
										<span
											style={{
												fontStyle: 'italic',
												fontSize: 20,
												verticalAlign: 'top',
											}}
										>
											$
										</span>
										32
									</h3>
								</div>
							</td>{' '}
							<td></td>
						</tr>

						<tr>
							<td colSpan="2">
								<h3
									className="text-center mt-3"
									style={{
										fontSize: 35,
										fontStyle: 'italic',
										marginLeft: '70%',
										height: 20,
									}}
								>
									<div>
										Total:
										<span
											style={{
												marginLeft: 25,
												fontStyle: 'italic',
												fontSize: 20,
												verticalAlign: 'top',
											}}
										>
											$
										</span>
										355
									</div>
								</h3>
							</td>
							<td>
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									<button
										type="button"
										className="btn btn-link text-decoration-none"
									>
										{' '}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="40"
											height="40"
											fill="currentColor"
											class="bi bi-bag-check"
											viewBox="0 0 16 16"
										>
											<path
												fill-rule="evenodd"
												d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
											/>
											<path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
										</svg>
										<h5 style={{ marginTop: 7 }}>Checkout!</h5>
									</button>
								</div>
							</td>
							<td></td>
						</tr>
					</tbody>
				</Table>
			</div>
		</div>
	);
}
export default ViewCart;