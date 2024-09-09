import Banner from "../../components/Banner"
import BannerCover from "../../assets/banner-player.png"
import Title from "../../components/Title"
import { useParams } from "react-router-dom";
import movies from "../../mocks/db.json"
import styles from "./Player.module.css"
import NotFound from "../../pages/NotFound";


const Player = () => {

    const parameters = useParams();
    const movie = movies.find((movie) => {
        return movie.id === Number(parameters.id)
    })


    return (

        !movie ? <NotFound/>
        :
        <>
            <Banner image={BannerCover} />
            <Title> Player </Title>
            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={movie.link}
                    title={movie.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </section>
        </>
    )
}

export default Player