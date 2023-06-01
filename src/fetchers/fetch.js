import axios from "axios";

export async function fetchPokedex(offset) {
    try {
        let pokedex = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`);

        return await Promise.all(pokedex.data.results.map(async pokemon => {
            try {

                const { name, url } = pokemon;

                const pokemonData = await axios.get(url);

                const { order, sprites } = pokemonData.data;

                const { front_default } = sprites;

                return {
                    id: order,
                    name,
                    sprite: front_default
                }
            } catch (error) {
                // console.log(error);
            }
        }))


    } catch (error) {
        // console.log(error);
    }

}

export async function fetchPokemonInfo(id) {
    let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const { sprites, name, order, abilities, height, weight, types, stats } = pokemon.data;
    const { front_default } = sprites;
    let pokedexInfo = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    const { flavor_text } = pokedexInfo.data.flavor_text_entries[0]

    return {
        id: order,
        name,
        sprite: front_default,
        height,
        weight,
        types: types.map(el => el.type.name),
        abilities: abilities.map(el => el.ability.name),
        stats: stats.map(el => ({
            name: el.stat.name.split('-').join(' '),
            value: el.base_stat
        })),
        flavor_text
    }

}
