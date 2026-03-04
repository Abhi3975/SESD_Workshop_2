"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class PokemonCommands {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("pokemon")
            .description("Gets the name of a random Pokemon from the PokeAPI")
            .action(async () => {
            try {
                const randomId = Math.floor(Math.random() * 1025) + 1;
                const response = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
                const name = response.data.name;
                const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                console.log(capitalizedName);
            }
            catch (error) {
                console.error("Error fetching pokemon:", error);
            }
        });
    }
}
module.exports = PokemonCommands;
