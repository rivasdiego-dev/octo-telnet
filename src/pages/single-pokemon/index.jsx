import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../not-found";
import { capitalize } from "../../utils";
import Types from "../../components/single-pokemon/Types";
import LoadingSpinner from "../../components/LoadingSpinner";

export default function SinglePokemonPage() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Pokemon not found: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setPokemon(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, [name]);

    if (loading) {
        return <LoadingSpinner size={'lg'} />;
    }

    return error ? (
        <NotFoundPage />
    ) : (
        <main className="h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 grid place-items-center">
            <div className="space-y-4 text-center">
                <h1 className="text-white font-bold text-5xl">{capitalize(pokemon?.name)}</h1>
                <img className="rounded-xl p-1 bg-white shadow-lg w-96" src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
                <Types types={pokemon?.types} />
                <Link to={'/pokemons'}>
                    <button className="px-4 py-2 mt-8 bg-white rounded-md shadow-md text-blue-700 font-bold hover:bg-blue-950 hover:text-white transition duration-300">
                        Regresar
                    </button>
                </Link>
            </div>
        </main>
    );
}
