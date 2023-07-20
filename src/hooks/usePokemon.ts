import { useCallback, useState } from 'react';
import { getAllPokemon, getAPokemonByNameAndId } from '../requests/Pokemon';
import { Pokemon } from '../interfaces/pokemon-full';
import { AllPokemonResponse } from '../interfaces/types';

export const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonList, setPokemonList] = useState<AllPokemonResponse>();
  const [notFound, setNotFound] = useState(false);

  const getPokemons = useCallback(async ({ search }: any) => {
    try {
      if (search === '') {
        const request = await getAllPokemon(1);
        setPokemon(undefined);
        setPokemonList(request);
        setNotFound(false);
      } else {
        setPokemonList(undefined);
        const request = await getAPokemonByNameAndId(search);
        setPokemon(request);
        setNotFound(false);
      }
    } catch (error) {
      setPokemon(undefined);
      setNotFound(true);
    }
  }, []);

  return { pokemon, pokemonList, getPokemons, notFound };
};
