let nameObj = { 
    name: "Tony",
    sayHi:function (age,city) { 
        console.log(this.name + " age is " + age+ " and from "+city); 
    }  
} 
  
let nameObj2 = { 
    name: "steve" 
}

  
console.log(nameObj.sayHi.bind(nameObj2,42,'Mumbai'));
//nameObj2.sayHi.bind(nameObj2,45,"Delhi");