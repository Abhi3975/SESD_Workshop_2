class PasswordCommand {
    program: any;

    constructor(program: any) {
        this.program = program;
    }

    register() {
        this.program
            .command("password <length>")
            .description("Generates a random password of the specified length")
            .action((length: string) => {
                const len = parseInt(length, 10);
                if (isNaN(len) || len <= 0) {
                    console.error("Please provide a valid positive number for length.");
                    return;
                }
                const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
                let password = "";
                for (let i = 0; i < len; i++) {
                    const randomIndex = Math.floor(Math.random() * chars.length);
                    password += chars[randomIndex];
                }
                console.log(`\nGenerated Password: ${password}\n`);
            });
    }
}

module.exports = PasswordCommand;
