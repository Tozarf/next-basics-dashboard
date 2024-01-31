"use client";

import { useState } from "react";
import { useAppSelector } from "@/app/store";
import { IoHeartOutline } from "react-icons/io5";

import { PokemonGrid } from "..";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons)
  );

  const [pokemons, setPokemons] = useState(favoritePokemons);
  return pokemons.length ? (
    <PokemonGrid pokemons={pokemons} />
  ) : (
    <NoFavorites />
  );
};
export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500" />
      <span>No favorites yet</span>
    </div>
  );
};
