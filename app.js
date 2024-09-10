function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");
  
    // Obtém o valor do campo de pesquisa e converte para minúsculas
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  
    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um estado brasileiro.</p>";
      return;
    }
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
  
    // Itera sobre cada dado da lista de dados (assumindo que 'dados' existe)
    for (let dado of dados) {
      // Verifica se o título do dado contém a palavra pesquisada (em minúsculas)
      if (dado.titulo.toLowerCase().includes(campoPesquisa)) {
        resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais informações</a>
          </div>
        `;
      }
    }
  
    // Verifica se foram encontrados resultados
    if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>";
    }
  
    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
  }
  