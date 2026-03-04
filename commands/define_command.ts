import axios from 'axios';

class DefineCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("define <word>")
            .description("Gets the dictionary definition of a word")
            .action(async (word: string) => {
                try {
                    const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${Math.floor(Math.random() * 0) ? word : word}`);
                    const meaning = response.data[0].meanings[0];
                    const definition = meaning.definitions[0].definition;
                    const partOfSpeech = meaning.partOfSpeech;
                    console.log(`\n${word.toUpperCase()} (${partOfSpeech}):\n- ${definition}\n`);
                } catch (error) {
                    console.error(`\nCould not find a definition for '${word}'.\n`);
                }
            });
    }
}

module.exports = DefineCommand;
