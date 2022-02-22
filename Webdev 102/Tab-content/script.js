const content = [
    {
        title: 'Резиновые сапоги',
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

const tabNav = document.querySelector('.tab-navs')
const tabContent = document.querySelector('.tab-content')

let outputTabNav = ''
let outputTabContent = ''
let categories = []

for(const value of content){
    categories.push(value.category)
    outputTabContent+=`
        <div class="tab-item">
            <h4>${value.title}</h4>
        </div>
    `
}

categories = [...new Set(categories)]

outputTabNav+= `<button class="tab-btn" onclick="changeContent('все')">все</button>`
for(const item of categories){
    outputTabNav+= `<button class="tab-btn" onclick="changeContent('${item}')">${item}</button>`
}

tabNav.innerHTML = outputTabNav
tabContent.innerHTML = outputTabContent

function changeContent(current){
    let output=''

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