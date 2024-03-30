#!/usr/bin/env node
import inquirer from "inquirer";
//Color Class Reference : https://decipher.dev/30-seconds-of-typescript/docs/colorize/
export const colorize = new (class {
    color = (code, ended = false, ...messages) => `\x1b[${code}m${messages.join(" ")}${ended ? "\x1b[0m" : ""}`;
    black = this.color.bind(null, 30, false);
    red = this.color.bind(null, 31, false);
    green = this.color.bind(null, 32, false);
    yellow = this.color.bind(this, 33, false);
    blue = this.color.bind(this, 34, false);
    magenta = this.color.bind(this, 35, false);
    cyan = this.color.bind(this, 36, false);
    white = this.color.bind(this, 37, false);
    bgBlack = this.color.bind(this, 40, true);
    bgRed = this.color.bind(this, 41, true);
    bgGreen = this.color.bind(this, 42, true);
    bgYellow = this.color.bind(this, 43, true);
    bgBlue = this.color.bind(this, 44, true);
    bgMagenta = this.color.bind(this, 45, true);
    bgCyan = this.color.bind(this, 46, true);
    bgWhite = this.color.bind(this, 47, true);
})();
const color = colorize;
console.log(color.bgCyan("                      --Your TO-DO List--                       "));
console.log("What are you waiting for !");
console.log(color.bgBlue("Start filling your TO-DO List, you have alot of Work to do Today:)"));
const counter = 10;
let i = 1;
for (i; i <= 100; i++) {
    const ans = await inquirer.prompt([
        {
            name: (color.cyan("input")),
            type: "string",
            message: `.${i})`,
        },
    ]);
    if (i % counter === 0) {
        console.log("Do you Want to Add More ");
        const question = await inquirer.prompt([
            {
                name: "input",
                message: "Select:",
                type: "list",
                choices: ["Yes", "No"],
            },
        ]);
        if (question.input == "Yes") {
            continue;
        }
        else {
            break;
        }
    }
}
