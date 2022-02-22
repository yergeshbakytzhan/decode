const content = [
    {
        title: 'Сапоги',
        category: 'обувь'
    },
    {
        title: 'Сапоги',
        category: 'обувь'
    },
    {
        title: 'Сапоги',
        category: 'одежда'
    },
    {
        title: 'Сапоги',
        category: 'одежда'
    },
    {
        title: 'Сапоги',
        category: 'брюки'
    },
    {
        title: 'Сапоги',
        category: 'брюки'
    }
]

const tabNav = document.querySelector(".tab-navs")
const tabContent = document.querySelector(".tab-content")


let outputTabnav = ''
let outputTabcontent = ''
let categories = []

for(let item of content){
    categories.push(item.category)
    outputTabcontent +=`
        <div class="tab-item">
            <h4>${item.title}</h4>
        </div>
    
    `
}
console.log(categories)
categories = [...new Set(categories)]

console.log(categories)

outputTabnav+=`<button class="tab-btn" onclick="changeContent('все')">Все</button>`

for(let item of categories){
    outputTabnav += `<button class="tab-btn" onclick="changeContent('${item}')">${item}</button>`
}

tabNav.innerHTML = outputTabnav
tabContent.innerHTML = outputTabcontent

function changeContent(current){
    let output = ''

    for(const product of content){
        if(product.category===current){
            output+=`
            <div class="tab-item">
                <h4>${product.title}</h4>
            </div>
            `
        }
        if(current==='все'){
            output+=`
            <div class="tab-item">
                <h4>${product.title}</h4>
            </div>
            `
        }
    }
    tabContent.innerHTML = output
}