"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class QuoteCommand {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("quote")
            .description("Retrieves a random inspirational quote")
            .action(async () => {
            try {
                const response = await axios_1.default.get("https://zenquotes.io/api/random");
                const data = response.data[0];
                console.log(`\n"${data.q}"\n- ${data.a}\n`);
            }
            catch (error) {
                console.error("Error fetching quote:", error);
            }
        });
    }
}
module.exports = QuoteCommand;
