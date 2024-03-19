async function videosApi() {
    const conexao = await fetch('http://localhost:3000/videos');
    const resposta = await conexao.json();

    return resposta;
}


async function criarVideo(titulo, url) {
    const conexao = await fetch('http://localhost:3000/videos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url
        })
    })

    const resposta = await conexao.json();

    return resposta;

}



export const ConexaoApi = {
    videosApi,
    criarVideo
}