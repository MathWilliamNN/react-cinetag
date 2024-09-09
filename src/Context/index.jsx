import { createContext, useContext, useState } from "react";

export const FavContext = createContext();
FavContext.displayName = "Context"

export default function ContextProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    return (
        <FavContext.Provider
            value={{ favorites, setFavorites }}>
            {children}
        </FavContext.Provider>
    )
}

export function useFavoriteContext() {

    const {favorites, setFavorites } = useContext(FavContext)
    let newList = [...favorites];

    function addAsFavorite(newFavorite) {

        const existingFavorite = favorites.some(item => item.id === newFavorite.id)

        if(!existingFavorite) {
            newList.push(newFavorite);
            return setFavorites(newList)
        }

        newList = favorites.filter((fav) => fav.id !== newFavorite.id);
        return setFavorites(newList)
    }
    // console.log(favorites)
    return {
        favorites, addAsFavorite
    }
}