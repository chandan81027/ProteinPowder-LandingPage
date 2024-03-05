import styles from './HeroSection.module.css';
import protein from './proteinimage.png'
const HeroSection = () => {
return (
    <>
<div className={styles.title}>
    <h1 className={styles.supp}>SUPPLEMENTS / PROTEIN</h1>
    <h1 className={styles.van}><b>Vanguard</b></h1>
    <h1 className={styles.prot}><b>Whey Protein</b></h1>
    <p className={styles.para}>Guard Your Gains</p>
    </div>
    <div className={styles.description}>
            <h2 className={styles.text}><u>Description &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</u></h2>
            <h2 className={styles.text}><u>Nutrition  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+</u></h2>
            <h2 className={styles.text}><u>Ingredients &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</u></h2>
            <p className={styles.text}>Zoetstoffen(Sucralose)</p>
            <p className={styles.text}>Vanilla Flavour:Whey Protein Concentrate (Melk) (96%),</p>
            <p className={styles.text}>Emulagator(Soja Lecithine), Smaakstoffen,</p>
    </div>
    <div className={styles.image}>
<img src={protein} alt="proteinpowderimage"  />
    </div>
    <div className={styles.cornerdescription}>
    <div className={styles.font}>
    <h1 className={styles.price}>$24.99 USD</h1>
                <p className={styles.quantity}>Price for 1KG</p>
                <input type="text" placeholder="Select Flavour"/> <br />
                <input type="text" placeholder='Select Size' />
                <br />
                <button> <i className="fa-solid fa-check"></i>Add to Cart</button> <i className="fa-regular fa-heart"></i>
    </div>
                
    </div>
    </>

    
)
}

export default HeroSection
