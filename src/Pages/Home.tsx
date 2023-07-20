import { PokeCard } from '../components/PokeCard';
import { ChangeEvent, useCallback } from 'react';
import { useSearch } from '../hooks/useSearch';
import { usePokemon } from '../hooks/usePokemon';
import debounce from 'just-debounce-it';

export const Home = () => {
  const { search, setSearch, error } = useSearch();
  const { pokemon, pokemonList, getPokemons, notFound } = usePokemon();

  const debounceGetPokemons = useCallback(
    debounce((value: any) => {
      getPokemons({ search: value });
    }, 400),
    [],
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    debounceGetPokemons(newSearch);
  };

  return (
    <>
      <header>
        <div className='container mt-4 flex flex-col gap-12 max-w-[1024px] mx-auto '>
          <h1 className='text-slate-300 text-center text-4xl'>Pokémon App</h1>
          <form className='flex justify-center'>
            <input
              value={search}
              onChange={handleChange}
              className='input input-bordered w-full max-w-sm'
              type='text'
              placeholder='Search for a Pokémon by name'
            />
          </form>
          {error && <p>{error}</p>}
        </div>
      </header>

      {/* cards */}
      <main>
        <div
          className='container my-8 mx-auto max-w-full px-4'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
          }}
        >
          {pokemonList &&
            pokemonList.results.map((values) => (
              <PokeCard key={values.name} pokemonFromList={values} />
            ))}
          {pokemon && <PokeCard pokemonFromSearch={pokemon} />}
          {notFound && (
            <p className='text-center text-[28px]'>No results found</p>
          )}
        </div>
      </main>
    </>
  );
};
