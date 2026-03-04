class GreetCommand {
    program;

    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("greet <name>")
        .option("-e, --excited", "Greets with extra excitement")
        .description("Simple greeting command")
        .action((name: string, options: any) => {this.greetName(name, options)});
    }

    greetName(name: string, options: any){
        let greeting = `Hello, ${name}! Welcome to MyCLI.`;
        if (options.excited) {
            greeting += " !!!";
        }
        console.log(greeting);
    }
}
module.exports = GreetCommand;