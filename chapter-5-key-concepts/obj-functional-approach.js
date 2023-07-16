
//functional
const wolf = {
    howl: function(){console.log(this.name + ' awoooooo')}
}

console.log(wolf.prototype)//undefined
console.log(Object.getPrototypeOf(wolf)===Object.prototype)// true, parang ito yung default
//Object.prototype --> wolf --> wolf.prototype kaya undefined
//typeof Object is a fucntion, typeof Function is a function

const dog = Object.create(wolf, {
    woof: {value: function(){console.log(this.name + ' woof')}}
})
//basta pag nag dot notation ka isipin mo as loob ka ng object
console.log(Object.getPrototypeOf(dog))

function createDog(name){
    return Object.create(dog, {
        name: {value: name + ' the dog:'}
    })
}

const rufus = createDog('Rufus')
rufus.woof()

console.log(Object.getPrototypeOf(rufus)===dog)//true
console.log(rufus.prototype)//undefined

//prototype here means a blue print/copy of the object, not a empty object like when you create a function

