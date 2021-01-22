#!/usr/bin/env node

const axios = require('axios');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const ora = require('ora');


const pkg = require('./package.json');
updateNotifier({
    pkg
}).notify();
const API_URL = "https://random-words-api.vercel.app/word";

const spinner = ora();
const cyan = chalk.cyan.bold('›');
const red = chalk.red.bold('›');
const green = chalk.green.bold('›');

var options = {method: 'GET', url: API_URL};

spinner.text = 'Fetching New Word...';
spinner.start();
axios.request(options).then(function (response) { 
    spinner.stop();
    console.log(cyan,'Word:',response.data[0].word);
    console.log(red,'Pronunciation:',response.data[0].pronunciation);
    console.log(green,'Definition:',response.data[0].definition);
}).catch(function (error) {
  console.error(error);
});