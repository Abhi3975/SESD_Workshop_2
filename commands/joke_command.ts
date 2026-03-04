import axios from 'axios';

class JokeCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("joke")
            .description("Tells a random programming joke")
            .action(async () => {
                try {
                    const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
                    console.log(response.data.setup, response.data.punchline);
                } catch (error) {
                    console.error("Error fetching joke:", error);
                }
            });
    }
}

module.exports = JokeCommand;
