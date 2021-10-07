$(document).ready(function() {
   
    // Xu ly icon go to top
    $(".inside-item").hide();
    $("#upImg").hide();

    $(window).scroll(function () {
        if($(this).scrollTop() >= 200)
            $("#upImg").show("slow")
        else
            $("#upImg").hide("slow")
    });

    $("#upImg").click(function() {
        $("html, body").animate({
            scrollTop: 0
        },1000)
    });

    // Xu ly scroll co dinh menu
    $(window).scroll(function () {
        var x = $(document).width();
        if($(this).scrollTop() >= 30 && x >= 768)
        {
            var x = $(document).width();
            // if(x <= 768)
            // {
            //     $("#menu ul").removeClass("sticky");
            //     $("#menu_mobile").removeClass("sticky");
            //     $(".inside-item").removeClass("stickyInside");
            // }
            // var x = screen.width;
            $("#menu ul").addClass("sticky");
            // $("#menu_mobile").addClass("sticky");
            $(".inside-item").addClass("stickyInside");
            // var insideItemClick = false;
            // $(".insidemenu_product").onclick(function () {
            //     insideItemClick = true;
            // });
            // if(insideItemClick != true)
            //     $(".inside-item").slideToggle("slow");
            // else
            // $(".inside-item").hide("slow")
        }
        else
        {
            $("#menu ul").removeClass("sticky");
            $("#menu_mobile").removeClass("sticky")
            $(".inside-item").removeClass("stickyInside")
        }

    });

    // Xu ly add class khi ve do phan giai 768px
    // $(window).scroll(function () {
    //     if($(this).scrollTop() >= 30 && screen.width <= 768)
    //     {
    //         if(screen.width <= 768)
    //         {
    //             $("#menu_mobile").addClass("sticky");
    //             $(".inside-item").addClass("stickyInside");
    //             $("#menu_mobile").addClass("navBarMobile");
    //             $(".inside-item").addClass("inside-item-block");
    //             $(".inside-item").addClass("inside-item-padding");
    //             $(".sticky").addClass("inside-item-padding");


    //         };
    //     }
    //     else 
    //         {
            
    //             // $(".inside-item").removeClass("inside-item-block");
    //             // $("#menu_mobile").addClass("navBarMobile");
    //         }
    // });
    
    //Xu ly hover tren item show info 
    // $("div.grid-item").hover(function() {
    //     // $("div.item-info").removeClass("item-info")
    //     $("div.item-info").addClass('item-info-show')
    //     }, function(){
    //         $("div.item-info").removeClass("item-info-show")
    //         // $("div.item-info").addClass("item-info")
    // });
        


    // Xu ly pop up khi bam buy
    $(".button").click(function() {
        Swal.fire({
            title: 'Order Successful',   
            confirmButtonText: 'OK',
            confirmButtonColor: '#94d82d',
            cancelButtonText: 'Cancel',
            showCancelButton: true,
            showCloseButton: true
        })
    });

    // Xu ly menu an
    $("#nav_bar").click(function() {
        $("nav#menu").slideToggle();
    });

    var x = $(document).width();
    if(x <= 768)
    {
        $(".inside-item").addClass("inside-item-mobile");
    };
    
    // Xu ly icon mobile  
    $("#nav_bar").click(function() {
        $("#nav_bar").toggleClass("open");
    });

    $(".insidemenu_product").click(function() {
        $(".inside-item").slideToggle();
    });
});





