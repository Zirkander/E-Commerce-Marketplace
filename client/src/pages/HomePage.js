import React, { useContext, useEffect }  from 'react'
import { Link } from '@reach/router';
import { ShopContext } from '../context/shopContext'
import Loading from '../sharedComponents/Loading'
import Client from "shopify-buy";

const HomePage = () => {
    const {fetchAllProducts, products} = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
        return () => {
            // cleanup
        };
    }, [fetchAllProducts])

    if (!products) return <Loading />
    return (
        <div>
            <div>
                {products.map(product => (
                    <div key={product.id} size="3" >
                        <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <div >
                                <div
                                    >
                                </div>
                                <img src={ product.images[0].src}/>
                                <p>{product.title}</p>
                                <p>${product.variants[0].price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default HomePage