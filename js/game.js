
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

function animation1A() {
    var c1  = new createjs.Shape();
    var c2 = new createjs.Shape();

    c1.graphics.f("Crimson").dc(0, 0, 50);
    c2.graphics.f("Green").dc(0, 0, 50);

    c1.x = cx;
    c1.y = cy;
    
    c2.x = cx;
    c2.y = cy;

    var Animation1A_container = new createjs.Container();
    Animation1A_container.addChild(c1, c2);

    createjs.Tween.get(c1, {loop: true})
        .to({alpha: 1, x: cx-150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn);

    createjs.Tween.get(c2, {loop: true})
        .to({alpha: 1, x: cx+150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn);
}

function animation1B() {
    var c1  = new createjs.Shape();
    var c2 = new createjs.Shape();

    c1.graphics.f("Green").dc(0, 0, 50);
    c2.graphics.f("Crimson").dc(0, 0, 50);

    c1.x = cx;
    c1.y = cy;
    
    c2.x = cx;
    c2.y = cy;

    var Animation1B_container = new createjs.Container();
    Animation1B_container.addChild(c1, c2);

    createjs.Tween.get(c1, {loop: true})
        .to({alpha: 1, x: cx-150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn);

    createjs.Tween.get(c2, {loop: true})
        .to({alpha: 1, x: cx+150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn);
}

function animation2A() {
    var g = new createjs.Graphics();
    g.setStrokeStyle(0);
    g.beginFill("Crimson");
    g.beginStroke("Crimson").mt(0, -11.0/380*w).lt(42.0/380*w,-53.0/380*w).lt(w/4,0).lt(0,w/4).lt(-w/4,0).lt(-42.0/380*w,-53.0/380*w).closePath();

    var heart = new createjs.Shape(g).set({x:cx, y:cy});

    var Animation2A_container = new createjs.Container();
    Animation2A_container.addChild(heart);

    createjs.Tween.get(heart, {loop: true})
        .to({scaleX: 0.01, scaleY: 0.01}, 1)
        .to({scaleX: 1, scaleY: 1}, 250, createjs.Ease.quartOut)
        .to({scaleX: 0.001, scaleY: 0.001}, 250, createjs.Ease.quartIn);
}


function animation2B() {
    var g = new createjs.Graphics();
    g.setStrokeStyle(0);
    g.beginFill("orange");
    g.beginStroke("orange").mt(0, -11.0/380*w).lt(42.0/380*w,-53.0/380*w).lt(w/4,0).lt(0,w/4).lt(-w/4,0).lt(-42.0/380*w,-53.0/380*w).closePath();

    var heart = new createjs.Shape(g).set({x:cx, y:cy});

    var Animation2A_container = new createjs.Container();
    Animation2A_container.addChild(heart);
    stage.addChild(Animation2A_container);

    createjs.Tween.get(heart, {loop: true})
        .to({scaleX: 0.01, scaleY: 0.01}, 1)
        .to({scaleX: 1, scaleY: 1}, 250, createjs.Ease.quartOut)
        .to({scaleX: 0.001, scaleY: 0.001}, 250, createjs.Ease.quartIn);
}

function createAnimation() {
    animation1A();
    animation1B();
    animation2A();
    animation2B();
//    animation3A();
//    animation3B();
//    animation4A();
//    animation4B();
//    animation5A();
//    animation5B();
//    animation6A();
//    animation6B();
//    animation7A();
//    animation7B();
//    animation8A();
//    animation8B();
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
