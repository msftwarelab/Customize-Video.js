videojs('new-video', { 
  fill: true,
  responsive: false,
  plugins: {
    httpSourceSelector:
    {
      default: 'auto'
    }
  }
}).ready(function () {
  $(".vjs-play-control").after(
    `
      <div id="cvjs-forward-control" class="cvjs-forward-control vjs-control vjs-button">
        <span class="vjs-icon-placeholder" aria-hidden="true"></span>
      </div>
    `
  );
  $(".vjs-play-control").after(
    `
      <div id="cvjs-backward-control" class="cvjs-backward-control vjs-control vjs-button">
        <span class="vjs-icon-placeholder" aria-hidden="true"></span>
      </div>
    `
  );

  const player = videojs('new-video');
  const backwardElem = $("#cvjs-backward-control");
  const forwardElem = $("#cvjs-forward-control");
  player.httpSourceSelector();
  // player.spriteThumbnails({
  //   url: 'images/default.jpg',
  //   width: 160,
  //   height: 90
  // });
  $(document).keyup(e => {
    switch (e.keyCode) {
        case 37:
            e.preventDefault();
            rewind(-10);
            break;
        case 39:
            e.preventDefault();
            rewind(10);
            break;
    }
});
  backwardElem.on("click", () => rewind(-10));
  forwardElem.on("click", () => rewind(10));

  function rewind(param) {
    player.currentTime(player.currentTime() + param);
  };

  this.on('pause', function () {
  });

  this.on('play', function () {
  });

  this.one('ended', function () {
    this.play();
  });
});

