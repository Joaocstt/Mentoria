// CALLBACK


/* 


const matheus = (nome, idade) => {
    console.log(`Meu nome é ${nome} e minha idade é ${idade}`);
}

const lerAsInformacoes = (callback) => {

    let nome = 'João';
    let idade = 23;


    callback(nome, idade);

}


lerAsInformacoes(matheus);


*/

/* 


function mostrarNumero(numero) {
    console.log('O numero é : ' + numero)

}


function mostrar(callback) {
    let numero = 10;

    callback(numero);
}

mostrar(mostrarNumero);


*/


// PROMISSE 

const pedidoCorreio = (nomePedido) => {
    
    const promessa = new Promise((entregue, voltou) => {
        if(nomePedido == 'PS5') {
            entregue('Opa, é isso mesmo, chegou legal!')
        }
        else {
            voltou('Não é isso que eu quero, vc errou!');
        }

    })

    return promessa;
}


pedidoCorreio('PS5')
.then((resposta) => {
    return resposta.toUpperCase();
})
.then((nova_resposta) => {
    console.log(nova_resposta)
})
.catch((erro) => {
    console.log(erro);
});


