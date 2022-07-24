import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error)=>{
    console.log(chalk.bgRed("Error") + " " + error);
};


const printSuccess = (message)=>{
    console.log(chalk.bgGreen("Error") + " " + message);
};

const printHelp = ()=>{
    console.log(
        dedent(`${chalk.bgCyan(" HELP ")}
        Without params - show weather
        -s [CITY] to choose the City
        -t [API_KEY] to save token
        `)
    );
};

export {printError, printSuccess, printHelp};