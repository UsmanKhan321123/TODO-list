#! /usr/bin/env node

import inquirer from "inquirer";

let toDoList: string[] = [];
let condition: boolean = true;
while(condition)
{let toDoListQuestions = await inquirer.prompt([
  {
    name: "firstQuestion",
    type: "input",
    message: "What do you want to add in your todos?",
  },
  {
    name: "secondQuestion",
    type: "confirm",
    message: "Do you want to add more in tour todos??",
    default: "true",
  },
]);

toDoList.push(toDoListQuestions.firstQuestion);
console.log(toDoList);
condition = toDoListQuestions.secondQuestion;
}