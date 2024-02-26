import { SimplePokemon } from "@/app/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Favorites {
  [key: string]: SimplePokemon;
}
interface PokemonState {
  favorites: Favorites;
}
// const getInitialState = (): PokemonState => {
//   //! localStorage will not be defined at compilation time since it exists only in the client side.

//   //* Solution 1 :
//   //* This solution can potentially cause a mismatching problem between whats SSR and CSR. React will recognize this as a hydration bug.
//   //* if(localStorage === 'undefined')return{}
//   const favorites = JSON.parse(localStorage.getItem("fav-pokemons") ?? "{}");
//   return favorites;
// };
const initialState: PokemonState = { favorites: {} };
const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(state, action: PayloadAction<Favorites>) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //! BAD PRACTICE: using redux and local storage to simultaneously hold a state.
      localStorage.setItem("fav-pokemons", JSON.stringify(state.favorites));
      return;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
