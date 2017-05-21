//sistema de dialogos
var dialog_box = document.getElementById("dialog_text");
var dialog_req=document.getElementById("question");
var dialog= new Array();
var dialog_question=0;
var dialog_answer=false;
var dialog_res=true;
var dialog_next=document.getElementById("dialog_arrow");
//Dialogos en orden
dialog.push("Hola amiguit@s mi nombre es Rotom!..."); //0
dialog.push("y necesito su ayuda...");//1
dialog.push(["¿Quieren ayudarme?...",1]);//2

//no
    dialog.push("Ok...");//3
    dialog.push("Entiendo...");//4
    dialog.push("Adiós");//5
    //sale

//si
    dialog.push("¡Estupendo!");//6
    //sigue

dialog.push("Tengo entendido que ustedes son muy inteligentes..."); //7
dialog.push("y necesito su ayuda para resolver algunos problemas..."); //8
dialog.push("pero hay otros amigos ayudandome..."); //9
dialog.push("el primer equipo en ayudarme a resolver mis problemas gana!"); //10
dialog.push("¿Quieren jugar?",2); //11
    
dialog.push("Pues vamos empecemos!"); //12
dialog.push("Para comenzar neceito que creen un equipo con sus compañeros..."); //13
dialog.push("y que me cuenten quienes van a jugar en el equipo..."); //14

dialog.push("Esperando por otros equipos..."); //15

dialog.push("Antes de comenzar necesitamos explicar en que consiste el juego"); //16
dialog.push("Como dije antes yo les voy a dar un problema, este problema consistirá en un problema matemático..."); //17
dialog.push("el cual, ustedes solucionarán utilizando los fundamentos básicos de programación que mis amigos de informática les han explicado"); //18



function next_dialog(){
    var audio = new Audio('assets/media/xbox.mp3');
    audio.play();
    var current_number=parseInt(dialog_box.className);
    var index=current_number+1;
	if (dialog_answer==false){
        if (dialog[index]){
           dialog_box.className=String(index);
           if (dialog[index][1]>0){
               dialog_box.innerHTML=dialog[dialog_box.className][0];
               dialog_question=dialog[index][1];
               dialog_req.style.display="block";
               dialog_next.style.display="none";
           }else{
               dialog_next.style.display="block";
               dialog_req.style.display="none";
               dialog_box.innerHTML=dialog[dialog_box.className];
           }
        }else{
            document.getElementById("dialog").style.display="none";
        }
    }else{
         dialog_answer=false;
         switch (dialog_question){
             case 1:
                    if (dialog_res==true){
                       dialog_next.style.display="block";
                       dialog_req.style.display="none";
                       dialog_box.innerHTML=dialog[6]; 
                       dialog_box.className="6";     
                    }else{
                       dialog_next.style.display="block";
                       dialog_req.style.display="none";
                       dialog_box.innerHTML=dialog[3]; 
                       dialog_box.className="3";     
                    }
                 break;
             case 2:
                 break;
         }
    }
}

function answer(item){
    var audio = new Audio('assets/media/gameboy.mp3');
    audio.play();
   // alert(dialog_answer+" "+dialog_res+" "+item.id);
    dialog_answer=true;
    if (item.id=="no"){
        dialog_res=false;
    }
    next_dialog();
}
function twinkle(){
    var state = dialog_next.style.display;
    if (state=="block"){
        dialog_next.style.display="none";
    }else{
        dialog_next.style.display="block";
    }
    
}

setInterval(twinkle, 500);