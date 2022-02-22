//чаще всего встречающиеся элемент

let number = [10,7,16,1,11,2,4,5,18,7,10,7,10]

let num = number[0]
let max_frq = 0

for(let i in number){
    let frq = 0
    for(let k in number){
        if(number[i]==number[k]){
            frq+=1
        }
    }
    if(frq>max_frq){
        max_frq = frq
        num = number[i]
    }
}
if(max_frq>1){
    document.write(`<h1>${max_frq} раз встречается число ${num}`)
}else{
    document.write('<h1>Все элементы уникальны</h1>')
}

//объекты
let student = {
    name: 'Bakytzhan',
    age: 30,
    height: 180,
    children: {
        name: 'Bakytzhan'
    }
}
student.name = 'Ansar'
student['age']=35
student.color = 'black'

console.log(student)

let students = [
    {
        name: 'Bakytzhan',
        age: 30,
        height: 180
    },
    {
        name: 'Ansar',
        age: 20,
        height: 170
    },
    {
        name: 'Dias',
        age: 25,
        height: 160
    },
    {
        name: 'Kair',
        age: 40,
        height: 180
    }
]

for(let item of students){
        document.write(`
            <h1>${item.name}</h1>
            <h1>${item.age}</h1>
            <h1>${item.height}</h1>
        `)
}
students[1].name = 'Nurbek'
console.log(students)

//medium

let numbers = {
    numbers: [-1,10,5,30,20,-10,-5,-4,-6,10,20,25,-20,-25],
    positive: [],
    negative: []
}

for(let i=0;i<numbers['numbers'].length;i++){
    if(numbers.numbers[i]>=0){
        numbers.positive.push(numbers.numbers[i])
    }else{
        numbers.negative.push(numbers.numbers[i])
    }
}
console.log(numbers)

//hard

let clinic = {
    clinic_name: 'asd',
    clinic_address: 'Manas 3/7',
    animals: []
}
let animals = [
    {
        animal_name: 'Murzik',
        animal_type: 'Cat',
        animal_owner: 'Bakytzhan'
    },
    {
        animal_name: 'Murzik',
        animal_type: 'Cat',
        animal_owner: 'Bakytzhan'
    },
    {
        animal_name: 'Murzik',
        animal_type: 'Cat',
        animal_owner: 'Bakytzhan'
    },
    {
        animal_name: 'Murzik',
        animal_type: 'Cat',
        animal_owner: 'Bakytzhan'
    }
]

for(let i in animals){
    clinic.animals.push(animals[i])
}
console.log(clinic)