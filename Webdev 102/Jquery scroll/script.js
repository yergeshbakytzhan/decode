$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop() > 40){
            $("#topBtn").fadeIn()
        }else{
            $("#topBtn").fadeOut()
        }
    })
    $("#topBtn").click(function(){
        $("html, body").animate({scrollTop: 0},1000)
    })
    $(function(){
        $("a[href*=\\#]:not([href=\\#])").on('click',function(){
            var target = $(this.hash)
            target = target.length ? target : $("[name="+this.hash.substr(1)+"]")
            if(target.length){
                $("html,body").animate({
                    scrollTop: target.offset().top
                }, 1000)
                return false
            }
        })
    })
})