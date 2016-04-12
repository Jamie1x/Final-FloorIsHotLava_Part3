var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * @module scenes
 */
var scenes;
(function (scenes) {
    /**
     * This class instantiates the game win scene object
     *
     * @class Winner
     * @extends scenes.Scene
     */
    var Winner = (function (_super) {
        __extends(Winner, _super);
        /**
         * Empty Contructor
         *
         * @constructor
         */
        function Winner() {
            _super.call(this);
            this._initialize();
            this.start();
        }
        Winner.prototype._setupCanvas = function () {
            canvas.style.width = "100%";
            canvas.setAttribute("height", config.Screen.HEIGHT.toString());
            canvas.style.backgroundColor = "#000000";
        };
        /**
         * This method sets up default values for class member variables
         * and objects
         *
         * @method _initialize
         * @return void
         */
        Winner.prototype._initialize = function () {
            // Create to HTMLElements
            this._blocker = document.getElementById("blocker");
            this._blocker.style.display = "none";
            // setup canvas for menu scene
            this._setupCanvas();
            // setup a stage on the canvas
            this._stage = new createjs.Stage(canvas);
            this._stage.enableMouseOver(20);
        };
        /**
         * The start method is the main method for the scene class
         *
         * @method start
         * @return void
         */
        Winner.prototype.start = function () {
            this._youWinLabel = new createjs.Text("YOU WIN", "80px Consolas", "#ff0000");
            this._youWinLabel.regX = this._youWinLabel.getMeasuredWidth() * 0.5;
            this._youWinLabel.regY = this._youWinLabel.getMeasuredLineHeight() * 0.5;
            this._youWinLabel.x = config.Screen.WIDTH * 0.5;
            this._youWinLabel.y = config.Screen.HEIGHT * 0.5;
            this._stage.addChild(this._youWinLabel);
            this._restartButton = new createjs.Bitmap(assets.getResult("RestartButton"));
            this._restartButton.regX = this._restartButton.getBounds().width * 0.5;
            this._restartButton.regY = this._restartButton.getBounds().height * 0.5;
            this._restartButton.x = config.Screen.WIDTH * 0.5;
            this._restartButton.y = (config.Screen.HEIGHT * 0.5) + 100;
            this._stage.addChild(this._restartButton);
            this._restartButton.on("mouseover", function (event) {
                event.target.alpha = 0.7;
            });
            this._restartButton.on("mouseout", function (event) {
                event.target.alpha = 1.0;
            });
            this._restartButton.on("click", function (event) {
                currentScene = config.Scene.PLAY;
                changeScene();
            });
        };
        /**
         * The update method updates the animation loop and other objects
         *
         * @method update
         * @return void
         */
        Winner.prototype.update = function () {
            this._stage.update();
        };
        /**
         * The resize method is a procedure that sets variables and objects on screen resize
         *
         * @method resize
         * @return void
         */
        Winner.prototype.resize = function () {
            this._setupCanvas();
        };
        return Winner;
    }(scenes.Scene));
    scenes.Winner = Winner;
})(scenes || (scenes = {}));

//# sourceMappingURL=winner.js.map
