function setup() {
createCanvas(400, 400);
background(50 );
}

theta = 0;

function draw() {
    clear()

    background(50 );

    fill( 150 );
    circle( 200, 200, 100 ); // POINT

    theta = theta + 0.01;
    if ( theta > TWO_PI ) {
        theta = 0;
    }

    push()

    // ASYMMETRY ( SHIP ON ONE SIDE )
    // SHAPE ( ARC = EXHAUST )
    translate( 200, 200 );
    rotate( -theta );

    stroke( 200, 200, 0 )
    fill( 200, 200, 0 )
    arc( 150+15/2.0, 30 + 10, 15, 30, - radians( -90+ 10 ), - radians( -90-10 ) )

    fill( 15 );
    noStroke()
    triangle( 150 + 15 / 2.0, 0+25, 150, 25+15, 150 + 15, 25 + 15 )

    fill( 255 )
    quad( 150, 0, 150 + 15, 0, 150+ 15, 30, 150, 30 )

    fill( 0, 200, 200, 100 )
    circle( 157.5, 0 + 10, 8)

    fill( 255, 0, 0 )
    triangle( 150, 0, 150 + 15, 0, 150 + 15 / 2.0, -15  )

    pop()
}
