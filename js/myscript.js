console.log("hola index")

var x = 10;
var y = 55.55;

console.log('x = '+x+'\n'+ 'y = '+y);

/* --------- Cadena de texto-----------  */
var texto = 'Hola a todos!\'Soy Steven un estudiante que aprende a programar';

console.log(texto)

/* --------- Operados-----------  */
var PrimerSuma = 10 + 5;
console.log(PrimerSuma)

var numero1 = 10;
var numero2 = numero1 + 5 + 22 + 1000 + 50;
var numero3 = numero1 * 2;
var numero2 = numero2 / 4;
var numero4 = 26 % 6;

console.log('El valor del numero uno es: ' + numero1,'\n', 
'El valor del numero dos es: ' + numero2,'\n', 
'El valor del numero tres es: ' + numero3,'\n', 
'El valor del numero cuatro es: ' + numero4,'\n')

/* --------- Operados de asignacion-----------  */

x-= y+=9   // esto equivale a x = x -(y+9)
console.log(x)

/* --------- Operados de comparacion-----------  */

var igualdad = 4 == 10;
console.log('Es igual 4 a 10: '+ igualdad)

var identico = 5 === 10;
console.log('Es identico 5 a 10: '+ identico)

var no_igual_que = 4 != 10;
console.log('no es igual 4 a 10: '+ no_igual_que)

var no_identico = 6 !== 10;
console.log('No es identico 6 a 10: '+ no_identico)

var mayor_que = 8 > 10;
console.log('Es mayor 8 que 10: '+ mayor_que)

var mayor_o_igual_que = 6 >= 10;
console.log('Es mayor o igual 6 que 10: '+ mayor_o_igual_que)

var menor_que = 9 < 10;
console.log('Es menor 9 que 10: '+ menor_que)

var menor_o_igual_que = 10 <= 10;
console.log('Es menor o igual 10 que 10: '+ menor_o_igual_que) 


/* --------- Operados logicos o boleanos-----------  */

//     && retorna verdadero, si ambos operadores son verdaderos
//     || retorna verdadero, si uno de los operadores es verdadero
//     ! retorna verdadero, si el operador es falso y falso, si es verdadero

var logico = (4>2 && 10<15)
console.log(logico)

var logico_1 = (!(4>2) && (10<15))
console.log(logico_1)

/* --------- Operadores de cadena de texto-----------  */

var texto1 = 'Mi nombre es steven Perez ';
var texto2 =' aprendo JavaScript';
document.write(texto1 + texto2 + '<br/>') 

var texto3 = '50';
var texto4 = '200';
document.write(texto3 + texto4)

/* --------- Condicionales-----------  */

// if  (condicion) {declaracion}
/*
var myNum1 = 7;
var myNum2 = 10;
if (myNum1 < myNum2) {
    alert("JavaScript is easy to Learn.");
}

// if (expresion) { se ejecuta si al condicion es verdadera }
// else { se ejecuta si la condicon es falsa}

/* 
var myNum3 = 7;
var MyNum4 = 10;
if (myNum3 > MyNum4){
    alert('This is my firts condicion');
}
else{
    alert('This is my second condition');
}

// Else if: se utiliza para especificar una nueva condicion si la primera es falsa

var course = 3;
if (course == 1) {
    document.write('<h1>HTML Tutorial</h1>');
}
else if (course == 2) {
    document.write('<h1>CSS Tutorial</h1>')
}
else{
    document.write('<h1>JavaScript Tutorial</h1>')
}


/* ---------  Switch  -----------  */

//   se utiliza cuando necesitas evaluar multiples condicones 
//   y con base a esto ejecutar diferentes acciones.

/*  switch (expesio) {
    case n1:
        statements
        breack;
    case n2:
        statements
        breack;
    default:
        statements
}                    */


var day = 4;
switch (day) {
    case 1:
        document.write('Monday');
        break;
    case 2:
        document.write('Tuesday');
        break;
    case 3:
        document.write('wednesday');
        break;
    case 4:
        document.write('Thuesday');
        break;
    default:
        document.write('Another day');
}


/* ---------  Bucles  -----------  */

// Estos se utilizan cuando se quiere ejecutar varias veces el mismo codigo o sentencia.
// en Js se ejecuta el for, while y do while

//  For
document.write ('<br/>' + 'Sentencia For' + '<br/>');

for (i = 0; i<=5; i++) {
    document.write(i + '<br/>');
}

document.write ('<br/>' + 'Sentencia while' + '<br/>');
var p = 0;
while (p <= 10) {
    document.write(p + '<br/>');
    p++;
}

//   Do while
// este bucle es una variante d e bucle while. Este bucle se ejecuta una vez antes de evaluar
// si la condicion es verdadera, y entonces el bucle se repite mientras esa condicion sea c¿verdadera.

document.write ('<br/>' + 'Do while' + '<br/>');

var m = 20;
do {
    document.write (m + '<br/>');
    m++;
}
while (m <= 25);

// El break rompe el bucle, es decir sale o finaliza el bucle
document.write ('<br/>' + 'For con break' + '<br/>');

for (w = 0; w <= 10; w++) {
    if ( w == 5) {
        break;
    }
    document.write(w + '<br/>');
}

document.write ('<br/>' + 'For con continue' + '<br/>');
for (w = 0; w <= 10; w++) {
    if ( w == 5) {
        continue;
    }
    document.write(w + '<br/>');
}

/* ---------  Ejercicios curso D  -----------  */



/* ---------  Funciones  -----------  */

// Una funcion es un bucle de codigo para ejecutar una tarea especifica.
// La ventaja de usar funciones es que se puede:
//      - Reusar el codigo

/*      function name(){
            codigo a ejecutar
        }
*/

// para llamar la funcion colocamos el nombre, seguido de parentesis y el punto y coma.

//     name();
/*
function sayHello(name){
    alert('Hi, '+ name);
}

sayHello('Steven');


/*-------------- */

function myFunction(a,b){
    return a * b;
}

var t = myFunction(5,6);
console.log(t);

/* ---------  Ventanas Alert, Prompt, Confirm  -----------  */
/*
alert("Do you really want to leave this page?")

var user = prompt("Please enter your name");
alert(user);

var result = confirm('Do you really want to leave this page?');
if(result == true) {
    alert('Thanks for visiting');
}
else {
    alert('Thanks for staying with us');
}


/* ---------  EMACASCRIPT 6 (ES6)  VAR Y LENT  -----------  */

function varTest(){
    var s = 1;
    if (true) {
        var s = 2;
        console.log(s);
    }
    console.log(s);
}
varTest()

function varlent(){
    let u = 1;
    if (true) {
        let u = 2;
        console.log(u);
    }
    console.log(u);
}
varlent()

for (let ñ = 0; ñ < 5; ñ++) {
    document.write(ñ + '<br/>')
} 


/* ---------  template literals  -----------  */

let namee = 'Steven';
let msg = `Welcome ${namee}!`;
console.log(msg);

let numer = 9;
let numer2 = 12;
let ggg = `la suma es ${numer + numer2}!`;
console.log(ggg);

/* ---------  Bucles y funciones  -----------  */

let list = ["x", "y", "z"];
for (let val of list){
    console.log(val)
}

function add(x,y){
    var sum = x + y;
    console.log(sum);
}
add(20,90);

const ade = (x, y) => {
    let sum = x + y;
    console.log(sum);
}
add(210,90);

const test = (a, b = 3, c =42) =>{
    return a + b + c;
}
console.log(test(5)); 

/* ---------  Objetos  -----------  */

let tree = {
    height: 10,
    color: 'green',
    grow(){
        this.height += 2;
    }
};
tree.grow();
console.log(tree.height);


let height = 5;
let health = 100;

let athlete = {
    height,
    health
};
console.log(athlete.health);

let prop = 'name';
let id = '1234';
let mobile = '08923';

let user = {
    [prop]: 'Jack',
    [`user_${id}`]:`${mobile}`
};
console.log(user.name);

var i = 0;
var a = {
    ['foo' + ++i]: i,
    ['foo' + ++i]: i,
    ['foo' + ++i]: i
};
console.log(i);

var param = 'size';
var config = {
    [param]: 12,
    ['mobile' + 
param.charAt(0).toUpperCase()+
param.slice(1)]: 4
};
console.log(config);


/* ----------------- Objeto.assing ----------*/


let person = {
    name : 'Jack',
    age: 18,
    sex: 'male'
};
let student = {
    name: 'Bob',
    age: 20,
    xp: '2'
};
let newStudent = Object.assign({},person, student);
console.log(newStudent);



let persona = {
    name:'Jack',
    age: 18
};

let newPersona = Object.assign({},persona);
newPersona.name = 'Jesus';

console.log(persona.name);
console.log(newPersona.name);

let personita = {
    name: 'tato',
    age: 18
};
let newPersonita = Object.assign({},personita, {name: 'Fabian'});
console.log(newPersonita.name);


/* ----------  Desestructuracion --------*/

//   Se utiliza para descomponer un array en direfentes variables

let arr = ['1', '2', '3'];
let [one, two, three] = arr;

console.log(one);
console.log(two);
console.log(three);

//  Descomponer un array devuelto por una funcion:

let aa = () => {
    return [1,2,3];
};

let [uno, , dos] = aa();
console.log(uno);
console.log(dos);

// Ahora ejemplos descomponiendo objetos

let obj = {h:100, s: true};
let {h,s} = obj;

console.log(h);
console.log(s);

let pp, oo;
({pp, oo} = {pp: 'Hello ', oo: 'Steven'});
console.log(pp + oo);

let {p1, o1} = {p1: 'Hello ', o1: 'Laura'};
console.log(p1 + o1);

// Tambien puedes asignar el objeto a nuevos nombre de variables

var e1 = {h: 42, s1: true};
var {h: foo, s1: bar} = e1;
console.log(foo);

//  tambien puedes asignar valores predeterminados a variables, 
//  en caso de que el valor extraido del objeto sea indefirnido.

var objj = {identi: 50, nombree: "camilo"};
let {identi = 10, años = 20} =objj;

console.log(identi);
console.log(años);

/* ---------- Parametros Rest y Spread --------*/

// Rest : Usando un parametro rest se puede pasar una cantidad de 
//        parametros variables en una funcion

function containsAll(lop, lll, opps, nuua){
    for (let num of nuua) {
        if (lop.indexof(num) === -1)
        {
            return false;
        }
    }
    return true;
}

// Spread : es parecido al operador rest, pero tiene otra finalidad 
//          utilizando en objetos, arrays o llamadas a funciones (argumentos).

// Spread en Funciones: 
var dataFields = [1970, 0, 1];

var date = new
Date(...dataFields);
console.log(date);

// Spread en literals de arrays:
let newarr = ['Three', 'Four'];
let arri = ['one', 'two', ...newarr, 'five'];
console.log(arri);

// Spread en literals de objetos
const obj1 = {
    fuu: 'bar', xx: 42};
const obj2 = {
    fuu: 'baz', yy: 5
};

const clonedObj = {...obj1};
const mergedObj = {...obj1, ...obj2};

console.log(clonedObj);
console.log(mergedObj);

//  Para combinar o clonar objetos, usar el Objectassign().
const ob1 = { lug: 'bar', x1: 35};
const ob2 = { lug: 'baz', y2: 20};
const merge = (...objetcs) => ({...objetcs});

let mergedOb = merge(ob1, ob2);
let mergedObb2 = merge({}, ob1, ob2);
console.log(mergedOb);
console.log(mergedObb2);

/* ---------------  Clases --------- */


class Rectangulo {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}

const sguare = new Rectangulo(5,5);
const poster = new Rectangulo(2,3);

console.log(sguare);

var Scuare = class Rectangulo {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
console.log(Scuare);
var Scuare = class {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
}
console.log(Scuare);

/* ---------  Metodos de clases ------- */

class Cuadrado {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea(){
        return this.height *
        this.width;
    }
}
const square = new Cuadrado(5, 5);
console.log(square.area);

//   Metodo static: se utiliza para crear funciones de utilidad para una funcion.

class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a,b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.hypot(dx, dy);
    }
}
const pt1 = new Punto(7,2);
const pt2 = new Punto(3,8);
console.log(Punto.distance(pt1, pt2));

/* ---------- Herencia --------- */

class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + ' makes a noise.');
    }
}
class Dog extends Animal {
    speak(){
        console.log(this.name + ' Barks.');
    }
}
let dog = new Dog ('Rex');
dog.speak();


class Animal_1 {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(this.name + ' makes a noise.');
    }
}
class Dog_1 extends Animal_1 {
    speak(){
        super.speak(); // con este utilizamos el metodo del apdre (super)
        console.log(this.name + ' hola.');
    }
}
let dog_1 = new Dog_1 ('Flopi');
dog_1.speak();

/* -------- Map y Set -------- */

let map = new Map ([['k1', 'v1'], ['k2', 'v2']]);
console.log(map.size);

let map1 = new Map();
map1.set ('k1', 'v1').set('k2', 'v2');
console.log(map1.get('k1'));
console.log(map1.has('k2'));

for (let kv of map1.entries())
console.log(kv[0] + " : " + kv[1]);


//   Set

let set = new Set([1, 2, 4, 2, 59, 9, 4, 9, 1]);
console.log(set.size);

let set1 = new Set();
set1.add(5).add(9).add(30).add(9);
console.log(set1.has(9));

for (let v of set1.values())
console.log(v);


/* ---------- Promises ------------*/

// new Promise (function (resolve, reject) {
//     if (success)
//         resolve(result);
//     else
//         reject(Error("failure"));
// }) 


function asyncFunc (work) {
    return new
    Promise(function(resolve, reject){
        if (work === "")
        reject (Error("Nothing"));
        setTimeout(function() {
            resolve (work);
        }, 1000);
    });
}

asyncFunc("work 1").then(function(result){
    console.log(result);
    return asyncFunc("work 2");
}, function(error) {
    console.log(error);
})
.then(function(result){
    console.log(result);
}, function(error) {
    console.log(error);
});
console.log("End")

/* ------------ Iteradores y generadores ----------- */

let myIterableObj = {
    [Symbol.iterator] : function* ()
    { yield 1; yield 2; yield 3;
    console.log([myIterableObj]);}
}

function* idMarker() {
    let index = 0;
    while (index < 5)
        yield index++;
}
var gen = idMarker();
console.log(gen.next().value);

const arryy = ['0','1', '4', 'a', '9', 'c', '16'];
const my_objt = {
    [Symbol.iterator]: function*(){
        for (let index of arryy){
            yield `${index}`;
        }
    }
}
const all = [...my_objt].map(i => parseInt(i, 10))
.map(Math.sqrt)
.filter((i) => i < 5)
.reduce((i, d )=> i + d);
console.log(all);

/* -------- Modulos -------- */
// //lib/macth.js
// export let sum = (x, y) =>
// { return x + y; }
// export let pi = 3.14;

// // app.js
// import * as math from "lib/math"
// console.log(`2p = + ${math.sum(math.pi, math.pi)}`)


/* ------ Metodos integrados ------*/
[4, 5, 1, 8, 2, 0].filter(function(x) {
    return x > 3;
})[0];

[4, 5, 1, 8, 2, 0].find(x => x > 3);

[4, 5, 1, 8, 2, 0].findIndex(x => x > 3);

console.log(Array(3 + 1).join("foo")); // repetir antes

console.log("foo".repeat(3)); // repetir ahora

// Busqueda String antes
"SoloLearn".indexOf("Solo") === 0;
"SoloLearn".indexOf("Solo") === (4 - "Solo".length);
"SoloLearn".indexOf("Lole") !== 1;
"SoloLearn".indexOf("olo", 1) !== -1;
"SoloLearn".indexOf("olo", 2) !== -2;

// Busqueda String ahora
"SoloLearn".startsWith("Solo", 0);
"SoloLearn".endsWith("Solo", 4);
"SoloLearn".includes("Lole");
"SoloLearn".includes("olo", 1);
"SoloLearn".includes("olo", 2);
