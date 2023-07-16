function prefixer(greetings){
    this.greetings = greetings
    return function(name){
        console.log(`${this.greetings} ${name}`)
    }
}

'use strict'
const sayHiTo = prefixer('Hello ')
const sayByeTo = prefixer('Goodbye ')
console.log(sayHiTo('Dave')) // prints 'Hello Dave'
console.log(sayHiTo('Annie')) // prints 'Hello Annie'
console.log(sayByeTo('Dave')) // prints 'Goodbye Dave'

