//STEP 1 - Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.

// let movies = ['Mission Impossible', 'Lord of The Rings', 'Star Wars', 'Indiana Jones', 'Mist']
// console.log(movies[1])

//STEP 2 - Declare an array called movies using the function constructor method. Add the length of 5 into the constructor. 
//         Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
//         Then, use the console to display the first movie in your array.

// let movies = new Array(5)

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'

// console.log(movies[0])

//STEP 3 - Copy your code from step 2. Add a new movie into the 3rd position within your array. 
//         Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.

// let movies = new Array(5)

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'

// movies.splice(2, 0, 'Home Alone')

// console.log(movies.length)

//STEP 4 - Declare an array called movies using literal notation. 
//         Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. 
//         Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'

// delete movies[0]

// console.log(movies)


//STEP 5 - Declare an array called movies using literal notation. 
//         Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. 
//         Now, use a for/in loop to iterate through the array and display each movie within the console window.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// for (let movie in movies) {
// 	console.log(movies[movie])
// }


//STEP 6 - Copy the code from step 5. Now, use a for/of loop to iterate through the array and display each movie within the console window.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// for (let i of movies) {
// 	console.log(i)
// }


//STEP 7 - Copy the code from step 5. Using the for/of loop to iterate through the array, 
//         display each movie within the console window in a sorted view.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// for (let i of movies.sort()) {
// 	console.log(i)
// }

//STEP 8 - Copy the code from step 5. Under the existing array, create a new array called 'leastFavMovies'. 
//         Populate the array with the 3 movies that you regret watching. Display both arrays within the console window.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// let leastFavMovies = []

// leastFavMovies[0] = 'Jaws 3'
// leastFavMovies[1] = 'Home Alone 3'
// leastFavMovies[2] = 'Saw'

// console.log('Movies I like:')
// console.log('')

// for (let i of movies) {
// 	console.log(i)
// }

// console.log('')
// console.log('Movies I regret watching:')
// console.log('')

// for (let i of leastFavMovies) {
// 	console.log(i)
// }

//STEP 9 - Copy the code from step 8. Now, use the concat() method to merge the two arrays together into a single array called movies. 
//         Use the console window to display the list in reverse sorted

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// let leastFavMovies = []

// leastFavMovies[0] = 'Jaws 3'
// leastFavMovies[1] = 'Home Alone 3'
// leastFavMovies[2] = 'Saw'

// movies = movies.concat(leastFavMovies)

// for (let i of movies.sort().reverse()) {
// 	console.log(i)
// }

//STEP 10 - Copy the code from step 9. Use an array function to return just the last item in the array 
//          and display it within the console window.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// let leastFavMovies = []

// leastFavMovies[0] = 'Jaws 3'
// leastFavMovies[1] = 'Home Alone 3'
// leastFavMovies[2] = 'Saw'

// movies = movies.concat(leastFavMovies)

// console.log(movies.pop())

//STEP 11 - Copy the code from step 10. Remove the previous method and this time use a method to return just the first item in the array
//          and display it within the console window.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// let leastFavMovies = []

// leastFavMovies[0] = 'Jaws 3'
// leastFavMovies[1] = 'Home Alone 3'
// leastFavMovies[2] = 'Saw'

// movies = movies.concat(leastFavMovies)

// console.log(movies.shift())

//STEP 12 - Programmatically retrieve the movies in your array that you do not like and return their indices. 
//          Then, using those indices, programmatically add movies that you do like.

// let movies = []

// movies[0] = 'Mission Impossible'
// movies[1] = 'Lord of The Rings'
// movies[2] = 'Star Wars'
// movies[3] = 'Indiana Jones'
// movies[4] = 'Mist'
// movies[5] = 'Home Alone'
// movies[6] = 'Jaws'

// let leastFavMovies = []

// leastFavMovies[0] = 'Jaws 3'
// leastFavMovies[1] = 'Home Alone 3'
// leastFavMovies[2] = 'Saw'

// movies = movies.concat(leastFavMovies)

// let firstIndex = movies.indexOf('Jaws 3')
// let secondIndex = movies.indexOf('Home Alone 3')
// let thirdIndex = movies.indexOf('Saw')

// movies[firstIndex] = 'Hobbit'
// movies[secondIndex] = 'Prestige'
// movies[thirdIndex] = 'Avatar'

// for (let i of movies) {
// 	console.log(i)
// }

//STEP 13 - Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5.
//          Now, loop through the array and filter out and display only the movie names. 
//          You must use the filter() method and you’ll need to filter out the names by their primitive data type.

// let movies = [['Mission Impossible', 1], ['Star Wars', 2], ['Lord of The Rings', 3], ['Prestige', 4], ['Jaws', 5]]

// let movieName = (movie) => {
// 	return typeof movie != 'number'
// }

// movies.forEach((movie) => {
// 	console.log(movie.filter(movieName))
// })


//STEP 14 - Create a string array called employees using literal notation and populate the array with several employee names. 
//          Then, create an anonymous function called showEmployee. The function should accept a parameter. 
//          Call this function, passing in the employees array into the function as a parameter. 
//          Make sure to display the result in the console window. Within the function, 
//          loop through the passed in array and display the result.

// let employees = []

// employees[0] = 'BOB'
// employees[1] = 'ANDY'
// employees[2] = 'DAVE'
// employees[3] = 'STAN'
// employees[4] = 'HELEN'

// let showEmployee = (employee) => {
    
//     for (let i of employee) {
//      	console.log(i)
//         }
//     }

// console.log('Employees:')
// console.log(showEmployee(employees))



//STEP 15 - Write a JavaScript function to filter false, null, 0 and blank values from an array

let testArr = [58, '', 'abcd', true, null, false, 0]

let arrFilter = testArr.filter((item) => {
	return (typeof item != false) && (typeof item != 'NULL') && (typeof item != 0) && (typeof item != undefined)
})
console.log(arrFilter)


//STEP 16

//STEP 17