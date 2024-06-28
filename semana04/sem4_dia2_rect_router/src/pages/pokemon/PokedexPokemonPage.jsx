import React from 'react';
import { Link } from 'react-router-dom';

const PokedexPokemonPage = ({pokemons}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-1">

      {pokemons.map(pokemon=>{

          const id = pokemon.url.split('/').at(-2)
          const API_POKEMON = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
          const pokemonImageDefault = `${API_POKEMON}/other/official-artwork/${id}.png`
          const pokemonImage = `${API_POKEMON}/versions/generation-v/black-white/animated/${id}.gif`
          const pokemonImageBack = `${API_POKEMON}/versions/generation-v/black-white/animated/back/${id}.gif`

          return (
              <Link to={`/pokemon/${id}`} key={pokemon.url}>
          
                  <article className='border rounded-lg bg-slate-100 m-2 flex flex-col items-center hover:bg-slate-200 pb-4' key={pokemon.url}>
                    <h3 className='font-bold text-center uppercase p-3'>#{id} - {pokemon.name}</h3>
                    <img src={pokemonImageDefault} alt="" className='w-[160px] h-[160px]' />
                    <div className='items-center flex gap-3'>
                      <img src={pokemonImage} alt="" className='w-[60px] h-[60px]' />
                      <img src={pokemonImageBack} alt="" className='w-[60px] h-[60px]' />
                    </div>
                  </article>

              </Link>
          )
      })}
    </div>
  )
}

export default PokedexPokemonPage;