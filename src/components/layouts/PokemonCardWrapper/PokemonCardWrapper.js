import "./PokemonCardWrapper.css"
import PokemonCard from "../../PokemonCard/PokemonCard";

const PokemonCardWrapper = (props) => {
    return (
        <section className="pokemonCardWrapper">
            <PokemonCard
                pokemonName="Wooper"
                pokemonType={["Water", "Ground"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png" 
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Charmeleon"
                pokemonType={["Fire"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" 
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Gengar"
                pokemonType={["Poison", "Ghost"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png" 
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
            <PokemonCard
                pokemonName="Mewtwo"
                pokemonType={["Psychic"]}
                pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png" 
                pokemonHP="55"
                updateCounter={props.updateCounter}
            />
        </section>
    );
}

export default PokemonCardWrapper; 