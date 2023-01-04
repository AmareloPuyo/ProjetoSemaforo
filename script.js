let buttons = document.getElementById('buttons')
let imagem = document.querySelector('#imagem img')

let cor = ['vermelho','amarelo','verde']
let auto = 2

intervalID = null
 
const stopAuto = () => {
    clearInterval(intervalID)
}

const trafficLight = (event) => {
    stopAuto()
    turnOn[event.target.id]() 
}
const turnOn = {
    'vermelho' : () => imagem.src = './img/vermelho.png',
    'amarelo' : () => imagem.src = './img/amarelo.png',
    'verde': () => imagem.src = './img/verde.png',
    'automatico': () => intervalID = setInterval(() => {
        if (auto < 2){
            auto++
        }else{
             auto = 0
        }
        turnOn[cor[auto]]()
    },1000)
}

buttons.addEventListener('click',trafficLight)

