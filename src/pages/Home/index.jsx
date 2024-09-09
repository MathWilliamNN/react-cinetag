import Banner from "../../components/Banner"
import BannerCover from "../../assets/banner-home.png"
import Title from "../../components/Title"
import Cards from "../../components/Cards"
import movies from "../../mocks/db.json"


const Home = () => {
    return (
        <>
            <Banner image={BannerCover} />
            <Title> Your Go-To Place for Storing Videos and Movies! </Title>
            <Cards movies={movies} />
        </>
    )
}

export default Home