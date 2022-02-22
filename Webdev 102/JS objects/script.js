let student = {
    id: 4,
    name: 'Bakytzhan',
    age: 30,
    catid: {
        id: 1,
        name: "category"
    }
}
console.log(student.age)
console.log(student['age'])
student['height'] = 170
console.log(student)
let students = [
    {
        id: 1,
        name: 'Dauren',
        age: 25
    },
    {
        id: 2,
        name: 'Bakytzhan',
        age: 29
    },
    {
        id: 4,
        name: 'Ansar',
        age: 15
    },
    {
        id: 5,
        name: 'Diana',
        age: 24
    }
]
for(let item of students){
    document.write(`<h1>Id: ${item.id}</h1>`)
    document.write(`<h1>Age: ${item.age}</h1>`)
    document.write(`<h1>Name: ${item.name}</h1>`)
}

let posts = [
    {
        "img": "https://blog.hootsuite.com/wp-content/uploads/2021/03/how-to-post-on-instagram-from-PC.jpg",
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "img": "https://blog.hootsuite.com/wp-content/uploads/2021/03/how-to-post-on-instagram-from-PC.jpg",
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "img": "https://blog.hootsuite.com/wp-content/uploads/2021/03/how-to-post-on-instagram-from-PC.jpg",
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "img": "https://blog.hootsuite.com/wp-content/uploads/2021/03/how-to-post-on-instagram-from-PC.jpg",
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "img": "https://blog.hootsuite.com/wp-content/uploads/2021/03/how-to-post-on-instagram-from-PC.jpg",
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },   
    {
        "img": "https://blog.hootsuite.com/wp-content/uploads/2021/03/how-to-post-on-instagram-from-PC.jpg",
        "id": 6,
        "title": "dolorem eum magni eos aperiam quia",
        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    }
]
document.write('<hr>')

document.write('<div class="post-items">')
for(let item of posts){
    document.write(`
        <div class="post-member">
            <div class="post-member-img">
                <img src="${item.img}">
            </div>
            <div class="post-member-info">
                <h3>${item.title}</h3>
                <p>${item.body}</p>
            </div>
        </div>
    `)
}
document.write('</div>')
document.write('<hr>')

let numbers = {
    numbers: [-2,-3,4,-4,6,-7,1,-1],
    positive: [],
    negative: []
}
for(let i=0;i<numbers.numbers.length;i++){
    if(numbers.numbers[i]>=0){
        numbers.positive.push(numbers.numbers[i])
    }else{
        numbers.negative.push(numbers.numbers[i])
    }
}
console.log(numbers)

let clinic = {
    clinic_name: "bolnica",
    clinic_address: "Manasa 4",
    animals:[]
}
let animals = [
    {
        animal_name: "Murzik",
        animal_type: "Cat",
        animal_owner: "Ansar"
    },
    {
        animal_name: "Murzik",
        animal_type: "Cat",
        animal_owner: "Ansar"
    },
    {
        animal_name: "Murzik",
        animal_type: "Cat",
        animal_owner: "Ansar"
    },
    {
        animal_name: "Murzik",
        animal_type: "Cat",
        animal_owner: "Ansar"
    },
]
for(let item of animals){
    clinic.animals.push(item)
}
console.log(clinic)