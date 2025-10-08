let ball_diameter = 10;
let ball_x_pos;
let ball_y_pos;
let ball_dx_velocity;
let ball_dy_velocity;

function setup() {
    reset();
    createCanvas(400, 400);
}

function reset() {
    ball_x_pos = random(0 + ball_diameter / 2, 400 - ball_diameter / 2);
    ball_y_pos = random(0 + ball_diameter / 2, 400 - ball_diameter / 2);
    ball_dx_velocity = random(-1, 0) * 10;
    ball_dy_velocity = random(-1, 1) * 10;
}

function draw() {
    clear();

    text( "ball resets when it hits top of screen", 0, 200 );

    if (ball_x_pos < 0 || ball_x_pos > width) {
        ball_dx_velocity = ball_dx_velocity * -1;
    }

    if (ball_y_pos > height) {
        ball_dy_velocity = ball_dy_velocity * -1;
    }

    if (ball_y_pos < 0) {
        reset();
    }

    fill(0)
    ellipse(ball_x_pos, ball_y_pos, ball_diameter)
    ball_x_pos = ball_x_pos + ball_dx_velocity;
    ball_y_pos = ball_y_pos + ball_dy_velocity;
}
