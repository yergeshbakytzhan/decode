//while(condition){ code... }
let counter = 0
document.write('<h1>')
while(counter<5){
    document.write(counter+', ')
    counter++
}
document.write('</h1>')
let username=''
let attempt = 0
while(attempt<3){
    username = 'decode'
    if(username==='decode'){
        break
    }
    attempt++
}
if(attempt<3){
    document.write(`<h1>Welcome ${username}</h1>`)
}else{
    document.write(`<h1>You have written more than 3 times</h1>`)
}
// do{ code.. }while(condition)
let i = 0
let result = 0
do{

    i++
    console.log(i)
    result+=i
    //result=result+i
}while(i<5)
document.write(`<p>${result}</p>`)

//for(start;end;action){ code.. }
let sum=0
for(let i=0;i<5;i++){
    sum=sum+i
}
document.write(`<p>${sum}</p>`)
document.write('<hr>')

document.write('<div class="container">')

for(let i=0;i<6;i++){
    document.write(`
        <div class="item">
            <img src="https://images.ctfassets.net/00i767ygo3tc/asset-sktwinq8jrzfu78i/82e88006f3f39b5d1a7548fc64a657eb/how-to-post-a-video-on-instagram.jpg?w=1800&q=50">
            <div class="item-info">
                <h3>Title</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
        </div>
    `)
}
document.write('</div>')

for(let i=0;i<7;i++){
    for(let j=i;j>0;j--){
        document.write('*')
    }
    document.write('<br>')
}
document.write('<h1>')
for(let i=1001;i<=1025;i+=3){
    document.write(i+' ')
}
document.write('</h1>')

let num1 = +(prompt("Enter number(start point):"))
let num2 = +(prompt("Enter number(end point):"))
document.write('<h1>')
for(let i=num1;i<num2;i++){
    if(i%2==0){
        document.write(i+' ')
    }
}
document.write('</h1>')