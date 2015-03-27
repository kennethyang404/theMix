
var stage, w, h, loader;

function init() {

    canvas = document.getElementById("easel");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stage = new createjs.Stage("easel");
    
    createjs.Touch.enable(stage);
    
    w = stage.canvas.width;
    h = stage.canvas.height;
    cx = w/2;
    cy = h/2;

    manifest = [
        {src: "ufo.mp3", id: "ufo"}
    ];

    loader = new createjs.LoadQueue(false);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(manifest, true, "audio/");
}

function animation1() {
    var circle = new createjs.Shape();
    
    circle.graphics.beginFill("Crimson").drawCircle(0, 0, 50);
    circle.x = cx-200;
    circle.y = cy;

    stage.addChild(circle); 

    createjs.Tween.get(circle, {loop: false})
        .to({x: cx+200}, 1000, createjs.Ease.getPowInOut(4))
        .to({alpha: 0, y: cy-25}, 500, createjs.Ease.getPowInOut(2))
        .to({alpha: 0, y: cy+25}, 100)
        .to({alpha: 1, y: cy}, 500, createjs.Ease.getPowInOut(2))
        .to({x: cx-200}, 800, createjs.Ease.getPowInOut(2));    
}

function animation2() {}

function animation3() {}

function animation4() {}

function animation5() {}

function createAnimation() {
    animation1();
    animation2();
    animation3();
    animation4();
    animation5();
}

function handleComplete() {

    createAnimation();
    
    createjs.Ticker.setFPS(60);

    //stage.addEventListener("stagemousedown", handleJump);
    
    createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
    stage.update();
}
