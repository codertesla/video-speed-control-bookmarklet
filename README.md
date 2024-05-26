# Video Speed Control Bookmarklet

This is a bookmarklet to control video playback speed on Bilibili and YouTube.

这是一个书签脚本，用于控制 Bilibili 和 YouTube 上的视频播放速度。

## How to Use / 如何使用

1. Create a new bookmark in your browser.
2. Set the bookmark name to `3x Speed`.
3. Copy the following code and set it as the URL of the bookmark:

    创建一个新的浏览器书签。
    将书签名称设置为 `3x Speed`。
    复制以下代码，并将其设置为书签的 URL：

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

    保存书签。
    打开 Bilibili 或 YouTube 上的视频，点击书签，将播放速度设置为 3 倍速。

## License / 许可证

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

本项目使用 MIT 许可证。详细信息请参见 [LICENSE](LICENSE) 文件。
