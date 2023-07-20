import { useParams } from 'react-router-dom';
import { getAPokemonByNameAndId } from '../requests/Pokemon';
import { useMemo, useEffect, useState } from 'react';
import { Pokemon } from '../interfaces/pokemon-full';
import { Details } from '../components/Details';

export const PokemonDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState<Pokemon>();
  const request = useMemo(() => getAPokemonByNameAndId(id), [id]);
  useEffect(() => {
    request
      .then((data) => {
        setData(data);
      })
      .catch(() => {});
  }, [id]);
  return <>{data ? <Details data={data} /> : <p>Loading</p>}</>;
};
