import './Pokedex.js';

function Pokemon(props){
  return <div className='pokemon'>
    <h1>{props.objParaRenderizar.name}</h1>
    <h2>{props.objParaRenderizar.type}</h2>
    <img src={props.objParaRenderizar.image} alt=''></img>
  </div>
}

export default Pokemon;