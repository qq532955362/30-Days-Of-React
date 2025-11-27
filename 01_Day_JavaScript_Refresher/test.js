let emptyArr = []

let numArr = [1, 2, 3, 4, 5]


console.log(numArr.length)

console.log(numArr[0], numArr[Math.floor(numArr.length / 2)], numArr[numArr.length - 1])

let c = (function (n) { return n * n })(12)
console.log(c)


// Exercise 
function fullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}

console.log(fullName("Asabeneh", "Yetayeh"))
function addNumbers(num1, num2) {
    return num1 + num2
}

function areaOfCircle(r) {
    let area = Math.PI * r * r
    return area
}
console.log(areaOfCircle(10))

function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32
    return fahrenheit
}
console.log(celsiusToFahrenheit(100))

function bmiCalculator(weight, height) {
    let bmi = weight / (height * height)
    return bmi
}
console.log(bmiCalculator(70, 1.75))

function checkSeason(month) {
    let season = ''
    if (['December', 'January', 'February'].includes(month)) {
        season = 'Winter'
    } else if (['March', 'April', 'May'].includes(month)) {
        season = 'Spring'
    } else if (['June', 'July', 'August'].includes(month)) {
        season = 'Summer'
    } else if (['September', 'October', 'November'].includes(month)) {
        season = 'Autumn'
    }
    return season
}
console.log(checkSeason("January"))

// Exercises Level 2

// 一元二次方程求根公式
function solveQuadratic(a = 0, b = 0, c = 0) {
    let root1, root2
    //根的判别式
    let discriminant = b * b - 4 * a * c
    if (discriminant === 0) {
        root1 = root2 = -b / (2 * a)
        return [root1]
    } else if (discriminant >= 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a)
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a)
        return [root1, root2]
    } else {
        return []
    }
}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 输出传入数组的每个值
printArray = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
// showDateTime 函数
function showDateTime() {
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth() + 1
    let date = now.getDate()
    let hours = now.getHours()
    let minutes = now.getMinutes()
    if (hours < 10) {
        hours = '0' + hours
    }
    if (minutes < 10) {
        minutes = '0' + minutes
    }
    let dateTime = `${date}/${month}/${year} ${hours}:${minutes}`
    return dateTime
}
console.log(showDateTime())

function swapValues(x, y) {
    return [y, x]
}
console.log(swapValues(3, 4)) // => 4, 3
console.log(swapValues('Asabeneh', 'Yetayeh')) // => Yetayeh, Asabeneh

function reverseArray(arr) {
    let reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed
}
console.log(reverseArray([1, 2, 3, 4, 5])) // => [5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C'])) // => ['C', 'B', 'A']


function capitalizeArray(arr) {
    let capitalized = []
    for (let i = 0; i < arr.length; i++) {
        capitalized.push(arr[i].toUpperCase())
    }
    return capitalized
}
console.log(capitalizeArray(['apple', 'banana', 'cherry'])) // => ['APPLE', 'BANANA', 'CHERRY']

function addItem(arr, item) {
    let newArr = [...arr, item]
    return newArr
}
console.log(addItem([1, 2, 3], 4)) // => [1, 2, 3, 4]

function removeItem(arr, item) {
    let newArr = arr.filter(i => i !== item)
    return newArr
}
console.log(removeItem([1, 2, 3, 4], 3)) // => [1, 2, 4]

function sumOfArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
console.log(sumOfArray([1, 2, 3, 4, 5])) // => 15

function removeDuplicates(arr) {
    let uniqueArr = []
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) {
            uniqueArr.push(arr[i])
        }
    }
    return uniqueArr
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // => [1, 2, 3, 4, 5]

function isEmpty(arr) {
    return arr.length === 0
}
console.log(isEmpty([])) // => true
console.log(isEmpty([1, 2, 3])) // => false

function averageOfArray(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}
console.log(averageOfArray([1, 2, 3, 4, 5])) // => 3

function userIdGenerator() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let userId = ''
    for (let i = 0; i < 7; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        userId += characters[randomIndex]
    }
    return userId
}
console.log(userIdGenerator()) // => Random 7-character string

function generateColors(type, number) {
    let colors = []
    if (type === 'rgb') {
        for (let i = 0; i < number; i++) {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            colors.push(`rgb(${r},${g},${b})`)
        }
    } else if (type === 'hex') {
        for (let i = 0; i < number; i++) {
            let hex = '#'
            for (let j = 0; j < 6; j++) {
                hex += Math.floor(Math.random() * 16).toString(16)
            }
            colors.push(hex)
        }
    }
    return colors
}

console.log(generateColors('rgb', 3)) // => ['rgb(12,34,56)', 'rgb(78,90,123)', 'rgb(45,67,89)']    
console.log(generateColors('hex', 3)) // => ['#1a2b3c', '#4d5e6f', '#7a8b9c']
console.log(generateColors('hex', 5)) // => ['#a1b2c3', '#d4e5f6', '#789abc', '#123456', '#abcdef']

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
            ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
}
console.log(shuffleArray([1, 2, 3, 4, 5])) // => Shuffled array

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1
    } else {
        return n * factorial(n - 1)
    }
}
console.log(factorial(2))
console.log(factorial(5))
console.log(factorial(7))
console.log(factorial(10))

function isEmptyObject(obj) {
    return Object.keys(obj).length === 0
}

console.log(isEmptyObject({})) // => true
console.log(isEmptyObject({ a: 1 })) // => false

const aaa = (n) => {
    return n ** 2;
}

function cube(n) {
    return aaa(n) * n;
}
console.log(cube(3)) // => 27
console.log(cube(4)) // => 64

const a1 = n => {
    const a2 = m => {
        const a3 = t => {
            return 2 * n + 3 * m + t;
        }
        return a3
    }
    return a2
}

console.log(a1(2)(3)(10)) // => 43

