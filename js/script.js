const timelineData = [
  {
    year: "10 de Maio de 1910",
    title: "Chegada da Ferrovia e Início do Povoamento",
    summary: "Inauguração da Estação Rio Caçador pela Brazil Railway Company.",
    details: "A construção da Estrada de Ferro São Paulo-Rio Grande atraiu imigrantes e colonos para a região de Rio Caçador. A desapropriação de terras ao longo dos trilhos pela empresa multinacional gerou grande tensão com os posseiros locais, criando o ambiente favorável ao conflito."
  },
  {
    year: "Outubro de 1912",
    title: "Eclosão do Conflito no Irani",
    summary: "Início dos confrontos diretos na região contestada.",
    details: "O combate em Irani resulta na morte do Monge José Maria e do Coronel João Gualberto. Os sertanejos se dispersam, mas a fé messiânica e a revolta contra os coronéis e a ferrovia espalham o movimento por toda a região do Vale do Contestado, incluindo as áreas de Caçador."
  },
  {
    year: "1913 – 1914",
    title: "Formação de Reduto e Dispersão de Posseiros",
    summary: "Tensão direta nas propriedades e estações de Caçador.",
    details: "A região entre Rio Caçador e Taquaruçu tornou-se rota constante de sertanejos e tropas do governo. Famílias locais viram-se divididas entre o apoio aos rebeldes (reclamando o direito à terra) e o auxílio às forças legalistas."
  },
  {
    year: "Setembro de 1914",
    title: "Ataques à Ferrovia e Estação de Rio Caçador",
    summary: "Ações coordenadas de rebeldes contra o transporte oficial.",
    details: "Sertanejos efetuam ataques a trechos da via férrea e dependências da empresa no trecho de Rio Caçador, interrompendo o tráfego de trens militares e suprimentos do Exército Brasileiro."
  },
  {
    year: "1915",
    title: "Ofensiva Militar do General Setembrino de Carvalho",
    summary: "Uso de tropas federais e cerco aos redutos sertanejos.",
    details: "Forças federais intensificam a repressão na área de Caçador com artilharia pesada e apoio da infantaria, cercando os redutos rebeldes vizinhos até a rendição e destruição das comunidades messiânicas."
  },
  {
    year: "Outubro de 1916",
    title: "Acordo de Limites e Fim das Hostilidades",
    summary: "Assinatura do tratado entre Santa Catarina e Paraná.",
    details: "Com a prisão do líder Adeodato e a pacificação forçada da região, o acordo de limites define a posse definitiva do território para Santa Catarina. A região de Rio Caçador inicia seu processo de reconstrução, focando no ciclo da madeira."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  const timelineContainer = document.getElementById('timeline');
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modalTitle');
  const modalDate = document.getElementById('modalDate');
  const modalDesc = document.getElementById('modalDesc');
  const closeModal = document.getElementById('closeModal');

  function renderTimeline() {
    timelineData.forEach((item, index) => {
      const side = index % 2 === 0 ? 'left' : 'right';

      const itemDiv = document.createElement('div');
      itemDiv.className = `timeline-item ${side}`;
      
      itemDiv.innerHTML = `
        <div class="content">
          <span class="date">${item.year}</span>
          <h3 class="title">${item.title}</h3>
          <p class="description">${item.summary}</p>
        </div>
      `;

      itemDiv.addEventListener('click', () => {
        modalDate.textContent = item.year;
        modalTitle.textContent = item.title;
        modalDesc.textContent = item.details;
        modal.style.display = 'flex';
        modal.setAttribute('aria-hidden', 'false');
      });

      timelineContainer.appendChild(itemDiv);
    });
  }

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
    }
  });

  renderTimeline();
});