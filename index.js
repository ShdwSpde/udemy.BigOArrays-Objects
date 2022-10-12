let instructor = {
  firstName: 'Savion',
  isInstructor: true,
  gradesTaught: [1,2,3,4]
}

/*

JS can add and store objects in constant time. It can also retrieve them in constant time. You can also update and remove in constant time.

Insertion/Removal/Access = O(1)
Searching = O(N)

As the number of properties or N grows for a given object, it takes more time to find stored values

*/

console.log(Object.keys(instructor))

console.log(Object.values(instructor))

console.log(Object.entries(instructor))

/*

The keys, values, and entries methods are all O(N) as they are dependent upon the amount of properties stored in the object

hasOwnProperty is O(1) because it is accessing a single property and returning a boolean value

*/

console.log(instructor.hasOwnProperty('isInstructor'))

/*

We use arrays when we need order. However that can complicate things when we need to insert/remove. Imagine you need to add or remove value from the beginning of the array. We now have to re-index all the items in that array after.

In terms of efficiency, thus it will typically be faster to use the push/pop methods as opposed to shift/unshift.

push() = O(1)
pop() = O(1)
shift() = O(N)
unshift() = O(N)
concat() = O(N)
slice() = O(N)
splice() = O(N)
sort()= O(N *logN)
forEach(),map(),filter(),reduce() = O(N)
*/


let months = ['January', 'March', 'April','June']

months.splice(1,0,'February') // inserts at the first index

console.log(months)

months.splice(4,1,'May') // replaces the entry at the 4th index

console.log(months)

let array1 = ['a','b','c','d']
let array2 = ['e','f','g','h']

console.log(array1.concat(array2))

let animals = ['lion','tiger','bear','bison','giraffe','whale']

console.log(animals.slice(1))

console.log(animals.slice(2,4))

console.log(animals.slice(1,5))