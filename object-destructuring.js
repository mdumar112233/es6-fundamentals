const numbers = [1,234,33];
// const x = numbers[0];
// const y = numbers[1];
// array destructuring 
// const [x, y] = [1, 234]
const [x, y] = numbers;
// console.log(x, y);

function box(num){
    return [num, num + 4];
}

const [box1, box2] = box(2);
// console.log(box1, box2);

// object destructuring

const person  = {
    name: 'umar',
    age: 333
}
// const {name} = person;

// console.log(name);


// create object shortcut
const one = 22;
const two = 37;
const obj = {one, two}
// console.log(obj);

// new array using three dots
const newNumbers = [...numbers, 33];
console.log(newNumbers);





























