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
    n += 2
    const a2 = m => {
        n += 3
        const a3 = t => {
            return 2 * n + 3 * m + t;
        }
        return a3
    }
    return a2
}

console.log(a1(2)(3)(10)) // => 23

// 回调函数

const numbers = [1, 2, 3, 4]
const sumArray = arr => {
    let sum = 0
    const callback = function (element) {
        sum += element
    }
    arr.forEach(callback)
    return sum

}
console.log(sumArray(numbers))

const [x, y] = [2, v => v ** 3]

console.log(x) // 2
console.log(y(x)) // 8


// 对象解构赋值，并设置默认值
const rectangle = {
    width: 20,
    height: 10,
}
let { width, height, perimeter = 200 } = rectangle
console.log(width, height, perimeter)   // 20 10 200

//重命名解构赋值
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
}
let { firstName: fName, lastName: lName, age: personAge } = person
console.log(fName, lName, personAge) // John Doe 25


const calcualteArea = ({ width, height }) => width * height
console.log(calcualteArea(rectangle)) // 200
const calculatePerimeter = ({ width, height }) => 2 * (width + height)
console.log(calculatePerimeter(rectangle)) // 60



const getPersonInfo = ({ firstName, lastName, sex, age, country, job, skills, languages }) => {
    return `${firstName} ${lastName}. ${sex ? 'He' : 'She'} is ${age} years old. ${sex ? 'He' : 'She'} lives in ${country}. ${sex ? 'He' : 'She'} is a ${job}. ${sex ? 'He' : 'She'} has skills in ${skills.join(', ')}. ${sex ? 'He' : 'She'} speak ${languages.join(', ')}.`
}
console.log(getPersonInfo({
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    job: 'Instructor and Developer',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Redux',
        'Node',
        'MongoDB',
        'Python',
        'D3.js',
    ],
    languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}))


const evens = [0, 2, 4, 6, 8, 10]
const evenNumbers = [...evens]

const odds = [1, 3, 5, 7, 9]
const oddNumbers = [...odds]

const wholeNumbers = [...evens, ...odds]

console.log(evenNumbers)
console.log(oddNumbers)
console.log(wholeNumbers)

const user = {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
}

const copiedUser = { ...user }
console.log(copiedUser)


const sumAllNums = (...args) => {
    let sum = 0
    for (const num of args) {
        sum += num
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4, 5))

const sum = numbers.reduce((acc, cur) => acc + cur)


const testArr = ['aaa', 'bbb', 'ccc', 'ddd']
const testArrRes = testArr.reduce((acc, cur) => acc + ' ' + cur)
console.log(testArrRes)


const strs = ['Hello', 'world', '!']
const helloWorld = strs.reduce((acc, cur) => acc + ' ' + cur, 1)
console.log(helloWorld)

const findRes = strs.findIndex((acc) => acc.length > 5)
console.log(findRes)


const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
products.forEach(e => {
    console.log(`The price of  ${e.product} is ${e.price > 0 ? e.price : 'unknown'}.`)
})

const totalPrice = products.map(e => e.price).filter(price => typeof price === 'number' && price > 0).reduce((acc, cur) => acc + cur, 0)
console.log(totalPrice)


const firstNoPriceProduct = products.find(e => typeof e.price !== 'number' || e.price <= 0)
console.log(firstNoPriceProduct)

const firstNoPriceProductIndex = products.findIndex(e => typeof e.price !== 'number' || e.price <= 0)
console.log(firstNoPriceProductIndex)


class Person {
  constructor(firstName, lastName) {
    console.log(this) // Check the output from here
    this.firstName = firstName
    this.lastName = lastName
    console.log(this) // Check the output from here
  }
}

new Person('Asabeneh', 'Yetayeh');








