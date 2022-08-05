import { Route, Routes, Navigate } from "react-router-dom";
import PokemonItem from "../components/PokemonItem";
import PokemonForm from "../components/PokemonForm";
import Home from "../pages/Home";

const RoutesMain = () => (
  <Routes>
    <Route path='/pokemons' element={<Home />} >
      <Route path='new' element={<PokemonForm />} />
      <Route path=':name' element={<PokemonItem />} />
    </Route>
    <Route path='*' element={<Navigate to='/pokemons'/>} />
  </Routes>
);

export default RoutesMain