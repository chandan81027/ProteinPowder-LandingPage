import styles from './NavBar.module.css';
const NavBar = () => {
return (
    <div  className={styles.NavBar}>
        <ul className={styles.list}>
            <li className={styles.itemList}>Home</li>
            <li className={styles.itemList}>Products</li>
            <li className={styles.itemList}>Blog</li>
            <li className={styles.itemList}>Contacts</li>
            <div className={styles.end}>
            <li className={styles.itemLast}> <i className="fa-regular fa-heart"></i>Saved</li>
            <li className={styles.itemLast}> <i className="fa-solid fa-cart-shopping"></i>Cart</li>
            <li className={styles.itemLast}> <i className="fa-regular fa-user"></i>Account</li>
            </div>
        
        </ul>
    </div>
)
}

export default NavBar
