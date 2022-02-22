//twice  cycle for
for(let i=4; i>0;i--){
    for(let j=0;j<i;j++){
        document.write('*')
    }
    document.write('<br>')
}
document.write('<hr>')

let img=[
    '123.jpg',
    'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
    'https://static.toiimg.com/photo/72975551.cms',
    '123.jpg',
    'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
    'https://static.toiimg.com/photo/72975551.cms',
    'https://static.toiimg.com/photo/72975551.cms'
]

document.write(`<img src="${img[0]}" width="300px">`)
document.write(`<img src="${img[1]}" width="300px">`)
document.write(`<img src="${img[2]}" width="300px">`)

document.write('<hr>')
//for(start; end; action)

for(let i=0; i<img.length;i++){
    document.write(`<img src="${img[i]}" width="300px">`)
}
document.write(`<h1>${img.length}</h1>`)

document.write('<hr>')

let arr =[12,15,10,24,50,60]

for(let i=0;i<arr.length;i++){
    document.write(arr[i]+'<br>')
}
document.write('<hr>')
//добавляет элемент после последнего элемента массива
arr.push(25)

for(let i=0;i<arr.length;i++){
    document.write(arr[i]+'<br>')
}
document.write('<hr>')
//удаляет последний элемент массива
arr.pop()

for(let i=0;i<arr.length;i++){
    document.write(arr[i]+'<br>')
}
document.write('<hr>')
//удаляет первый элемент массива
arr.shift()

for(let i=0;i<arr.length;i++){
    document.write(arr[i]+'<br>')
}
document.write('<hr>')
//добавляет до первого элемента массива
arr.unshift(40)

for(let i=0;i<arr.length;i++){
    document.write(arr[i]+'<br>')
}
document.write('<hr>')
//1.Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'.

let arr_str=[
    'Привет,',
    ' мир',
    '!'
]
let text=''

for(let i=0;i<arr_str.length;i++){
    document.write(arr_str[i])
}
document.write('<hr>')
//2.В массиве, содержащем положительные и отрицательные целые числа, вычислить сумму четных положительных элементов.

let nums=[-1,-2,4,5,6,-4,7,-8]
let sum=0

for(let i=0;i<nums.length;i++){
    if(nums[i]%2==0 && nums[i]>0){
        sum=sum+nums[i]
    }
}
document.write(`Sum of the even and positive elements: ${sum}`)
document.write('<hr>')
//3.В массиве найти максимальный отрицательный элемент. Вывести на экран его значение и позицию в массиве.
let max = nums[0]
let min = nums[0]
let max1= nums[0]
let min1= nums[0]

for(let i=0;i<nums.length;i++){
    if(nums[i]<max && nums[i]<0){
        max=nums[i]
    }else if(nums[i]>min && nums[i]<0){
        min=nums[i]
    }else if(nums[i]>max1 && nums[i]>0){
        max1=nums[i]
    }else if(nums[i]<min1 && nums[i]>=0){
        min1=nums[i]
    }
}
document.write(`Maximum negative element is ${max}<br>`)
document.write(`Minimum negative element is ${min}<br>`)
document.write(`Maximum positive element is ${max1}<br>`)
document.write(`Minimum positive element is ${min1}<br>`)