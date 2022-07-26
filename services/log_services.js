import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error)=>{
    console.log(chalk.bgRed("Error") + " " + error);
};


const printSuccess = (message)=>{
    console.log(chalk.bgGreen("Success") + " " + message);
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

const printWeather = (res,icon)=>{
    console.log(
        dedent(`${chalk.bgYellow(" WEATHER ")} Weather in the city ${res.name}
        ${icon} ${res.weather[0].description}
        Temperature: ${res.main.temp} ℃ (feels like ${res.main.feels_like} ℃),
            minimum: ${res.main.temp_min} ℃, maximum: ${res.main.temp_max} ℃
        Pressure in the air: ${res.main.pressure}
        Humidity: ${res.main.humidity}%
        Visibility: ${res.visibility / 100}%
        Speed of wind: ${res.wind.speed} m/s
        
        `)
    );
};

export {printError, printSuccess, printHelp,printWeather};