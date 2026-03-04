const { Command } = require('commander');
class CLIEngine {
    constructor() {
        this.program = new Command();
    }
    registerCommands(commands) {
        commands.forEach((commandClass) => {
            const commandInstance = new commandClass(this.program);
            commandInstance.register();
        });
    }
    run() {
        this.program.parse();
    }
}
module.exports = CLIEngine;
