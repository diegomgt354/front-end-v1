import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export const getCharacterById = async (id) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    return await response.json();

}

const ProfileDetailPage = () => {

    const[profile, setProfile] = useState(null);

    const params = useParams();

    useEffect(() => {
        getCharacterById(params.id)
        .then(profile => setProfile(profile));
        // .then(setPokemon);
    }, [params])

    return (
        <>

            <Link to='/profile' className="flex items-center justify-center px-4 h-10 me-3 text-base font-medium text-gray-500 
            bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 w-[150px]">
                <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                Return
            </Link>

            <div className='m-auto'></div>
            
            <article className='border rounded-lg bg-slate-100 mt-2 flex flex-col items-center p-3'>
                <div className='uppercase p-3 text-3xl'>#{params.id} {profile?.name}</div>
                <img className='w-[500px] h-[500px]' src={profile?.image} alt="" />
                <div className='capitalize'>Status: {profile?.status}</div>
                <div className='capitalize'>Species: {profile?.species}</div>
                <div className='capitalize'>Gender: {profile?.gender}</div>
            </article>
            {/* <pre>{JSON.stringify(profile, null, 2)}</pre>  */}
        </>
            

        
    )
}

export default ProfileDetailPage;