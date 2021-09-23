//functions expression

//1.
// const myFunc = function (instructor , ta , ...student) {
//     let greeting = 'Hello';
//     return student;
// }

//arrow
// const myFunc = (instructor , ta , ...student) => student;

const myFunc = (instructor, ta, ...student) => { let a = 0; return student };
console.log(`myFunc :`, myFunc(1, 2, 3))

console.log('---------------------------------------------------');

//2.
// function echo(text){
//     return text;
// }

// arrow
const echo = (text) => text;
console.log(`echo text :`, echo('Opal'));

console.log('---------------------------------------------------');

//3.
// function sayHi(greeting , name) {
//     return `${greeting} , ${name}`;
// };

// arrow
const sayHi = (greeting, name) => `${greeting} , ${name}`;
console.log(`sayHi : `, sayHi('Hello', 'Opal'));

console.log('---------------------------------------------------');

//4.
// function getClass() {
//     return `INT201`;
// }

// arrow
const getClass = () => `INT201`;
console.log(`Class :`, getClass());

//Default Parameters
const myFunc = function(instructor = 'unknown', numsOfStd = 0) {
    console.log(instructor);
    console.log(numsOfStd);
    return instructor;
};
myFunc(5);