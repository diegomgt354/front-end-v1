import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const getPokemonById = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await response.json();

}

const PokemonDetailPage = () => {

    const [pokemon, setPokemon] = useState(null);

    const params = useParams();

    useEffect(() => {
        getPokemonById(params.id)
        .then(pokemon => setPokemon(pokemon));
        // .then(setPokemon);
    }, [params])

    return (
        <>

            <Link to='/pokedex' className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 
            bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 w-[150px]">
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Return
            </Link>

            <div className='m-auto'></div>
            
            <article className='border rounded-lg bg-slate-100 mt-2 flex flex-col items-center'>
                <div className='uppercase'>#{params.id} {pokemon?.name}</div>
                <img className='w-[500px] h-[500px]' src={pokemon?.sprites?.other?.dream_world?.front_default} alt="" />
                <div className='capitalize'>Types: {pokemon?.types.map(type => type.type.name).join(', ')}</div>
            </article>

            
            {/* <pre>{JSON.stringify(pokemon, null, 2)}</pre> */}

        </>
    )
}

export default PokemonDetailPage;