var random = parseInt(Math.random() * (1001 - 1) + 1); 

const num = document.querySelector('.num');

var ct = 0;

form.addEventListener("submit", function(event) {
    ct++;
    event.preventDefault();

    const numInput = num.value;

    var tentativa = document.getElementById("tentativa");

    if(numInput > random) {
        tentativa.innerHTML = "O número que você digitou é maior que o número sorteado... tente novamente";
        document.getElementById('num').value = '';

    }else if(numInput < random) {
        tentativa.innerHTML = "O número que você digitou é menor que o número sorteado... tente novamente";
        document.getElementById('num').value = '';

    }else {
        if(ct == 1) {
            tentativa.innerHTML = "Parabéns, você acertou em " + ct + " tentativa!<br><br>O computador sorteou outro número, para jogar novamente basta inserir um número no campo acima";
        
        }else {
            tentativa.innerHTML = "Parabéns, você acertou em " + ct + " tentativas!<br><br>O computador sorteou outro número, para jogar novamente basta inserir um número no campo acima";
        }
        random = parseInt(Math.random() * (1001 - 1) + 1); 
        document.getElementById('num').value = '';
        ct = 0;
    }   
}
)