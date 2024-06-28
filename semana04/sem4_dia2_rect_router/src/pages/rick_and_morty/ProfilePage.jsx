import { useEffect, useState } from 'react'
import ProfilePaginationPage from './ProfilePaginationPage';
import ProfileCharactersPage from './ProfileCharactersPage';

const POKEAPI_URL = "https://rickandmortyapi.com/api/character";

const ProfilePage = () => {

    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => { // ejecuta una vez useEffect(funcion, array de dependencias)
        fecthCharacters(page);
    
    }, [page])

    const fecthCharacters = async (page = 1) => {

        // https://rickandmortyapi.com/api/character/?page=2

        const response = await fetch(`${POKEAPI_URL}?page=${page}`);
        const data = await response.json();
        setCharacters(data.results);
        setTotal(data.info.pages);
    }

    const handlePreviousPage = () => {
        (page > 1) ? setPage(page-1) : setPage(1)
    }

    const handleNextPage = () => {
        (page < 42) ? setPage(page+1) : setPage(1)
    }

    return (
        <>
        <main className='container mx-auto border p-4'>

            <h1 className='text-5xl font-bold text-center mb-3'>The Rick and Morty API</h1>

            <ProfileCharactersPage
                characters={characters}
            />


            {/* Paginacion */}
            <ProfilePaginationPage
                page={page}
                total={total}
                onHandlePreviousPage={handlePreviousPage}
                onHandleNextPage={handleNextPage}
            />

        </main>
        </>
    )
}

export default ProfilePage;
