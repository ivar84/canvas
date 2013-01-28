
$(document).ready(function () {

    var canvas = document.getElementById("imageView");
    var context = canvas.getContext("2d");

    $("#imageView").mousedown(function (e) {
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;

        context.fillStyle = "blue";
        context.fillRect(x, y, 50, 50);

    });

});