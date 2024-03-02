/*let titulo = document.querySelector('h1'); // documente.querySelector conecta a variavel a teg que pretendo colocar um texto
titulo.innerHTML = 'Jogo do Número Secreto'; // o .innerHTML serve para inserir um texto na variavel titulo que sera aplicado no html na teg H1
let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10!';
*/
let listaNumeroSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio(); // variavel que vai receber o numero aleatorio gerado pela função gerarNumeroAleatorio.
let tentativas = 1;
// criar função para evitar repetição do código acima
function exibirTextoTela(tag,texto){
    // a variavel campo sera uma vareavel generica da função
    let campo = document.querySelector(tag); // a string 'tag' sera subistituida pelo elemento onde pretendo usar a função.
    campo.innerHTML = texto; //a string texto sera substituido pelo texto que prentendo informar.
   responsiveVoice.speak(texto,'Brazilian Portuguese Female',{rate:1.3});
   }
function exibirMensagemTela() {
   exibirTextoTela('h1','Jogo do Número Secreto');
   exibirTextoTela('p','Escolha um número entre 1 e 100!');      
}
exibirMensagemTela();

function verificarChute() { // a função e um treicho de codigo que faz uma ação
   let chute = document.querySelector('input').value; //.value nesse local pede apenas o valor digitado no campo do input
   if (chute == numeroSecreto){
      exibirTextoTela('h1','Acertou!');
      let palavraTentativas = tentativas > 1? 'tentativas': 'tentativa';
      let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
      exibirTextoTela('p',mensagemTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
      if (chute > numeroSecreto){
      exibirTextoTela('p',`O número secreto e menor!`);
      }else{
         exibirTextoTela('p',`O número secreto e maior!`);
      }
      tentativas++;
      limparCampo();
   }
}
//o includes verifica se o valor da variavel numeroEscolhido já existe na lista.
//o push inclui o valor da vareavel no final da lista.
function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let qtElementoLista = listaNumeroSorteados.length;
   if(qtElementoLista == numeroEscolhido){
      listaNumeroSorteados = [];
   }
   if (listaNumeroSorteados.includes(numeroEscolhido)) {
      console.log(`gerando numero: ${numeroEscolhido}`)
      return gerarNumeroAleatorio();
   } else {
     console.log(`incluido numero na lista: ${numeroEscolhido}`)
      listaNumeroSorteados.push(numeroEscolhido);
      console.log(listaNumeroSorteados);
      return numeroEscolhido;
   }
}

function limparCampo() {
   chute = document.querySelector('input');
   chute.value = '';
}
function reiniciarJogo() {
   numeroSecreto = gerarNumeroAleatorio();
   tentativas = 1;
   limparCampo();
   exibirMensagemTela();
document.getElementById('reiniciar').setAttribute('disabled',true);
}

