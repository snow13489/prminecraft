var canvas = new fabric.Canvas("Canva");

player_x=10;
player_y =10;

block_image_width = 30;
block_image_height = 30;


var player_object="";
var block_image_object="";

function P_U(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;

      player_object.scaleToWidth(150);
      player_object.scaleToHeight(150);
      player_object.set({
        top:player_y,
        left:player_x
      });
      canvas.add(player_object);

    });
}
function B_u(get_image){
    fabric.Image.fromURL( get_image, function(Img){
        block_image_object = Img;

      block_image_object.scaleToWidth(block_image_width);
      block_image_object.scaleToHeight(block_image_height);
      block_image_object.set({
        top:player_y,
        left:player_x
      });
      canvas.add(player_object);

    });
}

window.addEventListener("keydown", KD);

function KD(e){
  keyPressed = e.keyCode;
  console.log(keyPressed);
  if(e.shiftKey == true && keyPressed == "80"){
    block_image_width = block_image_width + 10;
    block_image_height = block_image_height + 10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }

  if(e.shiftKey == true && keyPressed == "77"){
    block_image_width = block_image_width - 10;
    block_image_height = block_image_height -  10;
    document.getElementById("current_width").innerHTML = block_image_width;
    document.getElementById("current_height").innerHTML = block_image_height;
  }
   
  if(keyPressed == '37'){
    left();  
  }

  if(keyPressed == '38'){
    up();  
  }

  if(keyPressed == '39'){
    right();  
  }

  if(keyPressed == '40'){
    down();  
  }

  if(keyPressed == '87'){
    B_u('wall.jpg');
  }

  if(keyPressed == '71'){
    B_u('ground.png');
  }

  if(keyPressed == '76'){
    B_u('light_green.png');
  }

  if(keyPressed == '84'){
    B_u('trunk.jpg');
  }

  if(keyPressed == '82'){
    B_u('roof.jpg');
  }

  if(keyPressed == '89'){
    B_u('yellow_wall.png');
  }
  
  if(keyPressed == '68'){
    B_u('dark_green.png');
  }

  if(keyPressed == '85'){
    B_u('unique.png');
  }

  if(keyPressed == '67'){
    B_u('cloud.jpg');
  }
  }

function up (){
   if(player_y >=0){
     player_y = player_y - block_image_height;
     console.log("block_image_height=" +block_image_height);
     console.log("x=" + player_x + ", y=" + player_y);
     canvas.remove(player_object);
     P_U();
   }
}


function down (){
  if(player_y <=500){
    player_y = player_y + block_image_height;
    console.log("block_image_height=" +block_image_height);
    console.log("x=" + player_x + ", y=" + player_y);
    canvas.remove(player_object);
    P_U();
  }
}

function left (){
  if(player_x >=0){
    player_x = player_x - block_image_width;
    console.log("block_image_width=" +block_image_width);
    console.log("x=" + player_x + ", y=" + player_y);
    canvas.remove(player_object);
    P_U();
  }
}

function right (){
  if(player_x <=830){
    player_x = player_x + block_image_width;
    console.log("block_image_width=" +block_image_width);
    console.log("x=" + player_x + ", y=" + player_y);
    canvas.remove(player_object);
    P_U();
  }
}