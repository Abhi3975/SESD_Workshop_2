import axios from 'axios';

class PokemonCommands {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("pokemon")
            .description("Gets the name of a random Pokemon from the PokeAPI")
            .action(async () => {
                try {
                    const randomId = Math.floor(Math.random() * 1025) + 1;
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                    const name = response.data.name;
                    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                    console.log(capitalizedName);
                } catch (error) {
                    console.error("Error fetching pokemon:", error);
                }
            });
    }
}

module.exports = PokemonCommands;
