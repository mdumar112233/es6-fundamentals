const person = {
    name:'umar',
    age: 33
}
const data = JSON.stringify(person);
const dataPerson = JSON.parse(data);
console.log(dataPerson.name);


// local storage
// localStorage.setItem('id', 32);
const getId = localStorage.getItem('id');
console.log(getId);
localStorage.setItem('person', JSON.stringify(person))
const personInfo = localStorage.getItem('person');
const parsePerson = JSON.parse(personInfo);
// console.log(parsePerson.age);

const keys = Object.keys(parsePerson);
// console.log(keys);

const values = Object.values(parsePerson);
// console.log(values);

// session storage


setTimeout(() => {
    console.log('umar');
}, 1000);
