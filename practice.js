// const calculateAgeInDogYears = (ageOfPerson) => {
//     const ageInDogYears = ageOfPerson / 7
//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(56)
// console.log(dogAge)


// const favoriteDogBreed = (dogBreed) => {
//     if (dogBreed === "schnauzer") {
//         return "My favorite dog breed is a schnauzer."
//     }
//     else if (dogBreed === "meow") {
//         return "I like cats."
//     }
//     else {
//         return false
//     }
// }

// const myFavorite = favoriteDogBreed("meow")

// console.log('When it comes to pets, ' + myFavorite)



// const add = (first, second, third) => {
//     const addition = first + second + third
//     return addition
// }

// const values = add(17, 4, 11)

// console.log(values)


// const go = (direction, speed) => {
//     if (speed >= 75) {
//     return "The car is moving " + direction + " at " + speed + " mph. SLOW DOWN!"
//     }
//     return "The car is moving " + direction + " at " + speed + " mph."
// }

// const drivingCar = go("forward", 82)
// console.log(drivingCar)



// const evenOrOdd = (number) => {
//     if (number % 2 !== 0) {
//         return "Odd"
//     }
//     return "Even"
// }

// const numbers = [5, 2, 7, 12, 88, 99, 57, 11, 6, 78]
// for (const number of numbers) {
//     console.log(evenOrOdd(number))

// }

// const numero = evenOrOdd(0)
// console.log(numero)

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]

// const filtering = (filterK) => {
//     for (var i = 0; i < filterK.length; i++) {
//         if (filterK[i].startsWith('k')) {
//             filterK.splice(i, 1);
//             i--; 
//         }
// }
// }

// console.log(words.join(' '))

// const newWords = words.filter(word => filtering(words))

// console.log(words.join(' '))



const fishCaught = () => {
    if (Math.random() * 2> 1) { 
        return "Sven hooked a Tuna!!! :)"
    }
    else {
        (Math.random() * 2< 1) 
            return "Sven came up empty-handed... :("
        
        }
    }


console.log(fishCaught())

console.log(Math.random(19) * 0)