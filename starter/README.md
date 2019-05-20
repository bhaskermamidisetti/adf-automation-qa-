## Prerequisites
- install Node 
- `npm install -g protractor` to install protractor
- `npm install` to install the project dependencies
- This will install two command line tools `protractor` and `webdriver-manager`
- The `webdriver-manager` is a helper tool to easily get an instance of a Selenium Server running.
start up a server with:  `webdriver-manager start`

## Description
- run tests: `protractor conf.js`

How to run the server
1. Start the server to make sure the local host default port is up and running 
2. Open the  CMD prompt   and navigate  to the path where node js installed and provide the command `webdriver-manger start` to start selenium server
3. Run  `protractor conf.js` 
 
Explination
1.Defined seleniumAddress: 'http://localhost:4444/wd/hub', in conf.js 
2.Launched the url('http://qaexercise.envalfresco.com/settings') in a default browser . 
2. Identified the provider drop down list with element locator id and selected ECM option and clicked on Apply button.
3. and again launched Login url(('http://qaexercise.envalfresco.com/login ') provided the input data using send keys for user name, password and clicked on sign in button
4. Created new folder and name has been added
5. created folder has been deleted
