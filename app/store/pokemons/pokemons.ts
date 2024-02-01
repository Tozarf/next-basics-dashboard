import { SimplePokemon } from "@/app/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonState {
  [key: string]: SimplePokemon;
}
const getInitialState = (): PokemonState => {
  //*Initially, not having data in localStorage would trigger an error,if that is the case, JSON.parse will parse an empty object.
  const favorites = JSON.parse(localStorage.getItem("fav-pokemons") ?? "{}");
  return favorites;
};
const initialState: PokemonState = getInitialState();
const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state[id]) {
        delete state[id];
        // return;
      } else {
        state[id] = pokemon;
      }

      //! BAD PRACTICE: using redux and local storage to simultaneously hold a state.
      localStorage.setItem("fav-pokemons", JSON.stringify(state));
      return;
    },
  },
});

export const { toggleFavorite } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
