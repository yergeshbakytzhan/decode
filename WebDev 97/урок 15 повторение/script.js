// if(condition){ code }

if('decode'==''){
    document.write('<p>Welcome!</p>')
}else if(20==10){
    document.write('<p>Correct!</p>')
}else if(10==10){
    document.write('<p>Correct!</p>')
}else{
    document.write('<p>Error</p>')
}

//switch(value){ case 20: code break; default: code break;}

switch(31){
    case 30:
        document.write(`Equals to 30`)
        break
    default:
        document.write(`Incorrect!`)
        break
}

//while(condition){code}

let counter = 0

while(20>counter){
    
    counter+=3
    document.write(`<p>Number is ${counter}</p>`)
}


let names = [
    'Bakytzhan',
    'Marina',
    'Murat',
    'Diana'
]
//for(start;end;action){code}
for(let i=0;i<names.length;i++){
    document.write(`<p>${names[i]}</p>`)
}
//for in
for(let index in names){
    document.write(`<p>${names[index]}</p>`)
}

//for of
for(let item of names){
    document.write(`<p>${item}</p>`)
}

let cars = [
    {
        id: 1,
        name: 'BMW',
        length: 5,
        color: 'blue',
        country: 'Germany'
    },
    {
        id: 2,
        name: 'Mercedes',
        length: 5,
        color: 'black',
        country: 'Germany'
    },
    {
        id: 3,
        name: 'Audi',
        length: 5,
        color: 'gray',
        country: 'Germany'
    },
    {
        id: 4,
        name: 'Toyota',
        length: 5,
        color: 'white',
        country: 'Japan'
    }
]

// for of
for(let item of cars){
    document.write(`<h1>${item.name}</h1>`)
    document.write(`<p>${item.length}</p>`)
    document.write(`<p style="color: ${item.color};">${item.color}</p>`)
    document.write(`<p>${item.country}</p>`)
}

let count = parseInt(prompt('Enter any number'))

let first = 1
let second = 2
let out = ''

for(let i=3;i<=count;i++){
    let temp = first
    first = second
    second += temp 
    out += ` ${second}`
}
document.write(`<p>1 2 ${out}</p>`)