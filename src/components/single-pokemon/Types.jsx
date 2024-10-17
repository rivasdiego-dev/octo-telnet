/* eslint-disable react/prop-types */

export default function Types({ types }) {

    const typeLabel = {
        normal: "Normal",
        fighting: "Lucha",
        flying: "Volador",
        poison: "Veneno",
        ground: "Tierra",
        rock: "Roca",
        bug: "Bicho",
        ghost: "Fantasma",
        steel: "Acero",
        fire: "Fuego",
        water: "Agua",
        grass: "Planta",
        electric: "Eléctrico",
        psychic: "Psíquico",
        ice: "Hielo",
        dragon: "Dragón",
        dark: "Siniestro",
        fairy: "Hada",
        unknown: "Desconocido",
        shadow: "Sombra",
    }

    const typeColors = {
        normal: "bg-gray-300 hover:bg-gray-400 text-gray-800",
        fighting: "bg-red-500 hover:bg-red-600 text-white",
        flying: "bg-blue-300 hover:bg-blue-400 text-gray-800",
        poison: "bg-purple-500 hover:bg-purple-600 text-white",
        ground: "bg-yellow-300 hover:bg-yellow-400 text-gray-800",
        rock: "bg-yellow-500 hover:bg-yellow-600 text-white",
        bug: "bg-green-500 hover:bg-green-600 text-white",
        ghost: "bg-indigo-500 hover:bg-indigo-600 text-white",
        steel: "bg-gray-500 hover:bg-gray-600 text-white",
        fire: "bg-red-500 hover:bg-red-600 text-white",
        water: "bg-blue-500 hover:bg-blue-600 text-white",
        grass: "bg-green-500 hover:bg-green-600 text-white",
        electric: "bg-yellow-500 hover:bg-yellow-600 text-white",
        psychic: "bg-purple-500 hover:bg-purple-600 text-white",
        ice: "bg-sky-300 hover:bg-blue-300 text-gray-800",
        dragon: "bg-red-800 hover:bg-red-900 text-white",
        dark: "bg-gray-800 hover:bg-gray-900 text-white",
        fairy: "bg-pink-500 hover:bg-pink-600 text-white",
        unknown: "bg-gray-500 hover:bg-gray-600 text-white",
        shadow: "bg-gray-800 hover:bg-gray-900 text-white",
    }

    return (
        <div>
            <h2 className="text-white font-bold text-2xl">Tipo</h2>
            <ul className="flex justify-center space-x-4 mt-4">
                {types?.map((type) => (
                    <li key={type.type.name} className={"px-4 py-2 rounded-md shadow-md font-bold transition duration-300 " + typeColors[type.type.name]}>
                        {typeLabel[type.type.name]}
                    </li>
                ))}
            </ul>
        </div >
    )
}
