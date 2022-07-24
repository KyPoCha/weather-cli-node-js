#!/usr/bin/env node //for cli

import {getArgs} from "./helpers/args.js"
import {printHelp,printSuccess,printError} from "./services/log_services.js";

const initCLI = ()=>{
    const args = getArgs(process.argv);
    console.log(args);
    if(args.h){
        //Help output
        printHelp();
    }
    if(args.s){
        //Save City
    }
    if(args.t){
        //Save token
    }
    //Output Weather
};

initCLI();