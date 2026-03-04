import axios from 'axios';

class QuoteCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("quote")
            .description("Retrieves a random inspirational quote")
            .action(async () => {
                try {
                    const response = await axios.get("https://zenquotes.io/api/random");
                    const data = response.data[0];
                    console.log(`\n"${data.q}"\n- ${data.a}\n`);
                } catch (error) {
                    console.error("Error fetching quote:", error);
                }
            });
    }
}

module.exports = QuoteCommand;
