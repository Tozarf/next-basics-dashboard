import { Metadata } from "next";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.id);
  return { title: `#${id} - ${name}`, description: `Pokemon ${name} page` };
}

const getPokemon = async (id: string) => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: "force-cache",
  }).then((resp) => resp.json());

  console.log("Loaded pokemon: ", pokemon.name);

  return pokemon;
};

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.id);
  return (
    <div>
      <h1>Pokemon {params.id}</h1>
      <div>{JSON.stringify(pokemon.name)}</div>
    </div>
  );
}
