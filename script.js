var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
      hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

function myFunction1() {
  var node = document.getElementById("container");
  var nodeBgColor = window.getComputedStyle(node).getPropertyValue("background-image");
  console.log(nodeBgColor);
  var patt = /[0-9]/g;
  var ar1 = nodeBgColor.split("(");
  var ar2 = ar1.slice(2,5);
  var ar3 = ar2[0].split(")");
  var ar4 = ar2[1].split(")");
  var num1 = ar3[0].split(",").map(i=>Number(i));
  var num2 = ar4[0].split(",").map(i=>Number(i));  
  var col1 = fullColorHex(num1[0], num1[2], num1[2]); 
  var col2 = fullColorHex(num2[0], num2[2], num2[2]); 
  document.getElementById("description").innerHTML = "The code of the color is: linear-gradient( 270deg, " + col1 + ", " + col2 + " );";

}

function myFunction2() {
  for (let i=1; i < 3; i++){
    if (i<2){
      var numhex = (Math.random() * 0xfffff * 1000000).toString(16);
      var hex1 = '#' + numhex.slice(0, 6);
      // return hex1;
      // console.log(hex1);
    }
    else {
      var numhex = (Math.random() * 0xfffff * 1000000).toString(16);
      var hex2 = '#' + numhex.slice(0, 6);
      // return hex2;
      // console.log(hex2);
    }
  }
  document.getElementById('container').style.background = `linear-gradient(to right, ${hex1} , ${hex2} )`;
  // document.getElementById("container").setProperty("background-image", "linear-gradient(to right, " + {hex1} + ", " + {hex2});
  document.getElementById("description").innerHTML = "The code of the color is: linear-gradient( 270deg, " + hex1 + ", " + hex2 + " );";
};
