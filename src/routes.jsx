import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import Player from "./pages/Player"
import NotFound from "./pages/NotFound"
import { BrowserRouter, Route, Routes } from "react-router-dom" 
import DefaultPage from "./pages/DefaultPage"




const AppRoutes = () => {
    return (
        <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<DefaultPage />}>
                            <Route index element={<Home />} />
                            <Route path="favorites" element={<Favorites />} />
                            <Route path=":id" element={<Player />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes