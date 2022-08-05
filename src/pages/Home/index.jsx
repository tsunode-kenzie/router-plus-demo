import { useEffect, useState } from "react";
import {Outlet} from 'react-router-dom';

import Button from "../../components/Button";
import Container from "../../components/Container";
import Header from "../../components/Header";
import PokemonCard from "../../components/PokemonCard";
import api from '../../services/api';
import { ContainerButton, List } from "./styles";

const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);
    const [limit] = useState(500);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
   
    useEffect(() => {
      setLoading(true);
  
      api.get('pokemon', {
        params: {
          limit,
          offset: offset * limit
        },
      })
        .then(response => {
          const { results, next, previous } = response.data;
  
          setPokemons(results);
          setIsNextDisabled(!next);
          setIsPreviousDisabled(!previous);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setLoading(false)
        });
    }, [offset, limit]);
  
    return (
      <>
        <Header />
        <Container>
          <Outlet />

          <ContainerButton>
            <Button
              onClick={() => setOffset(offset - 1)}
              disabled={isPreviousDisabled}
              backgroundColor='#f10'
            >
              Previous
            </Button>
            <Button
              onClick={() => setOffset(offset + 1)}
              disabled={isNextDisabled}
              backgroundColor='#f10'
            >
              Next
            </Button>
          </ContainerButton>

          {
            loading
              ? <span>Carregando...</span>
              :
              <List>
                {
                  pokemons
                    ?.map(({ name }) =>
                      <PokemonCard
                        key={name}
                        name={name}
                      />
                    )
                }
              </List>
          }
  
        </Container>
      </>
  ) 
}

export default Home;