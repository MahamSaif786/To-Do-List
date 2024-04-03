#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo?"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo?",
            default: false
        },
    ]);
    const { TODO, addmore } = answer;
    console.log(answer);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Kindly Add Valid Input");
    }
}
console.log(todos);
if (todos.length > 0) {
    console.log("Your Todo List: \n");
    todos.forEach(todo => {
        console.log(todo);
    });
}
else {
    console.log(" No todos found");
}
