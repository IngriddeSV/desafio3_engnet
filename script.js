// Endpoints oficiais da API de Localidades do IBGE
const API_UFS =
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome";

// Elementos do DOM
const accordionBtn = document.getElementById("accordion-btn");
const accordionSection = document.querySelector(".accordion-section");
const ufsContainer = document.getElementById("ufs-container");
const tableBody = document.getElementById("table-body");
const ufIdInput = document.getElementById("uf-id-input");
const cardContador = document.getElementById("total-cidades");
const searchInput = document.getElementById("municipio-search");

let todasAsCidadesDaUF = [];
let listaCompletaUfs = [];
//Abrir/Fechar
accordionBtn.addEventListener("click", () => {
  accordionSection.classList.toggle("active");
});

async function carregarUFs() {
  try {
    const response = await fetch(API_UFS);
    listaCompletaUfs = await response.json();

    ufsContainer.innerHTML = "";

    listaCompletaUfs.forEach((uf) => {
      const btn = document.createElement("button");
      btn.classList.add("uf-btn");
      btn.innerText = uf.sigla;
      btn.title = uf.nome;

      btn.addEventListener("click", () =>
        selecionarUF(uf.id, uf.nome, uf.sigla),
      );
      ufsContainer.appendChild(btn);
    });
  } catch (error) {
    console.error("Erro na comunicação com a API do IBGE:", error);
    ufsContainer.innerHTML = "<span>Erro ao carregar os estados.</span>";
  }
}

ufIdInput.addEventListener("input", (e) => {
  const valorDigitado = e.target.value.trim();

  if (valorDigitado === "") {
    cardContador.innerText = "___";
    document.getElementById("accordion-title").innerText =
      "SELECIONE UMA UNIDADE FEDERATIVA";
    tableBody.innerHTML = `<tr><td colspan="3" class="empty-state">Nenhuma UF selecionada ou digitada.</td></tr>`;
    searchInput.disabled = true;
    searchInput.value = "";
    return;
  }

  // Procura se o ID digitado corresponde a alguma UF
  const ufEncontrada = listaCompletaUfs.find(
    (uf) => String(uf.id) === valorDigitado,
  );

  if (ufEncontrada) {
    buscarMunicipios(ufEncontrada.id, ufEncontrada.nome, ufEncontrada.sigla);
  } else {
    cardContador.innerText = "___";
    document.getElementById("accordion-title").innerText =
      "ID NÃO ENCONTRADO...";
    tableBody.innerHTML = `<tr><td colspan="3" class="empty-state">Digite um ID de UF válido (Ex: 35 para SP, 33 para RJ).</td></tr>`;
    searchInput.disabled = true;
  }
});

function selecionarUF(id, nome, sigla) {
  ufIdInput.value = id;
  accordionSection.classList.remove("active");
  buscarMunicipios(id, nome, sigla);
}

// buscar municípios
async function buscarMunicipios(id, nome, sigla) {
  document.getElementById("accordion-title").innerText = `${nome} - ${sigla}`;
  tableBody.innerHTML = `<tr><td colspan="3" class="empty-state">Buscando municípios do estado de ${sigla}...</td></tr>`;

  try {
    const urlMunicipios = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${id}/municipios`;
    const response = await fetch(urlMunicipios);
    todasAsCidadesDaUF = await response.json();

    cardContador.innerText = todasAsCidadesDaUF.length;
    searchInput.disabled = false;
    searchInput.value = "";

    renderizarTabela(todasAsCidadesDaUF);
  } catch (error) {
    console.error("Falha ao consultar municípios da UF:", error);
    tableBody.innerHTML = `<tr><td colspan="3" class="empty-state">Erro ao carregar dados do IBGE.</td></tr>`;
  }
}

// linhas da tabela
function renderizarTabela(listaCidades) {
  if (listaCidades.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="3" class="empty-state">Nenhum município corresponde ao filtro.</td></tr>`;
    return;
  }

  tableBody.innerHTML = "";

  listaCidades.forEach((cidade) => {
    const tr = document.createElement("tr");

    const localizacaoBusca = encodeURIComponent(`${cidade.nome}, Brasil`);
    const linkMaps = `https://www.google.com/maps/search/?api=1&query=${localizacaoBusca}`;

    tr.innerHTML = `
            <td>${cidade.id}</td>
            <td>${cidade.nome}</td>
            <td>
                <a href="${linkMaps}" target="_blank" class="map-link">
                    <i class="fa-solid fa-map-location-dot"></i> Ver no Mapa
                </a>
            </td>
        `;
    tableBody.appendChild(tr);
  });
}

// FILTRO LOCAL
searchInput.addEventListener("input", (e) => {
  const termoBusca = e.target.value.toLowerCase();

  const cidadesFiltradas = todasAsCidadesDaUF.filter((cidade) => {
    return cidade.nome.toLowerCase().includes(termoBusca);
  });

  renderizarTabela(cidadesFiltradas);
});

// Inicialização
carregarUFs();
