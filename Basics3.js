let nameObj = { 
    name: "Tony"
} 
  
let nameObj2 = { 
    name: "steve" 
}
function sayHi(age,city) { 
    console.log(this.name + " age is " + age+ " and from "+city); 
}  
  
sayHi.apply(nameObj,[42,"Mumbai"]);
sayHi.apply(nameObj2,[45,"Delhi"]);