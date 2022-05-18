## Note-It:

A React application that enables you to create your notes and organize them under separate titles which appear in the sidebar. This will help you to organise your thoughts, your to-do lists, daily appointments, random ideas, etc in an effective manner. This is version 1.0 and very basic with many more features to be added in the future. 

## Deployed on Firebase

link-> https://note-it-6e0dd.web.app/

## Screenshot

Login Page-> 
![Screen Shot 2022-05-18 at 8 19 21 AM](https://user-images.githubusercontent.com/96052563/168948520-589fce26-bc94-482e-9364-0828824511cd.png)


Forgot password page ->
![Screen Shot 2022-05-18 at 8 19 29 AM](https://user-images.githubusercontent.com/96052563/168948550-f8caeb73-9016-4976-a152-55d8c39f78ee.png)

Home Page ->
![Screen Shot 2022-05-18 at 8 20 35 AM](https://user-images.githubusercontent.com/96052563/168948577-1b618abf-6595-45ea-99cd-e5f206ddb11c.png)


![Screen Shot 2022-05-18 at 8 20 49 AM](https://user-images.githubusercontent.com/96052563/168948594-13d9f2a5-3454-4c88-9dbe-8cc1db54f201.png)


![Screen Shot 2022-05-18 at 8 21 11 AM](https://user-images.githubusercontent.com/96052563/168948605-9bb19673-019b-483d-8e11-6ed0e418d754.png)


## Different features of the website

* On loading, it displays the login page with following options:-
   * Register with name, email and password
   * Login with registered email address and password
   * Send link to registered email address when user forgets password.
* Once the user logins, it opens the home page.
* On the home page, it displays the initials of user's name and logout button next to it. 
* User can give title to the project, add notes and edit any of them. Then there is dropdown button next to project's name to save the projects or any changes in the saved project and also to delete the current project.
* On saving the project for the first time, it's name gets added to the list on the sidebar and all the notes get saved.
* If user makes any changes to the saved note, then he/she needs to again press "save" button to save those changes.
* User can create a new Project by pressing "Add Project" button on the navigation bar. This creates a new blank project to begin our work. 
* User can go to the old saved projects by clicking on their names in the sidebar.

## Things I have learned through this project

Through this project, following concepts I learned:
* Creating a basic React application with dependencies like React, React-DOM, react-bootstrap, mui, etc
* Breaking the website into various re-usable components and creating them as jsx files
* Using redux to render user info to different components of the project
* Database management, authentication and deployment of projects on firebase
* Basic concepts like 
   * Inline styling for React elements
   * Import, Export and modules
   * React Props
   * Mapping and loops
   * Filter, Reduce and Find
   * Arrow functions
   * Hooks like useState and useEffect


## Features that will be soon added

Many features will be added to this project in the coming days-> 
* work on drag and set position of sticky notes
* making it responsive for mobiles and tablets


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
