const {execSync} = require("child_process");

class Init_TS{
    program;
    constructor(program){
        this.program = program;
    }

    register(){
        this.program
        .command("init-ts <foldername>")
        .action((foldername) => {this.InitializeTS(foldername)});
    };

    InitializeTS(foldername){
        this.run(`mkdir ${foldername}`);
        this.run(`cd ${foldername} && npm init -y`);
        this.run(`cd ${foldername} && npm install typescript -D nodemon ts-node @types/node`);
        this.run(`cd ${foldername} && npx tsc --init`);
        this.run(`cd ${foldername} && touch index.ts`);
    }
    run(command){
        execSync(command,{stdio:"inherit"})
    }
}