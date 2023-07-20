import { createBrowserRouter } from 'react-router-dom';
import { Home } from '../Pages/Home.tsx';
import { PokemonDetails } from '../Pages/PokemonDetails.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetails />,
  },
]);
