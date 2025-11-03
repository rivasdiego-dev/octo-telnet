import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../not-found";
import { capitalize } from "../../utils";
import Types from "../../components/single-pokemon/Types";
import LoadingSpinner from "../../components/LoadingSpinner";
import DescriptionCard from "../../components/single-pokemon/DescriptionCard";

export default function SinglePokemonPage() {
    const { name } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [flavorTexts, setFlavorTexts] = useState(null);
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

        fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Pokemon species not found: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                setFlavorTexts(data.flavor_text_entries);
            })
            .catch((error) => {
                setError(error.message);
            });

    }, [name]);

    if (loading) {
        return <LoadingSpinner size={'lg'} />;
    }

    return error ? (
        <NotFoundPage />
    ) : (
        <main className="min-h-dvh h-fit bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 grid place-items-center">
            <div className="space-y-4 text-center">
                <h1 className="text-white font-bold text-5xl">{capitalize(pokemon?.name)}</h1>
                <img
                    className="rounded-xl p-1 bg-white shadow-lg w-96 max-w-full mx-auto block"
                    src={pokemon?.sprites.other['official-artwork'].front_default}
                    alt={pokemon?.name || ''}
                />
                <div className="flex justify-center">
                    <Types types={pokemon?.types} />
                </div>

                <div className="text-white bg-blue-900 bg-opacity-50 p-4 rounded-md shadow-md">
                    {flavorTexts ? (() => {
                        const spanish = flavorTexts.filter(ft => ft.language?.name === 'es');
                        if (spanish.length === 0) return <p>No description available.</p>;

                        return spanish.map((ft, idx) => (

                            <DescriptionCard
                                key={idx}
                                description={ft.flavor_text.replace(/\f/g, ' ')}
                                game={ft.version?.name.replace(/-/g, ' ')}
                            />
                        ));
                    })() : <p>No description available.</p>}
                </div>

                <Link to={'/pokemons'}>
                    <button className="px-4 py-2 mt-8 bg-white rounded-md shadow-md text-blue-700 font-bold hover:bg-blue-950 hover:text-white transition duration-300">
                        Regresar
                    </button>
                </Link>
            </div>
        </main>
    );
}
