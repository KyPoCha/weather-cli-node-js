#!/usr/bin/env node

import {getArgs} from "./helpers/args.js"
import {printHelp, printSuccess, printError, printWeather} from "./services/log_services.js";
import {saveKeyValue, TOKEN_DICTIONARY,getKeyValue} from "./services/storage_services.js";
import {getWeather, getIcon} from "./services/api_services.js";

const args = getArgs(process.argv);

const saveToken = async (token)=>{
    if(!token.length){
        printError("You do not give a token");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, args.t);
        printSuccess("Token is saved");
    }
    catch (e){
        printError(e.message);
    }
};

const saveCity = async (city)=>{
    if(!city.length){
        printError("You do not give a city");
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, args.s);
        printSuccess("City is saved");
    }
    catch (e){
        printError(e.message);
    }
};

const getForecast = async()=>{
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather,getIcon(weather.weather[0].icon));
    }
    catch (e){
        if(e?.response?.status === 404){
            printError("False city entered")
        }
        else if(e?.response?.status === 401){
            printError("False token entered")
        }
        else {
            printError(e.message);
        }
    }
};

const initCLI = ()=>{
    //const args = getArgs(process.argv);
    //console.log(args);
    //console.log(process.env);
    if(args.h){
        //Help output
        return printHelp();
    }
    if(args.s){
        return saveCity(args.s);
    }
    if(args.t){
       return saveToken(args.t);
    }

    return getForecast();
};

initCLI();