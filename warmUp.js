const prompt = require('prompt-sync')({sigint: true});

function fibs(n){
    let arr = [];
    let n1 = 0;
    let n2 = 1;
    let nextNum;

    for (let i = 1; i <= n; i++){
        arr.push(n1);
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
    }

    return console.log(arr);
}

//fibs(8);

function fibsRec(n){
    if (n === 0){
        return 0;
    } else if (n === 1){
        return 1;
    } else {
        return fibsRec(n-1) + fibsRec(n-2);
    }

}

const n = prompt('Enter the number of Fibonacci numbers for the array... ');
let arr = [];

for (let i = 0; i < n; i++){
    arr.push(fibsRec(i));
}

console.log(arr);