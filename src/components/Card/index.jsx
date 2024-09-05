import styles from "./Card.module.css"
import { MdFavoriteBorder } from "react-icons/md";
import movies from "../../mocks/db.json"
// <GrFavorite />

const movie_src = 'https://caelum-online-public.s3.amazonaws.com/2802-react-praticando/img2.png';
const movie_title = "O labirinto do Logcat";
const movie_link = "https://www.youtube.com/embed/ypvGqZGJBls";

const Card = () => {
    return(
        <div className={styles.container}>
            <img src={movie_src}/>
            <div>
                <h2> {movie_title} </h2>
                <button className={styles.favorite_button} > <MdFavoriteBorder size={'25'}/> </button>
            </div>
        </div>
    )
}

export default Card