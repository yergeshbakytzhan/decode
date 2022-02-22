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
        $(".block").animate({"left":"500px"})
    })
    $("#innertext").click(function(){
        alert("Text:"+$(".text").text())
    })
    $("#innerhtml").click(function(){
        alert("Text:"+$(".text").html())
    })
    $("#append").click(function(){
        $("#text").append("<h1>Ali</h1>")
    })
    $("#prepend").click(function(){
        $("#text").prepend("Ali")
    })
    $("#remove").click(function(){
        $(".block").remove()
    })
    $("#clear").click(function(){
        $(".block").empty()
    })
    $("#style").click(function(){
        $("p").css({
            "background-color":"yellow",
            "font-size":"20px",
            "font-weight":"500",
            "line-height":"1.5"
        })
    })
})