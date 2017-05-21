var dialog = new Object();
dialog.text=document.getElementById("dialog_text");
dialog.nxt=document.getElementById("dialog_arrow");
dialog.lines=new Array();
set_lines();
dialog.text.className=0;
dialog.text.innerHTML=dialog.lines[parseInt(dialog.text.className)][0];
var audio = new Object(); 
audio.nxt = new Audio('assets/media/xbox.mp3');
audio.background = new Audio('assets/media/backmusic.mp3'); 
audio.background.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.background.play();
function twinkle(){
    var state = dialog.nxt.style.visibility;
    if (state=="visible"){
       dialog.nxt.style.visibility="hidden";
    }else{
        dialog.nxt.style.visibility="visible";
    }   
}
setInterval(twinkle, 400);
function next_line(){
    audio.nxt.play();
    var index = parseInt(dialog.text.className)+1;
    dialog.text.className=String(index);
    dialog.text.innerHTML=dialog.lines[index][0];
    if (dialog.lines[index][1]=="2"){
        var btn= document.getElementById("done");
        $("#done").removeClass("disabled");
    }else{
        $("#done").addClass("disabled");
    }
}
function set_lines(){
    dialog.lines.push(["¡Hola amigos mi nombre es Rotom...","1"]); //0
    dialog.lines.push(["y necesito su ayuda...","1"]);//1
    dialog.lines.push(["y necesito su ayuda...","1"]); //2
    dialog.lines.push(["asi que tratemos de resolver algunos problemas...","1"]); //3
    dialog.lines.push(["Antes de comenzar necesitamos explicar en que consiste el juego","1"]); //4
    dialog.lines.push(["Como dije antes yo les voy a dar algunos problemas, estos problemas se solucionarán usando matemáticas y programación...","1"]); //5
    dialog.lines.push(["mis amigos de Informática en Desarrollo les ayudarán cuando lo necesiten, para esto solo deben levantar la mano pedirles ayuda...","1"]); //6
    dialog.lines.push(["¿Vale?, ¡Empecemos!","1"]); //6
    dialog.lines.push(["helado","2"]); //7
    dialog.lines.push(["se quita","1"]); //7
}
