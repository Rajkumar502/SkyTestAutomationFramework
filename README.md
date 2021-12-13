# Frameworks:
- This repository contains automated regression test for Sky web apps. The below tools/frameworks are used
- webdriverIO (v6)
- cucumber (v6)

## *Requirments*

* Git
* [Node.js](https://nodejs.org) > = 12 
* Visualstudio code (or IDE you're comfortable with)

## *Setup*

1. Open a terminal
2. clone the repo `git clone git@github.com:Rajkumar502/SkyTestAutomationFramework.git`
3. Navigate to the `cd SkyTestAutomationFramework`
4. Install all the npm dependencies `npm i`.['It will provide all the dev and test dependencies']

## *Running tests*

`npx wdio wdio.conf.js  --envi=PROD,--ff=searchResults` ## to run single feature file
`npx wdio wdio.conf.js  --envi=PROD` ## to run all feature files

## *Command line arguments*

* `--browser` - mention the browser on which tests needs to be executed. `Default : chrome`
* `--envi` - mention the environment on which tests needs to be executed. `Default : PROD`
* `--pack` - mention the pack to run the test. `Default : Main`
* `--tags` - mention the tag to run tests with given tag.
* `--ff` - mention the feature file name to run test. `Default : **`
* `--loggingLevel` - mention the log level. `Default : silent`

## *Writing new tests*

1. Add a new .feature file for the story you are testing in the current sub folder `tests/featues/e2e/**/**`
2. you can add the tags as you like distinguish different groups of tests. add the tags in `.gherkin-lintrc` to allow the tags to access
3. Add step definitions for any undefined steps in `tests/featues/e2e/step_definitions/` and add the step path in the `tests/config/import.js`
4. Add any undefined page objects in `tests/pages/common/`

## *Code style*

Coding style is checked via `eslint` for .js and `gherkin-lint` for the feature files

## *Code style*

`npm run lint`

## *Technologies*

* **WebdriverIO** `https://webdriver.io/` - Webdriver bindings for Node.js.
* **Cucumber** `https://cucumber.io/` - cucumber executes your .feature files, and those files contains executable specfications written in gherkin language

## *Reporting*

* **WDIO console** - `@wdio/spec-reporter`
* **Json Reporter** - `wdio-cucumberjs-json-reporter`
* **HTML Reporter** - `@rpii/wdio-html-reporter`

## *Framework Design*

Rajkumar Velusamy