# WAE-Tool
This repository contains the source code of a Node JS app that performs Web Accessibility Evaluation using [pa11y](https://pa11y.org/) package.

To test this locally you must:

- Install Node JS
- Clone this repo on your local machine
- cd WAE-Tool
- run in CLI: npm install 
- On MacOS or Linux, run the app with this command: DEBUG=wae-tool:* npm start
- On Windows Command Prompt, use this command: set DEBUG=wae-tool:* & npm start
- On Windows PowerShell, use this command: $env:DEBUG='wae-tool:*'; npm start

Then, load http://localhost:3000/ in your browser to access the WAE Tool.

