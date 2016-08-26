# React Atomic Structure

Basic Structure for React app following Atomic Design.

This base project allows you to have a basic React App folder structure following the principles of Atomic Design. 
It contain some basic components that you can use. All the components are not (or minimally) stylized. The main objective
of this project is to have a basic structure, that is the reason we are not doing complex styles and/or adding many libs.

## Tools

This project uses:

* Gulp
* Sass
* ES6
* BrowserSync

Using these package, you will be able to start a new fresh React project with the basic folder and file structures.

This project uses ES6 in the JS side, and Sass for styles. It also uses BrowserSync, a tool that will create a 
web server in your machine that automatically updates the code and the styles whenever the watcher detects a change.

## TODO List
* Sass Lint
* JS Lint
* Mixin to pass additional classnames to components
* Add components
* Tests
* Production build (minification, etc)
* Add react-router ?
* Add react-redux ?

## Requirements
nodejs v5.*
npm v3.*


## Getting started

##### Install Gulp globally
```bash
npm install -g gulp
```

##### Install npm dependencies
```bash
npm install 
```

##### Run the server
```bash
npm run start 
```

## Predefined components
But first, [What is Atomic Design?](http://bradfrost.com/blog/post/atomic-web-design/)

These components are just an idea on how to develop your application following the Atomic Design. Feel free to upgrade/delete
them in order to do your own app!

#### Atoms (stateless component)
* Link
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

#### Templates
* Home

## Folder structure and explanation
WIP

## NPM Scripts
This project comes with the following scripts to help you.

WIP

## Contributions
Feel free to create a pull request or create an issue to add features or fix bugs.

