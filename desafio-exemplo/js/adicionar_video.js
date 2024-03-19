import { ConexaoApi } from "./api.js";

const formulario = document.querySelector('#form_video');

async function criarNovoVideo(evento) {
    evento.preventDefault();

    const titulo = document.querySelector('#titulo').value;
    const url = document.querySelector('#url').value;


    await ConexaoApi.criarVideo(titulo, url);

    window.location.href = "../index.html"
}


formulario.addEventListener('submit', criarNovoVideo);
