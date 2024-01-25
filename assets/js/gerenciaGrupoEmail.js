document.addEventListener('click', (e) => {
    const el = e.target;

    if (el.classList.contains('AdiconarInput')) {
        criaInput()
    }
})
function criaInput() {
    const input = document.createElement('input');
    const label = document.createElement('label');
    input.classList.add('form-control');
}

