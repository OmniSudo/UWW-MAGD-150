let words = [];
let words2 = [];
let rand1, rand2, rand12;

function setup() {
    // put setup code here
    createCanvas(500, 500)

    for (let i = 0; i < 5; i++) {
        words.push(char(random(97,123)));
    }

    console.log(words)

    for (let i = 0; i < 5; i++) {
        words2.push(char(random(97,123)));
    }

    console.log(words2)

    background(0);
}

function mousePressed() {
    if (mouseButton==RIGHT) {
        if (words.length == 0) return;
        let word=words.pop();
        words2.push(word);
    }else {
            letter = char(random(97,123))
            words.push(letter);
    }
    rand1 = random(words);
    rand2 = random(words2);
    wordscombined = words.concat(words2);
    console.log(wordscombined)
    rand12 = random(wordscombined);
}

function printwords() {
    text("array 1:"+words.join(" "), 10, 30)
    text("array 2:"+words2.join(" "), 10, 40)
    text("random 1:"+rand1, 10, 50)
    text("random 2:"+rand2, 10, 60)
    text("random 1&2:"+rand12, 10, 70)


}

function draw() {
    clear();

    color( 255 );
    text( "Click to place a letter", 10, 20 );

    printwords();
    // put draw code here
}
