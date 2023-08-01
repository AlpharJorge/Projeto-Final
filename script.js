const perguntas = [
  {
    pergunta: "Qual é a capital do Brasil?",
    respostas: ["São Paulo", "Rio de Janeiro", "Brasília", "Penedo"],
    respostaCorreta: "Brasília"
  },
  {
    pergunta: "Qual melhor Spidey?",
    respostas: ["Tobey", "Tom Holland", "Andrew", "MIles"],
    respostaCorreta: "Tobey"
  },
  {
    pergunta: "Qual as siglas do curso??",
    respostas: ["PGA", "PDA", "PGD", "PDGA"],
    respostaCorreta: "PDA"
  },
  {
    pergunta: "Qual é o único spidey negro",
    respostas: ["Miles", "Tom Holland", "Andrew", "Tobey"],
    respostaCorreta: "Miles"
  },
  
];

let numeroQuestao = 0;
let pontos = 0;
let acertouPrimeiraPergunta = false;

function exibirProximaQuestao() {
  if (numeroQuestao < perguntas.length) {
    const questaoAtual = perguntas[numeroQuestao];
    document.getElementById("numQuestao").innerText = `Questão ${numeroQuestao + 1}`;
    document.getElementById("pergunta").innerText = questaoAtual.pergunta;
    const listaRespostas = document.getElementById("alternativas");
    const opcoesRespostas = listaRespostas.getElementsByTagName("li");
    for (let i = 0; i < opcoesRespostas.length; i++) {
      opcoesRespostas[i].innerText = questaoAtual.respostas[i];
      opcoesRespostas[i].setAttribute("onClick", `verificarSeAcertou(this, "${questaoAtual.respostaCorreta}")`);
    }
  } else {
    exibirPontuacaoFinal();
    document.querySelector(".questoes").style.display = "none";
  }
}

function verificarSeAcertou(respostaSelecionada, respostaCorreta) {
  if (respostaSelecionada.innerText === respostaCorreta) {
    respostaSelecionada.style.backgroundColor = "green";
    pontos++;
    numeroQuestao++;
    if (numeroQuestao === 1) {
      acertouPrimeiraPergunta = true;
    }
    setTimeout(function() {
      respostaSelecionada.style.backgroundColor = "";
      if (acertouPrimeiraPergunta) {
        exibirProximaQuestao();
      } else {
        exibirPontuacaoFinal();
        document.querySelector(".questoes").style.display = "none";
      }
    }, 1000);
  } else {
    respostaSelecionada.style.backgroundColor = "red";
    setTimeout(function() {
      respostaSelecionada.style.backgroundColor = "";
      exibirPontuacaoFinal();
      document.querySelector(".questoes").style.display = "none";
    }, 1000);
  }
}

function exibirPontuacaoFinal() {
  const mensagemFinal = `Fim do quiz! Sua pontuação é: ${pontos} de ${perguntas.length}`;
  document.getElementById("instrucoes").innerText = mensagemFinal;
}
