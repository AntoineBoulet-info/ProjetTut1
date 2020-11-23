$(window).scroll(function() {
            var scroll = $(window).scrollTop();
            $("#drapQ").css("background-position-y","" + (-(scroll/0.75)) + "px");

        })
