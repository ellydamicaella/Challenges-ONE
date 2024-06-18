    alert("Boas vindas ao meu jogo de adivinhação");
    let numeroSecreto  = 29;
    let tentativas = 1;

    while(palpite != numeroSecreto) {
       
        let palpite =parseInt(prompt("Escolha um numero entre 1 e 30"));

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

    if(tentativas < 1){
    alert(`vc acertou! o numero secreto era ${numeroSecreto} com ${tentativas} tentativas.`);
    } else{
    alert(`vc acertou! O numero secreto era ${numeroSecreto} com ${tentativas} tentativa`);
    }