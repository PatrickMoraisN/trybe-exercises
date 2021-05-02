
import './App.css';
import pokemons from './data';
import './Pokedex'
import Pokedex from './Pokedex';

function App() {
  return <body>
    <h1>Pokedex</h1>
    <div className='main'>
      {pokemons.map(pokemon => <Pokedex objPoke={pokemon} />)}
    </div>
  </body>
}

export default App;
