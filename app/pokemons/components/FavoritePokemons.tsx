"use client";

import { useAppSelector } from "@/app/store";
import { PokemonGrid } from "..";

export const FavoritePokemons = () => {
  const pokemons = useAppSelector((state) => state.pokemons);
  const favorites = Object.values(pokemons);
  return <PokemonGrid pokemons={favorites} />;
};
