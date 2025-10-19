let pumpkins_positions = [];

function setup() {
    // put setup code here
    createCanvas(500, 500)

    background(0);
}

let center = null

function mousePressed() {
    if (center == null) {
        center = [mouseX, mouseY]
    } else {
        pumpkins_positions.push([center, [mouseX, mouseY]]);
        console.log("# of pumpkins: " + pumpkins_positions.length )
        center = null;
    }

}

function moon() {
    stroke(150)
    fill(200)
    ellipse(120, 8, 64)

    ellipse(96, 16, 4)
    ellipse(96 + 16, 24, 4)
    ellipse(96 + 24, 8, 4)
}

let theta = 0;

function pumpkins() {
    stroke(167, 134, 68)
    fill(231, 134, 68);

    theta = theta + 0.01;

    pumpkins_positions.forEach(
        pumpkin => {
        push()

        translate(pumpkin[0][0], pumpkin[0][1]);
        rotate(theta + atan2(pumpkin[1][0] - pumpkin[0][0], pumpkin[1][1] - pumpkin[0][1]))

        circle(pumpkin[1][0] - pumpkin[0][0], pumpkin[1][1] - pumpkin[0][1], 20);
        fill( 103, 134, 68 );
        stroke( 135, 134, 68 );
        arc( pumpkin[1][0] - pumpkin[0][0], pumpkin[1][1] - pumpkin[0][1] + 20, 20, 20, -3.14/2-3.14 / 12, -3.14/2+3.14 / 12);

        pop()
    }
    );
}

function draw() {
    clear();

    background( 0 );

    color( 255, 255, 0 )
    text( "Click to place pumpkin", 10, 20 )

    if ( center != null ) {
        noFill()
        stroke( 255, 255, 0 )
        circle( center[ 0 ], center[ 1 ], mag((mouseX -center[ 0 ])*2, (mouseY-center[ 1 ])*2) )
    }
    pumpkins();
    // put draw code here
}
