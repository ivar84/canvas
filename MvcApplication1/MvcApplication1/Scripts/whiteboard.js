
$(document).ready(function () {

    var canvas = document.getElementById("imageView");
    var context = canvas.getContext("2d");

    var tool = rect;

    

    
    $("#rect").click(function () {

        tool = "rect"
         

    });


    $("#imageView").mousedown(function (e) {
        if( tool == "rect"){
            
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;

            context.fillStyle = "blue";
            context.fillRect(x, y, 50, 50);
        }
    });

    $ ("#clear").click(function () {
        console.log("bla");
        context.clearRect(0, 0, 900, 600);
    });

});