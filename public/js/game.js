function init() {

    socket = io();
    socket.on('animationNum', function(num){
        showAnimation(num);
    });

    canvas = document.getElementById("easel");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    stage = new createjs.Stage("easel");

    w = stage.canvas.width;
    h = stage.canvas.height;
    cx = w/2;
    cy = h/2;

    stage.addEventListener("stagemousedown", handleMouseDown);
    stage.addEventListener("stagemousemove", handleMouseMove);
    createjs.Touch.enable(stage);    
    this.document.onkeydown = handleKeyDown;

    var assetsPath = "../audio/";
    var sounds = [
        {src: "1.mp3", id: "audio1"},
        {src: "2.mp3", id: "audio2"},
        {src: "3.mp3", id: "audio3"},
        {src: "4.mp3", id: "audio4"},
        {src: "5.mp3", id: "audio5"},
        {src: "6.mp3", id: "audio6"},
        {src: "7.mp3", id: "audio7"},
        {src: "8.mp3", id: "audio8"}
    ];

    createjs.Sound.on("fileload", handleComplete);
    createjs.Sound.registerSounds(sounds, assetsPath);
}

function shape1A() {
    anim1A_c1  = new createjs.Shape();
    anim1A_c2 = new createjs.Shape();

    anim1A_c1.graphics.f("Crimson").dc(0, 0, 50);
    anim1A_c2.graphics.f("Green").dc(0, 0, 50);

    anim1A_c1.x = cx;
    anim1A_c1.y = cy;
    
    anim1A_c2.x = cx;
    anim1A_c2.y = cy;

    Animation1A_container = new createjs.Container();
    Animation1A_container.addChild(anim1A_c1, anim1A_c2);
}

function tween1A() {
    stage.addChild(Animation1A_container);

    createjs.Tween.get(anim1A_c1, {loop: false})
        .to({alpha: 1, x: cx-150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn);

    createjs.Tween.get(anim1A_c2, {loop: false})
        .to({alpha: 1, x: cx+150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn)
        .call(function(){stage.removeChild(Animation1A_container)});
}

function shape1B() {
    anim1B_c1 = new createjs.Shape();
    anim1B_c2 = new createjs.Shape();

    anim1B_c1.graphics.f("Green").dc(0, 0, 50);
    anim1B_c2.graphics.f("Crimson").dc(0, 0, 50);

    anim1B_c1.x = cx;
    anim1B_c1.y = cy;
    
    anim1B_c2.x = cx;
    anim1B_c2.y = cy;

    Animation1B_container = new createjs.Container();
    Animation1B_container.addChild(anim1B_c1, anim1B_c2);
}

function tween1B() {
    stage.addChild(Animation1B_container);

    createjs.Tween.get(anim1B_c1, {loop: false})
        .to({alpha: 1, x: cx-150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn);

    createjs.Tween.get(anim1B_c2, {loop: false})
        .to({alpha: 1, x: cx+150}, 250, createjs.Ease.quartOut)
        .to({alpha: 0.5, x: cx}, 250, createjs.Ease.quartIn)
        .call(function(){stage.removeChild(Animation1B_container)});
}

function shape2A() {
    var g = new createjs.Graphics();
    g.setStrokeStyle(0);
    g.beginFill("Crimson");
    g.beginStroke("Crimson").mt(0, -11.0/380*w).lt(42.0/380*w,-53.0/380*w).lt(w/4,0).lt(0,w/4).lt(-w/4,0).lt(-42.0/380*w,-53.0/380*w).closePath();

    anim2A_heart = new createjs.Shape(g).set({x:cx, y:cy});

    Animation2A_container = new createjs.Container();
    Animation2A_container.addChild(anim2A_heart);
}

function tween2A() {
    stage.addChild(Animation2A_container);

    createjs.Tween.get(anim2A_heart, {loop: false})
        .to({scaleX: 0.01, scaleY: 0.01}, 1)
        .to({scaleX: 1, scaleY: 1}, 250, createjs.Ease.quartOut)
        .to({scaleX: 0.001, scaleY: 0.001}, 250, createjs.Ease.quartIn)
        .call(function(){stage.removeChild(Animation2A_container)});
}

function shape2B() {
    var g = new createjs.Graphics();
    g.setStrokeStyle(0);
    g.beginFill("Orange");
    g.beginStroke("Orange").mt(0, -11.0/380*w).lt(42.0/380*w,-53.0/380*w).lt(w/4,0).lt(0,w/4).lt(-w/4,0).lt(-42.0/380*w,-53.0/380*w).closePath();

    anim2B_heart = new createjs.Shape(g).set({x:cx, y:cy});

    Animation2B_container = new createjs.Container();
    Animation2B_container.addChild(anim2B_heart);
}

function tween2B() {
    stage.addChild(Animation2B_container);
    
    createjs.Tween.get(anim2B_heart, {loop: false})
        .to({scaleX: 0.01, scaleY: 0.01}, 1)
        .to({scaleX: 1, scaleY: 1}, 250, createjs.Ease.quartOut)
        .to({scaleX: 0.001, scaleY: 0.001}, 250, createjs.Ease.quartIn)
        .call(function(){stage.removeChild(Animation2B_container)});
}

function shape3A() {
    var g1 = new createjs.Graphics();
      g1.beginFill("rgb(0, 0, 0)").drawRect(0, 0, w/40, 2*h);
    var g2 = new createjs.Graphics();
      g2.beginFill("rgb(0, 0, 0)").drawRect(cx+75, 0, w/40, 2*h);
    var g3 = new createjs.Graphics();
      g3.beginFill("rgb(0, 0, 0)").drawRect(cx-75, 0, w/40, 2*h);

    anim3A_l1 = new createjs.Shape(g1).set({x:cx, y:0});
    anim3A_l2 = new createjs.Shape(g2);
    anim3A_l3 = new createjs.Shape(g3);

    Animation3A_container = new createjs.Container();
    Animation3A_container.addChild(anim3A_l1, anim3A_l2, anim3A_l3);
}

function tween3A() {
    stage.addChild(Animation3A_container);

    createjs.Tween.get(anim3A_l1, {loop: false})
        .to({y: 0}, 0)
        .to({scaleY: 0}, 0)
        .to({scaleY: 1}, 250, createjs.Ease.linear)
        .to({y:2*h}, 250, createjs.Ease.linear);
   createjs.Tween.get(anim3A_l2, {loop: false})
        .to({y: 0}, 0)   
        .to({scaleY: 0}, 0)
        .to({scaleY: 1}, 250, createjs.Ease.linear)
        .to({y:2*h}, 250, createjs.Ease.linear);
   createjs.Tween.get(anim3A_l3, {loop: false})
        .to({y: 0}, 0)
        .to({scaleY: 0}, 0)
        .to({scaleY: 1}, 250, createjs.Ease.linear)
        .to({y:2*h}, 250, createjs.Ease.linear)
        .call(function(){stage.removeChild(Animation3A_container)});    
}

function shape3B() {
    var g1 = new createjs.Graphics();
      g1.beginFill("rgb(0, 0, 0)").drawRect(0, 0, w/40, 2*h);
    var g2 = new createjs.Graphics();
      g2.beginFill("rgb(0, 0, 0)").drawRect(cx+75, 0, w/40, 2*h);
    var g3 = new createjs.Graphics();
      g3.beginFill("rgb(0, 0, 0)").drawRect(cx-75, 0, w/40, 2*h);

    anim3B_l1 = new createjs.Shape(g1).set({x:cx, y:h});
    anim3B_l2 = new createjs.Shape(g2).set({x:+75, y:h});
    anim3B_l3 = new createjs.Shape(g3).set({x:-75, y:h});

    Animation3B_container = new createjs.Container();
    Animation3B_container.addChild(anim3B_l1, anim3B_l2, anim3B_l3);
}

function tween3B() {
    stage.addChild(Animation3B_container);
    
    createjs.Tween.get(anim3B_l1, {loop: false})
        .to({y: h}, 0)
        .to({scaleY: 0}, 0)
        .to({scaleY: -1}, 250, createjs.Ease.linear)
        .to({y:0}, 250, createjs.Ease.linear);
   createjs.Tween.get(anim3B_l2, {loop: false})
        .to({y: h}, 0)
        .to({scaleY: 0}, 0)
        .to({scaleY: -1}, 250, createjs.Ease.linear)
        .to({y:0}, 250, createjs.Ease.linear);
   createjs.Tween.get(anim3B_l3, {loop: false})
        .to({y: h}, 0)
        .to({scaleY: 0}, 0)
        .to({scaleY: -1}, 250, createjs.Ease.linear)
        .to({y:0}, 250, createjs.Ease.linear)
        .call(function(){stage.removeChild(Animation3B_container)});
}

function shape4A() {
    var g1 = new createjs.Graphics();
        g1.beginFill("rgb(255, 128, 0)").drawRect(0,0, w/40, 2*h);
    
    anim4A_l1 = new createjs.Shape(g1).set({x:0, y:0});    

    Animation4A_container = new createjs.Container();
    Animation4A_container.addChild(anim4A_l1);
}

function tween4A() {
    stage.addChild(Animation4A_container);

    createjs.Tween.get(anim4A_l1, {loop: false})
        .to({x:0, y:0}, 0)
        .to({scaleY: 0}, 0)   
        .to({rotation: -45}, 0)
        .to({scaleY: 1}, 300, createjs.Ease.linear)
        .to({x:2*w, y:2*h}, 300, createjs.Ease.linear)
        .call(function(){stage.removeChild(Animation4A_container)});
}

function shape4B() {
    var g1 = new createjs.Graphics();
        g1.beginFill("rgb(255, 128, 0)").drawRect(0,0, w/40, 2*h);
    
    anim4B_l1 = new createjs.Shape(g1).set({x:w, y:0});    

    Animation4B_container = new createjs.Container();
    Animation4B_container.addChild(anim4B_l1);
}

function tween4B() {
    stage.addChild(Animation4B_container);    

    createjs.Tween.get(anim4B_l1, {loop: false})
        .to({x:w, y:0}, 0)
        .to({scaleY: 0}, 0)   
        .to({rotation: 225}, 0)
        .to({scaleY: 1}, 300, createjs.Ease.linear)
        .to({x:-w, y:2*h}, 300, createjs.Ease.linear)
        .call(function(){stage.removeChild(Animation4B_container)});   
}

function shape5A() {
    anim5A_circles = [];
    Animation5A_container = new createjs.Container();

    for (i = 0; i < 10; i++) {
        var c = new createjs.Shape();
        c.graphics.f("White").dc(0, 0, 10);
        c.x = cx/2;
        c.y = 0;
        anim5A_circles.push(c);
        Animation5A_container.addChild(c);
    }
}

function tween5A() {
    stage.addChild(Animation5A_container);

    for (j = 0; j < 10; j++) {
        var x1 = 1/4*w;
        var y1 = 0;
        var x2 = w;
        var y2 = 3/4*h;
        var x3 = w/2;
        var y3 = h;
        var k1 = (y2-y1)/(x2-x1);
        var k2 = (y3-y1)/(x3-x1);
        var random_x = Math.random() * (w - x1) * 0.9 + x1;
        var y_lower_bound = k1 * (random_x - x1) + y1;
        if (random_x >= w/2) {
            var y_upper_bound = h*0.9;
        } else {
            var y_upper_bound = (k2 * (x3 - (random_x - x1)) + y1) * 0.8;
        }
        var random_y = Math.random() * (y_upper_bound - y_lower_bound) + y_lower_bound;
        createjs.Tween.get(anim5A_circles[j], {loop: false})
            .to({x: x1, y: y1}, 0)
            .to({x: random_x, y: random_y}, 250, createjs.Ease.quartInOut)
            .wait(250)
            .to({x:x1,y:y1},0)
            .call(function(){stage.removeChild(Animation5A_container)});
    }
}

function shape5B() {
    anim5B_circles = [];
    Animation5B_container = new createjs.Container();

    for (i = 0; i < 10; i++)
    {
        var c = new createjs.Shape();
        c.graphics.f("White").dc(0, 0, 10);
        c.x = 3/4*w;
        c.y = 0;
        anim5B_circles.push(c);
        Animation5B_container.addChild(c);
    }
}

function tween5B() {
    stage.addChild(Animation5B_container);

    for (j = 0; j < 10; j++)
    {
        var x1 = 3/4*w;
        var y1 = 0;
        var x2 = 0.2*w;
        var y2 = 3/4*h;
        var x3 = w/2;
        var y3 = h;
        var k1 = (y2-y1)/(x1-x2);
        var k2 = (y3-y1)/(x1-x3);
        var random_x = Math.random() * (x1-0.1*w) + 0.1*w;
        var y_lower_bound = k1 * (x1 - random_x) + y1;
        if (random_x >= w/2)
        {
            var y_upper_bound = k2 * (x1 - random_x) + y1;
        }
        else
        {
            var y_upper_bound = h * 0.9;
        }
        var random_y = Math.random() * (y_upper_bound - y_lower_bound) + y_lower_bound;
        createjs.Tween.get(anim5B_circles[j], {loop: false})
            .to({x: x1, y: y1}, 0)
            .to({x: random_x, y: random_y}, 250, createjs.Ease.quartInOut)
            .wait(250)
            .to({x: x1, y: y1}, 0)
            .call(function(){stage.removeChild(Animation5B_container)});
    }    
}

function shape6A() {
    anim6A_circles = [];
    Animation6A_container = new createjs.Container();
    var colors = ["Black", "White", "CornflowerBlue", "HotPink", "OrangeRed", "SpringGreen", "Sienna"];

    for (i = 0; i < 10; i++) {
        var c = new createjs.Shape();
        var k = Math.round(Math.random() * 6);
        c.graphics.ss(5).s(colors[k]).dc(0, 0, 15);
        c.x = cx/2;
        c.y = 0;
        anim6A_circles.push(c);
        Animation6A_container.addChild(c);
    }
}

function tween6A() {
    stage.addChild(Animation6A_container);

    for (j = 0; j < 10; j++) {
        var x1 = 1/4*w;
        var y1 = 0;
        var x2 = w;
        var y2 = 3/4*h;
        var x3 = w/2;
        var y3 = h;
        var k1 = (y2-y1)/(x2-x1);
        var k2 = (y3-y1)/(x3-x1);
        var random_x = Math.random() * (w - x1) * 0.9 + x1;
        var y_lower_bound = k1 * (random_x - x1) + y1;
        if (random_x >= w/2) {
            var y_upper_bound = h*0.9;
        } else {
            var y_upper_bound = (k2 * (x3 - (random_x - x1)) + y1) * 0.8;
        }
        var random_y = Math.random() * (y_upper_bound - y_lower_bound) + y_lower_bound;
        createjs.Tween.get(anim6A_circles[j], {loop: false})
            .to({x: x1, y: y1}, 0)
            .to({x: random_x, y: random_y}, 250, createjs.Ease.quartInOut)
            .wait(250)
            .to({x:x1,y:y1},0)
            .call(function(){stage.removeChild(Animation6A_container)});
    }
}

function shape6B() {
    anim6B_circles = [];
    Animation6B_container = new createjs.Container();
    var colors = ["Black", "White", "CornflowerBlue", "HotPink", "OrangeRed", "SpringGreen", "Sienna"];

    for (i = 0; i < 10; i++)
    {
        var c = new createjs.Shape();
        var k = Math.round(Math.random() * 6);
        c.graphics.ss(5).s(colors[k]).dc(0, 0, 15);
        c.x = 3/4*w;
        c.y = 0;
        anim6B_circles.push(c);
        Animation6B_container.addChild(c);
    }
}

function tween6B() {
    stage.addChild(Animation6B_container);

    for (j = 0; j < 10; j++)
    {
        var x1 = 3/4*w;
        var y1 = 0;
        var x2 = 0.2*w;
        var y2 = 3/4*h;
        var x3 = w/2;
        var y3 = h;
        var k1 = (y2-y1)/(x1-x2);
        var k2 = (y3-y1)/(x1-x3);
        var random_x = Math.random() * (x1-0.1*w) + 0.1*w;
        var y_lower_bound = k1 * (x1 - random_x) + y1;
        if (random_x >= w/2)
        {
            var y_upper_bound = k2 * (x1 - random_x) + y1;
        }
        else
        {
            var y_upper_bound = h * 0.9;
        }
        var random_y = Math.random() * (y_upper_bound - y_lower_bound) + y_lower_bound;
        createjs.Tween.get(anim6B_circles[j], {loop: false})
            .to({x: x1, y: y1}, 0)
            .to({x: random_x, y: random_y}, 250, createjs.Ease.quartInOut)
            .wait(250)
            .to({x: x1, y: y1}, 0)
            .call(function(){stage.removeChild(Animation6B_container)});
    }    
}

function shape7A() {
    var graphics = new createjs.Graphics();
    graphics.beginFill("rgb(62, 86, 255)").bezierCurveTo(0, 0, 0, h/3, w/4, h/4);
    graphics.bezierCurveTo(3*w/4, 0, w/2, h/3, w, h/4);
    graphics.bezierCurveTo(3*h, w/2, h, h/2, w, 0.0);
    graphics.bezierCurveTo(w/3, 0, -h, -h, 1, w);;
    
    anim7A_polygon = new createjs.Shape(graphics);

    Animation7A_container = new createjs.Container();
    Animation7A_container.addChild(anim7A_polygon);
}

function tween7A() {
    stage.addChild(Animation7A_container);    
    
    createjs.Tween.get(anim7A_polygon, {loop: true})
        .to({x:0, y:0})
        .to({scaleX: 2, scaleY: 2, rotation: 480}, 2000, createjs.Ease.quartIn)
        .call(function(){stage.removeChild(Animation7A_container)});
}

function shape7B() {
    var graphics = new createjs.Graphics();
    graphics.beginFill("rgb(62, 86, 255)").bezierCurveTo(0, 0, 0, h/3, w/4, h/4);
    graphics.bezierCurveTo(3*w/4, 0, w/2, h/3, w, h/4);
    graphics.bezierCurveTo(3*h, w/2, h, h/2, w, 0.0);
    graphics.bezierCurveTo(w/3, 0, -h, -h, 0, w);;
    
    anim7B_polygon = new createjs.Shape(graphics);

    Animation7B_container = new createjs.Container();
    Animation7B_container.addChild(anim7B_polygon);
}

function tween7B() {
    stage.addChild(Animation7B_container);    
    
    createjs.Tween.get(anim7B_polygon, {loop: true})
        .to({x:0, y:0})
        .to({scaleX: 2, scaleY: 2, rotation: -480}, 2000, createjs.Ease.quartIn)
        .call(function(){stage.removeChild(Animation7B_container)});
}

function shape8A()
{
    var g = new createjs.Graphics();
    g.f("#3E56FF");
    g.s("#3E56FF").mt(-w/3*2,0).lt(-w/3*2,h/4).lt(0,h).lt(w/3*2,h/4).lt(w/3*2,-h).lt(-w/3*2,-h).lt(-w/3*2,0).closePath();

    anim8A_s = new createjs.Shape(g).set({x:w/2, y:-4/5*h});

    Animation8A_container = new createjs.Container();
    Animation8A_container.addChild(anim8A_s);
}

function tween8A() {
    stage.addChild(Animation8A_container); 

    createjs.Tween.get(anim8A_s, {loop:false})
        .to({y:0, rotation: -25}, 800, createjs.Ease.quartInOut)
        .to({y:-3/4*h, rotation: -50}, 900, createjs.Ease.quartInOut)
        .to({x:w/2, y:-4/5*h, rotation: 0}, 0)
        .call(function(){stage.removeChild(Animation8A_container)});
}

function shape8B()
{
    var g = new createjs.Graphics();
    g.f("#FFBEB4");
    g.s("#FFBEB4").mt(-w/3*2,0).lt(-w/3*2,h/4).lt(0,h).lt(w/3*2,h/4).lt(w/3*2,-h).lt(-w/3*2,-h).lt(-w/3*2,0).closePath();

    anim8B_s = new createjs.Shape(g).set({x:w/2, y:-4/5*h});

    Animation8B_container = new createjs.Container();
    Animation8B_container.addChild(anim8B_s);
}

function tween8B() {
    stage.addChild(Animation8B_container);

    createjs.Tween.get(anim8B_s, {loop:false})
        .to({y:0, rotation: -25}, 800, createjs.Ease.quartInOut)
        .to({y:-3/4*h, rotation: -50}, 900, createjs.Ease.quartInOut)
        .to({x:w/2, y:-4/5*h, rotation: 0}, 0)
        .call(function(){stage.removeChild(Animation8B_container)});
}

function shapebutton() {
    button = new createjs.Shape();
    button.graphics.f("Gray").dr(0, 0, w/2, h/4);
    button.visible = false;
    stage.addChild(button);
}

function tweenbutton() {
    createjs.Tween.get(button, {loop:false})
        .to({alpha: 1, visible: true}, 0)
        .to({alpha: 0, visible: false}, 1000);
}

function createAnimation() {
    shape1A();
    shape1B();
    shape2A();
    shape2B();
    shape3A();
    shape3B();
    shape4A();
    shape4B();
    shape5A();
    shape5B();
    shape6A();
    shape6B();
    shape7A();
    shape7B();
    shape8A();
    shape8B();
    shapebutton();
}

function handleKeyDown(event) {
    switch (event.keyCode) {
        case 81:  
            // q
            console.log("q pressed");
            socket.emit('animationNum', 1);
            break;

        case 87:
            // w
            console.log("w pressed");
            socket.emit('animationNum', 2);
            break;

        case 69:
            // e
            console.log("e pressed");
            socket.emit('animationNum', 3);
            break;

        case 82:
            // r
            console.log("r pressed");
            socket.emit('animationNum', 4);
            break;

        case 65:  
            // a
            console.log("a pressed");
            socket.emit('animationNum', 5);
            break;

        case 83:
            // s
            console.log("s pressed");
            socket.emit('animationNum', 6);
            break;

        case 68:
            // d
            console.log("d pressed");
            socket.emit('animationNum', 7);
            break;

        case 70:
            // f
            console.log("f pressed");
            socket.emit('animationNum', 8);
            break;
    }
}

function showAnimation(num) {
    var mode = Math.random() < 0.5;
    switch (num) {
        case 1:
            if (mode) {
                tween1A();
            } else {
                tween1B();
            }
            break;

        case 2:
            if (mode) {
                tween2A();
            } else {
                tween2B();
            }
            break;

        case 3:
            if (mode) {
                tween3A();
            } else {
                tween3B();
            }
            break;   
        case 4:
            if (mode) {
                tween4A();
            } else {
                tween4B();
            }
            break;
        case 5:
            if (mode) {
                tween5A();
            } else {
                tween5B();
            }
            break; 
        case 6:
            if (mode) {
                tween6A();
            } else {
                tween6B();
            }
            break;
        case 7:
            if (mode) {
                tween7A();
            } else {
                tween7B();
            }
            break;
        case 8:
            if (mode) {
                tween8A();
            } else {
                tween8B();
            }
            break;           
    }
    createjs.Sound.play("audio"+num);
}

function handleMouseDown(event) {
    touchnum = Math.floor(stage.mouseY/(h/4)) * 2 + Math.floor(stage.mouseX/(w/2)) + 1;
    socket.emit('animationNum', touchnum);
    button.x = Math.floor(stage.mouseX/(w/2))*(w/2);
    button.y = Math.floor(stage.mouseY/(h/4))*(h/4);
    
    tweenbutton();
}

function handleMouseMove(event){
    if (movenum != (Math.floor(stage.mouseY/(h/4)) * 2 + Math.floor(stage.mouseX/(w/2)) + 1)) {
        movenum = Math.floor(stage.mouseY/(h/4)) * 2 + Math.floor(stage.mouseX/(w/2)) + 1;
        socket.emit('animationNum', movenum);
        button.x = Math.floor(stage.mouseX/(w/2))*(w/2);
        button.y = Math.floor(stage.mouseY/(h/4))*(h/4);
        tweenbutton();
    }
}

function handleComplete() {
    createAnimation();
    
    createjs.Ticker.setFPS(60);

    createjs.Ticker.addEventListener("tick", tick);
}

function tick(event) {
    stage.update();
}
