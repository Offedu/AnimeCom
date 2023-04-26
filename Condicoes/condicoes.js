
  var nome = document.getElementById("valor");

  /* IF, ELSE IF, ELSE
	Verifica a condição bloco por bloco;
  */
  function TesteNome() {
    if (nome.value === "eduardo") {
      alert("Foi vc perdeu no x1");
    } else if (nome.value === "deh") {
      alert("Foi vc ganhou o x1");
    } else {
      alert("Ninguem perdeu nem ganhou.");
    }
  }

  //Ternario 
  // nome.value ? alert("É o edu") : alert("nume eh ele ");

  /* SWITCH CASE 
  	Verifica se o valor se encontra em algum dos casos;
  */
  function TesteNomeCase() {
    switch (nome.value) {
      case "eduardo":
        alert("Foi vc perdeu no x1");
        break;
      case "deh":
        alert("Foi voce que ganhou o x1");
        break;
      default:
        break;
    }
  }