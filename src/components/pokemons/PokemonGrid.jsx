import { useCallback, useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import LoadingSpinner from '../LoadingSpinner';

export default function PokemonGrid() {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [nextPage, setNextPage] = useState('https://pokeapi.co/api/v2/pokemon?limit=20'); // Adjust the limit as needed

    const fetchPokemons = useCallback(async (url) => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setPokemons((prevPokemons) => [...prevPokemons, ...data.results]);
            setNextPage(data.next);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching Pokemon:', error);
            setLoading(false);
        }
    }, []);

    const handleScroll = useCallback(() => {
        const container = document.getElementById('container')

        if (container) {
            const { scrollTop, clientHeight, scrollHeight } = container;

            if (scrollTop + clientHeight >= scrollHeight - 10) {
                if (nextPage) {
                    setLoading(true);
                    fetchPokemons(nextPage);
                }
            }
        }
    }, [fetchPokemons, nextPage]);



    useEffect(() => {
        fetchPokemons('https://pokeapi.co/api/v2/pokemon?limit=20');
    }, [fetchPokemons]);

    useEffect(() => {
        const container = document.getElementById('container')
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <>
            <section id='container' className='flex flex-wrap gap-12 justify-center sm:max-w-[50%] max-h-[60%] overflow-y-auto'>
                {pokemons.map((pokemon, index) => (
                    <PokemonCard key={index} url={pokemon.url} />
                ))}
                {loading && <LoadingSpinner size={'lg'} />}
            </section>
        </>
    );
}
