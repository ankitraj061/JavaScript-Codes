// let arr = ["I" ,"Love", "Programming"]

// console.log(arr)
// arr.splice(1,2)
// console.log(arr)//[ 'I' ]

// let arr1=["I" ,"Love", "Programming","Right","Now"] 
// let removedElements=arr1.splice(0,3,"listening","music")
// console.log(removedElements)
// console.log(arr1)//[ 'listening', 'music', 'Right', 'Now' ] 

// let arr2=["I"]
// arr2.splice(1,0,"Love","You")
// console.log(arr2)//[ 'I', 'Love', 'You' ]

// var arr3=[10,20]
// console.log(arr3.concat([30,40]))//[ 10, 20, 30, 40 ]

// console.log(arr3.concat([30,40],[50,60]))//[ 10, 20, 30, 40, 50, 60 ]
// console.log(arr3.concat([30,40],50,60))//[ 10, 20, 30, 40, 50, 60 ]


// [10,20,30].forEach(function(item, index, array){
//  console.log(item+" is at index " +index+ " in "+array)

// })

// [10, 20, 30].forEach(function (item, index, array) {
//     console.log(item + " is at index " + index + " in " + array);
//   });

//   [10, 20, 30].forEach(function (item, index, array) {
//     console.log(item + " is at index " + index + " in " + array);
// });



//10 is at index 0 in 10,20,30
//20 is at index 1 in 10,20,30
//30 is at index 2 in 10,20,30


// let arr4=[1,0,false]
// console.log(arr4.indexOf(0))

// let users=[
//     {id:1,name:"Ankit"},
//     {id:2,name:"Anuj"},
//     {id:1,name:"Gaurav"}
// ]
// let user = users.findIndex(function(item,index,array){
//     return item.name=="sahil"
    
// })
// console.log(user)



let arr5=[10,20,30]
arr5.reverse()
console.log(arr5)

let names='John, Ankit, Anuj'
let arr4=names.split(",")
console.log(arr4)
let str= arr4.join(":")
console.log(str)