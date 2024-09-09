import Container from "../../components/Container"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import ContextProvider from "../../Context"
import { Outlet } from "react-router-dom"


const DefaultPage = () => {
    return(
        <main>
            <Header/>
                <ContextProvider>
                    <Container>
                        <Outlet/>
                    </Container>
                </ContextProvider>
                <Footer/>
        </main>
    )
}

export default DefaultPage