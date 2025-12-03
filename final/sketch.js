let bkground;
let feather;
let logs;
let rs_font;
let featherx = -1, feathery = -1;

function preload(){
    bkground = loadImage("./assets/inventory.png"); // https://oldschool.runescape.wiki
    feather = loadImage("./assets/Feather.png"); // https://oldschool.runescape.wiki
    logs = loadImage("./assets/Logs.png"); // https://oldschool.runescape.wiki
    rs_font = loadFont("./assets/runescape_uf.ttf"); // https://www.dafont.com/runescape-uf.font

    let item_feather = {
        name: "Feather",
        image: feather,
        stack: true,
        count: 0
    }

    let item_logs = {
        name: "Logs",
        image: logs,
        stack: false
    }


    for ( let y = 0; y < 7; y++) {
        let r = [];
        for ( let x = 0; x < 4; x++) {
            let i = int( random( 0, 3 ) );
            switch (i )
            {
                case 0: r.push(item_logs); break;
                case 1: r.push(item_feather); break;
                case 2: r.push(null); break;
            }

            r.push();

            if ( i == 1 ){
                if ( featherx == -1 ) {
                    featherx = i;
                    feathery = y;
                } else {
                    r[ x ] = null;
                }
                item_feather.count += int(random( 1, 64 ) );
            }
        }

        inventory.push(r);
    }


}

let item_feather;
let item_logs;

let inventory = [];

function setup() {
    // put setup code here
    createCanvas(235, 262)
    textFont( rs_font )

}



function draw() {
    clear();

    background( 0)
    image(bkground,0,0)

    fill( 255, 255, 0 )
    textSize( 12 )

    for ( let y = 0; y < 7; y++) {
        for ( let x = 0; x < 4; x++) {
            let item = inventory[y][x];
            if ( item == null ) continue;

            image( item.image, x*(32+15)+32, y*(32+5)+4,  )
            if ( item.stack ) text( item.count, x*(32+15)+32, y*(32+5)+32)
        }
    }
}
