import React from 'react';

const AppPokemon = ({pokemons}) => {

    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {pokemons.map(pokemon=>{

                const id = pokemon.url.split('/').at(-2)
                const pokemonImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                return (
                    <article className='border rounded-lg bg-slate-100 m-2 flex flex-col items-center' key={pokemon.url}>
                        <h3 className='text-center uppercase p-3'>#{id} - {pokemon.name}</h3>
                        <img src={pokemonImage} alt="" className='w-[160px] h-[160px]' />
                    </article>
                )
            })}
        </div>
    )
}

export default AppPokemon;