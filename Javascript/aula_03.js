/* CALLBACK 

function soma(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}



function mostrarOp (callback) {

    let a = 1;
    let b = 2;

    let resultado = callback(a, b);

    console.log(resultado)
}


mostrarOp(sub);

*/


// PROMISSE 


/* 

const promessa = (idade) => {
    return new Promise((resolve, reject) => {
        if(idade >= 18) {
            return resolve();
        }

        return reject();
    });
}

promessa(17).then(() => {
    console.log('Ok');
})
.catch(() => {
    console.log('Deu errado!');
})


*/


/* 

const promessa = (idade) => {
    return new Promise((resolve, reject) => {
        if(idade >= 18) {
            return resolve();
        }

        return reject();
    });
}

promessa(17).then(() => {
    console.log('Ok');
})
.catch(() => {
    console.log('Deu errado!');
})


const verificarIdade = async (idade) => {
    try {
        await promessa(idade);
        console.log('Ok, maior de idade!');
    }
    catch {
        console.log('Deu ruim')
    }
} 



verificarIdade(19);

*/

/* 
// FETCH

const api = fetch('https://viacep.com.br/ws/69911259/json/') // RESOLVIDO = DADOS , RECUSADO = N RETORNA 
.then((resposta) => resposta.json())
.then((resposta_convertida) => {
    console.log(resposta_convertida);
    console.log(resposta_convertida.cep)
})



const url = 'https://viacep.com.br/ws/69911259/json/';

async function dados() {
    const response = await fetch(url);

    if(response.ok) {
        const objConvertido = await response.json();
        console.log('O cep é:' + objConvertido.cep)
        
    }
}

dados();

*/

// https://api.api-onepiece.com/v2/characters/en

/* 


const idDoPersonagem = 1;

const urlApi = `https://api.api-onepiece.com/v2/characters/en/${idDoPersonagem}`

async function listarPersonagens() {
    try {
        const resposta = await fetch(urlApi);
        const ul = document.querySelector('.pai')

        if(resposta.status == 200) {
            const otakus = await resposta.json();
            let li = document.createElement('li');
            li.innerHTML = `O nome do personagem é: ${otakus.name}`
            ul.appendChild(li)
        }
    }
    catch(erro) {
        console.log(erro);
    }
}

listarPersonagens();

*/


/* 

const url = 'https://api.github.com/users/Joaocstt/repos';



async function listarRepositorio() {
    const resposta = await fetch(url);

    if(resposta.ok) {
        const convertido = await resposta.json();

        convertido.forEach(repo => {
            console.log(repo);
        });
    }
  
}

listarRepositorio()
*/

const url = 'https://viacep.com.br/ws/629911259/json/';

async function dados() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const objConvertido = await response.json();
            console.log('O cep é:' + objConvertido.cep)
            console.log(objConvertido);
        } else {
            console.error('Erro na solicitação:', response.status);
            // Verifica se o erro é devido a um CEP inválido
            if (response.status === 404) {
                // Exibe uma mensagem de erro no frontend
                alert('CEP inválido');
                console.log('erro');
            }
            // Trate o erro de acordo com sua lógica
        }
    } catch (error) {
        console.log('Erro');
    }
}

dados();
