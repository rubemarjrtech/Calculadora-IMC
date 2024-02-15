const botao = document.getElementById('botao');
const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const calculo = document.getElementById('calculo');
const resultado = document.getElementById('resultado');

const mensagem = (cal) => {
    if(cal > 40) return 'obesidade grau 3';
    if(cal > 35) return 'obesidade grau 2';
    if(cal > 30) return 'obesidade grau 1';
    if(cal > 25) return 'levemente acima do peso';
    if(cal > 18.5) return 'peso ideal';
    if(cal < 18.5) return 'magreza';
}

const imc = () => {
    const soma = (+peso.value / (+altura.value * +altura.value)).toFixed(1);
    calculo.textContent = soma;
    resultado.textContent = mensagem(soma);

    if (!peso.value || !altura.value) return (
        resultado.textContent = '',
        calculo.textContent = '',
        alert ('Preencha todos os campos')
    )
}

botao.addEventListener('click', imc);