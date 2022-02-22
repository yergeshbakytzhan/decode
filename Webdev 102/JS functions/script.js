function square(a){
    return a*a
}
let number = 4
console.log(square(number))

function factorial(n){
    return n<2 ? 1 : n * factorial(n-1)
}

console.log(factorial(10))


let numbers = [-1,9,20,10,-11,5,6,4,2,-2,-4,-5]

function maxArray(array){
    max = array[0]
    for(let index in array){
        if(max<array[index]){
            max = array[index]
        }
    }
    return max
}
function minArray(array){
    min = array[0]
    for(let index in array){
        if(min>array[index]){
            min = array[index]
        }
    }
    return min
}
function sumArray(){
    let numbers = [-1,9,20,10,-11,5,6,4,2,-2,-4,-5]
    sum = 0
    for(let index in numbers){
        sum+=numbers[index]
    }
    console.log(sum)
}
console.log(maxArray(numbers))
console.log(minArray(numbers))
sumArray()

//Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
let dayOfWeek = 1
weekDay(dayOfWeek)
function weekDay(number){
    switch(number){
        case 1:
            document.write('<h1>Monday!</h1>')
            break
        case 2:
            document.write('<h1>Tuesday!</h1>')
            break
        case 3:
            document.write('<h1>Wednesday!</h1>')
            break
        case 4:
            document.write('<h1>Thursday!</h1>')
            break
        case 5:
            document.write('<h1>Friday!</h1>')
            break
        case 6:
            document.write('<h1>Saturday!</h1>')
            break
        case 7:
            document.write('<h1>Sunday!</h1>')
            break
        default:
            document.write('<h1>Invalid Value!</h1>')
            break
    }
}
//Напишите программу, чтобы поменять местами два числа с помощью функции.
function reverse(a, b){
    let c
    c=a
    a=b
    b=c
    console.log(a,b)
}
reverse(5,7)

//Напишите программу для проверки четности или нечетности заданного числа с помощью этой функции.

function evenOrodd(number){
    if(number%2==0){
        document.write('<h1>Четное число!</h1>')
    }else{
        document.write('<h1>Нечетное число!</h1>')
    }
}
evenOrodd(4)

//Напишите функцию, которая высчитывает и возращает  сколько раз встречается буква в данной строке. 
function counterOfLetter(){
    let str="we were just kids"
    let letter="w"
    let counter = 0
    for(let i=0;i<str.length;i++){
        if(str[i]===letter){
            counter++
        }
    }
    document.write(`<h1>In "${str}" we have ${counter} "${letter}"'s</h1>`)
}
counterOfLetter()

//Дана переменная massiv, которая является массивом состоящим из чисел. Нужно написать функцию, которая вычисляет среднее арифметическое элементов данного массива, переданного ей в качестве аргумента:
let massiv = [-68, 325, 33, 40, 2, 8];
averageArr(massiv)
function averageArr(array){
    let sum = 0
    for(let i=0;i<array.length;i++){
        sum+=array[i]
    }
    let average = sum/array.length
    document.write(`<h1>Average of array: ${average}</h1>`)
}