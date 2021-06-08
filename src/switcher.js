let switcher = document.getElementById('switcher');

let radioBtns = switcher.querySelectorAll('input.switcher__radio');

radioBtns.forEach(radio => {
    if (radio.checked) {
        loadScript(`./src/${radio.dataset.load}.js`, () => {
            document.getElementById(`${radio.value}`).style.display = '';
            radioBtns.forEach(otherRadio => {
                if (otherRadio !== radio) {
                    document.getElementById(`${otherRadio.value}`).style.display = 'none';
                }
            });
        })
    }
    radio.addEventListener('change', () => {
        if (radio.checked) {
            loadScript(`./src/${radio.dataset.load}.js`, () => {
                document.getElementById(`${radio.value}`).style.display = '';
                radioBtns.forEach(otherRadio => {
                    if (otherRadio !== radio) {
                        document.getElementById(`${otherRadio.value}`).style.display = 'none';
                    }
                });
            })
        }
    })
})

