import BannerCover from "../../assets/banner-favoritos.png"
import Banner from "../../components/Banner"
import Cards from "../../components/Cards"
import Title from "../../components/Title"
import { useFavoriteContext } from "../../Context"


const Favorites = () => {
    const { favorites } = useFavoriteContext();

    return (
        <>
            <Banner image={BannerCover} />
            <Title> My favorites </Title>
            <Cards movies={favorites}/>
        </>
    )
}

export default Favorites    