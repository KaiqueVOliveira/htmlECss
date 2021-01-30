

    /*const moment = require("moment");

    const fs = require('fs');
    //let momento = require('moment');
    let  dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8');

    const superHeroes = require('./SuperHeroes');

    let data = moment().format('DD do MMM YY');

    console.log(superHeroes);*/



    let cachorro = require('./superHeroes')

    let{nome, idade} = cachorro

    console.log('O cachorro se chama ' + nome + ' e tem ' + idade + ' anos')
