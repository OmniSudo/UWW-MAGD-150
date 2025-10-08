function setup() {
createCanvas(400, 400);
background(50 );
}

let theta = 0;
let color_mul = 1;

function mouseClicked () {
    color_mul *= -1;
}



function draw() {
    clear()

    background(50 );

    fill( 150 );
    circle( 200, 200, 100 ); // POINT

    color( 255 )
    text( "Press a key to move the ship\nClick the mouse to change cone color", 10, 20 )

    if ( keyIsPressed ) {
        theta = theta + 0.01;
    }

    if ( theta > TWO_PI ) {
        theta = theta - TWO_PI;
    } else if ( theta < 0 ) {
        theta = TWO_PI + theta;
    }

    push()

    // ASYMMETRY ( SHIP ON ONE SIDE )
    // SHAPE ( ARC = EXHAUST )
    translate( 200, 200 );
    rotate( -theta );

    push()
        stroke(200, 200, 0)
        fill(200, 200, 0)
        arc(150 + 15 / 2.0, 30 + 10, 15, 30, -radians(-90 + 10), -radians(-90 - 10))

        fill(15);
        noStroke()
        triangle(150 + 15 / 2.0, 0 + 25, 150, 25 + 15, 150 + 15, 25 + 15)

        fill(255)
        quad(150, 0, 150 + 15, 0, 150 + 15, 30, 150, 30)

        fill(0, 200, 200, 100)
        circle(157.5, 0 + 10, 8)

        fill(255 + ( color_mul - 1 )/ 2 * 255, 255 - ( color_mul + 1 )/ 2 * 255, 0)
        triangle(150, 0, 150 + 15, 0, 150 + 15 / 2.0, -15)
    pop()
    pop()
}
