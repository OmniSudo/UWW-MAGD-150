function setup() {
createCanvas(400, 400);
background(50 );
frameRate( 60 );
colorMode(RGB, 1.0);
}

function draw() {
    // d = delta
    let dX = (mouseX - pmouseX);
    let dY = (mouseY - pmouseY);

    // a = abs
    let aX = abs(dX) / height;
    let aY = abs(dY) / width;

    if (dX != 0 || dY != 0) {
        fill( 0 )
        rect( 0, height / 2 - 5, width, 10 )

        fill(aX * 10, 0, 0)
        rect(width / 2, height / 2 - 5, dX * 10, 10)

        fill( 0 )
        rect(  width / 2 - 5, 0, 10, height )

        fill(0, aY * 10, 0)
        rect(width / 2 - 5, height / 2, 10, dY * 10 )
    }
}
