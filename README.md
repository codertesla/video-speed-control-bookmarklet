# Video Speed Control Bookmarklet

This is a bookmarklet to control video playback speed on Bilibili and YouTube.

## How to Use

1. Create a new bookmark in your browser.
2. Set the bookmark name to `3x Speed`.
3. Copy the following code and set it as the URL of the bookmark:

    ```javascript
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
    ```

4. Save the bookmark.
5. Open a video on Bilibili or YouTube and click the bookmark to set the playback speed to 3x.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
