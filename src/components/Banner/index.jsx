
import styles from "./Banner.module.css"
const Banner = ({ image }) => {
    return (
        <div className={styles.cover}
            style={{ backgroundImage: `url(${image}` }}
        >
            
        </div>
    )
}

export default Banner
