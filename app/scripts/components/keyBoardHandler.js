/**
 * Created by atulr on 14/08/15.
 */
var THREEx = require('./THREEx.KeyboardState');

var keyBoardHandler = function () {
  var keyboard = new THREEx.KeyboardState();
  var disable = false;
  var test = function (char) {
    if(disable){
      return;
    }
    if (keyboard.pressed("W")) {
      char.translateZ(0.1);
    } else if (keyboard.pressed("S")) {
      char.translateZ(-0.1);
    } else if (keyboard.pressed("A")) {
      char.rotateY(1 * Math.PI / 12);
    } else if (keyboard.pressed("D")) {
      char.rotateY(-1 * Math.PI / 12);
    }
    disable = true;
    setTimeout(function(){
      disable = false;
    },50);
  };
  return {
    test: test
  };

}();

module.exports = keyBoardHandler;
