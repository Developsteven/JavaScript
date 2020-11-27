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