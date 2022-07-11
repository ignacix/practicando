/*var a = parseInt(prompt("ingrese un numero"))
var b = parseInt(prompt("ingrese el segundo numero")) 
alert(a+b)*/

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string



function mostrar(){
    let d = document.getElementById("txtbox")
    alert(d.innerHTML)
        
}

var c = document.getElementById("btn")
c.addEventListener("click",mostrar,false
)


function modifyText() {  
    var t2 = document.getElementById("t2");  
    t2.firstChild.nodeValue = "three";      
   }  
   
   // add event listener to t  
   var el = document.getElementById("t");   
   el.addEventListener("click", modifyText, false);   
   
