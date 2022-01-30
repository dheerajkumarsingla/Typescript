// Below are examples of type annotations
let width: number = 90;
let shapeName: string = 'rectangle';
let nothingAtAll: null = null;
let nothingMuch: undefined = undefined;

console.log(typeof(nothingMuch)); // undefined

nothingMuch = null;

console.log(typeof(nothingMuch)); // object

let voidType: symbol;

console.log(voidType, typeof(voidType));

// Array
let colors: string[] = ['red', 'blue'];
let marks: number[] = [99, 100];
let valid: boolean[] = [true, false, false, true];

// classes
class Car {

}
let car: Car = new Car();

// Object literal
let cordinates: {x: number; y:number} = {
    x: 10,
    y: 20
}

// functions
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
}

// type annotations
let area: number = 90;

// type inference
let areaInference = 90;

// Use type inference - if declaration and initialization is done on same line
// Use type annotations - if declaration and initialization is not done on same line

// When to use annotations
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates);

// When type inference does not work directly when we declare and intialize on same line
let numbers = [-3, 1, 12];
let numberAboveZero: boolean | number = false;

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}