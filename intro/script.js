console.log("hello javascript")

let name = "alex"

console.log(name)


var age = 99

console.log(age)
//arithmetic operators
let adds = 3 + 3
console.log(adds)

let sub = 4-2
console.log(sub)


let division = 10/2
console.log(division)

let modulo = 5%2
console.log(modulo)


let increment = 0
 console.log(++increment)

 let decrement = 1
 console.log(--decrement)

//comparison operators

let a = 2
 let b = '2'

 console.log(a == b)
 console.log( a === b)

 console.log(1 != 1)

 console.log(1 > 0)
 console.log(1 < 0)

 console.log(1 >= 2)

 console.log(1 <= 1)


//logical operator

console.log(1 > 0 && 1 < 1)

console.log(1 > 0 || 0 > 1)

console.log(!false)

//ternary operator

let result = 1 > 0 ? true : false

console.log('result: ' + result)


//decision statements
 let count = 4

if( count > 5){
    console.log('if is true')
}else{
    console.log('if is not true')
}


if(count < 3){
    console.log('1st true')
}else if(count >=3){
    console.log('2nd true')
}


switch(4){
    case 1:
        console.log('case 1')
        break;
    case 2: 
        console.log('case 2')
        break;
    case 3:
        console.log('case 3')
        break;
    default:
        console.log('i am the default')
}

//loops

for(let i = 0;i < 10; i++){
    console.log(i)
}
let k = 10
while(k > 0){
    console.log(k)
    k--
}

function add(a,b){

    return a + b
}

let data = add(4,7)

console.log(data)