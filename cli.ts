#!/usr/bin/env node
const cli_engine = require("./CLI_Engine/cli_engine");
const greetCommand = require("./commands/greet_command");
const jokeCommand = require("./commands/joke_command");
const mathCommands = require("./commands/math_commands");
const pokemonCommands = require("./commands/pokemon_commands");
const quoteCommand = require("./commands/quote_command");
const passwordCommand = require("./commands/password_command");
const defineCommand = require("./commands/define_command");
const weatherCommand = require("./commands/weather_command");

const engine = new cli_engine();
engine.registerCommands([greetCommand, jokeCommand, mathCommands, pokemonCommands, quoteCommand, passwordCommand, defineCommand, weatherCommand]);
engine.run();


















// import axios from "axios";

// // const {Command} = require('commander');
// const program = new Command();

// program
// .command("greet <name>")
// .action((name) => {console.log(`Hello ${name}`)})

// program
// .command("add <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) + Number(n2)}`)})


// program
// .command("substract <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) - Number(n2)}`)})


// program
// .command("multiply <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) * Number(n2)}`)})


// program
// .command("divide <n1> <n2>")
// .action((n1, n2) => {console.log(`${Number(n1) / Number(n2)}`)})





// program 
// .command("pikachu")
// .action(async() => {try {
//     const response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu")
//     console.log(response.data.name)
// } catch(error) {
//     console.error("Error fetching quote:", error)
// }})

// program 
// .command("joke")
// .action(async() => {try {
//     const response = await axios.get("https://official-joke-api.appspot.com/random_joke")
//     console.log(response.data.setup, response.data)
// } catch(error) {
//     console.error("Error fetching joke:", error)
// }})

// program.parse()