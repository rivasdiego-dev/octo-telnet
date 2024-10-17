import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchPokemon() {

    const [pokemon, setPokemon] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pokemon) return;
        navigate(`/pokemons/${pokemon.toLowerCase()}`);
    }

    return (
        <div className='w-96'>
            <form onSubmit={handleSubmit} className='flex items-center justify-evenly mb-6 w-full'>
                <input
                    type="text"
                    placeholder="Buscar Pokemon"
                    className="bg-white px-2 py-2 rounded"
                    value={pokemon}
                    onChange={(e) => setPokemon(e.target.value)}
                />

                <button
                    className='bg-blue-500 h-fit w-fit text-white px-4 py-2 rounded'
                    type="submit"
                >
                    Buscar
                </button>

            </form>
        </div>
    )
}
