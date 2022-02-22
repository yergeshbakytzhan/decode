// while(condition){ code... }

let username
let attempt = 0

while(username!='decode'){
    username = 'decode'
    attempt++
    if(attempt==3){
        document.write(`<h1>Attempts, ${attempt}! Only 3 attempts</h1>`)
        break
    }
}
if(username=='decode'){
    document.write(`<h1>Welcome, ${username}!</h1>`)
}else{
    document.write(`<h1>Invalid username, ${username}!</h1>`)
}

//do{ code... }while(condition)

let result = ''
let i = 0

do{
    i+=1
    result+= i+ ' '
}while(i<5)

document.write(`<h1>${result}</h1>`)

//for(start;end(condition);action){ code... }

let result1 = ''

for(let i=1;i<=5;i++){
    result1+= i+ ' '
}

document.write(`<h1>${result1}</h1>`)

let imgSrc = 'https://resi.ze-robot.com/dl/ul/ultraviolet-4k-wallpaper-1600%C3%971200.jpg'

document.write('<div class="image-container">')

for(let i=0; i<6;i++){
    document.write(`
        <div class="image-item">
            <img src="${imgSrc}">
        </div>
    `)
}

document.write('</div>')

let resultOdd=''
let resultEven=''
let sumEven=0
let sumOdd=0

for(let i=0; i<10;i++){
    if(i%2==0){
        resultEven+=i+' '
        sumEven+=i
    }else{
        resultOdd+=i+' '
        sumOdd+=i
    }
}
document.write(`<h1>Even numbers: ${resultEven}</h1>`)
document.write(`<h1>Odd numbers: ${resultOdd}</h1>`)
document.write(`<h1>Odd numbers' sum: ${sumOdd}</h1>`)
document.write(`<h1>Even numbers' sum: ${sumEven}</h1>`)
document.write('<hr>')
//1 task

for(let i=0;i<10;i++){
    for(let j=0;j<i;j++){
        document.write('*')
    }
    document.write('<br>')
}

document.write('<hr>')
//2 task

for(let i=1001;i<=1025;i+=3){
    document.write(i+' ')
}