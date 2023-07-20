import { SinglePokemon } from '../interfaces/types';

interface PokeCardProps {
  pokemon: SinglePokemon;
}

export const PokeCard = ({ pokemon: { name } }: PokeCardProps) => {
  return (
    <div className='card card-compact  bg-base-100 shadow-xl'>
      <figure>
        <img
          src='/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg'
          alt='Shoes'
        />
      </figure>
      <div className='card-body'>
        <h3 className='card-title'>{name}</h3>
        <p>description</p>
        {/* <div className='card-actions justify-end'>
          <button className='btn btn-primary'>Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};
