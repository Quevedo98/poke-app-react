import { SinglePokemon } from '../interfaces/types';
import { getAPokemon } from '../requests/Pokemon';
import { useEffect, useState } from 'react';
import { Pokemon } from '../interfaces/pokemon-full';
import { toast } from 'react-toastify';

interface PokeCardProps {
  pokemonFromList?: SinglePokemon;
  pokemonFromSearch?: Pokemon;
}

export const PokeCard = ({
  pokemonFromList,
  pokemonFromSearch,
}: PokeCardProps) => {
  const [pokemonReceived, setPokemonReceived] = useState<Pokemon>();

  useEffect(() => {
    if (pokemonFromList) {
      getAPokemon(pokemonFromList.url)
        .then((res) => {
          setPokemonReceived(res);
        })
        .catch(() => {
          toast.error('Ocurrio un error');
        });
    }
    if (pokemonFromSearch) {
      setPokemonReceived(pokemonFromSearch);
    }
  }, []);

  return (
    <div className='card card-compact max-w-[400px] bg-base-100 shadow-xl'>
      <figure>
        <img
          style={{ width: 'auto', maxHeight: '150px' }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonReceived?.id}.svg`}
          alt={`${pokemonReceived?.name}`}
        />
      </figure>
      <div className='card-body'>
        <h3 className='card-title capitalize'>{pokemonReceived?.name}</h3>
        <p>
          <span className='font-bold'>Height: </span>
          {pokemonReceived?.height}
        </p>
        {/* <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};
