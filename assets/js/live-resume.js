jQuery(function() {
    setupCollapsibleNav();

    setupHoverBoxEffect();

    setupTypewriterEffect();

    setupButtonShare();

    setupScrollbar();

    $('#last-updated').text(document.lastModified);
});

function setupScrollbar() {
    $(window).on('scroll', function() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        $('.scroll-indicator-bar').css('width', scrolled + '%');
    });
}

function setupButtonShare() {
    $('.btn-share').on('click', function(){
        if (navigator.share) {
            navigator.share({
              title: 'NGUYỄN VIỆT TÙNG Resume',
              url: location.href
            })
            .catch(console.error);
        } else {
            //fallback
        }
    });
}

function setupCollapsibleNav(){
    $('[data-toggle="collapsible-nav"]').on('click', function(e){
        var target = ($(this).data('target'));
        $('#' + target).toggleClass('show');
    });

    if(window.innerWidth >= 992) {
        $('#collapsible-nav').addClass('show');  //Show navigation menu in bigger screens by default.
    } else {
        $('#collapsible-nav').removeClass('show');
    }
}

function setupHoverBoxEffect() {
    var classNames = ['in-up', 'in-right', 'in-down', 'in-left', 'out-up', 'out-right', 'out-down', 'out-left']; // Animation classes.

    $('.hover-box').on('mouseenter', function (event) {
            var direction = "up";
        if(jQuery.fn.entry){ //Check if entry js file is loaded.
            direction = $(this).entry({ e: event }); // Get mouse in direction.
        }

        $(this).removeClass(classNames.join(" ")); // Remove existing animation classes.
        $(this).addClass("in-" + direction); //Add mouse in animation

    }).on('mouseleave', function (event) {
        var direction = "up";
        if(jQuery.fn.entry){
            direction = $(this).entry({ e: event }); // Get mouse out direction.
        }

        $(this).removeClass(classNames.join(" "));
        $(this).addClass("out-" + direction); //Add mouse out animation

    });

    $(window).on('resize',
        function() {
            if ($('.hover-box').length) {
                setHoverBoxPerspective();
            }
        }
    );

    if ($('.hover-box').length) {
        setHoverBoxPerspective();
    }
}

function setHoverBoxPerspective() {
    $('.hover-box').css({
        'perspective': function () {
            return Math.max( $(this).width(), $(this).height() ) * 2 + 50;
        }
    });
}

function setupTypewriterEffect() {
    let $typewriter = $('.typewriter-effect');
    if($typewriter.length) {
        var i = 0;
        var txt = $typewriter.text(); /* The text */
        var speed = 100; /* The speed/duration of the effect in milliseconds */

        const typeWriter = function () {
            if (i < txt.length) {
                $typewriter[0].innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }

        $typewriter.text('')
        typeWriter();
    }
}