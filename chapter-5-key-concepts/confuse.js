//this --> sino ang tumawag sa function sa loob ng isang object, wala ang fat arrow function
//this sa loob ng function - refers to the global object, or iniisip ko lalabas sya
//closure --> scope, pag gumawa ka ng function nabubuo ang invisible object, hindi mo maccess ang properties sa lob ng function from the outside of the function, para magawa mo yun
//need mo gumwa ng function sa loob ng function na yon para mag spit ng gusto mong properties nya

function testFn() {
    const noel = 1
    return console.log(noel)
}

console.log(typeof(testFn.prototype))//object
console.log((testFn.prototype.noel))// undefined
testFn.prototype.getNoel = function (){console.log(this.noel)}
testFn.prototype.getNoel() // undefined yung noel
testFn.prototype.lauigan = 2
testFn.prototype.getLauigan = function (){console.log(this.lauigan)}
testFn.prototype.getLauigan() // 2

class Lauigan {
    constructor(name, age){
        this.name = name
        this.age = age
    }
    
}

console.log(typeof(Lauigan.prototype))//object

const obj = {}
console.log((obj.prototype))//undefined
obj.prototype = {}
console.log((obj.prototype))//1
console.log('11111111111', typeof(obj.prototype))//object

const obj2 = Object.create(null)
console.log((obj2.prototype))//undefined

