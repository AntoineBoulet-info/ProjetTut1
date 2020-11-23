$(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $("#slide1").css("background-position-y","" + (-(scroll/0.75)) + "px");
        })
