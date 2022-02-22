//while(condition){ code.. }
let username=''
let attempt = 0
while(attempt<3){
    username = 'decode'
    if(username==='decode'){
        break
    }
    attempt++
}
if(attempt>=3){
    document.write(`<h1 style="color: red">Your attempts are ${attempt}, invalid</h1>`)
}else{
    document.write(`<h1>Welcome, ${username}!</h1>`)
}

//for(start;end;action){ code... }

let sum = 0
for(let i=0;i<10;i++){
    sum+=i
}
document.write(`<h1>Sum is ${sum}</h1>`)


document.write('<div class="container">')
for(let i=0;i<6;i++){
    document.write(`
        <div class="item">
            <img src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="">
        </div>
    `)
}
document.write('</div>')


//1
document.write('<h1>')
for(let i=10;i<=20;i++){
    document.write((i*i)+' ')
}
document.write('</h1>')

//3

let odd=0
let even=0
for(let i=24;i<=97;i++){
    if(i%2==0){
        even++
    }else{
        odd++
    }
}
document.write(`<h1>Even: ${even}, odd: ${odd}</h1>`)

//1 stars
for(let i=0;i<4;i++){
    for(let j=0;j<7;j++){
        document.write('*')
    }
    document.write('<br>')
}
//3 sum of odd
let a = 1
let b = 10
let sum3 = 0
for(let i=a;i<b;i++){
    if(i%2!=0){
        sum3+=i
    }
}
document.write(`<h1>Sum: ${sum3}</h1>`)

//4
let evenNum = 0
let oddNum = 0
let word = prompt("Enter number")
for(let i=0;i<word.length;i++){
    if(+(word.charAt(i))%2==0){
        evenNum++
    }
    if(+(word.charAt(i))%2!=0){
        oddNum++
    }
}
document.write(`<h1>Even: ${evenNum}, odd: ${oddNum}</h1>`)