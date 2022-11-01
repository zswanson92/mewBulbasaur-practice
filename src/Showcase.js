import Bulbasaur from "./images/bulbasaur.jpg";

function Showcase() {
  const favPokemon = "Mew";
  const pokeCharacteristics = { type: "psychic", move: "psyblast" };
  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={Bulbasaur} alt='Bulbasaur'></img>
      <h2>
         Mew's type is 
        <span style={{"backgroundColor":"green", "color":"white"}}>
        {pokeCharacteristics.type} 
        </span>
        and one of their moves is{" "}
        <span style={{"backgroundColor":"white", "color":"green"}}>
        {pokeCharacteristics.move}.
        </span>
      </h2>
    </div>
  );
}

export default Showcase;
