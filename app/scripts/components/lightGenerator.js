/**
 * Created by atulr on 08/08/15.
 */
'use strict';
var THREE = require('three');

var lightGenerator = function () {
  var init = function () {
    var light = new THREE.DirectionalLight(0x555555);
    light.castShadow = true;
    light.shadowDarkness = 0.1;
    light.shadowMapWidth = 2048;
    light.shadowMapHeight = 2048;
    light.position.set(500, 1500, 1000);
    light.shadowCameraFar = 2500;
    light.shadowCameraLeft = -1000;
    light.shadowCameraRight = 1000;
    light.shadowCameraTop = 1000;
    light.shadowCameraBottom = -1000;

    return light;
  };

  var initAmbient = function(){

    // add subtle blue ambient lighting
    var ambientLight = new THREE.AmbientLight(0xffffff);
    return ambientLight;

  };

  return {
    init: init,
    initAmbient:initAmbient
  }
}();

module.exports = lightGenerator;
