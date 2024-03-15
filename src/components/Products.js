import { products } from '../resources/productsData'
import './Products.css'

function ProductCard({ product }) {

    let discountPrice = product.price - (product.price * product.discount / 100);

    return (
        <div className='card'>
            <h1>{product.name}</h1>
            <p className='price'>MRP: Rs{product.price}</p>
            {product.discount > 0 && <p className='price-discount'>-{product.discount}%  Rs{discountPrice}</p>}
            <p><button>Add to Cart</button></p>
        </div>
    )
}
export default function Products() {


    return (
        <>
            {/* <ProductCard product={products[0]}></ProductCard>
            <ProductCard product={products[1]}></ProductCard>
            <ProductCard product={products[2]}></ProductCard>
            <ProductCard product={products[3]}></ProductCard> */}
            {
                products.map((p) => <ProductCard key = {p.id} product={p} />)
            }
        </>
    );

}