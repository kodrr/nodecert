function outerFn () { 
    var foo = true
    function print(foo) { console.log(foo) }
    print(1) // prints 1
    foo = false
    print(2) // prints 2
   }

//outerFn()

//Closure scope cannot be accessed outside of a function:
//When a function is created, an invisible object is also created, this is known as the closure scope.
//Parameters and variables created in the function are stored on this invisible object.

// Since the invisible closure scope object cannot be accessed outside of a function, if a function returns a
// function, the returned function can provide controlled access to the parent closure scope. In essence,
// this provides encapsulation of private stat

// The returned function has access to type and id because it has access to the parent closure
// scope --> parang since function is an object parang hahanapin nya yung value or property na yun sa parent na object
//which is sya yung parent function

//closure - meron nag fat arrow functions
//closure sya kasi ang scope nya ay close dun sa parent function, na kayang i access nung child function
//so parang pwedeng pangtago ng sensitive na variable at sa child closure function mo sya ma cocontrol

function init (type) {
    var id = 0
    return (name) => {
   id += 1
   return { id: id, type: type, name: name }
    }
   }
   const createUser = init('user')
   const createBook = init('book')
   const dave = createUser('Dave')
   const annie = createUser('Annie')
   const ncb = createBook('Node Cookbook')
   console.log(dave) //prints {id: 1, type: 'user', name: 'Dave'}
   console.log(annie) //prints {id: 2, type: 'user', name: 'Annie'}
   console.log(ncb) //prints {id: 1, type: 'book', name: 'Node Cookbook'}


