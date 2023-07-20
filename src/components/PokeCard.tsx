import { SinglePokemon } from '../interfaces/types';
import { getAPokemon } from '../requests/Pokemon';
import { useEffect, useState } from 'react';
import { Pokemon } from '../interfaces/pokemon-full';

interface PokeCardProps {
  pokemon: SinglePokemon;
}

export const PokeCard = ({ pokemon: { name, url } }: PokeCardProps) => {
  const [pokemon, setPokemon] = useState<Pokemon>();

  useEffect(() => {
    getAPokemon(url)
      .then((res) => {
        setPokemon(res);
      })
      .catch((err) => {
        alert('ocurrio un error');
      });
  }, []);

  return (
    <div className='card card-compact  bg-base-100 shadow-xl'>
      <figure>
        <img
          style={{ width: 'auto', maxHeight: '150px' }}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`}
          alt={`${pokemon?.name}`}
        />
      </figure>
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p>
          <span className='font-bold'>Height: </span>
          {pokemon?.height}
        </p>
        {/* <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};
