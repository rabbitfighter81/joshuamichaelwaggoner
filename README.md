# www.joshuamichaelwaggoner.com

This is my personal app, built using Angular and Angular Material

## Screenshot for Desktop

![Desktop](https://i.imgur.com/2T4qmcN.png)

## Screenshot for Mobile

![Mobile](https://i.imgur.com/gLH0ckY.png)

## Reports and analytics of budle sizes

* `npm run bundle-report` will generate a view of all modules so you can see dependencies in a visual layout.

## Technologies used

* Angular 7
* Angular Material
* SASS/SCSS
* RxJs
* Express
* MongoDB
* Lodash

## Limitations and requirements

* You need to have Node to run `npm i` which is required for most eberything and included in most all scripts

## Installation

* Execute `npm install` from root directory to grab all the necessary dependencies for both the server and client. The dev dependiencies will be pruned from the bundle on build.

## Internationalization (i18n)

This app is currently set up to serve different builds for each language and locale and host them via a path prefix in the url. Supported locales are English, French, and German. 

Execute `ng xi18n` or other commands (see ...) to generate an .xlf file for marking translations. This is a complex precess, so please see i18n docs to accompish these goals. I aim to add French and Chinese and have 100% translation by end of year.

## Serving

* For English, execute `npm run serve-en`
* For Spanish, execute `npm run serve-es`
* For German, execute `npm run serve-de`

Navigate to `http://localhost:<port>/<locale>/`. The app will automatically reload if you change any of the source files.

## Building

Since this is a multi language `i18n` app, it has to be built for each locale at some point.

* Build a non AOT version for `en` locale exclusively: execute `npm run build`.

* Build an AOT version of any language alone: execute `npm run build-locale:<locale>`, i.e. `npm run build-locale:de` for German

* Build an AOT version for all locales: execute `npm run build-locale`

* If you have a bash environment, to install an AOT version all locales you can optionally run the script `npm run locale-postbuild` and it will fire off the `locale-postbuild.sh` script in the `root` directory of the app.

`locale-postbuild.sh` is the script that gets fired on `npm run heroku-postbuild` command that runs whenever the CD pipeline pushes to Heroku.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* For better debuggin, execute `ng test --source-map=false`.

## Running end-to-end tests

Right now there are no e2e tests.
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

There are no e2e tests yet. Coming soon...

## Author

* Joshua Michael Waggoner (<joshuamichaelwaggoner@gmail.com>)

## Licence

&copy; Joshua M. Waggoner

## Todos and Plans

* Translations
* e2e Testing
* Set up dev environment to work with staging server to speed up dev time
* Work more on editor settings and include them and plugins used in some sort of VSCODE file
* Increase Performance
* Contact form securely transferring mails (not showing my credentials in git) instead of just opening your mail and filling it in. Kind of lame. Sorry, will add soon.
* More links
* Working links to all the projects in Git. Some need created.
* Set up semantic versioning
* Add features as they arise

