/**
 * Created by atulr on 08/08/15.
 */
var init = function() {
  window.addEventListener("DOMContentLoaded", function () {
    // Grab elements, create settings, etc.
    var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      video = document.getElementById("video"),
      videoObj = {"video": true},
      errBack = function (error) {
        console.log("Video capture error: ", error.code);
      };

    document.getElementById("snap").addEventListener("click", function () {
      context.drawImage(video, 0, 0, 640, 480);
    });

    // Put video listeners into place
    if (navigator.getUserMedia) { // Standard
      navigator.getUserMedia(videoObj, function (stream) {
        video.src = stream;
        video.play();
      }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
      navigator.webkitGetUserMedia(videoObj, function (stream) {
        video.src = window.webkitURL.createObjectURL(stream);
        video.play();
      }, errBack);
    }
    else if (navigator.mozGetUserMedia) { // Firefox-prefixed
      navigator.mozGetUserMedia(videoObj, function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
      }, errBack);
    }
  }, false);


};

module.exports = init;
