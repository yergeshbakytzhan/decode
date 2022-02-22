// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).hide()
//     })
// })
$(document).ready(function(){
    // $(".text, #text").click(function(){
    //     $(this).hide()
    // })
    // $(".text, #text").dblclick(function(){
    //     $(this).hide()
    // })
    // $(".text, #text").mouseenter(function(){
    //     $(this).hide()
    // })
    // $(".text, #text").mouseleave(function(){
    //     $(this).hide()
    // })
    $("#toggle").click(function(){
        $("p").toggle()
    })
    $("#fade").click(function(){
        $("p").fadeToggle()
    })
    $("#slide").click(function(){
        $(".block").slideToggle()
    })
    $("#animate").click(function(){
        $(".block").animate({"opacity":"0"})
    })
    $("#innerhtml").click(function(){
        alert("Text:"+$(".text").html())
    })  
    $("#innertext").click(function(){
        alert("Text:"+$(".text").text())
    })
    $("#append").click(function(){
        $("#text").append("<h1>All</h1>")
    })
    $("#prepend").click(function(){
        $("#text").prepend("<h1>All</h1>")
    })
    $("#style").click(function(){
        $("p").toggle(function(){
            $("p").css({
                "color":"green",
                "font-size":"20px",
                "font-weight":"700"
            })
        }) 
    })
})