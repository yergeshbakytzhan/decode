// let array = []
// let object = {}

let arr = [
    {
        name: 'Bakytzhan'
    },
    {
        title: 'Car'
    }
]
document.write(arr[0].name)

let obj = {
    name: 'Bakytzhan',
    description: 'He is 30 years old',
    age: 30
}
document.write('<br>')
document.write(`His name is ${obj.name}`)
document.write('<br>')
document.write(`Desc about him ${obj['description']}`)
document.write('<br>')
document.write(`His age is ${obj.age}`)
document.write('<br>')

// for(start;end;action)
// for(let item of students)

let students = [
    {
        id: 1,
        name: 'Marina',
        age: 40,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 2,
        name: 'Murat',
        age: 20,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 3,
        name: 'Nursultan',
        age: 25,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 4,
        name: 'Magzhan',
        age: 25,
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    }
]
let max = 0
let sum = 0
for(let i=0; i<students.length;i++){
    if(students[i].age>max){
        max = students[i].age
    }
}
console.log(max)
let avg = sum/students.length

students[0].name = 'Bakytzhan'
for(let item of students){
    document.write(`<h1>${item.id}</h1>`)
    document.write(`<h1>${item.name}</h1>`)
    document.write(`<h1>${item.age}</h1>`)
    document.write(`<img src="${item.img}">`)
}


document.write('<hr>')



let posts = [
    {
        id: 1,
        name: 'Kniga',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 2,
        name: 'Kniga',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 3,
        name: 'Kniga',
        price: 400,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 4,
        name: 'Kniga',
        price: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 5,
        name: 'Kniga',
        price: 1000,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://novostiliteratury.ru/wp-content/uploads/2020/01/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8.png'
    },
    {
        id: 6,
        name: 'Kniga',
        price: 500,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    }
    ,
    {
        id: 7,
        name: 'Kniga',
        price: 25,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://novostiliteratury.ru/wp-content/uploads/2020/01/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8.png'
    },
    {
        id: 8,
        name: 'Kniga',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png'
    },
    {
        id: 9,
        name: 'Kniga',
        price: 200,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, soluta?',
        img: 'https://novostiliteratury.ru/wp-content/uploads/2020/01/%D0%9A%D0%BD%D0%B8%D0%B3%D0%B8.png'
    }
]

document.write('<div class="post-inner">')

for(let item of posts){
    document.write('<div class="post">')
    document.write(`<img src="${item.img}">`)
    document.write(`
        <div class="info">
            <h1>${item.name}</h1>
            <p>${item.description}</p>
            <p>${item.price} tg</p>
        </div>
    `)
    document.write('</div>')
}
document.write('</div>')

// function name(paramatres){
// code..
// }

//name(parametres)
document.write('<hr>')
function plus(a,b){
    return a+b
}

document.write(`<h1>${plus(2,5)}</h1>`)

// print(posts)

// function print(array){
//     document.write('<div class="post-inner">')

// for(let item of array){
//     document.write('<div class="post">')
//     document.write(`<img src="${item.img}">`)
//     document.write(`
//         <div class="info">
//             <h1>${item.name}</h1>
//             <p>${item.description}</p>
//             <p>${item.price} tg</p>
//         </div>
//     `)
//     document.write('</div>')
// }
// document.write('</div>')
// }

//Создайте функцию которая выводить максимум из трех чисел

function maximum(a,b,c){
    if(a>b && a>c){
        return document.write(a)
    }else if(b>a && b>c){
        return document.write(b)
    }else{
        return document.write(c)
    }
}

maximum(50,10,60)
//Создайте  функцию которая находить сумму всех элементов массива

let numbers = [10,-9,10,-2,8,-9,-6]
arrMax(numbers)
function arrMax(arr){
    let sum=0
    for(let i=0; i<arr.length;i++){
        sum+=arr[i]
        //sum=sum+arr[i]
    }
    document.write(sum)
}
arrMax(numbers)

document.write('<br>')
// Напишите алгоритм который разбивает массив на два массива если там встречаются отрицательные значения. Например [-2,442,1,-6,1,563,-4]
// Результат должен быть вот таким Первый массив [-2,-6,-4] который хранить в себе только отрицательные значения 
// Второй массива [442,1,1,562] который хранить в себе только положительные значения  

function arrSplit(arr){
    let negativeNums = []
    let positiveNums = []
    for(let i=0; i<arr.length;i++){
        if(arr[i]<0){
            negativeNums.push(arr[i])
        }else{
            positiveNums.push(arr[i])
        }
    }
    print(negativeNums)
    document.write('<br>')
    print(positiveNums)

}
function print(arr){
    for(let i=0;i<arr.length;i++){
        document.write(arr[i]+' ')
    }
}
arrSplit(numbers)