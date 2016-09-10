#!/usr/bin/env node

const bignum = require('bignum');

const BASE = Math.pow(2, 32);

process.stdin.resume();
process.stdin.setEncoding('utf8');

var stdin = "";

process.stdin.on('data', function(chunk) {
    stdin += chunk;
});

process.stdin.on('end', function() {

    var num = bignum(stdin);
    
    var digits = [];

    do {
        digits.push(num.mod(BASE));
        num = num.div(BASE);
    } while (num.gt(0));

    var chars = [];
    while (digits.length) {
        chars.push(String.fromCharCode(digits.pop()))
    }

    console.log(chars.join(''));

});
