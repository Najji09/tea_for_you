$('article').mouseenter(function () {
  let vid = $(this).find('video').get(0);
  vid.currentTime = 0;
  vid.play();
  $(this)
    .stop()
    .animate({ width: '25%' }, 1000, function () {
      $(this).find('h3').stop().animate({ right: '10px' }, 400);
      $(this).find('p').stop().animate({ right: '10px' }, 800);
    });
  $(this).find('video').stop().animate({ opacity: '0.9' }, 1200);
});
$('article').mouseleave(function () {
  let vid = $(this).find('video').get(0);
  vid.pause();

  $(this)
    .stop()
    .animate({ width: '12%' }, 700, function () {});
  $(this).find('p').stop().animate({ right: '-310px' }, 200);
  $(this).find('h3').stop().animate({ right: '-310px' }, 500);
  $(this).find('video').stop().animate({ opacity: '0' }, 2000);
});
