import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../Context";
import Title from "../Title";
import styles from "./Card.module.css"
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

const Cards = ({ movies }) => {
    const { favorites, addAsFavorite } = useFavoriteContext();

    return (
        movies.length !== 0 ?
            <div className={styles.container} >
                {movies.map(movie => {
                    const isFavorite = favorites.some((fav) => fav.id === movie.id);

                    return (
                        <div className={styles.card_container} key={movie.id}>
                            <Link className={styles.link} to={`/${movie.id}`}>
                                <img src={movie.cover} />
                                <h2> {movie.title} </h2>
                            </Link>
                            <div>
                                <button
                                    className={styles.favorite_button}
                                    onClick={() => { addAsFavorite(movie) }}
                                >
                                    {isFavorite ? <MdFavorite size={'25'} /> : <MdFavoriteBorder size={'25'} />}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            :
            <Title> Your favorites list is empty. Start adding your top picks from the home screen! </Title>
    )
}

export default Cards;
