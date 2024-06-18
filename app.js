alert("Boas vindas ao meu jogo de adivinhação");
let valorMaximo = 1000;
let numeroSecreto  = parseInt(Math.random()* valorMaximo + 1);
console.log(numeroSecreto);
let palpite ;
let tentativas = 1;


while(palpite != numeroSecreto) {
   
   palpite =parseInt(prompt(`Escolha um numero entre 1 e ${valorMaximo}`));

// confere se o palpite é igual ao numero secreto e se não é, ajuda dando dica
    if ( palpite == numeroSecreto ){
        break;

    } else {
        
        if (palpite < numeroSecreto){
            alert(`O número secreto é maior que ${palpite}`);
        } else {
            alert(`O número secreto é menor que ${palpite}`);
        }
        //tentativas = tentativas + 1;
        tentativas ++
    }   
}
//substituindo esse codigo abaixo por uma forma mais adwquada chamada operador tenario
/*if(tentativas < 1){
alert(`vc acertou! o numero secreto era ${numeroSecreto} com ${tentativas} tentativas.`);
} else{
alert(`vc acertou! O numero secreto era ${numeroSecreto} com ${tentativas} tentativa`);
}*/

// lê-se da seguinte forma 
//tentativa maior que 1? Caso seja escreva 'tentativas' se não 'tentativa'
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`vc acertou! O numero secreto era ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);