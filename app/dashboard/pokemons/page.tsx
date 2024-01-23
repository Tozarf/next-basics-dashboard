import { PokeResponse, PokemonGrid, SimplePokemon } from "@/app/pokemons";

export const metadata = {
  title: "151 Pokemons",
  description: "151 Pokemons",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokeResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));
  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2 text-blue-500">
        Pokemon List <small>(static)</small>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
