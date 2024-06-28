import { useEffect, useState } from 'react'
import AppPagination from './components/AppPagination';
import AppPokemon from './components/AppPokemon';

const POKEAPI_URL = "https://pokeapi.co/api/v2/pokemon";

const App = () => {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit] = useState(10);

  useEffect(() => { // ejecuta una vez useEffect(funcion, array de dependencias)
    fecthPokemons(page, limit);
  }, [page])

  const fecthPokemons = async (page = 1, limit = 10) => {

    // https://pokeapi.co/api/v2/pokemon?offset=10&limit=10

    const offset = (page-1)*limit;
    const response = await fetch(`${POKEAPI_URL}?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    setPokemons(data.results);
    setTotal(data.count);
  }

  const handlePreviousPage = () => {
    (page > 1) ? setPage(page-1) : setPage(1)
  }

  const lastPage = Math.ceil(total/limit);
  const handleNextPage = () => {
    (page < lastPage) ? setPage(page+1) : setPage(1)
  }

  return (
    <>
      <main className='container mx-auto border p-4'>

        <h1 className='text-3xl font-bold underline text-center'>Pokedex</h1>
          {/* <pre>{JSON.stringify(pokemons, null, 2)}</pre> */}

        {/* Pokemon list */}
        <AppPokemon
          pokemons={pokemons}
        />

        {/* Pagination */}
        <AppPagination
          page={page}
          lastPage={lastPage}
          onHandlePreviousPage={handlePreviousPage}
          onHandleNextPage={handleNextPage}
        />
      </main>
    </>
  )
}

export default App;
