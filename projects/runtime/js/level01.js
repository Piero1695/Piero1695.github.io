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
                { "type": "sawblade", "x": 400, "y": groundY - 30 },
                { "type": "sawblade", "x": 600, "y": groundY - 280},
                { "type": "sawblade", "x": 900, "y": groundY - 120},
                { "type": "sawblade", "x": 1100, "y": groundY - 170},
                { "type": "reward", "x": 2000, "y": groundY - 60},
                { "type": "enemy", "x": 1900, "y": groundY - 20},
                { "type": "enemy", "x": 3000, "y": groundY - 120},
                { "type": "enemy", "x": 2500, "y": groundY - 50}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
        
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);
        
            var obstacleImage = draw.bitmap('img/robot.gif');
            obstacleImage.x = -32;
            obstacleImage.y = -30;
            sawBladeHitZone.addChild(obstacleImage);
            

            
        }
        
        for (var i = 0; i < levelData.gameItems.length; i++) {
           var gameItemObject = levelData.gameItems[i];
            if (gameItemObject.type === 'sawblade') {
                createSawBlade(gameItemObject.x, gameItemObject.y);
            }
             if (gameItemObject.type === 'reward') {
             createReward(gameItemObject.x, gameItemObject.y);
            }
             if (gameItemObject.type === 'enemy') {
                 createEnemy(gameItemObject.x, gameItemObject.y);
             }
        }
        
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.bitmap('img/robox.png');
            redSquare.x = -44;
            redSquare.y = -44;
            enemy.addChild(redSquare);
            
            enemy.x = 750;
            enemy.y = groundY-50;
            
            game.addGameItem(enemy);
            
            enemy.velocityX = -2;
            enemy.rotationalVelocity = 1.46;
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-25);
                enemy.fadeOut();
            };
            
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.fadeOut();
            };
            
        function createEnemy(x, y) {
            
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.bitmap('img/robox.png');
            redSquare.x = -44;
            redSquare.y = -44;
            enemy.addChild(redSquare);
            
            enemy.x = x;
            enemy.y = y;
            
            game.addGameItem(enemy);
            
            enemy.velocityX = -5;
            enemy.rotationalVelocity = 2.5;
            
            enemy.onPlayerCollision = function() {
                game.changeIntegrity(-15);
                enemy.fadeOut();
            };
            
            enemy.onProjectileCollision = function() {
                game.increaseScore(100);
                enemy.fadeOut();
            };
            }
            
        function createReward(x, y) {
            
            var reward =  game.createGameItem('reward',25);
            var redSquare = draw.bitmap('img/reward.png');
            redSquare.x = -46;
            redSquare.y = -29;
            reward.addChild(redSquare);
            
            reward.x = x;
            reward.y = y;
            
            game.addGameItem(reward);
            
            reward.velocityX = -2;
            reward.rotationalVelocity = 2;
            
            reward.onPlayerCollision = function() {
                game.changeIntegrity(15);
                game.increaseScore(100);
                reward.fadeOut();
            };
            
        };
        
        // DO NOT EDIT CODE BELOW HERE
    };
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
