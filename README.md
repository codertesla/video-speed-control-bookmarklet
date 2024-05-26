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


### 方案介绍

#### 优势
1. **简便易用**：书签脚本不需要安装额外的软件或插件，只需简单的复制粘贴即可使用。
2. **跨平台支持**：适用于所有支持书签功能的浏览器，无需考虑浏览器兼容性问题。
3. **快速设置**：用户可以在几秒钟内完成设置并立即生效，无需重启浏览器或刷新页面。
4. **轻量级**：不会占用额外的系统资源，不会影响浏览器的性能。

#### 劣势
1. **功能有限**：书签脚本通常只能实现较简单的功能，复杂的功能可能需要多步操作或额外的脚本。
2. **用户体验依赖于网页结构**：如果目标网站更改了视频元素的结构或名称，书签脚本可能会失效，需要手动更新代码。
3. **安全性**：由于书签脚本是直接在浏览器地址栏中执行的，用户在使用时需要确保脚本的安全性，避免执行不信任的代码。

#### 与浏览器插件的异同
- **相似点**：
  - 都可以实现调整视频播放速度的功能。
  - 都能在用户观看视频时提供便捷的操作方式。

- **不同点**：
  - **安装和设置**：
    - 书签脚本：通过创建书签并粘贴代码即可使用，过程简单且快速。
    - 浏览器插件：需要通过浏览器的插件市场进行搜索、下载和安装，过程相对复杂。
  - **功能丰富度**：
    - 书签脚本：功能相对简单，只能实现基础的播放速度控制。
    - 浏览器插件：功能更加丰富，通常提供更多的自定义选项和额外功能，如快捷键、自动调整、批量控制等。
  - **兼容性**：
    - 书签脚本：由于只是简单的 JavaScript 代码，通常能兼容大多数浏览器。
    - 浏览器插件：可能会因浏览器版本或插件本身的限制，存在兼容性问题。
  - **更新和维护**：
    - 书签脚本：需要用户手动更新代码以适应目标网站的变化。
    - 浏览器插件：通常由开发者维护和更新，用户只需等待插件的自动更新即可。

### 总结
通过书签脚本控制视频播放速度是一种简便、轻量且跨平台的解决方案，适合希望快速设置且不需要额外功能的用户。而浏览器插件则适用于需要更丰富功能和更好用户体验的用户。根据个人需求选择合适的方案，可以更好地提升观看体验。

## License / 许可证

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

本项目使用 MIT 许可证。详细信息请参见 [LICENSE](LICENSE) 文件。
