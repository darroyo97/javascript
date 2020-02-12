// let regex = new RegExp('digital crafts')
// let regex2 = /digital crafts/
// let someString = "fhkshfksh digital crafts snfsfsdf sfhskfjs "
// let result = regex.test(someString);
// console.log(result)

// let pattern = /Daniela Arroyo/ig;
// let someString = "ahdakhdas: Daniela Arroyo fs fljsdfl"
// let result = pattern.exec(someString)
// // console.log(result)

// let array = someString.match(pattern)
// console.log(array)
// let array2 = someString.replace(pattern, "juan garcia")
// console.log(array2)


// let pattern = /Batman | Tina Fey/g;

// let str = "Batman is really coll but not as cool as Tina Fey"

// let result = str.match(pattern)
// console.log(result)

// let phonePattern = /(\d\d\d)-\d\d\d-(\d\d\d\d)/g;
// let someString = "fh skfhk jhfks f 713-319-7422 hd khfk sa hfk f 432-988-0909"
// let result = someString.match(phonePattern);
// console.log(result)

//i makes it case sensetive
// let pattern = /Bat(man|woman|mobile|copter|bat)/gi;
// let str = "batwoman is so cool, ";
// let result = str.match(pattern);
// console.log(result)

let phonePattern = /\d\d\d(-)?(.)?\d\d\d(.)?(-)?\d\d\d\d/g
let str = " this is a phone number 333-222-4545"
let result = str.match(phonePattern)
console.log(result)