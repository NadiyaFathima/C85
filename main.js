canvas =document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

mars_images = ["img_1.jpg", "img_2.jpg", "img_3.jpg", "img_4.jpg", "img_5.jpg"];

random_number = Math.floor(Math.random()*5);
console.log(random_number);

bg_img = mars_images[random_number];
console.log("Backgroung image is" + bg_img);

rover_img = "rover.png";

roverX = 10;
roverY = 10;

rover_width = 100;
rover_height = 90;

function add(){
    bg_imgTag = new Image();
    bg_imgTag.onload = upload_bg;
    bg_imgTag.src = bg_img;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = rover_img;
}
function upload_bg(){
    ctx.drawImage(bg_imgTag, 0,0, canvas.width, canvas.height);
}
function upload_rover(){
    ctx.drawImage(rover_imgTag, roverX, roverY, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    keyPress = e.keyCode;
    console.log(keyPress);

    if (keyPress == '38'){
        console.log("UP");
        up();
    }
    if (keyPress == '40'){
        console.log("DOWN");
        down();
    }
    if (keyPress == '37'){
        console.log("LEFT");
        left();
    }
    if (keyPress == '39'){
        console.log("RIGHT");
        right();
    }

}
function up(){
    if (roverY >=0){
        roverY = roverY - 10;
        console.log("When up arrow is pressed, X = " + roverX + " Y = " + roverY );
        upload_bg();
        upload_rover();
    }
}
function down(){
    if (roverY <=500){
        roverY = roverY + 10;
        console.log("When down arrow is pressed, X = " + roverX + " Y = " + roverY );
        upload_bg();
        upload_rover();
    }
}
function right(){
    if (roverX <=700){
        roverX = roverX + 10;
        console.log("When right arrow is pressed, X = " + roverX + " Y = " + roverY );
        upload_bg();
        upload_rover();
    }
}
function left(){
    if (roverX >=0){
        roverX = roverX - 10;
        console.log("When left arrow is pressed, X = " + roverX + " Y = " + roverY );
        upload_bg();
        upload_rover();
    }
}