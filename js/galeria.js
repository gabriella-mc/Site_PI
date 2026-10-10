
const categorias = ["Cidade", "Guerra e Sertanejos", "Madeira", "Ferrovia", "Memória", "Religiosidade"];


const fotos = [
  { src: "img/galeria/09-caboclos-cacador.jpg", titulo: "Casas de madeira em Caçador", info: "Moradias da época, com a mata ao fundo.", cat: "Cidade" },
  { src: "img/galeria/11-cacador-cidade-vista-de-cima.jpg", titulo: "Caçador vista de cima", info: "Vista geral da antiga vila de Caçador.", cat: "Cidade" },
  { src: "img/galeria/12-cacador-cidade.jpg", titulo: "Rua da antiga vila", info: "Rua de terra com um grupo ao fundo.", cat: "Cidade" },
  { src: "img/galeria/22-foto-de-cacador-as-margens-do-rio.jpg", titulo: "Caçador às margens do rio", info: "Embarcação e estrutura de madeira no rio.", cat: "Cidade" },
  { src: "img/galeria/39-tropeiros-em-cacador.jpg", titulo: "Tropeiros em Caçador", info: "Tropa de mulas por uma estrada de terra.", cat: "Cidade" },
  { src: "img/galeria/05-aviacao-na-guerra-do-contestado.jpg", titulo: "A aviação na Guerra do Contestado", info: "Militares diante de uma aeronave.", cat: "Guerra e Sertanejos" },
  { src: "img/galeria/13-casamento-na-epoca-do-contestado.jpg", titulo: "Casamento na época do Contestado", info: "Moradores reunidos diante da capela.", cat: "Guerra e Sertanejos" },
  { src: "img/galeria/16-contestado-santa-catarina.jpg", titulo: "Contestado em Santa Catarina", info: "Grupo reunido em meio às árvores.", cat: "Guerra e Sertanejos" },
  { src: "img/galeria/24-jaguncos-e-caboclos-de-cacador.jpg", titulo: "Jagunços e caboclos de Caçador", info: "Grupo diante de uma casa de madeira.", cat: "Guerra e Sertanejos" },
  { src: "img/galeria/25-jagunco.jpg", titulo: "Jagunço", info: "Homem a cavalo diante de um estúdio fotográfico.", cat: "Guerra e Sertanejos" },
  { src: "img/galeria/26-jaguncos.jpg", titulo: "Jagunços", info: "Grupo posando diante de uma casa de madeira.", cat: "Guerra e Sertanejos" },
  { src: "img/galeria/02-araucarias-passando-pelo-rio-cacador.jpg", titulo: "Araucárias passando pelo rio Caçador", info: "Toras carregadas em vagões de trem.", cat: "Madeira" },
  { src: "img/galeria/03-araucarias.jpg", titulo: "Araucárias derrubadas", info: "Troncos no chão após a derrubada da mata nativa.", cat: "Madeira" },
  { src: "img/galeria/04-avanco-tecnologico-no-contestado.jpg", titulo: "Caminhão carregando tora", info: "Transporte de toras por caminhão.", cat: "Madeira" },
  { src: "img/galeria/08-caboclo-no-trabalho.jpg", titulo: "Caboclo no trabalho", info: "Carreta puxada por animais com uma grande tora.", cat: "Madeira" },
  { src: "img/galeria/10-caboclos-trabalhando.jpg", titulo: "Caboclos trabalhando", info: "Trabalhadores sobre toras carregadas em vagões.", cat: "Madeira" },
  { src: "img/galeria/18-empresario-da-lumber.jpg", titulo: "Empresário da Lumber", info: "Homens posam sobre toras empilhadas.", cat: "Madeira" },
  { src: "img/galeria/19-extracao-da-mata-nativa.jpg", titulo: "Extração da mata nativa", info: "Trabalhadores em meio às araucárias.", cat: "Madeira" },
  { src: "img/galeria/20-fabrica-da-lumber.jpg", titulo: "Fábrica da Lumber", info: "Interior da serraria, com maquinário e operários.", cat: "Madeira" },
  { src: "img/galeria/35-trabalho-que-a-lumber-fez.jpg", titulo: "Pilhas de madeira da Lumber", info: "Madeira serrada empilhada ao longo dos trilhos.", cat: "Madeira" },
  { src: "img/galeria/36-trem-passando-entre-a-madeira.jpg", titulo: "Trem entre a madeira", info: "Locomotiva circulando entre pilhas de madeira.", cat: "Madeira" },
  { src: "img/galeria/01-apolice-da-brc.jpg", titulo: "Apólice da Brazil Railway Company", info: "Título da empresa ligada à ferrovia na região.", cat: "Ferrovia" },
  { src: "img/galeria/17-dentro-da-maria-fumaca.jpg", titulo: "Dentro da Maria Fumaça", info: "Interior de um vagão ornamentado.", cat: "Ferrovia" },
  { src: "img/galeria/29-maria-fumaca-decorada-para-o-natal.jpg", titulo: "Maria Fumaça decorada", info: "Vagão enfeitado com guirlandas.", cat: "Ferrovia" },
  { src: "img/galeria/37-trem-tombado.jpg", titulo: "Trem tombado", info: "Locomotiva tombada e homens ao redor.", cat: "Ferrovia" },
  { src: "img/galeria/38-trilhos.jpg", titulo: "Trilhos", info: "Linha férrea ao lado de um pátio de madeira.", cat: "Ferrovia" },
  { src: "img/galeria/06-bonecos-de-personagens-da-guerra-do-contestado.jpg", titulo: "Bonecos dos personagens da guerra", info: "Exposição sobre a Guerra do Contestado.", cat: "Memória" },
  { src: "img/galeria/07-bonecos-de-personagens-do-contestado.jpg", titulo: "Bonecos de personagens do Contestado", info: "Figuras de sertanejos e líderes em exposição.", cat: "Memória" },
  { src: "img/galeria/14-cemiterio-do-contestado.jpg", titulo: "Cemitério do Contestado", info: "Portal de entrada do cemitério.", cat: "Memória" },
  { src: "img/galeria/15-contestado-war02.jpg", titulo: "Mapa em relevo do Contestado", info: "Maquete dos rios da região, com legenda de localidades.", cat: "Memória" },
  { src: "img/galeria/28-kirk-monument-cacador-1.jpg", titulo: "Placa do Campo da Aviação", info: "Placa sobre o Campo da Aviação de Rio Caçador.", cat: "Memória" },
  { src: "img/galeria/31-museu-historico-e-antropologico-da-regiao-do-conte.jpg", titulo: "Museu Histórico e Antropológico", info: "Antiga estação e monumento, em Caçador.", cat: "Memória" },
  { src: "img/galeria/32-placa-no-memorial-do-monge-jose-maria.jpg", titulo: "Memorial do monge José Maria", info: "Placa com versos de Vicente Telles.", cat: "Memória" },
  { src: "img/galeria/33-placa-sobre-a-vala-dos-21.jpg", titulo: "Placa da Vala dos 21", info: "Placa em meio à mata, no local da Vala dos 21.", cat: "Memória" },
  { src: "img/galeria/21-figuras-religiosas-de-influencia-no-contestado.jpg", titulo: "Figuras religiosas do Contestado", info: "Imagens de santos e figuras da devoção popular.", cat: "Religiosidade" },
  { src: "img/galeria/23-homenagem-maria-rosa.jpg", titulo: "Homenagem a Maria Rosa", info: "Marco no local onde ela viveu. Crédito: Nilson Cesar Fraga.", cat: "Religiosidade" },
  { src: "img/galeria/27-joana-d-arc-do-contestado.jpg", titulo: "A Joana d'Arc do Contestado", info: "Representação artística. Crédito: Museu Willy Zumblick.", cat: "Religiosidade" },
  { src: "img/galeria/30-monge-joao-maria.jpg", titulo: "Monge João Maria", info: "Mural que retrata o monge.", cat: "Religiosidade" },
  { src: "img/galeria/34-reduto-caraguata.jpg", titulo: "Reduto Caraguatá", info: "Imagem de 1914 do reduto. Crédito: Nilson Cesar Fraga.", cat: "Religiosidade" }
];

(function () {
  const POR_PAGINA = 12;               // quantas fotos aparecem por vez (mude se quiser)
  let filtro = "Todas", visiveis = [], atual = 0, x0 = null, limite = POR_PAGINA;
  const maisBtn = document.getElementById("gal-mais");
  const contagem = document.getElementById("gal-contagem");
  const grade = document.getElementById("gal-grade");
  const lb = document.getElementById("gal-lb");
  const lbImg = document.getElementById("gal-img");
  const filtrosEl = document.getElementById("gal-filtros");

  fotos.forEach(f => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "gal-item";
    b.setAttribute("aria-label", "Ampliar " + f.titulo);
    b.innerHTML = '<img src="' + f.src.replace("img/galeria/", "img/galeria/thumb/") + '" alt="' + f.titulo + '" loading="lazy"><span>' + f.titulo + "</span>";
    b.addEventListener("click", () => abrir(f));
    grade.appendChild(b);
    f.el = b;
  });

  ["Todas", ...categorias].forEach(nome => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "gal-pilula";
    b.textContent = nome;
    b.setAttribute("aria-pressed", nome === filtro);
    b.addEventListener("click", () => {
      filtro = nome;
      limite = POR_PAGINA;
      filtrosEl.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", x === b));
      aplicar();
    });
    filtrosEl.appendChild(b);
  });

  function aplicar() {
    visiveis = fotos.filter(f => filtro === "Todas" || f.cat === filtro);
    desenhar();
  }
  // mostra só as primeiras "limite" fotos do filtro atual
  function desenhar() {
    const mostradas = visiveis.slice(0, limite);
    fotos.forEach(f => (f.el.hidden = !mostradas.includes(f)));
    contagem.textContent = "Mostrando " + mostradas.length + " de " + visiveis.length + " fotos";
    maisBtn.hidden = mostradas.length >= visiveis.length;
  }
  maisBtn.addEventListener("click", () => { limite += POR_PAGINA; desenhar(); });
  aplicar();

  function mostrar() {
    if (atual >= limite) { limite = atual + 1; desenhar(); }
    const f = visiveis[atual];
    lbImg.src = f.src;
    lbImg.alt = f.titulo;
    document.getElementById("gal-titulo").textContent = f.titulo;
    document.getElementById("gal-info").textContent = f.info + " (" + (atual + 1) + " de " + visiveis.length + ")";
    new Image().src = visiveis[(atual + 1) % visiveis.length].src; // pré-carrega a próxima
  }
  function abrir(f) {
    atual = visiveis.indexOf(f);
    mostrar();
    lb.classList.add("aberto");
    document.body.style.overflow = "hidden";
    document.getElementById("gal-fechar").focus();
  }
  function fechar() {
    lb.classList.remove("aberto");
    document.body.style.overflow = "";
    visiveis[atual].el.focus();
  }
  function navegar(p) {
    atual = (atual + p + visiveis.length) % visiveis.length;
    mostrar();
  }

  document.getElementById("gal-fechar").onclick = fechar;
  document.getElementById("gal-ant").onclick = () => navegar(-1);
  document.getElementById("gal-prox").onclick = () => navegar(1);
  lb.addEventListener("click", e => { if (e.target === lb) fechar(); });
  document.addEventListener("keydown", e => {
    if (!lb.classList.contains("aberto")) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowLeft") navegar(-1);
    if (e.key === "ArrowRight") navegar(1);
  });
  lb.addEventListener("touchstart", e => (x0 = e.touches[0].clientX), { passive: true });
  lb.addEventListener("touchend", e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) navegar(dx < 0 ? 1 : -1);
    x0 = null;
  });
})();
