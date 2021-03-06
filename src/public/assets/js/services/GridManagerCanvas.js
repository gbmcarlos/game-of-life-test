/**
 * Created by gbmcarlos on 11/6/17.
 */
/**
 * Created by gbmcarlos on 11/6/17.
 */
(function(jQuery, window){

    var GridManagerCanvas = {

        $: jQuery,

        config: {
            containerSelector: '#grid-container'
        },

        init: function(width, height) {
            this.setDimensions(width, height);
            this.setupCanvas(this.config);
        },

        setDimensions: function(width, height) {
            this.config.width = width;
            this.config.height = height;
        },

        resetGrid: function() {
            this.canvas.clearRect(0, 0, this.config.width, this.config.height);
        },

        drawGrid: function(grid) {

            var cellWidth = +(this.config.width / grid[0].length).toFixed(1);
            var cellHeight = +(this.config.height / grid.length).toFixed(1);

            for (var i = 0; i < grid.length;i++) {
                for (var j = 0; j < grid[i].length;j++) {

                    var cell = grid[i][j];

                    var x = j * cellWidth;
                    var y = i * cellHeight;
                    var width = cellWidth;
                    var height = cellHeight;

                    if (cell) {
                        this.canvas.fillRect(x, y, width, height);
                    } else {
                        this.canvas.clearRect(x, y, width, height);
                    }

                }
            }

        },

        setupCanvas: function(config) {

            var canvas = document.createElement('canvas');
            canvas.width = config.width;
            canvas.height = config.height;
            canvas.style.border = '1px solid';

            this.$(config.containerSelector).empty();
            this.$(config.containerSelector).append(canvas);

            this.canvas = canvas.getContext('2d');

        }

    };

    window.GridManagerCanvas = GridManagerCanvas;

})(jQuery, window);