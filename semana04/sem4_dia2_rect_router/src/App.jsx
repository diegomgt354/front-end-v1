import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LayoutBase from './layouts/LayoutBase';
import PokedexPage from './pages/pokemon/PokedexPage';
import ProfilePage from './pages/rick_and_morty/ProfilePage';
import PokemonDetailPage from './pages/pokemon/PokemonDetailPage';
import ProfileDetailPage from './pages/rick_and_morty/ProfileDetailPage';

const App = () => {

  return (
    
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LayoutBase />}>

            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/pokemon/:id" element={<PokemonDetailPage />} />
            <Route path="/character/:id" element={<ProfileDetailPage />} />

          </Route>
        </Routes>
      </BrowserRouter>
      
  )
}

export default App;
