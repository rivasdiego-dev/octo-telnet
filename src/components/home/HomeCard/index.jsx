
import { Link } from 'react-router-dom'
import './style.css'

export default function HomeCard() {
    return (
        <div className="main-card">
            <section>
                <h1 className="font-bold sm:text-3xl text-2xl">
                    PokeAPI Example Page
                </h1>
                <p className="text-gray-800 italic font-thin">
                    This is a simple example page that uses the PokeAPI to display a list of pokemons.
                </p>
            </section>

            <section>
                <img className="w-1/4 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/800px-Pok%C3%A9_Ball_icon.svg.png" alt="" />

                <p className="italic text-slate-700 mb-8">
                    This page is built using React, TailwindCSS, and Vite.
                </p>
            </section>

            <Link to="pokemons" >
                <button>
                    POKEMONS
                </button>
            </Link>
        </div>
    )
}