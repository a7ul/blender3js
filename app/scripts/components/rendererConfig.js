/**
 * Created by atulr on 08/08/15.
 */
var THREE = require('three');

var rendererConfig = function () {
  var init = function (appendDom, areaHeight, areaWidth) {
    var renderer = new THREE.WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(areaWidth, areaHeight);
    renderer.shadowMapEnabled = true;
    appendDom.appendChild(renderer.domElement);
    return renderer;
  };

  return {
    init: init
  };
}();

module.exports = rendererConfig;
