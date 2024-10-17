import PokemonGrid from '../../components/pokemons/PokemonGrid';
import SearchPokemon from '../../components/pokemons/SearchPokemon';
import './style.css';

export default function PokemonsPage() {
    return (
        <main>
            <h1 className="text-center mb-8 font-bold sm:text-3xl text-2xl drop-shadow-2xl text-white">
                POKEMONS
            </h1>

            <SearchPokemon />

            <PokemonGrid />

        </main>
    )
}