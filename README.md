# React Atomic Structure
[![Build Status](https://travis-ci.org/Rulox/react-atomic-structure.svg?branch=master)](https://travis-ci.org/Rulox/react-atomic-structure)
[![Quality Gate](https://sonarcloud.io/api/project_badges/measure?project=Rulox_react-atomic-structure&metric=alert_status)](https://sonarcloud.io/dashboard?id=Rulox_react-atomic-structure)


Basic Structure for React app following Atomic Design.

This base project allows you to have a basic React App folder structure following the principles of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).
It contains some basic components that you can use. All the components are not (or minimally) stylized. The main objective
of this project is to have a basic structure, that is the reason we are not doing complex styles and/or adding many libs.

Also, each component is a JSX file and a .scss file that is associated to the component. This means, all the 
components for this project should be modular, to make it easy its usage between different apps.

## Tools

Using these package, you will be able to start a new fresh React project with the basic folder and file structures.

This project uses ES6 in the JS side, and Sass for styles. 

## Features

* Webpack 3
* ES6
* SASS
* React Router
* Auto watcher for JS and SCSS files
* Atomic design project structure
* Launch server with hot-reload using webpack
* JS Lint ( extending airbnb eslint styles )
* Styleint

## TODO List
* Tests

## Requirements
* nodejs >= v8.*
* npm >= v4.*


## Getting started

[Download the master branch](https://github.com/Rulox/react-atomic-structure/archive/master.zip)

**or**

Clone this repo (Be sure you delete the .git file, or move the files to your own project folder/repository)
```bash
git clone -b master --single-branch --depth 1 git@github.com:Rulox/react-atomic-structure.git
```

##### Install npm dependencies
```bash
npm install
```

##### Run the server 
```bash
npm run start
```
A browser webpack server should be ready on  http://localhost:3200/ (or any other URL+PORT that your terminal says). You can start working right now in the code, and all the changes will be visible in the browser just opened.

## Predefined components
But first, [What is Atomic Design?](http://bradfrost.com/blog/post/atomic-web-design/)

These components are just an idea on how to develop your application following the Atomic Design. Feel free to upgrade/delete them in order to do your own app!

#### Atoms (stateless component)
* Anchor
* Label
* Button
* Input
* Image
* Title
* Paragraph

#### Molecules
* Labeled input
* Content

#### Organisms
* Article
* Form
* Nav

#### Templates
* Home
* About

## Creating your own component

To create a new component, just create a new folder in the atoms/molecules/organisms/templates folder with the
name of your component.

Create now the React component in the jsx file. Also create your .scss file and remember to import it in the component jsx file using `require`.

## NPM Scripts
This project comes with the following scripts to help you.

```bash
npm run watch
```
This is the preferred method during development

1. Create CSS and JS bundles from Sass and JS.
2. Launch a web server.
3. Launch watchers on JS/CSS files.

```bash
npm run start
```
1. Create CSS and JS bundles from Sass and JS.
2. Launch a web server.

```bash
npm run build
```
1. Build CSS and JS files. With this command, the js will be minified, the bundle version will be used in the html.

```bash
npm run lint
```
1. Launch Lint checkers.

## Contributions
Feel free to create a pull request or create an issue to add features or fix bugs.
