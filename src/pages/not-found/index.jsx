import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <main className="h-screen bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 grid place-items-center">
            <div className="space-y-4 text-center">
                <h1 className="text-white font-bold text-5xl">Pikachu no pudo encontrar al pokemon :(</h1>
                <img className="rounded-xl p-1 bg-white shadow-lg mx-auto" src="https://media3.giphy.com/media/12Bpme5pTzGmg8/giphy.gif" alt="" />
                <p className="text-white">Ups! Parece que el pokemon que buscaste no existe.</p>
                <Link to={'/pokemons'}>
                    <button className="px-4 py-2 mt-8 bg-white rounded-md shadow-md text-blue-700 font-bold hover:bg-blue-950 hover:text-white transition duration-300">
                        Regresar
                    </button>
                </Link>
            </div>
        </main>
    );
};

export default NotFoundPage;
