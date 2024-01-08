// const  array = ["a", "b", "c", "d", ];
// // ----------------es - 5-----------------
// console.log(array[1]);///b
// //---------ES - 6----------------------------
// const [first,b,ych,dd] = array
// console.log(first);///a
// console.log(b);///b
// console.log(ych);///c
// console.log(dd);///d
// length 1----------------------4-1
const array=[1,2,3,4];
// index---------------0-1-2-3
const lastNUmber = array[array.length-1];
//ES-58
const LastNumber2 = array.at(-1)
console.log(lastNUmber);
console.log(LastNumber2);
//operator----(+,-,*,/,&&,||,?,!,=,==,===)
//ES-6(...)
//... SPREAD OPERATOR
// const a = [1,2,3,];
// const b = [4,5,6];
// const c = a.concat(b)
// console.log(c);

const a = [1,2,3,];
const b = [4,5,6];
const c = [...a,...b,9,0,90]
console.log(c);


//ES-6 includes()
const cars = ["Ford", "BMW", "Fiat", "Volvo", "Volkswagen"];
// ABS->abs .toLowerCase()
// abs ->ABS .toUpperCase()
const bmw =cars.filter(el=>el.toLowerCase().includes("w"));
console.log(bmw);
// ES-8 flat()
const deepArr = [[1,2,[11,22]], [3,4,[33,44]], [5,6]]

console.log(deepArr.flat(Infinity));

// ...
const  iphone = {
    model: "Iphone 15 pro",
    pzu: "128gb",
    brand: "Apple",
    price: 1000
    owner: {
        name: "Ayatullo"
    }
}

// ES-5
console.log(iphone.model)
console.log(iphone.owner.name)

const  {model , owner: {name}} = iphone;

console.log(model)
console.log(owner.name)


function findELement(selector) {
    const el = document.querySelector(selector);

    return [el]
}

const [ body ] = findELement("body");
const [ btn, btnText, claSS ] = findELement("button");

console.log(body);
console.log(btn, btnText, claSS);


// console.log(cars.includes("Ford"));