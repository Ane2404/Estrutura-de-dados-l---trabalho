
const minhaFila = new Fila(5);

function adicionarElemento() {
  const nome = document.getElementById("txtnovoNome");
  const cpf = document.getElementById("txtnovoCPF");
  const data = obterDataAtual();
  const hora = obterHoraAtual();
  const novoAtendimento =
    new Atendimento(nome.value,cpf.value,data,hora);
  if (minhaFila.enqueue(novoAtendimento)) {
    mostrarFila(); // mostrar a fila
    nome.value=""; // clear input
    cpf.value = "";
    nome.focus();
  } else {
    alert("Fila cheia!");
  }
}

  function mostrarFila(){
    const filaElemento = document.getElementById("listFila");
    filaElemento.innerHTML="";
    for(let item of minhaFila){
      const listItem = document.createElement("li");
      listItem.textContent = item;
      filaElemento.appendChild(listItem);
    }
  }

    function removerElemento(){
      let removido = minhaFila.dequeue();
      const comentRemocao = document.getElementById("mensagem-remocao");
      if(removido===null)
        alert("Fila vazia");
      else{
        alert("Atendido:"+removido);
        mostrarFila();
        comentRemocao.innerHTML = ("Próximo atendimento: " + removido + " Tempo de espera: " + calcularDiferencaHoras(removido.hora, obterHoraAtual()));
        //innerHTML significa injetar HTML
        localStorage.setItem('utilmoAtendimento', removido.nome);
      }

  }

  function buscarElemento(){
    const busca1 = document.getElementById("txtnovoCPF");
    const busca2 = document.getElementById("txtnovoNome");
    let encontrado = false;
    for(let atendimento of minhaFila){
      if(busca1.value=== atendimento.cpf || busca2.value === atendimento.nome){
        alert("Encontrado na fila " + atendimento);
        encontrado = true;
      }
    }
    if(!encontrado)
      alert("Pessoa não está na fila");

  }// fim funcao busca



