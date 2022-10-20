import Head from "next/head";
import Image from "next/image";
import styles from './../../styles/single.module.css';
const singleProduct = ({products}) => {
    // const {title,price,description,category,image} = product;
    return (<div className={`${styles.Product} container`}>
        <Head>
            <title>{products.title}</title>
        </Head>
        <div><Image src={products.image} width="300" height="500" /></div>
        <div>
            <h2>{products.title}</h2>
            <h3>{products.category}</h3>
            <h1>{products.price}</h1>
            <p>{products.description}</p>
        </div>
    </div>)
};

export default singleProduct; 

export async function getStaticPaths() {
    const req = await fetch("https://fakestoreapi.com/products");
    const products = await req.json();
    const paths= products.map(product=>{
        return {
            params:{id:product.id.toString()}
        }
    })

    return{
        paths,
        fallback:false
    };
}


export async function getStaticProps(context) {
    const id = context.params.id;
    const req = await fetch("https://fakestoreapi.com/products/" + id);
    const products = await req.json();
    return {
        props:{products}
    }
}

