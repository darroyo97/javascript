var fruits = ["look", "hi", "you", "great"];
fruits.sort(function (a, b) {
    return a.length - b.length; //ASC, For Descending order use: b - a
});

console.log(fruits)