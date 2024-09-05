import Header from "../../components/Header"
import Footer from "../../components/Footer"
import Banner from "../../components/Banner"
import BannerCover from "../../assets/banner-home.png"
import Title from "../../components/Title"
import Card from "../../components/Card"


const Home = () => {
    return (
        <>
            <Header />
            <Banner image={BannerCover}/>
            <Title> Your Go-To Place for Storing Videos and Movies! </Title>
            <Card />
            <Footer />
        </>
    )
}

export default Home