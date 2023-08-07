// TODO: Create an array of question objects for user input
export const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'What is your Github username?',
    }, 
    {
        type: 'input',
        name: 'email',
        message: 'When is your email address?',
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Enter a brief description of this project',
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information',
    }, 
    {
        type: "list",
        name: "license",
        message: "What license should be applied to this project?",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "Creative Commons Zero v1.0 Universal", "GNU Affero General Public  License v3.0", "GNU Lesser General Public License Lv2.1", "Mozilla Public License 2.0", "The Unlicense", "None"],
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Enter contribution guidelines. Skip if NA.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    }]; //questions for the inquirer prompt