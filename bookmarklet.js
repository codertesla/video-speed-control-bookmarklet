(function() {
    var video;
    if (window.location.host.includes('bilibili')) {
        video = document.querySelector('video');
    } else if (window.location.host.includes('youtube')) {
        video = document.getElementsByTagName('video')[0];
    }
    if (video) {
        video.playbackRate = 3;
    } else {
        alert('未找到视频元素');
    }
})();
