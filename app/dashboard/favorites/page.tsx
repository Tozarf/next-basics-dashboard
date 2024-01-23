import { PokeResponse, PokemonGrid, SimplePokemon } from "@/app/pokemons";

export const metadata = {
  title: "Favorites",
  description: "Favorite pokemons",
};

export default async function PokemonsPage() {
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-blue-500">
        Favorite Pokemons <small>(global state)</small>
      </span>
      <PokemonGrid pokemons={[]} />
    </div>
  );
}
