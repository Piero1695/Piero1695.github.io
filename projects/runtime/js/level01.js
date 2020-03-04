var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY - 50 },
                { "type": "sawblade", "x": 600, "y": groundY - 280},
                { "type": "sawblade", "x": 900, "y": groundY - 120},
                { "type": "sawblade", "x": 1100, "y": groundY - 170}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
        var obstacleImage = draw.bitmap('img/robot.gif');
        sawBladeHitZone.addChild(obstacleImage);
        
        obstacleImage.x = -30;
        obstacleImage.y = -25;
        
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 25;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
        
            var obstacleImage = draw.bitmap('img/robot.gif');
            sawBladeHitZone.addChild(obstacleImage);
            
        }
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
           var gameItemObject = levelData.gameItems[i];
            if (gameItemObject.type === 'sawblade') {
                createSawBlade(gameItemObject.x, gameItemObject.y);
            }
        }
;
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
