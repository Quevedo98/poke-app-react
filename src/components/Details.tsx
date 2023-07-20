import { Pokemon } from '../interfaces/pokemon-full';

interface DetailsProps {
  data: Pokemon;
}

export const Details = ({ data }: DetailsProps) => {
  return (
    <div className='container mx-auto px-3 mt-6 max-w-[1200px] grid sm:grid-cols-2 gap-y-6 '>
      <div className='card card-compact max-w-[400px] pt-2 bg-neutral shadow-xl'>
        <figure>
          <img
            style={{ width: 'auto', maxHeight: '150px' }}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data?.id}.svg`}
            alt={`${data?.name}`}
          />
        </figure>
        <div className='card-body'>
          <h3 className='card-title capitalize'>{data?.name}</h3>
        </div>
      </div>
      <div className='container bg-neutral shadow-lg rounded-2xl p-10 max-w-full'>
        <p>
          <span className='font-bold'>Base Experience: </span>
          {data?.base_experience}
        </p>
        <p>
          <span className='font-bold'>Height: </span>
          {data?.height}
        </p>
        <p>
          <span className='font-bold'>Weight: </span>
          {data?.weight}
        </p>
        <p>
          <span className='font-bold'>Species: </span> {data?.species.name}
        </p>
        <p>
          <span className='font-bold'>Sprites: </span>
        </p>
        <div className='flex flex-row'>
          {data?.sprites.front_default && (
            <img
              style={{ width: 'auto', maxWidth: '100px', maxHeight: '150px' }}
              src={`${data?.sprites.front_default}`}
              alt={`${data?.name}`}
            />
          )}
          {data?.sprites.front_shiny && (
            <img
              style={{ width: 'auto', maxWidth: '100px', maxHeight: '150px' }}
              src={`${data?.sprites.front_shiny}`}
              alt={`${data?.name}`}
            />
          )}
        </div>
      </div>
    </div>
  );
};
