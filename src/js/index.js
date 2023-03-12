const btnCarrossel = document.querySelectorAll('.botao');
const imgs = document.querySelectorAll('.image');

btnCarrossel.forEach((btn, indice) => {
    btn.addEventListener('click', () => {
        desativarBotaoSelecionado();

        btn.classList.add('selecionado')

        esconderImagemAtiva();

        imgs[indice].classList.add('ativa')
    })
})

function esconderImagemAtiva() {
    const imgAtiva = document.querySelector('.ativa');
    imgAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const btnSelect = document.querySelector('.selecionado');
    btnSelect.classList.remove('selecionado');
}
