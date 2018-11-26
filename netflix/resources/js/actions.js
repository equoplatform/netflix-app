$(document).ready(function () {
  const START_VIDEO_ATTR_ID = '[data-uia="play-button"]';
  const VOLUME = 0.2;

  equo.on('playSelectedVideo', data => {
    let currentVideo = document.getElementsByTagName('video')[0];
    if (currentVideo) {
      if (currentVideo.paused) {
        currentVideo.play();
      } else {
        currentVideo.pause();
      }
    }
  });

  equo.on('turnUpVolume', data => {
    let currentVideo = document.getElementsByTagName('video')[0];
    if (currentVideo) {
      currentVideo.volume += VOLUME;
    }
  });

  equo.on('turnDownVolume', data => {
    let currentVideo = document.getElementsByTagName('video')[0];
    if (currentVideo) {
      currentVideo.volume -= VOLUME;
    }
  });

  $(document).on('click', START_VIDEO_ATTR_ID, function (event) {
    console.log('this is... ', this);
    let videoTitle = NetflixUtils.getVideoTitle(this);
    console.log('video playing is... ', videoTitle);
    event.preventDefault();
    equo.registerEvent({
      key: 'movies_played',
      segmentation: {
        title: videoTitle,
        country: "Germany"
      }
    });
  });
});