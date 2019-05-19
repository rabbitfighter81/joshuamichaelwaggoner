# www.joshuamichaelwaggoner.com

This is my personal app, built using Angular and Angular Material, along with other tech.

## Technologies used

* [Angular 7](https://angular.io/)
* [Angular Material](https://material.angular.io/)
* [SASS](https://sass-lang.com/)
* [Yarn](https://yarnpkg.com/en/)
* [Jasmine](https://jasmine.github.io/)
* [Protractor](https://www.protractortest.org)
* [RxJs](http://reactivex.io/)
* [Express](https://expressjs.com)
* [MongoDB](https://www.mongodb.com)
* [Lodash](https://lodash.com)
* [Discogs API](https://www.discogs.com/developers)

## Limitations and requirements

* You need to have Node and Yarn to run `yarn install` which is required for most everything and included in most all scripts

## Installationa

* Execute `yarn install` from root directory to grab all the necessary dependencies for both the server and client. The dev dependiencies will be pruned from the bundle on build.

## Internationalization (i18n)

This app is currently set up to serve different builds for each language and locale and host them via a path prefix in the url. Supported locales are English, French, and German.

```sh
$ yarn run translate
```

Execute this will generate an .xlf file for marking translations in the `src/translations` directory. This is a complex precess, so please see i18n docs to accompish these goals.

## Serving

Run the corrosponding command for the appropriate locale to serve

| Locale | Command |
| ------ | ------ |
| English (en) | `yarn run serve:en` |
| Spanish (es) | `yarn run serve:es` |
| German (de) | `yarn run serve:de` |

## Building

Since this is a multi language `i18n` app, it has to be built for each locale at some point.

### Build a non AOT version for `en` locale exclusively

```sh
$ yarn run build-loacle:en
```

### Build an AOT version of any language alone

```sh
$ yarn run build-locale:<locale>
```

### Build an AOT version for all locales

```sh
$ yarn run build-locale
```

### Build by script

If you have a bash environment, to install an AOT version all locales you can optionally run a script.

```sh
$ yarn run locale-postbuild
```
It will fire off the `locale-postbuild.sh` script in the `root` directory of the app.

### Heroku build

`locale-postbuild.sh` is the script that gets fired on `yarn run heroku-postbuild` command that runs whenever the CD pipeline pushes to Heroku.

## Reports and analytics of budle sizes

* `yarn run bundle-report` will generate a view of all modules so you can see dependencies in a visual layout.

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
