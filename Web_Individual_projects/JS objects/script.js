let student = {
    id: 1,
    name: 'Ali',
    age: 14,
    height: 160,
    hobbies: ['gaming','programming']
}

document.write(`<h1>${student.id}</h1>`)
document.write(`<h1>${student.name}</h1>`)
document.write(`<h1>${student['age']}</h1>`)
document.write(`<h1>${student['height']}</h1>`)
document.write(`<h1>${student.hobbies[1]}</h1>`)

let cars = [
    {
        id: 1,
        name: 'Audi',
        color: 'red',
    },
    {
        id:2,
        name:'Toyota',
        color: 'grey',
    },
    {
        id:3,
        name:'Mercedes',
        color: 'white',
    },
    {
        id:4,
        name:'BMW',
        color: 'blue',
    },
]


for(let item of cars){
    document.write(`
        <h1>${item.id}</h1>
        <h1>${item.name}</h1>
        <h1 style="color: ${item.color};">${item.color}</h1>
    `)
}

let posts = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        img: "https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        img: "https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        img: "https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        img: "https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
    },
    {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        img: "https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
    },
    {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        img: "https://blog.hootsuite.com/wp-content/uploads/2019/03/Schedule-Facebook-Posts.jpg"
    },
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
                <h4>${item.title}</h4>
                <p>${item.body}</p>
            </div>
        </div>
    `)
}
document.write('</div>')
document.write('<hr>')

let clinics={
        clinic_name:'asd',
        clinic_address:'Abay 80',
        animals: []
}
let animals=[
    {
        animal_name: 'Murzik',
        animal_type: 'cat',
        animal_owner: 'Andrey'
    },
    {
        animal_name: 'Murzik',
        animal_type: 'cat',
        animal_owner: 'Andrey'
    },
    {
        animal_name: 'Murzik',
        animal_type: 'cat',
        animal_owner: 'Andrey'
    },
    {
        animal_name: 'Murzik',
        animal_type: 'cat',
        animal_owner: 'Andrey'
    }
]
for(let item of animals){
    clinics.animals.push(item)
}
for(let item of clinics.animals){
    document.write(`<h1>${item.animal_name}</h1>`)
}


let numbers = {
    numbers:[9,-6,3,-4,8,4,-1,5],
    positive:[],
    negative:[]
}

for(let item of numbers.numbers){
    if(item>=0){
        numbers.positive.push(item)
    }else{
        numbers.negative.push(item)
    }
}
document.write('<h1>')
for(let item of numbers.positive){
    document.write(item)
}
document.write('</h1>')
document.write('<h1>')
for(let item of numbers.negative){
    document.write(item)
}
document.write('</h1>')