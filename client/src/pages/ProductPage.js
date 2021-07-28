import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import Loading from '../sharedComponents/Loading';

const ProductPage = (props) => {
    let { id } = props.id;
    const { fetchProductWithId, addItemToCheckout, product } = useContext(ShopContext)
    // const [product, setProduct] = useState(null)
    // async function fetchData() {
    //     const fetchedProduct = await fetchProductWithId(id)
    //     setProduct(fetchedProduct)
    // }

    useEffect(() => {
        fetchProductWithId(id)
        
        // fetchData()
        return () => {
            // setProduct(null)
        };
    }, [ fetchProductWithId, id])

    //if (!product.title) return <Loading />
    return (
        <div>
            <div>
                <div>
                    <img src={product.images[0].src}/>
                </div>
                <div>
                    <p>{product.title}</p>
                    <p>${product.variants[0].price}</p>
                    <p>{product.description}</p>
                    <button onClick={() => addItemToCheckout(product.variants[0].id, 1)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage