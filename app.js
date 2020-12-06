const moment = require("moment");

const fs = require('fs');
let momento = require('moment');
let  dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');

const superHeroes = require('./superHeroes');

let data = momento().format('DD MMM do YY');

console.log(superHeroes);