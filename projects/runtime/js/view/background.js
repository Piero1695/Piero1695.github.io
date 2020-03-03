var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        // ANIMATION VARIABLES HERE:
        var tree;
        var tree2;
        var tree3;
        var buildings = [];
        var castle;
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO: 2 - Part 2
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,'grey');
            background.addChild(backgroundFill);
            
            // TODO: 3 - Add a moon and starfield
        var moon = draw.bitmap("img/moon.png")
            moon.x = 700;
            moon.y = 0-100;
            moon.scaleX = 0.5;
            moon.scaleY = 0.5;
            background.addChild(moon);
            
            var circle;
        for(var i=0;i<40;i++) {
            circle = draw.circle(2,'lightBlue','white',2);
            circle.x = canvasWidth*Math.random();
            circle.y = groundY*Math.random();
            background.addChild(circle);
        }
        
    
            // TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
            /* for(var i=0;i<7;++i) {
                var buildingHeight = 300;
                var building = draw.rect(75,buildingHeight,'LightGray','Black',1);
                building.x = 247*i;
                building.y = groundY-buildingHeight;
                background.addChild(building);
                buildings.push(building);
                } */
                
                castle = draw.bitmap('img/space-castle.png');
                castle.x = 100;
                castle.y = 10
                background.addChild(castle);
 
            for(var i=0; i<100;++i) {
                var Ranbuild = Math.random();
                var Ranbuild2 = Math.round(Ranbuild);
                if (Ranbuild2 === 0) {
                    var building = draw.bitmap('img/column-a.png');
                }
                else {
                    var building = draw.bitmap('img/column-b.png');
                }
                building.x = 247*i;
                building.y = groundY - 478;
                background.addChild(building);
                buildings.push(building);
            }


            // TODO 4: Part 1 - Add a tree
        
        tree2 = draw.bitmap('img/space-rock-2.png');
        tree2.x = 1300;
        tree2.y = 155;
        background.addChild(tree2);
        
        tree3 = draw.bitmap('img/space-rock-3.png');
        tree3.x = 2800;
        tree3.y = 155;
        background.addChild(tree3);
        
        tree = draw.bitmap('img/space-rock.png');
        tree.x = 750;
        tree.y = 230;
        background.addChild(tree);
            
} // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree2.x = tree2.x - 1;
            if(tree2.x < -700) {
                tree2.x = canvasWidth;
            }
            
            tree.x = tree.x - 1;
            if(tree.x < -200) {
                tree.x = canvasWidth;
            }
            
            tree3.x = tree3.x - 1;
            if(tree3.x < -1500) {
                tree3.x = canvasWidth;
            }
            // TODO 5: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var eachElement = buildings[i];
                eachElement.x = eachElement.x - 0.5;
            }
            castle.x = castle.x - 0.3;
            if (castle.x < -1000) {
                castle.x = canvasWidth
            }
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
