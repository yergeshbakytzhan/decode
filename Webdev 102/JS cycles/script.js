//while(condition){ code.. }
let username = ''
let attempt = 0

while(attempt<3){
    attempt++
    username = 'decode'
    if(username=='decode'){
        break
    }
}
if(username == 'decode'){
    document.write(`<h1>Username is ${username},attempts ${attempt}</h1>`)
}else{
    document.write(`<h1>Invalid Username,attempts ${attempt}</h1>`)
}

//do{ code.. }while(condition)
let i=0
let result = ''
do{
    i++
    result+=`${i} `
}while(i<5)
console.log(result)

// for(start;end;action)
// for(let i=0;i<5;i++)

let result2 = ''
for(let i=1;i<=5;i++){
    result2 +=`${i} `
}
console.log(result2)


document.write('<div class="image-items">')
for(let i = 0;i<6;i++){
    document.write(`
        <div class="image-member">
            <img src="https://cdn.wallpaperhub.app/cloudcache/1/b/5/8/e/f/1b58ef6e3d36a42e01992accf5c52d6eea244353.jpg">
        </div>
    `)
}
document.write('</div>')


for(let i=0;i<4;i++){
    for(let j=0;j<7;j++){
        document.write('*')
    }
    document.write('<br>')
}
document.write('<hr>')

for(let i=1001;i<=1025;i+=3){
    document.write(i+' ')
}

document.write('<hr>')

let num1 = Number(prompt("Enter number 1"))
let num2 = Number(prompt("Enter number 2"))
let sum = 0
document.write(`<h1>Sum of numbers between ${num1},${num2}:</h1>`)

for(num1;num1<=num2;num1++){
    if(num1%2!=0){
        sum=sum+num1
    }
}
document.write(`<h1>Sum: ${sum}</h1>`)