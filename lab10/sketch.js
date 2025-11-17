let gui;
let b;

/**
 * p5.touchgui is a library used to create a GUI for p5.js sketches.
 * https://github.com/L05/p5.touchgui
 */

function setup() {
    // put setup code here
    createCanvas(500, 500)

    gui = p5.prototype.createGui();  // 1
    b= p5.prototype.createButton('test', 50, 50 ); // 2
}


function draw() {
    clear();

    if ( b.isPressed ) {
        background(0);
    }else{
        background(255);
    }

    p5.prototype.drawGui(); // 3
}
