function verificar() {
let name = (document.querySelector('input#txtname').value)
let peso = document.getElementById('txtpeso')
let fsex = document.getElementsByName('radsex')
let res = document.getElementById('res')
    if (name >= 0 || peso.value <= 0 ) {
    window.alert('Verifique os dados e tente novamente!')
    res.innerHTML = 'Impossível analisar!'
    } else {
        res.innerHTML = `${name} é `
        let peso1 = (peso.value)
        let genero = ''
        if (fsex[0].checked) {
        res.innerHTML += `um homem e pesa ${peso1}Kg!`
    }
        else if (fsex[1].checked) {
        res.innerHTML += `uma mulher e pesa ${peso1}Kg!`
        }
    }   
} 
