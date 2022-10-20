import Link from 'next/link';
import styles from './../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.container + " container"}>
                <div className={styles.logo}>Thisislogo</div>
                <ul>
                    <li>
                        <Link href="/"><a>Home</a></Link>
                    </li>
                    <li>
                        <Link href="/about"><a>about</a></Link>
                    </li>
                    <li>
                        <Link href="/cart"><a>cart</a></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar