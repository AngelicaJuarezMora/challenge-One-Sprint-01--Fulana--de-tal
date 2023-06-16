const curriculumVitae = document.querySelector("#curriculumVitae");
const demoUno = document.querySelector("#demoUno");
const demoDos = document.querySelector("#demoDos");
const gitHub = document.querySelector("#gitHub");
const linkedIn = document.querySelector("#linkedIn");
const repositorioUno = document.querySelector("#repositorioUno");
const repositorioDos = document.querySelector("#repositorioDos");

curriculumVitae.addEventListener("click", function(){
    abrirNuevaPagina("./EjemploCV.pdf");
});

demoUno.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/alura-cursos");
});

demoDos.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/alura-cursos");
});

gitHub.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/alura-cursos");
});

linkedIn.addEventListener("click", function(){
    abrirNuevaPagina("https://www.linkedin.com/in/mauricio-rivera-torres");
});

repositorioUno.addEventListener("click", function(){
   abrirNuevaPagina("https://github.com/alura-cursos");
});

repositorioDos.addEventListener("click", function(){
    abrirNuevaPagina("https://github.com/alura-cursos");
}); 

function abrirNuevaPagina(url){
    let nuevaPagina = window.open(url, '_blank');
    nuevaPagina.focus();
}

