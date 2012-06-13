#  Cloud Foundry StartUp for NodeJS / Express / EJS / Twitter Bootstrap / Responsive CSS3

## Prerequisites
- [Cloud Foundry Account ](http://cloudfoundry.com/signup)
- The [vmc](http://docs.cloudfoundry.com/tools/vmc/installing-vmc.html) Cloud Foundry Command Line Tool

## Deploying Node.js Application to Cloud Foundry

clone the source code from github
```
 git clone https://github.com/Dinesh-Ramakrishnan/node-express-twitter-bootstrap.git hello-node-tb
 cd hello-node-tb
```

use the *npm* (Node Package Manager) to install Express and EJS modules.
```
 npm install express
 npm install ejs
```

if required adapt the package.json as per your need.

test it once in your local environment by running
```
 node server.js
```

### Deploy the App

```
 vmc target api.cloudfoundry.com
 vmc login
```

once you have successfully logged in

```
vmc push

```

here is the example of push response

```
vmc push
	Would you like to deploy from the current directory? [Yn]:
	Application Name: hello-node-tb
	Application Deployed URL [hello-node-tb.cloudfoundry.com]:
	Detected a Node.js Application, is this correct? [Yn]:
	Memory Reservation (64M, 128M, 256M, 512M, 1G) [64M]:
	Creating Application: OK
	Would you like to bind any services to 'hello-node'? [yN]:
	Uploading Application:
	  Checking for available resources: OK
	  Packing application: OK
	  Uploading (0K): OK
	Push Status: OK
	Staging Application: OK
	Starting Application: ................ OK
```

## Reference

[Parent Repo](https://github.com/seafoox/node-express-twitter-bootstrap)
[CloudFoundry Instructions](http://docs.cloudfoundry.com/frameworks/nodejs/nodejs.html)
## Changelog:

### v.0.1 : June 13th, 2012