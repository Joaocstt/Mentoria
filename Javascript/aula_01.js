/* 



function maiorIdade(idade) {
    if(idade > 18) {
        console.log('Maior idade');
        return;
    }

    console.log('Menor de idade');
}


maiorIdade(23);

*/

/* 
const frutas = ['Banana','Maçã','Limão','Uva'];

const novasFrutas = [...frutas, 'Melancia','Abacaxi'];

console.log(novasFrutas);


novasFrutas.forEach((ponteiro) => {
    console.log(ponteiro);
});


*/


// filter 

/* 

const paises = ['brasil','bolivia','Peru','venezuela','colombia','uruguai'];

const paisesB = paises.filter((pais) => pais.toLowerCase().includes('b'));

console.log(paises)


const ids = [1,2,34,5,66,464,6];

const filtroDeIds = ids.filter((id) => id !== 3);

console.log(filtroDeIds);

*/


/* 
const numeros = [1,2,3,4,5,6];


const maiorQue3 = numeros.find(() => numero > 3);

console.log(maiorQue3)
*/


/* 


const numeros = [1,22,42,62,21,53,22,43];

const numerosPares = numeros.map((numero) => {
    //return numero % 2 == 0 ? + numero + 'Par' : numero + 'Impar';

    if(numero % 2 == 0) {
        return numero + ' Par';
    }

    return numero + ' Impar';
});


const filterNumerosQuetemPAr = numerosPares.filter((numero) => numero.includes('Par'));

console.log(filterNumerosQuetemPAr);



*/

// arrow functions 

function teste(a, b) {
    return a + b;
}

teste(1,20); // 21 


/* 

const soma = (a,b) => {
    return a + b;
}

soma(1,20);
*/

/* 

// Crie um array de números, após isso filtre somente os números divisível por 4; 


*/

let array = [1,2,3,4,5];

let newArray = array.filter((ponteiro) => {
    return ponteiro % 4 == 0;
});

console.log(newArray);

/* 

Crie um array de nomes e pegue o primeiro nome que contém a letra "A";
*/

/* 
const arraypalavras = ['Alexandre','Kauã','Almeida','Elias','Matheus'];

const newArraYPLA = arraypalavras.find((ponteiro) => {
    return ponteiro.toLowerCase().includes('a');
});

console.log(newArraYPLA);
*/



// ASSÍNCRONO E SÍNCRONO 


// SÍNCRONO
/* 

console.log('Olá mundo!');

function mensagemProElias() {
    console.log('Olá, Elias');
}

mensagemProElias();

console.log('ATÉ MAIS!');

*/


// ASSÍNCRONO 

function pedirBaixariaNoIfood() {
    console.log('Rapaz, vou pedir uma baixaria...');
    console.log('Abrir o app, e pedir'); 

    setTimeout(() => {
        console.log('O LANCHEEEEE!');
    }, 3000)

    console.log('Enquanto meu pedido não chega, vou jogar free fire');

}

pedirBaixariaNoIfood();