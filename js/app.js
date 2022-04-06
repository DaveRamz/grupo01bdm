const h1TestId = document.getElementById("divTest");

function sayHello(){
    console.log("Hey!");
}
function anotherFunction(){
    console.log("Yo tambien!");
}

h1TestId.onclick = function () { console.log("Hola x4 !")  } ;
h1TestId.addEventListener("click", sayHello);
h1TestId.addEventListener("click",anotherFunction);
h1TestId.removeEventListener("click",sayHello);
h1TestId.onclick = function () { console.log("Sera anidado???!")  } ;






























//attribute, style.property

document.getElementById("algoEnEspecifico").style.color = "blue";
// const h1Especifico = document.getElementById("algoEnEspecifico");
// h1Especifico.style.color = "blue";


const h1TestClass = document.getElementsByClassName("estosSonLosChidos"); //Puede o no puede devolver un arreglo
for ( let element of h1TestClass ){
    console.log(element.innerHTML);
}

const h1TestTag = document.getElementsByTagName("h1"); //Busca por etiqueta de HTML
for ( let element of h1TestTag ){
    console.log(element.innerHTML);
}

//const h1TestQuery = document.querySelectorAll("p.estosSonLosChidos");







































/*
const arrayGrades = [8,7,7,6];
for ( let grade of arrayGrades ){
    console.log(grade);
}

const student = { 
    name: "David", 
    age: 27, 
    paidRectoria: true,
    sayName: function(){
        console.log("Estoy en una funcion");
    }
};

student.sayName();

console.log(student.name);

student.lastName = "Ramirez";
console.log(student.lastName);

for( let key in student){
    console.log(student[key]);
}

//Factory
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log("Drawing circle");
        }
    };
}
const circle1 = createCircle(2);

//Constructor
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("Drawing circle");
    }
}
const circle2 = new Circle(1);
*/





















