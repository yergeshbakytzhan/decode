const content = [
    {
        title: 'Резиновые  сапоги',
        category: 'обувь'
    },
    {
        title: 'Пальто',
        category: 'одежда'
    },
    {
        title: 'Свитер',
        category: 'одежда'
    },
    {
        title: 'Куртка',
        category: 'одежда'
    },
    {
        title: 'Туфли',
        category: 'обувь'
    },
    {
        title: 'Джинсы',
        category: 'брюки'
    }
]

let tabNavs = document.querySelector('.tab-navs')
let tabContent = document.querySelector('.tab-content')

let outputTabnav = ''
let outputTabcontent = ''
let categories = []

for(let value of content){
    categories.push(value.category)
    outputTabcontent += `
        <div class="tab-item">
            <h4>${value.title}</h4>
        </div>
    `
}
console.log(categories)
categories = [...new Set(categories)]
console.log(categories)

outputTabnav += `<button class="tab-btn" onclick="changeContent('все')">Все</button>`

for(let item of categories){
    outputTabnav+=`<button class="tab-btn" onclick="changeContent('${item}')">${item}</button>`
}
tabNavs.innerHTML = outputTabnav
tabContent.innerHTML = outputTabcontent

function changeContent(current){
    let output =''
    for(let product of content){
        if(product.category===current){
            output += `
            <div class="tab-item">
                <h4>${product.title}</h4>
            </div>
            `
        }
        if(current==='все'){
            output += `
            <div class="tab-item">
                <h4>${product.title}</h4>
            </div>
            `
        }
    }
    tabContent.innerHTML = output
}