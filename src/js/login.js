 
function Login(){ 
        let input1 = document.getElementById("user1").value;
        let input2 =  document.getElementById("passwd1").value;

        if(input1 =="keno" && input2 =="figma" ){
            window.location.assign("home.html")
        } else{
                window.location.assign("index.html")
        }

}

// No esta completo porque no me funciono y como veremos js para el tercer corte
// por mientras lo deje asi 
     