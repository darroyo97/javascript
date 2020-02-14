function Course(title, instructor, campus) {
    this.title = title;
    this.instructor = instructor;
    this.campus = campus;
}
let janCohort = new Course("Immersive bootcamp", "Veronica", "Houston")
let janCohort2 = new Course("Immersive bootcamp", "Sean", "Atlanta")
let novCohort = new Course("Flex bootcamp", "Azam", "Houston")

// console.log(janCohort.instructor)
delete janCohort.title
console.log(janCohort)

// let classes = []
// classes.push(janCohort)
// or we can 
// let classes = [
//     new Course("Immersive Bootcamp", "Veronica", "Houston"),
//     new Course("Flex Bootcamp", "Azam", "Atlanta")
// ]