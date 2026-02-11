//---------exercise 1 --------------------------------------------
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green'];
const btn = document.getElementById('btn');

// o query selector vai pegar o valor e retornar para o html
let color = document.querySelector('.color');

// adicionar um evento ao botão
btn.addEventListener('click', function(){
    const randomColor = getRandomColor();
    document.body.style.background = colors[randomColor];
    color.textContent = colors[randomColor];
})

function getRandomColor(){
    return Math.floor(Math.random() * colors.length);
}


