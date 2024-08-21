function log(){
        var senha = document.getElementById('password').value;

        if(senha == "eusouumagostosa"){
            alert('Parabéns bb!');
            location.href = "/game/html/index.html";
        }else{
            alert('Pensa mais ou pouco!');
        }
    }
