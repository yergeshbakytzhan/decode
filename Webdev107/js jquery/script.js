// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide()
//     })
// })

// const paragraphs = document.getElementById("text")

// paragraphs.addEventListener('click',(event)=>{
//     paragraphs.style.display = 'none'
// })

$(document).ready(function(){
    // $("p").click(function(){
    //     $(this).hide()
    // })
    // $("p").dblclick(function(){
    //     $(this).hide()
    // })
    // $("p").mouseenter(function(){
    //     $(this).hide()
    // })
    // $("p").mouseleave(function(){
    //     $(this).hide()
    // })
    $('#toggle').click(function(){
        $('p').toggle()
    })
    $('#fade').click(function(){
        $('p').fadeToggle()
    })
    $('#slide').click(function(){
        $('.block').slideToggle()
    })
    $('#animate').click(function(){
        $('.block').animate({
            "left":"500px"
        }, 5000)
    })
    $('#append').click(function(){
        $('#text').append("<h1>Asd</h1>")
    })
    $('#prepend').click(function(){
        $('#text').prepend("<h1>Asd</h1>")
    })
    $('#style').click(function(){
        $('p').css({
            "background-color":"red",
            "font-size":"256px",
            "font-weight": "700"
        })
    })
})