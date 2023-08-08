// Included packages needed for this application
import fs from 'fs'
import inquirer from "inquirer"
import { generateMarkdown } from "./utils/generateMarkdown.js" 
import { questions } from "./utils/helpers.js"


//  Creates a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        const markdown = generateMarkdown(answers)
        fs.writeFile("./ReadMeFolder/README.md", markdown, err => {
            if (err)
            {
                throw err
            }
            console.log("README.md was saved")
            })
    })
    .catch(error => console.log(error))
}

// Function call to initialize app
init();
