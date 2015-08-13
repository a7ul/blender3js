/**
 * Created by atulr on 08/08/15.
 */
'use strict';
var THREE = require('three');
var q = require('q/q');
var _ = require('lodash');

var characterGenerator = function () {
  var init = function () {
    var defer = q.defer();
    var mesh = null;
    var loader = new THREE.JSONLoader();
    loader.load("assets/boxguy.json", function (geometry, materials) {
      for (var i = 0; i < materials.length; i++) {
        var m = materials[i];
        m.skinning = true;
      }
      mesh = new THREE.SkinnedMesh(geometry, new THREE.MeshFaceMaterial(materials));
      //mesh.rotation.y = 90;
      mesh.animator = function (animeName) {
        var selected = _.find(geometry.animations, {'name': animeName});
        var animation = new THREE.Animation(mesh, selected);
        animation.play();
      };
      defer.resolve(mesh);
    });
    return defer.promise;
  };

  return {
    init: init
  }
}();

module.exports = characterGenerator;
