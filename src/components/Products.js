import { products } from '../resources/productsData'
import './Products.css'

function Product({ product }) {

    let discountPrice = product.price - (product.price * product.discount / 100);

    return (
        <div className='card'>
            <h1>{product.name}</h1>
            <p className='price'>MRP: Rs{product.price}</p>
            <p className='price-discount'>-{product.discount}%  Rs{discountPrice}</p>
            <p><button>Add to Cart</button></p>
        </div>
    )
}
export default function Products() {


    return (
        <>
            <Product product={products[0]}></Product>
            <Product product={products[1]}></Product>
        </>
    );

}