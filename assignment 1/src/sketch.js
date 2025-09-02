function setup() {
  // put setup code here
    createCanvas( 128, 128 )

    background( 0 );
}

function building() {
    noStroke();
    fill( 50 );
    rect( 0, height - 96, 32, 96 );

    fill( 150 )
    for ( let x = 0; x < 4; x++ ) {
        for ( let y= 0; y < 4; y++ ) {
            rect(4 + (7 * x), height - 92 + ( 16 * y ) , 4, 12)
        }
    }
}

function moon() {
    stroke( 150 )
    fill( 200 )
    ellipse( 120, 8, 64 )

    fill( 100 )
    strokeWeight( 8 )
    strokeCap( ROUND )

    ellipse( 96, 16, 4 )
    ellipse( 96 + 16 , 24, 4 )
    ellipse( 96 + 24 , 8, 4 )
}

function draw() {
    building();
    moon();
    // put draw code here
}
