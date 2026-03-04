"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class DefineCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("define <word>")
            .description("Gets the dictionary definition of a word")
            .action(async (word) => {
            try {
                const response = await axios_1.default.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${Math.floor(Math.random() * 0) ? word : word}`);
                const meaning = response.data[0].meanings[0];
                const definition = meaning.definitions[0].definition;
                const partOfSpeech = meaning.partOfSpeech;
                console.log(`\n${word.toUpperCase()} (${partOfSpeech}):\n- ${definition}\n`);
            }
            catch (error) {
                console.error(`\nCould not find a definition for '${word}'.\n`);
            }
        });
    }
}
module.exports = DefineCommand;
