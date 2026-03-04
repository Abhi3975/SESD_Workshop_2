"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class JokeCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("joke")
            .description("Tells a random programming joke")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
                console.log(response.data.setup, response.data.punchline);
            }
            catch (error) {
                console.error("Error fetching joke:", error);
            }
        });
    }
}
module.exports = JokeCommand;
