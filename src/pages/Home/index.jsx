import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import BannerCover from "../../assets/banner-home.png"

const Home = () => {
    return (
        <>
            <Header />
            <Banner image={BannerCover}/>
            <Footer />
        </>
    )
}

export default Home