const robot = require('robotjs'),
    colors = require('colors'),
    config = require('./config.json');

async function start() {
    if (!config["x"] || !config["y"]) {
        console.log("Welcome to csgo-autoacceptor! Please enter in csgo window and put your mouse where you think the accept button is.".green)
        setTimeout(function() {
            var mouse = robot.getMousePos()
            console.log('On config.json file please save this information.'.blue)
            console.log(`X: ${mouse.x}`.yellow)
            console.log(`Y: ${mouse.y}`.yellow)
        }, 30000)
    }
    if (config["x"] && config["y"]) {
        console.log('Welcome to csgo-autoacceptor! Let me accept the match for you.'.green)

        function loop() {
            robot.moveMouse(Number(config["x"]), Number(config["y"]));
            robot.mouseClick();
            console.log('Moved & clicked!'.bgRed)
            setTimeout(loop, 3000)
        }
        console.log(`Waiting 10s, before starting clicking...`.yellow)
        setTimeout(function() { loop() }, 10000)
    }
}

start()