// Dados extraídos do Kalodata (TikTok Shop BR) — Filtro: Fonte de receita (conteúdo) = Live
// Período: 15/08/2026 ~ 13/09/2026 (últimos 30 dias)
const BRAND = "Kalolive";
const LAST_UPDATE = "14/09/2026";
const PERIOD = "15/08/2026 ~ 13/09/2026";

const CATEGORIES = [
  {
    id: "geral",
    label: "Mais Vendidos (Geral)",
    emoji: "🔥",
    products: [
      { rank:1, name:"IRISOY Limpador a Vapor 2500W 220V Profissional", price:"R$207,65 - R$218,58", gmv:"R$2,40 M", gmvValue:2400000, items:"14,51 mil", itemsValue:14510, img:"geral_1.png" },
      { rank:2, name:"Bicicleta Bike Ergométrica Spinning Academia", price:"R$454,90", gmv:"R$2,38 M", gmvValue:2380000, items:"5,98 mil", itemsValue:5980, img:"geral_2.png" },
      { rank:3, name:"Jogo De Panela Omega Cerâmica Premium 20 Peças", price:"R$489,24", gmv:"R$2,18 M", gmvValue:2180000, items:"4,79 mil", itemsValue:4790, img:"geral_3.png" },
      { rank:4, name:"GOKOCO Escova Modeladora de Íons Negativo", price:"R$175,01", gmv:"R$2,04 M", gmvValue:2040000, items:"12,63 mil", itemsValue:12630, img:"geral_4.png" },
      { rank:5, name:"Jogo de Panelas de Cerâmica Antiaderente 20 Peças", price:"R$596,40", gmv:"R$1,86 M", gmvValue:1860000, items:"3,7 mil", itemsValue:3700, img:"geral_5.png" },
      { rank:6, name:"Calça Pantalona Cintura Alta com Amarração Elástica", price:"R$62,99", gmv:"R$1,85 M", gmvValue:1850000, items:"32,51 mil", itemsValue:32510, img:"geral_6.png" },
      { rank:7, name:"Micro-ondas Mondial Mo-01-21-b 21 Litros", price:"R$498,48", gmv:"R$1,62 M", gmvValue:1620000, items:"3,71 mil", itemsValue:3710, img:"geral_7.png" },
      { rank:8, name:"Calça Jeans Feminina Wide Leg Cintura Alta", price:"R$71,01", gmv:"R$1,49 M", gmvValue:1490000, items:"28,94 mil", itemsValue:28940, img:"geral_8.png" },
      { rank:9, name:"2026 Tablet Ultimate/I17 Pro + Mouse + Teclado", price:"R$685,00", gmv:"R$1,31 M", gmvValue:1310000, items:"1,95 mil", itemsValue:1950, img:"geral_9.png" },
      { rank:10, name:"Babuche Feminina EVA com Enfeites de Strass", price:"R$22,49", gmv:"R$1,24 M", gmvValue:1240000, items:"53,23 mil", itemsValue:53230, img:"geral_10.png" }
    ]
  },
  {
    id: "beleza",
    label: "Beleza — Skincare",
    emoji: "✨",
    products: [
      { rank:1, name:"Hidrabene Protetor Solar Facial FPS 70 Uniformizante", price:"R$27,68", gmv:"R$631,71 mil", gmvValue:631710, items:"26,27 mil", itemsValue:26270, img:"beleza_1.png" },
      { rank:2, name:"Sérum GHK-Cu + PDRN + Gua Sha de Brinde", price:"R$177,90", gmv:"R$619,53 mil", gmvValue:619530, items:"3,75 mil", itemsValue:3750, img:"beleza_2.png" },
      { rank:3, name:"GHK Zencial Envy Skin — Sérum com Peptídeos", price:"R$84,68", gmv:"R$508,29 mil", gmvValue:508290, items:"7,5 mil", itemsValue:7500, img:"beleza_3.png" },
      { rank:4, name:"Kit Clareador Facial + Protetor Solar Facial FPS", price:"R$63,68", gmv:"R$382,64 mil", gmvValue:382640, items:"6,46 mil", itemsValue:6460, img:"beleza_4.png" },
      { rank:5, name:"Protetor Solar Facial Principia Toque Seco", price:"R$44,10", gmv:"R$376,32 mil", gmvValue:376320, items:"9,17 mil", itemsValue:9170, img:"beleza_5.png" },
      { rank:6, name:"Kit Glow Kokeshi Colágeno Anti-Olheiras Hidratante", price:"R$75,22", gmv:"R$366,14 mil", gmvValue:366140, items:"6,65 mil", itemsValue:6650, img:"beleza_6.png" },
      { rank:7, name:"Cicatribem Clareador Dérmico 60g — Hidratante", price:"R$117,91", gmv:"R$288,90 mil", gmvValue:288900, items:"3,06 mil", itemsValue:3060, img:"beleza_7.png" },
      { rank:8, name:"Protetor Solar L'Oréal Paris Solar Expertise", price:"R$51,29", gmv:"R$234,83 mil", gmvValue:234830, items:"6,34 mil", itemsValue:6340, img:"beleza_8.png" },
      { rank:9, name:"Clareador Dérmico Cicatribem 60g — Compre 2", price:"R$270,82", gmv:"R$216,90 mil", gmvValue:216900, items:"947", itemsValue:947, img:"beleza_9.png" },
      { rank:10, name:"Principia Kit Anti-Acne Essencial GH-01 Gel", price:"R$147,50", gmv:"R$215,14 mil", gmvValue:215140, items:"1,54 mil", itemsValue:1540, img:"beleza_10.png" }
    ]
  },
  {
    id: "vestidos",
    label: "Moda — Vestidos Femininos",
    emoji: "👗",
    products: [
      { rank:1, name:"Vestido em Alfaiataria Nobre Contraste (P ao G3)", price:"R$148,00", gmv:"R$713,56 mil", gmvValue:713560, items:"11,73 mil", itemsValue:11730, img:"vestidos_1.png" },
      { rank:2, name:"Vestido Regata Longo Estonado com Bolso", price:"R$56,07", gmv:"R$540,39 mil", gmvValue:540390, items:"10,62 mil", itemsValue:10620, img:"vestidos_2.png" },
      { rank:3, name:"Vestido Chemise Jeans Tencel Moda Blogueira", price:"R$62,99", gmv:"R$368,78 mil", gmvValue:368780, items:"6,15 mil", itemsValue:6150, img:"vestidos_3.png" },
      { rank:4, name:"Vestido Feminino Longuete Couro Regata", price:"R$29,24", gmv:"R$240,31 mil", gmvValue:240310, items:"6,99 mil", itemsValue:6990, img:"vestidos_4.png" },
      { rank:5, name:"Vestido Longo Feminino Elegante Taffeta (P ao G3)", price:"R$59,99", gmv:"R$225,59 mil", gmvValue:225590, items:"4,22 mil", itemsValue:4220, img:"vestidos_5.png" },
      { rank:6, name:"Vestido com Bolsos Mídi Manga Japonesa", price:"R$35,99", gmv:"R$189,69 mil", gmvValue:189690, items:"5,51 mil", itemsValue:5510, img:"vestidos_6.png" },
      { rank:7, name:"Vestido Capa Longo com Fenda Lateral — Festa", price:"R$65,69", gmv:"R$189,02 mil", gmvValue:189020, items:"2,89 mil", itemsValue:2890, img:"vestidos_7.png" },
      { rank:8, name:"Blusa de Moletom Feminina Gola Alta com Zíper", price:"R$54,97", gmv:"R$187,11 mil", gmvValue:187110, items:"3,27 mil", itemsValue:3270, img:"vestidos_8.png" },
      { rank:9, name:"Vestido Longo Feminino Premium Santorini", price:"R$54,49", gmv:"R$180,13 mil", gmvValue:180130, items:"2,95 mil", itemsValue:2950, img:"vestidos_9.png" },
      { rank:10, name:"Vestido Midi Feminino em Linho Alfaiataria Boho", price:"R$62,94", gmv:"R$170,31 mil", gmvValue:170310, items:"2,63 mil", itemsValue:2630, img:"vestidos_10.png" }
    ]
  },
  {
    id: "casa",
    label: "Casa — Têxteis Domésticos",
    emoji: "🏠",
    products: [
      { rank:1, name:"Tapete Sala Veludo Estampado Flannel 2,00x1,30", price:"R$59,92", gmv:"R$743,76 mil", gmvValue:743760, items:"14,81 mil", itemsValue:14810, img:"casa_1.png" },
      { rank:2, name:"Tapete 3,00x2,00m Felpudo Macio Super Confortável", price:"R$124,90", gmv:"R$432,10 mil", gmvValue:432100, items:"3,21 mil", itemsValue:3210, img:"casa_2.png" },
      { rank:3, name:"Cortina Gaze de Linho com Forro Blackout", price:"R$117,90", gmv:"R$272,35 mil", gmvValue:272350, items:"2,37 mil", itemsValue:2370, img:"casa_3.png" },
      { rank:4, name:"Tapete 100x150cm Sala/Quarto Felpudo", price:"R$95,10", gmv:"R$207,37 mil", gmvValue:207370, items:"5,64 mil", itemsValue:5640, img:"casa_4.png" },
      { rank:5, name:"Tapete Peludo Felpudo de Sala ou Quarto Luxo", price:"R$71,91", gmv:"R$202,73 mil", gmvValue:202730, items:"3,3 mil", itemsValue:3300, img:"casa_5.png" },
      { rank:6, name:"Tapete 2x1,50 Felpudo para Sala Antiderrapante", price:"R$59,92", gmv:"R$200,15 mil", gmvValue:200150, items:"4 mil", itemsValue:4000, img:"casa_6.png" },
      { rank:7, name:"Passadeira Emborrachada para Cozinha (2 Peças)", price:"R$20,69", gmv:"R$147,05 mil", gmvValue:147050, items:"7,3 mil", itemsValue:7300, img:"casa_7.png" },
      { rank:8, name:"Cortina Blackout / Blecaute em Tecido Corta Luz", price:"R$22,70 - R$193,70", gmv:"R$145,90 mil", gmvValue:145900, items:"8,89 mil", itemsValue:8890, img:"casa_8.png" },
      { rank:9, name:"Tapete 3,00x2,00m Felpudo Macio Super Confortável", price:"R$124,90", gmv:"R$145,72 mil", gmvValue:145720, items:"1,25 mil", itemsValue:1250, img:"casa_9.png" },
      { rank:10, name:"Kit 2 Mantas 3,00x1,80m para Sofá King Luxo", price:"R$64,39", gmv:"R$137,54 mil", gmvValue:137540, items:"2,24 mil", itemsValue:2240, img:"casa_10.png" }
    ]
  },
  {
    id: "bijuterias",
    label: "Acessórios — Bijuterias",
    emoji: "💎",
    products: [
      { rank:1, name:"Kit 2 Colares Bolinhas Banhado a Prata + Coração", price:"R$9,87", gmv:"R$352,57 mil", gmvValue:352570, items:"33,31 mil", itemsValue:33310, img:"bijuterias_1.png" },
      { rank:2, name:"Kit 4 Pulseiras Femininas Banhadas a Prata 925", price:"R$13,20", gmv:"R$225,64 mil", gmvValue:225640, items:"16,45 mil", itemsValue:16450, img:"bijuterias_2.png" },
      { rank:3, name:"Colar Feminino Pingente Retangular Inicial", price:"R$18,31", gmv:"R$138,09 mil", gmvValue:138090, items:"7,33 mil", itemsValue:7330, img:"bijuterias_3.png" },
      { rank:4, name:"Kit 2 Colares de Letra Banhados a Ouro 18k", price:"R$42,90", gmv:"R$136,10 mil", gmvValue:136100, items:"4,51 mil", itemsValue:4510, img:"bijuterias_4.png" },
      { rank:5, name:"Conjunto Colar e Pulseira Feminina Dourado", price:"R$21,24", gmv:"R$101,58 mil", gmvValue:101580, items:"5,91 mil", itemsValue:5910, img:"bijuterias_5.png" },
      { rank:6, name:"Conjunto Feminino Dourado 3 Peças com Colar", price:"R$13,63", gmv:"R$93,41 mil", gmvValue:93410, items:"6,78 mil", itemsValue:6780, img:"bijuterias_6.png" },
      { rank:7, name:"Brinco Trio Feminino Argola com Zircônia Cravejada", price:"R$16,99", gmv:"R$88,95 mil", gmvValue:88950, items:"5,27 mil", itemsValue:5270, img:"bijuterias_7.png" },
      { rank:8, name:"Conjunto Coração Encantado Semijoia Banhada", price:"R$26,99", gmv:"R$87,18 mil", gmvValue:87180, items:"4,05 mil", itemsValue:4050, img:"bijuterias_8.png" },
      { rank:9, name:"Colar Riviera com Pingente Letra Cravejado", price:"R$73,96", gmv:"R$86,07 mil", gmvValue:86070, items:"1,24 mil", itemsValue:1240, img:"bijuterias_9.png" },
      { rank:10, name:"Mix 4 Pulseiras Folheadas a Prata 925", price:"R$13,70", gmv:"R$83,18 mil", gmvValue:83180, items:"5,97 mil", itemsValue:5970, img:"bijuterias_10.png" }
    ]
  },
  {
    id: "eletronicos",
    label: "Eletrônicos — Acessórios Universais",
    emoji: "🔌",
    products: [
      { rank:1, name:"Bateria Recarregável 48V/96V Universal 2026", price:"R$21,80", gmv:"R$36,48 mil", gmvValue:36480, items:"1,8 mil", itemsValue:1800, img:"eletronicos_1.png" },
      { rank:2, name:"JAMAY Ventilador Portátil de Mão Dobrável F5 Pro", price:"R$107,50", gmv:"R$27,47 mil", gmvValue:27470, items:"333", itemsValue:333, img:"eletronicos_2.png" },
      { rank:3, name:"Inversor de Bateria de Lítio Ryoku Plugue Duplo", price:"R$92,16", gmv:"R$25,50 mil", gmvValue:25500, items:"372", itemsValue:372, img:"eletronicos_3.png" },
      { rank:4, name:"Kit Carregador de Pilhas AA/AAA/Bateria 9V", price:"R$24,29", gmv:"R$19,69 mil", gmvValue:19690, items:"890", itemsValue:890, img:"eletronicos_4.png" },
      { rank:5, name:"Mini Aspirador de Pó 3 em 1 a Vácuo USB Portátil", price:"R$22,89", gmv:"R$16,27 mil", gmvValue:16270, items:"805", itemsValue:805, img:"eletronicos_5.png" },
      { rank:6, name:"Ventilador Soprador de Ar Turbo 130.000 RPM", price:"R$33,19", gmv:"R$15,75 mil", gmvValue:15750, items:"378", itemsValue:378, img:"eletronicos_6.png" },
      { rank:7, name:"Internet via Satélite Starlink Mini", price:"R$717,99", gmv:"R$15,26 mil", gmvValue:15260, items:"19", itemsValue:19, img:"eletronicos_7.png" },
      { rank:8, name:"Kit Youtuber Tripé Vlog Live Suporte para Celular", price:"R$21,99", gmv:"R$15,13 mil", gmvValue:15130, items:"771", itemsValue:771, img:"eletronicos_8.png" },
      { rank:9, name:"Ventilador Climatizador Umidificador de Ar Portátil", price:"R$37,79", gmv:"R$12,05 mil", gmvValue:12050, items:"301", itemsValue:301, img:"eletronicos_9.png" },
      { rank:10, name:"Relógio LED Unissex com Luzes", price:"R$12,90", gmv:"R$10,95 mil", gmvValue:10950, items:"852", itemsValue:852, img:"eletronicos_10.png" }
    ]
  }
];

// "Teste na Live" — produtos que ainda não têm GMV alto, mas estão com taxa de
// crescimento de receita explosiva (>999,9% no período) — ou seja, começaram a
// decolar agora. A ideia: testar esses na live antes de todo mundo, enquanto
// ainda dá pra pegar a onda subindo.
const EMERGING = [
  { rank:1, name:"Chave de Impacto sem Fio de Íon de Lítio 48V", price:"R$137,00", gmv:"R$370,98 mil", gmvValue:370980, items:"2,79 mil", itemsValue:2790, growthRate:"+999,9%", img:"emergentes_1.jpg" },
  { rank:2, name:"Carrinho de Rolimã Super Car (até 100kg)", price:"R$294,99", gmv:"R$274,98 mil", gmvValue:274980, items:"1,56 mil", itemsValue:1560, growthRate:"+999,9%", img:"emergentes_4.jpg" },
  { rank:3, name:"Kit Com 4 Travesseiros Plumas de Ganso Sintética", price:"R$53,70", gmv:"R$94,81 mil", gmvValue:94810, items:"2,45 mil", itemsValue:2450, growthRate:"+999,9%", img:"emergentes_2.jpg" },
  { rank:4, name:"Vestido Saída de Praia Longa com Fendas", price:"R$22,01", gmv:"R$58,02 mil", gmvValue:58020, items:"3,28 mil", itemsValue:3280, growthRate:"+999,9%", img:"emergentes_3.jpg" }
];
