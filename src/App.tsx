// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
import allPokemon from './mockup/allPokemon.json';
import './App.css';
import { PokeCard } from './components/PokeCard';
import { toast } from 'react-toastify';

function App() {
  toast('Hello world');
  return (
    <>
      <header>
        <div className='container flex flex-col justify-center max-w-[1024px] mx-auto '>
          <h1 className='text-primary text-center text-4xl'>Poke App</h1>
          <form>
            <input
              className='input input-bordered w-full max-w-sm'
              type='text'
              placeholder=''
            />
          </form>
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
          {allPokemon.results.map((values) => (
            <PokeCard pokemon={values} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
