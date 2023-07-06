import { createContext, useState } from "react";

// this FavoritesContext is the initial value
// these funcs are only optional, it helps with autocomplete with vscode
const FavoritesContext = createContext({ 
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteEvents) => {},
    removeFavorite: (eventId) => {},
    itemIsFavorite: (eventId) => {}
})

export const FavoritesContextProvider = ({ children }) => {
    const [userFavorites, setUserFavorites] = useState([])

    const handleAddFavorite = (favoriteEvents) => {
        // how to update state based on previous state
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.concat(favoriteEvents)
        })
    }
    const handleRemoveFavorite = (eventId) => {
        setUserFavorites((previousUserFavorites) => {
            return previousUserFavorites.filter(event => event.id !== eventId)
        })
    }

    const itemIsFavoriteHanlder = (eventId) => { // allows us to check if a given item is a favorite
        // .some() returns true/false is the condition returns true/false
        return userFavorites.some((event) => event.id === eventId)
    }

    const context = { // this context will take the updated data and pass it to value
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: handleAddFavorite,
        removeFavorite: handleRemoveFavorite,
        itemIsFavorite: itemIsFavoriteHanlder
    }

    return (
        // using the value prop lets us pass down data that updates across components
        <FavoritesContext.Provider value={context}> 
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesContext;
