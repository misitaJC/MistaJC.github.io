$(function () {
    'use strict';

    var $container = $('#mediaDiv');
    var $image = $container.children('div.on');
    var mediaObj;
    var iTransform, cTransform;

    mediaObj = new Audio();
    mediaObj.src = 'https://github.com/wei1273356078/3D-Albums/blob/master/images/media/music.mp3';  // 背景音乐修改这里
    mediaObj.loop = true;
    mediaObj.autoplay = true;

    $(document).one('touchstart.play click.play', function () {
        mediaObj.play();
        mediaPlay();
    });

    $image.bind('click', function () {
        if (mediaObj.paused) {
            mediaObj.play();
            mediaPlay();
        } else {
            setTimeout(function(){
                mediaObj.pause();
                mediaPause();
            }, 0.1e3);
        }
    });

    function mediaPlay() {
        $image.addClass('animate');
    }

    function mediaPause() {
        iTransform = $image.css('transform');
        cTransform = $container.css('transform');
        $container.css('transform', cTransform === 'none' ? iTransform : iTransform.concat(' ', cTransform));
        $image.removeClass('animate');
    }

    $(mediaObj).bind('canplaythrough', function () {
    }).bind('pause ended', function () {
        mediaPause();
    }).bind('playing', function () {
        mediaPlay();
    });
    
    var random = function () {
        return Math.ceil(Math.random() * 15);
    };

    $image.css('backgroundImage', 'url("./images/media/on' + random() + '.JPG")');
});