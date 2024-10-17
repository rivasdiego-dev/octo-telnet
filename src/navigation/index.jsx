import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";
import PokemonsPage from "../pages/pokemons";
import NotFoundPage from "../pages/not-found";
import SinglePokemonPage from "../pages/single-pokemon";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/pokemons",
        element: <PokemonsPage />,
    },
    {
        path: "/pokemons/:name",
        element: <SinglePokemonPage />,
    },
    {
        path: "*",
        element: <NotFoundPage />,
    },
]);

export default router;