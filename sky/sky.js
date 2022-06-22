jQuery(function ($) {
    // var width, height,
    //     num = 50,
    //     period = 5,
    //     colors = ["#78b6e3", "#fff", "#fffda8", "#fedc00", "#db7000", "#ad3406"];
    var w,
        h,
        num = 30,
        period = 5,
        colors = ["#78b6e3", "#fff", "#fffda8", "#fedc00", "#db7000", "#ad3406"];

    (function () {
        $(window).on('resize', onResize);
        refreshWH();
        createStars();
    })();

    function onResize() {
        refreshWH();
    }

    function refreshWH() {
        var $win = $(window);
        w = $win.width();
        h = $win.height();
    }

    function createStars() {
        var i,
            $sky = $('.sky'),
            $star;
        for (i = 0; i < num; ++i) {
            $star = $('<div class="star"></div>');
            $sky.append($star);
            $star.on("animationend", onAniEnd);
            setStar($star);
            startAni($star);
        }
    }

    function setStar($s) {
        setAni($s);
        setShadow($s);
    }

    function getRandomTime() {
        return Math.floor(Math.random() * (period * 10)) / 10;
    }

    function setAni($s) {
        var dur,
            begin1,
            begin2,
            delay = 0;
        begin1 = $s.mybegin;
        if (begin1 == undefined) {
            begin1 = getRandomTime();
            delay = begin1;
        }
        begin2 = getRandomTime();
        $s.mybegin = begin2;
        dur = period - begin1 + begin2;
        $s.css({
            animationDuration: dur + "s",
            animationDelay: delay + "s",
        });
    }

    function setShadow($s) {
        var color,
            x,
            y,
            blur,
            spread,
            i,
            boxShadow = "";
        for (i = 0; i < num; ++i) {
            color = colors[Math.floor(Math.random() * colors.length)];
            x = parseInt(2 * w * Math.random() - w / 2);
            y = parseInt(2 * h * Math.random() - h / 2);
            blur = parseInt(10 * Math.random() + 2);
            spread = parseInt(6 * Math.random());
            if (i != 0) {
                boxShadow += ",";
            }
            boxShadow += x + "px " + y + "px " + blur + "px " + color;
        }
        $s.css({
            boxShadow: boxShadow
        });
    }

    function onAniEnd(e) {
        $this = $(this);
        stopAni($this);
        e.target.offsetWidth;
        setStar($this);
        startAni($this);
    }

    function startAni($s) {
        $s.addClass('ani');
    }

    function stopAni($s) {
        $this.removeClass('ani');
    }
})