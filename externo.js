//function checkjogo(id) {

  //  alert("ok");


//}

//function checkjogo(id) {

  //  alert(id);
//}

function verificaSrc(id) {
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
}

var player = "X";
var numJog = 0;


function checkjogo(id){

    var opt = verificaSrc(id);
    var pc = document.getElementById('cpu').checked;
        
    if(opt == "transp.png"){
        document.getElementById(id).src = "img/" + player + ".png";
 
            numJog++;
         
        if(winchek()){
            //alert("Fim de jogo!! Vitória do " + player +  " !!!");
            //document.write("Fim de jogo!! Vitória do " + player +  " !!!");
            setTimeout(function() {
                window.location.href = "ganhador.html";
            }, 1000);
            return false;
          
           
        }
        
        if(numJog >= 9){
            alert("Fim de jogo!! Deu velha!!!");
            setTimeout(function(){
                window.location.href = "perdeu.html"
            },1000);
            return false;
        }
 
        if(player == "X"){
            player = "circle";
        }else{
            player = "X";
        }
    }
    
    if(pc && player == "circle"){
        checkjogo(jogoDoPc());
    }
    
    function jogoDoPc(){
        if(verificaSrc('c5') == "transp.png"){
            return 'c5';
        }
        return 'c' + Math.floor((Math.random() * 9) + 1);
    }

}




function verificaSrc(id){
    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);

}



function winchek(){
    //horizontal
    if((verificaSrc('c1') == verificaSrc('c2')) && (verificaSrc('c1') ==  verificaSrc('c3')) && verificaSrc('c1') !="transp.png"){
            return true;
    }

    if((verificaSrc('c4') == verificaSrc('c5')) && (verificaSrc('c4') ==  verificaSrc('c6')) && verificaSrc('c4') !="transp.png"){
        return true;
    }
    
    if((verificaSrc('c7') == verificaSrc('c8')) && (verificaSrc('c7') ==  verificaSrc('c9')) && verificaSrc('c7') !="transp.png"){
        return true;
    }
    
    
    //vertical
    if((verificaSrc('c1') ==  verificaSrc('c4')) && (verificaSrc('c1') == verificaSrc('c7')) && verificaSrc('c1') != "transp.png"){
        return true;
    }

    if((verificaSrc('c2') ==  verificaSrc('c5')) && (verificaSrc('c2') == verificaSrc('c6')) && verificaSrc('c2') != "transp.png"){
        return true;
    }

    if((verificaSrc('c3') ==  verificaSrc('c6')) && (verificaSrc('c3') == verificaSrc('c9')) && verificaSrc('c3') != "transp.png"){
        return true;
    }

    //diagonal
    if((verificaSrc('c1') ==  verificaSrc('c5')) && (verificaSrc('c1') == verificaSrc('c9')) && verificaSrc('c1') != "transp.png"){
        return true;
    }

    
    if((verificaSrc('c3') ==  verificaSrc('c5')) && (verificaSrc('c3') == verificaSrc('c7')) && verificaSrc('c3') != "transp.png"){
        return true;
    }

    
    if((verificaSrc('c7') ==  verificaSrc('c5')) && (verificaSrc('c7') == verificaSrc('c3')) && verificaSrc('c7') != "transp.png"){
        return true;
    }

    
    if((verificaSrc('c9') ==  verificaSrc('c5')) && (verificaSrc('c9') == verificaSrc('c1')) && verificaSrc('c9') != "transp.png"){
        return true;
    }
    
    return false;
}






