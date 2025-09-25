function finalizarQuiz() {
    var q1 = document.getElementById('formulario').q1.value;
    var q2 = document.getElementById('formulario').q2.value;
    var q3 = document.getElementById('formulario').q3.value;
    

    if (!q1 || !q2 || !q3) {
        alert('responda todas as perguntas!');
        window.location.href = 'quiz.html';
        return;
    }
    

    var pontuacao = 0;

    if (q1 === 'a') {
        pontuacao += 1;
    }
    
    if (q2 === 'b') {
        pontuacao += 1;
    }
    
    if (q3 === 'c') {
        pontuacao += 1;
    }


    var resultados = {
        pontuacao: pontuacao,
        respostas: {
            q1: q1,
            q2: q2,
            q3: q3
        }
    };


    localStorage.setItem('quizResultados', JSON.stringify(resultados));
    window.location.href = 'quizFinalizacao.html';
}



function carregarResultado() {


    var resultadosJSON = localStorage.getItem('quizResultados');
    var resultados = JSON.parse(resultadosJSON);
    var pontuacao = resultados.pontuacao;
    var respostasUsuario = resultados.respostas;


    var paragrafoResultado = document.getElementById('resultado');
    if (paragrafoResultado) {
        paragrafoResultado.textContent = 'Sua pontuação: ' + pontuacao + ' pontos';
    }

    
    var gabaritoUsuario = document.getElementById('gabaritoUsuario');
    if(gabaritoUsuario) {
        gabaritoUsuario.innerHTML = '<br>Seu Gabarito: <br> 1. ' + respostasUsuario.q1 + '<br> 2. ' + respostasUsuario.q2 + '<br> 3. ' + respostasUsuario.q3 + '<br>';
    }
    

    var gabaritoOficial = document.getElementById('gabaritoOficial');
    if (gabaritoOficial) {
        gabaritoOficial.innerHTML = '<br>Gabarito Oficial: <br> 1. a <br> 2. b <br> 3. c';
    }

}