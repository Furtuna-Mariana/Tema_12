const num = '3';

console.log(typeof +num);
console.log(typeof Number(num));

const str = 2
console.log(typeof str.toString())


const str1 = 2
console.log(typeof Boolean(str))

const falsy1 = '';
const falsy2 = 0;
const falsy3 = undefined;
const falsy4 = null;
const falsy5 = NaN;

if(!falsy1 && !falsy2) {
    console.log('at least bouth is false')
} else {
    console.log('only if bouth are true')
}

console.log('after')
