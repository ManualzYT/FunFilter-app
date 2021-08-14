function preload(){

}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
}

function draw(){
    circle(100,100,50);
}

function take_snapshot(){
    save('Manvel.jpg');
}