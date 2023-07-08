#!/usr/bin/env node
import Chalk from 'chalk'
import inquirer from 'inquirer'
import gradient from 'gradient-string'
import challAnimation from 'chalk-animation'
import figlet from 'figlet'
import { createSpinner } from 'nanospinner'


console.log(Chalk.bgGreen("Hi mom"));

let playerName;
const sleep = (ms = 2000) => new Promise((r) =>setTimeout(r,ms));


async function welcome(){
    const rainbowTitle = challAnimation.rainbow('Who wants to be a JS milionaire?')

    await sleep();
    rainbowTitle.stop();
    console.log(`${Chalk.bgBlue("How to play?")} I am a process on your computer, If you get any questio  wrong, I will be ${chalk.bgRed("Killed")} so get all the questions right`);

}
await welcome;

async function askName(){
    const answer= await inquirer.prompt({
        name:'player-name',
        type:'input',
        message:'What is your name?',
        default(){ return 'player'},
    })
    playerName = answer['player-name']
}
await askName();

async function question1(){
    const answers = await inquirer.prompt({
        name:'question1',
        type:'list',
        message:'Javascript was created in 10 days & released on \n',
        choices:[
            'May 23rd 1995',
            'june 23rd 1995',
            'july 23rd 1995',
            'August 23rd 1995',
        ]
    })
    return handleAnswer(answers.question1=='june 23rd 1995')
}


async function handleAnswer(iscorrect){
    const spinner = createSpinner('checking answer ...').start();
    await sleep();
    if(iscorrect){
        spinner.success({text:`Nice work ${playerName}`});
    }
    else{
        spinner.error({text:`Game over, you lose ${playerName}`})
        process.exit(1)
    }
}

await question1();


function winner(){
    console.clear();
    const msg = `Congrats ${playerName} !\n $1000000`;
    figlet(msg,(err,data) =>{
        console.log(gradient.pastel.multiline(data))
    })
}

await winner()