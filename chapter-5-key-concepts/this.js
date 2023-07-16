// this refers to the object on which the function was called, not the object
//which the function was assigned to:
// const obj = {id: 1, fn: function(){console.log('this is the id ' + this.id)}}
// const obj2 = {id:2, fn: obj.fn}
// obj2.fn() //2

//walang 'this' and 'prototype' ang arrow function 

const Obj =  {
    id: 1,
    getSomething: function() {console.log(this.id)}
}

const obj1 = { fn: Obj.getSomething}
obj1.fn()