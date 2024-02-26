"use client";

import { useEffect, useState } from "react";
import { useAppSelector } from "@/app/store";
import { IoHeartOutline } from "react-icons/io5";

import { PokemonGrid } from "..";

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) =>
    Object.values(state.pokemons.favorites)
  );

  const [pokemons, setPokemons] = useState(favoritePokemons);

  // useEffect(() => {
  //   setPokemons(favoritePokemons);
  // }, [favoritePokemons]);

  return favoritePokemons.length ? (
    <PokemonGrid pokemons={favoritePokemons} />
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
