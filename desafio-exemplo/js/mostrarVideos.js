import { ConexaoApi } from "./api.js";

async function listarVideos() {
    const listarVideosApi = await ConexaoApi.videosApi();
    const videos_html = document.querySelector('#lista_videos');
    
    listarVideosApi.forEach(video => {
        videos_html.innerHTML += `
            <div class="video"> 
                <h2 class="titulo_video">${video.titulo}</h2>
                <img width="200" src="${video.url}"> </img>
                <button>Editar</button>
                <button>Excluir</button>
            </div>
        `
    });

}

listarVideos();


const barrapesquisa = document.querySelector('.input_pesquisa');

barrapesquisa.addEventListener('input', filtro)


async function filtro() {
    await ConexaoApi.videosApi();

    const todosVideos = document.querySelectorAll('.video')

    if(barrapesquisa != "") {
        todosVideos.forEach(video => {
            let titulo = video.querySelector('.titulo_video').textContent.toLowerCase();
            let valorFiltro = barrapesquisa.value.toLowerCase();

            if(!titulo.includes(valorFiltro)) {
                video.style.display = 'none';
            }
            else {
                video.style.display = 'block';
            }

        })
    }
    else {
        todosVideos.forEach(video => {
            video.style.display = 'block';
        })
    }

}

filtro();