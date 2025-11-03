let turkey=null;
let knifer=null;
let positions = [];
let kniferX = 0;
let kniferY = 0;
let past = performance.now();

function preload(){
    turkey = loadImage("./assets/turkey.jpg"); // https://www.istockphoto.com/illustrations/funny-turkey-clipart-pictures
    knifer = loadImage("./assets/knifeman.jpg"); // https://www.google.com/imgres?q=jason%20voorhees%20knife%20running%20to%20the%20right&imgurl=https%3A%2F%2Fwww.shutterstock.com%2Fshutterstock%2Fphotos%2F2520764571%2Fdisplay_1500%2Fstock-vector-cute-jason-murderer-cartoon-character-running-with-bloody-knife-vector-illustration-flat-design-2520764571.jpg&imgrefurl=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fscary-man-running-knife&docid=0oErL3aInHISVM&tbnid=NlgG4jfevD-6WM&vet=12ahUKEwj5zLrQ6s6QAxXjx8kDHfEdGXwQM3oECCYQAA..i&w=1402&h=1600&hcb=2&ved=2ahUKEwj5zLrQ6s6QAxXjx8kDHfEdGXwQM3oECCYQAA
}

function setup() {
    // put setup code here
    createCanvas(500, 500)
}


function draw() {
    clear();

    positions.push([mouseX,mouseY]);

    scale(0.25,0.25)
    image(turkey,mouseX*4 - turkey.width / 2,mouseY*4 - turkey.height / 2)

    let current = performance.now();
    let delta = (current - past);
    past = current;

    // Calculate direction to turkey
    let targetX = mouseX * 4;
    let targetY = mouseY * 4;
    let dx = targetX - kniferX;
    let dy = targetY - kniferY;
    let distance = sqrt(dx * dx + dy * dy);

    // Move knifer towards turkey at 3 px/sec
    if (distance > 0) {
        let speed = 300 * (delta / 1000); // 3 pixels per second
        let moveDistance = min(speed, distance);
        kniferX += (dx / distance) * moveDistance;
        kniferY += (dy / distance) * moveDistance;
    }

    scale( .1, .1 )
    image(knifer, kniferX * 10 - knifer.width / 2 , kniferY * 10- knifer.height / 2)

    scale( 10, 10 )

    textSize( 50 )
    textFont( "Times New Roman" )
    stroke( 0 )
    fill( 255 )
    scale( 4, 4 )
    textAlign( CENTER )
    text( "RUN!", 10, 0, 380, 50  )
}
