# JoshuaMichaelWaggoner.com

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8.

## Development server

* Run `npm run serve-en` for a dev server in English. Navigate to `http://localhost:4200/en/`. The app will automatically reload if you change any of the source files.

* For Spanish, execute `npm run serve-es`

* For German, execute `npm run serve-de`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

* Since *joshuamichaelwaggoner.com* is a multi language app, it has to be built for each locale.

* To build for just English locale, run `npm run build-localed`.

* To build for all locales, run `npm run locale-postbuild` which in turn runs `locale-postbuild.sh` script. This will take several minutes... 

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

* For better debuggin, execute `ng test --source-map=false`.

## Running end-to-end tests

Right now there are no e2e tests. 

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



###########################

# Yodagram

This project started out as a simple React + Redux <a href="https://learnredux.com">video tutorial series by Wes Bos</a>, and I learned a ton about Redux, but afterwards I wanted to know how you would implement asyncronous AJAX style requests and responses while adhering to the architectural style. So I thought, wouldn't it be cool for a front-end guy to be able to write a server that can perform all the required tasks of the front-end?

So I added a REST API server, a MongoDB database, and the app was augmented to use actual HTTP requests instead of static files to make things happen. 

It turns out that if you follow the model that Redux has laid out, it is easy to just make REST calls as an action, and have the server responses be actions themsleves, and use the reducers to update the state. In fact,once you get the hang of it, it makes the old days writing jQuery AJAX seem like a nightmare. Which it was... 

I used `superagent` to make the server side requests, `express` for the server, `mongoose` to make dealing with MongoDB easier, `fs` for async file reading, and 'bluebird' for promises. Also, I have added the use of `underscore` b/c it's awesome! Other than that, I tried to use as little extra stuff as possible. 

I'm so grateful to @WesBos for making great tutorials and I am just taking a stab in the dark here with both the server code as well as the way I've incorporated http requests and responses into the Redux architecture. 

I hope this helps some people take a leap in the direction of what a real app running on a server might be like, i.e. REST API's, async, HTTP verbs, database stuff, etc... I have taken some liberties with the original source code to make it work, but have licenced it under the same licence as the author and claim no rights to the original code, or my additions/changes. 

Also, there are many things that I'm sure I could be doing better, but again, this is just an experiment to learn, so don't take this as gospel on how to crete a REST API and MongoDB Schema. That's why I encourage anyone who wants to contribute to do so, and I will pull in your changes and add you as a team member. 


## Screenshot with React Dev Tools
![Yodagram](http://rabbitfighter.net/wp-content/uploads/2016/10/Screen-Shot-2016-10-08-at-9.21.39-AM.png)

## Technologies used
* React
* Redux
* Express
* MongoDB
* Webpack

## Limitations and requirements
* You must have MongoDB installed
* You need to have Node
* There seems to be a Safari CORS issue, so use Chrome or Firefox. (I will try to adress this problem in time. Also there is a CORS plugin for Chrome that will allow it to work if all else fails)

## Running

* First `npm install` from root directory to grab all the necessary dependencies. (Some dependencies are aoutdated. If you want to help out, I will pull in changes that fix some of these errors)
* Run the server by goint to root/server and `node server.js`.
* Then run client go to root directory and `node devServer.js`
* Open `localhost:7770` in your browser.

## Development
* To use live building, instead of `node`, use `nodemon`. (Note: typing `rs` while nodemon is running the api server will restart)

## Team
* Joshua Michael Waggoner (<rabbitfighter@cryptolab.net>)

## New NPM packages used
* bluebird
* express
* express-mongoose-status
* fs
* lodash
* mongoose
* node-restful
* superagent

## Licence
MIT