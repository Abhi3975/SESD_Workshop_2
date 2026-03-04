class MathCommands {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("add <n1> <n2>")
            .description("Adds two numbers together")
            .action((n1, n2) => { console.log(`${Number(n1) + Number(n2)}`); });
        this.program
            .command("subtract <n1> <n2>")
            .description("Subtracts the second number from the first")
            .action((n1, n2) => { console.log(`${Number(n1) - Number(n2)}`); });
        this.program
            .command("multiply <n1> <n2>")
            .description("Multiplies two numbers together")
            .action((n1, n2) => { console.log(`${Number(n1) * Number(n2)}`); });
        this.program
            .command("divide <n1> <n2>")
            .description("Divides the first number by the second")
            .action((n1, n2) => { console.log(`${Number(n1) / Number(n2)}`); });
    }
}
module.exports = MathCommands;
