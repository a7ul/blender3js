/**
 * Created by atulr on 08/08/15.
 */
'use strict';
var THREE = require('three');

var cameraGenerator = function () {
  var init = function (areaWidth, areaHeight) {
    var camera = new THREE.PerspectiveCamera(75, areaWidth / areaHeight, 1, 1000);
    camera.position.z = 10;
    return camera;
  };
  return {
    init: init
  }
}();

module.exports = cameraGenerator;
