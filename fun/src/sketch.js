function setup() {
  // put setup code here
    createCanvas( 128, 128 )

    background( 0 );
}

let time = 0

function draw() {
    clear()
    ellipse( 64, 64, 32, 32 )

    time = time + deltaTime * 0.001

    let x = sin( time )

    let y = cos( time )

    ellipse( x * 34 + 64, y * 34 + 64, 8 )
}
