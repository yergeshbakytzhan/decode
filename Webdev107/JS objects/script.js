//let varobject = { name: 'Bakytzhan', age: 19, height: 180 }

let student = {
    name: 'Kahysh',
    age: 19,
    height: 180,
    weight: 80
}
console.log(student)
console.log(student.name)
console.log(student['name'])

student.name = 'Bakytzhan'
console.log(student['name'])

student['nation'] = 'Kazakh'
student.height = 190
console.log(student)

let posts = [
    {
        "userId": 1,
        "id": 1,
        "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 1,
        "id": 2,
        "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 1,
        "id": 3,
        "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 1,
        "id": 5,
        "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      },
      {
        "userId": 1,
        "id": 6,
        "img": "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
      }
]


document.write("<div class='container'>")
for(let item of posts){
    document.write(`
        <div class="item">
            <div class="item-img">
                <img src="${item.img}" alt="">
            </div>
            <div class="item-info">
                <h2>${item.title}</h2>
                <p>${item.body}</p>
            </div>
        </div>
    `)
}
document.write("</div>")

let students = [
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 19,
        grade: 83
    },
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 18,
        grade: 60
    },
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 40,
        grade: 75
    },
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 25,
        grade: 70
    },
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 15,
        grade: 100
    },
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 10,
        grade: 85
    },
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 30,
        grade: 80
    },
    {
        name: 'Bakytzhan',
        surname: 'Yergesh',
        age: 20,
        grade: 90
    }
]
//1
for( let item of students){
    if(item.age>19){
        console.log(item)
    }
}
//2
for(let item of students){
    if(item.grade>=85 && item.grade<=100){
        console.log(item)
    }
}

let nums = {
    numbers: [-1,10,5,6,-6,-5,9,8,7,-4,-3],
    positive: [],
    negative: []
}

for(let item of nums.numbers){
    if(item>0){
        nums.positive.push(item)
    }else{
        nums.negative.push(item)
    }
}
console.log(nums.numbers, nums.positive, nums.negative)

let clinic = {
    clinic_name: '',
    clinic_address: '',
    animals: []
}
let animals  = [
    {

    },
    {
        
    }
]