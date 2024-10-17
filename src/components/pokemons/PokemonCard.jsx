import { useEffect, useState } from "react";
import { capitalize } from "../../utils";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";

const PokemonCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { url } = props;
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setPokemon(data);
            setLoading(false);
        };
        fetchPokemon();
    }, [url]);

    return (
        <div className={`${loading ? 'bg-transparent' : 'bg-white'} rounded shadow relative`}>
            {
                loading ?
                    <>
                        <LoadingSpinner size={'lg'} />
                    </>
                    :
                    <>
                        <Link to={`${pokemon.name}`}>
                            <figure className="">
                                <img className="w-32" src={pokemon.sprites.front_default} alt={pokemon.name} />
                            </figure>
                        </Link>
                        <h3 className="absolute bottom-0 p-1 text-xl font-bold tracking-tight text-blue-500 text-center w-full bg-indigo-400/40  ">
                            {capitalize(pokemon.name)}
                        </h3>
                    </>
            }
        </div>
    );
};

export default PokemonCard;
