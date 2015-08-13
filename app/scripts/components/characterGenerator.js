/**
 * Created by atulr on 08/08/15.
 */
'use strict';
var THREE = require('three');

var characterGenerator = function () {
  var init = function (scene) {
    var mesh = null;

    var loader = new THREE.JSONLoader();
    loader.load("/assets/boxguy.json", function (geometry, materials) {
      for (var i = 0; i < materials.length; i++) {
        var m = materials[i];
        m.skinning = true;
      }
      mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      scene.add(mesh);
      //mesh.rotation.y = 90;
      var animation = new THREE.Animation(mesh, geometry.animations[0]);
      animation.play();
    });

  };

  return {
    init: init
  }
}();

module.exports = characterGenerator;
