# Title 
**React-Based Agile Fixprice Quiz**

## Author
Lorenz Moser
mslorenz11@gmail.com

## Projectdescription
In this Project I implemented a simple E-Learning Application that has different ways of displaying content to the user (Animated Text, Video, Accordeon). After The Learning-Section there is a Quiz that checks if the user consumed all the knowledge. Based upon their result, the user can receive two "Goodies". 
Goodie one is a calculator that helps the user to define how much their agile fixprice-project would approx. cost based on different factors such as the needed interfaces etc. 
Goodie two is a contract-printer that allows the user to input their company name and prints a document with their company name and the price from Goode one. 

## Getting Started/Installation-Manual:
1) Download the Code from https://github.com/GandiTheReal/DDB6-SSS-QuizAgilerFixpreis
2) Open with a Code-Editor of your choosing (was implemented with VS Code) 
3) Run the terminal in the same folder
4) Run "npm install" in the Terminal 
5) Run "npm start" in the Terminal
6) Make sure that the port is free 
7) Additional Info can be found

## Build With 
1) @react-pdf/renderer
2) react
3) react-dom
4) react-router-dom
5) react-scripts
6) visual studio code as code editor 


## Known Issues
1) Adblock-Extensions can create error-messages (example: "ERR_BLOCKED_BY_CLIENT" for Google Ads)
2) A warning ("Error with Permissions-Policy header: Unrecognized feature: 'ch-ua-form-factor'.") comes direct from YouTube for the embedding of the video and should be ignored (Stackoverflow-Explanation: https://stackoverflow.com/questions/76313405/iframe-error-with-ch-ua-form-factor-cookie-permission)

## Tested Browsers
1) Google Chrome (Version 124.0.6367.61)
2) Mozilla Firefox (Version 125.0.2)
3) Microsoft Edge (Version 124.0.2478.51)

## Learnings
1) My main learning was, that trying to write all code in the main .js-file first and splitting it in components later is creating quite some overhead. 
2) My second biggest learning was that while StackOverflow is a great source of information, code/knowledge from there has to be double checked and refactored before to fit the needs better
3) Additionally i learned how to open new pages / work with Routers 

## Additional Notes
1) Selection for max points in the Quiz is first answer > second answer > third answer 
2) 60% and above shows the price-calculator 
3) If the bonus-question is answered correctly, a "contract" is created for printing






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
