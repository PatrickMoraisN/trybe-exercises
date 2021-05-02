import './Pokemon.js';
import Pokemon from './Pokemon.js';

function Pokedex(props){
  return <div className='container'>
  <Pokemon objParaRenderizar={props.objPoke}/>
  </div>
}

export default Pokedex;