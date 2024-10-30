alert("Seja bem-vindo ao jogo do número secreto");
// mathRandom cria números pseudo aleatórios
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let chute;
let tentativas = 1;

// enquanto o chute não for igual ao número secreto
while (chute != numeroSecreto) {
  chute = prompt("Escolha um número de 1 a 100:");

  // se chute for igual ao número secreto
  if (chute == numeroSecreto) {
    break;
  } else {
    if (chute > numeroSecreto) {
      alert(`O número secreto é menor que ${chute}`);
    } else {
      alert(`O número secreto é maior que ${chute}`);
    }
    tentativas++;
  }
}

// operador ternário
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`
);

//if (tentativas > 1) {
//  alert(
//    `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`
//  );
//} else {
// alert(
//   `Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`
// );
//}