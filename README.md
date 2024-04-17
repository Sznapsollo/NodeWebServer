# NodeWebServer - simple web server
Simple Node Web server to serve some web page from given folder. In this case it serves simple index.html file from **client/build** folder

## How to setup
- download repository
- go to repository folder
- run **npm install** to install all node dependencies
- run **node app.js**
- this will run webserver serving index file from **client/build** folder on port specified in **config.js** file which by default is **8888**
- so your server webpage should be available under **http://localhost:8888/**

## API
This example also contains example to handle request API calls in **controllers/actions.js** when calling **/actions** (so by default **http://localhost:8888/actions**)

Actions api expects post request with body object with **type** property. Currently the following types are handled
- **customAPIAction** ({type: "customAPIAction"}) - just some example method producing log to console