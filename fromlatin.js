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

    var num = bignum('0');
    var c;
    var i = 0;

    while (stdin.length) {
        c = stdin[stdin.length - 1];
        stdin = stdin.substr(0, stdin.length - 1);
        num = num.add(bignum.pow(BASE, i).mul(c.charCodeAt(0)));

        i++;
    }

    console.log(num.toString());

});
