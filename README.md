# Background
"Lost in Translation" is an assignment from the Accelerated Learning course in Fullstack .Net developer (Noroff). The Lost in Translation is an application that utilize JavaScript and React. The project is a Single Page Application focus on the front-end with React, how protect routes with authentication, Context API and working in team on Git.  

## Description
The main feature of the application is to act as a "translator" from regular text to sign language. The application is able to translate English words and short sentences to American sign language. The application will illustrate the sign language in pictures.

The user is meet by an login page to sign in/up with username depending if the username already exist. The username will be stored to the Translation API.

After given username, the user will be redirected to the translations page. The translation page will contain an input box for the English word/sentence for translation and a button for execute the translation. The page also contain the translation box which shows the result in pictures for the American sign language. 

The user have the option to go to a profile page, where a history of the latest 10 input for translations is shown. On the profile page, the user can delete the history to get a clean history. 
## Disclaimer
As the application have only focus on the front-end, the application doesn't have the back-end like database to manage API. Therefore, the application will focus on the handle and check with username, where utilize the browser's storage from local to session. The same for any environment variables is not generated using any secure algorithm and the user is not given an authentication token.
## Components tree
To begin the implementation of the application, there have been developed a component tree to show the pages and feature components.The component tree can be found in the ComponentTree.pdf. As the component tree is created before any code is written and will not be updated, as it will be part of the overall grade, the application will may vary some degree from the component tree.
## Status of the Project
The project is currently just begun development and should be completed the 28. January 2023.

- updated 23. January 2023

# Running The Project locally
Here is a short guide to be able to run the project locally, after having cloned the project.
## Making the API Hosting
There is many services, but most of them use similar process. Here is how it is done in Glitch.
- Login on Glitch in a browser.
- Create new project by import from GitHub.
- Use the following source: [noroff assignment API](https://github.com/dewald-els/noroff-assignment-api.git).
- Enter the api key in the .env file.
    - The variable name set to API_KEY.
    - The value of the variable is up to you.

there is a limited amount of hours runtime of a application on Glitch. This is the reason our URL is not publicly accessible and the same should your project unless having paid for more uptime in Glitch.

## Make .env file
The application is running using local stored key and url for API and hosting. this file is not and should not be accessible in the Git repository. Therefore, there is need to create .env file containing environment variables:

- API_KEY = \<your-api-key-in-env-file-from-glitch>
- API_URL = \<glitch-project-name>.glitch.me/translations

## Commands
### `$npm install`
As most React or Node.js projects, the node_modules should not be included in git repositories. This command will create the node_module folder based on the dependencies in the package.json file.

if want to make similar project, following commands have been used to create a basic React project and installing those react packages used in this project.:
- `$npx create-react-app PROJECT_NAME`
- `$ cd PROJECT_NAME`
- `$npm install react-router-dom`
- `$npm install react-hook-form`
- `$npm install react-bootstrap bootstrap`
OBS!! Those commands should not be necessary in this project.
### `$npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `ctrl+c`
While the app is running, the terminal will be busy running the process. Use the shortcut `ctrl+c` to terminate the process and thereby kill the application.
#  GIT Convention
This project use the [conventional commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) and [branch naming](https://dev.to/couchcamote/git-branching-name-convention-cch).
## Naming Branches
There are two permanent branches, Master and Test. The Master branch is the production branch, and the Test branch is the temporary branch for testing an temporary branch in the master branch.

if the Test branch works correctly after merge an temporary branch in, can the Test branch make an merge request into the master branch.

### Temporary branches
Temporary branches is to be branched out from the master branch and to be working on some content for the application. Temporary branches naming should be structured as \<category>/description-in-kebab-case>.

The categories:
- features
- docs
- bugfix
- hotfix
- test

## Commits
This means the commit message should be structured as follows:

    <type>: <description>

where \<types> used can be:
 - fix (the correlates with PATCH in Semantic versioning)
 - feat (the correlates with MINOR in Semantic versioning)
 - docs
 - style
 - refactor
 - test

In addition, there is possible to apply the "!" as suffix of the type to indicate breaking API changes (the correlates with MAJOR in Semantic versioning).

The \<description> should be meaningful in such a way that it solely can explain the commit.
# React Scripts
In the project directory, you can run:

## `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.