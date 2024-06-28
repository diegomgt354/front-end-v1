import React from 'react'
import { Link } from 'react-router-dom';

const ProfileCharactersPage = ({characters}) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-5 gap-1">

            {characters.map(character=>{

                const characterImage = character.image;

                return (
                
                    <Link to={`/character/${character.id}`} key={character.url}>

                        <article className='border rounded-lg bg-slate-100 m-2 flex flex-col items-center hover:bg-slate-200'  key={character.url}>
                            <div className='h-[80px] items-center flex flex-col'>
                                <h3 className='font-bold text-center uppercase'>{character.name}</h3>
                                <p>{character.species} - {character.gender}</p>
                            </div>
                            <img src={characterImage} alt="" className='w-[160px] h-[160px] mb-2' />
                        </article>
                
                    </Link>
                )
            })}
        </div>
    )
}

export default ProfileCharactersPage