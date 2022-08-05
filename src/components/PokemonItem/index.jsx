import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../services/api";
import { Container } from "./styles";

const PokemonItem = () => {
  const [currentPokemon, setCurrentPokemon] = useState(null);
  const {name} =useParams();

  useEffect(() => {
    if (name) {
      api.get(`pokemon/${name}`)
        .then((response) =>
          setCurrentPokemon(response.data)
        );
    }
  }, [name]);

  if(!currentPokemon) {
    return null;
  }

  return(
    <Container>
      <img
        src={currentPokemon.sprites.front_default}
        alt={currentPokemon.name}
      />
      <span>{currentPokemon.name}</span>
    </Container>
  )
}

export default PokemonItem;