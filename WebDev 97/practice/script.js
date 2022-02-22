let img=[
    'https://static.toiimg.com/photo/72975551.cms',
    'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
    'https://static.toiimg.com/photo/72975551.cms',
    'https://static.toiimg.com/photo/72975551.cms',
    'https://media.istockphoto.com/photos/child-hands-formig-heart-shape-picture-id951945718?k=6&m=951945718&s=612x612&w=0&h=ih-N7RytxrTfhDyvyTQCA5q5xKoJToKSYgdsJ_mHrv0=',
    'https://static.toiimg.com/photo/72975551.cms'
]
let links=[
    'Click',
    'Click',
    'Click',
    'Click'
]

document.write('<div class="container">')
document.write('<div class="links">')
for(let i=0;i<links.length;i++){
    document.write(`<a href="">${links[i]}</a>`)
}
document.write('</div>')
document.write('<div class="images">')
for(let i=0;i<img.length;i++){
    document.write(`<img src="${img[i]}">`)
}
document.write('</div>')
document.write('</div>')