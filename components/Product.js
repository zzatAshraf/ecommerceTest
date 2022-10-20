import Image from "next/image";
import Link from "next/link";
import styles from './../styles/Product.module.css';

const Product = ({product}) => {
    const {title,price,image,id} = product;
    return (
        <div className={styles.product}>
            <div>
                <Image src={image} width="200" height="200" />
            </div>
            <ul>
                <li>{title}title</li>
                <li>{price}$</li>
            </ul>
            <Link href={`/products/${id}`}><a className='button'>More Details</a></Link>
        </div>
    )
}

export default Product