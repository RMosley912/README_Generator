

# README Generator

README Generator is a command-line application that generates a pro README file from input using the Inquirer package. This allows the creator to devote more time to working on the project.

## Link To App Demo

https://drive.google.com/file/d/1naPIKBq3FzHiO5gLKRGBGh07HKOrMNyH/view?usp=drive_link

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The project requires Node.js and npm to be installed on your local environment. 

### Installation

To get a local copy up and running follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/RMosley912/README_Generator.git
```

2. Install NPM packages

```bash
npm install inquirer
```

This command will install the `inquirer` package that is required for this application to work. 

## Usage

To use the application, navigate to the root of your project in the terminal and run the command:

```bash
node index.js
```

The application will prompt you for the following information about your project:

- Your GitHub username
- Your email address
- The name of your project
- A description of your project
- The command used to install dependencies
- The type of license you wish to use
- The command that can be used to run tests for the project
- What information is most important about the project
- How can others contribute to the project

The README file will be generated based on your responses and saved in the current directory.

## Running Tests

Enter the following command in the terminal to run the test:

```bash
npm test
```

## Contributing

If you would like to contribute to this project, please first discuss the change you wish to make via issue or email with the owners of this repository before making a change.

## License

This project is licensed under the MIT License.

## Contact

Reggie Mosley @ https://github.com/RMosley912

## Acknowledgments

- Thanks to the [Inquirer](https://www.npmjs.com/package/inquirer) team for providing the package used in this project.

## Disclaimer

Please note that this README was generated using this application.

Enjoy using the README Generator!


## Screenshot of Application

![image](https://github.com/RMosley912/README_Generator/assets/122495055/b74b5a1a-e269-452b-8681-05cf6b2f7a8b)



## User Story
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README

