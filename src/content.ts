/**
 * Conteúdo central da Cantina Nô.
 * Todo texto, links, marcadores e caminhos de imagem residem estritamente neste arquivo.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface MenuItem {
  id: string;
  nome: string;
  descricao: string;
  preco: string;
  tags: string[];
}

export interface MenuCategory {
  id: string;
  nome: string;
  descricao: string;
  itens: MenuItem[];
}

export interface ImageAsset {
  src: string;
  alt: string;
  aspectRatio: '4/3' | '3/4' | '16/9';
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    skipLinkText: string;
  };
  header: {
    enabled: boolean;
    marca: string;
    subtituloMarca: string;
    nav: NavLink[];
    primaryAction: {
      label: string;
      href: string;
    };
  };
  hero: {
    enabled: boolean;
    kicker: string;
    title: string;
    description: string;
    primaryAction: {
      label: string;
      href: string;
    };
    secondaryAction: {
      label: string;
      href: string;
    };
    image: ImageAsset;
    selo: {
      texto: string;
      subtexto: string;
    };
  };
  cardapio: {
    enabled: boolean;
    id: string;
    kicker: string;
    titulo: string;
    subtitulo: string;
    avisoAlergenicos: string;
    categorias: MenuCategory[];
  };
  ambiente: {
    enabled: boolean;
    id: string;
    kicker: string;
    titulo: string;
    texto: string;
    destaques: string[];
    galeria: ImageAsset[];
  };
  reservas: {
    enabled: boolean;
    id: string;
    kicker: string;
    titulo: string;
    texto: string;
    aviso: string;
    botoes: {
      whatsapp: {
        label: string;
        href: string;
      };
      telefone: {
        label: string;
        href: string;
        display: string;
      };
    };
  };
  visite: {
    enabled: boolean;
    id: string;
    kicker: string;
    titulo: string;
    endereco: string;
    horarios: Array<{
      dia: string;
      horario: string;
    }>;
    observacao: string;
    mapa: {
      rotulo: string;
      instrucao: string;
    };
  };
  faq: {
    enabled: boolean;
    id: string;
    kicker: string;
    titulo: string;
    subtitulo: string;
    itens: Array<{
      pergunta: string;
      resposta: string;
    }>;
  };
  rodape: {
    enabled: boolean;
    marca: string;
    descricao: string;
    cnpj: string;
    redes: string;
    endereco: string;
    links: NavLink[];
    botaoReduzirAnimacoes: {
      ativoText: string;
      inativoText: string;
    };
    direitos: string;
  };
  depoimentos: {
    enabled: boolean;
    items: unknown[];
  };
}

export const siteContent: SiteContent = {
  meta: {
    title: 'Cantina Nô — Cozinha de Panela e Mesa Compartilhada | [Bairro]',
    description: 'Cantina Nô em [cidade]: comida de panela, forno aceso, mesas compartilhadas e cardápio de estação. [endereço].',
    skipLinkText: 'Pular para o conteúdo principal',
  },
  header: {
    enabled: true,
    marca: 'Cantina Nô',
    subtituloMarca: 'Cozinha de panela',
    nav: [
      { label: 'Cardápio', href: '#cardapio' },
      { label: 'Ambiente', href: '#ambiente' },
      { label: 'Reservas', href: '#reservas' },
      { label: 'Visite', href: '#visite' },
      { label: 'Perguntas', href: '#faq' },
    ],
    primaryAction: {
      label: 'Reservar',
      href: '[link do WhatsApp]',
    },
  },
  hero: {
    enabled: true,
    kicker: 'Cozinha de bairro e mesa compartilhada',
    title: 'Comida quente de panela, forno aceso e lugar à mesa.',
    description: 'Almoço e jantar sem pressa. Pratos feitos no dia para dividir na bancada ou na mesa comprida do salão.',
    primaryAction: {
      label: 'Ver cardápio do dia',
      href: '#cardapio',
    },
    secondaryAction: {
      label: 'Reservar mesa',
      href: '[link do WhatsApp]',
    },
    image: {
      src: '/src/assets/images/hero_mesa_1791491465761.jpg',
      alt: 'Mesa de madeira com panela de ferro com molho quente de tomate, pão rústico assado, ervas frescas e taça sob luz de fim de tarde',
      aspectRatio: '4/3',
    },
    selo: {
      texto: 'Prato do dia',
      subtexto: 'Cozinha de panela',
    },
  },
  cardapio: {
    enabled: true,
    id: 'cardapio',
    kicker: 'Feito no dia',
    titulo: 'O Cardápio da Casa',
    subtitulo: 'Quatro preparos por seção, servidos conforme saem da panela e do forno.',
    avisoAlergenicos: '[Consulte alergênicos com a equipe]',
    categorias: [
      {
        id: 'entradas',
        nome: 'Entradas',
        descricao: 'Pães fatiados na hora, azeite bom e caldos para abrir o apetite.',
        itens: [
          {
            id: 'ent-1',
            nome: 'Pão de fermentação e manteiga batida',
            descricao: 'Fatias rústicas de pão de forno com manteiga levemente salgada.',
            preco: '[R$ —]',
            tags: ['vegetariano', 'contém glúten'],
          },
          {
            id: 'ent-2',
            nome: 'Polenta cremosa de colher',
            descricao: 'Servida ainda fumegante com queijo ralado e ervas da horta.',
            preco: '[R$ —]',
            tags: ['vegetariano', '[confirmar]'],
          },
          {
            id: 'ent-3',
            nome: 'Legumes de panela com ervas frescas',
            descricao: 'Seleção do mercado cozida lentamente no azeite aromático.',
            preco: '[R$ —]',
            tags: ['vegetariano'],
          },
          {
            id: 'ent-4',
            nome: 'Caldo do dia na tigela de barro',
            descricao: 'Preparo diário espesso, servido com torrada de pão da casa.',
            preco: '[R$ —]',
            tags: ['[confirmar]'],
          },
        ],
      },
      {
        id: 'massas',
        nome: 'Massas',
        descricao: 'Farinha, ovos e água abertos na bancada antes do serviço.',
        itens: [
          {
            id: 'mas-1',
            nome: 'Massa da casa ao molho lento',
            descricao: 'Massa fresca puxada no molho apurado por horas na caçarola.',
            preco: '[R$ —]',
            tags: ['contém glúten'],
          },
          {
            id: 'mas-2',
            nome: 'Nhoque rústico de batata',
            descricao: 'Nhoques dourados na frigideira com manteiga tostada e sálvia.',
            preco: '[R$ —]',
            tags: ['vegetariano', 'contém glúten'],
          },
          {
            id: 'mas-3',
            nome: 'Massa recheada da estação',
            descricao: 'Recheio preparado com os vegetais mais frescos da semana.',
            preco: '[R$ —]',
            tags: ['vegetariano', '[confirmar]'],
          },
          {
            id: 'mas-4',
            nome: 'Massa longa ao alho e ervas',
            descricao: 'Massa longa escorrida no ponto com azeite prensado e pimenta suave.',
            preco: '[R$ —]',
            tags: ['vegetariano', 'contém glúten'],
          },
        ],
      },
      {
        id: 'pratos',
        nome: 'Pratos de Panela',
        descricao: 'Panelas de ferro no fogão e carnes ou legumes em cozimento lento.',
        itens: [
          {
            id: 'pra-1',
            nome: 'Cozido de panela de ferro',
            descricao: 'Preparo encorpado com tubérculos cozidos no próprio caldo aromático.',
            preco: '[R$ —]',
            tags: ['[confirmar]'],
          },
          {
            id: 'pra-2',
            nome: 'Assado de forno com raízes da feira',
            descricao: 'Cortes passados no forno com alecrim, louro e legumes dourados.',
            preco: '[R$ —]',
            tags: ['[confirmar]'],
          },
          {
            id: 'pra-3',
            nome: 'Peixe do dia ao forno com ervas',
            descricao: 'Pesca do dia acomodada em cama de cebolas, azeite e folhas frescas.',
            preco: '[R$ —]',
            tags: ['[confirmar]'],
          },
          {
            id: 'pra-4',
            nome: 'Prato da horta com grãos e queijo curado',
            descricao: 'Combinação quente de grãos rústicos, verduras salteadas e queijo.',
            preco: '[R$ —]',
            tags: ['vegetariano'],
          },
        ],
      },
      {
        id: 'sobremesas',
        nome: 'Sobremesas',
        descricao: 'Doçura simples de tacho e forno para encerrar a conversa.',
        itens: [
          {
            id: 'sob-1',
            nome: 'Torta rústica com fruta da estação',
            descricao: 'Massa crocante com recheio de frutas assadas e açúcar mascavo.',
            preco: '[R$ —]',
            tags: ['vegetariano', 'contém glúten'],
          },
          {
            id: 'sob-2',
            nome: 'Pudim de leite da casa',
            descricao: 'Fatia lisa com calda de açúcar tostado na medida.',
            preco: '[R$ —]',
            tags: ['vegetariano'],
          },
          {
            id: 'sob-3',
            nome: 'Fruta assada no forno a lenha',
            descricao: 'Acompanhada de colherada de creme fresco e especiarias.',
            preco: '[R$ —]',
            tags: ['vegetariano', '[confirmar]'],
          },
          {
            id: 'sob-4',
            nome: 'Creme de queijo fresco com calda simples',
            descricao: 'Textura aveludada com redução caseira de frutas do dia.',
            preco: '[R$ —]',
            tags: ['vegetariano'],
          },
        ],
      },
    ],
  },
  ambiente: {
    enabled: true,
    id: 'ambiente',
    kicker: 'O Salão',
    titulo: 'A Mesa Compartilhada',
    texto: 'A bancada comprida reúne vizinhos e quem chega de passagem. Panelas de ferro no centro, cheiro de ervas colhidas na horta e luz baixa no fim da tarde.',
    destaques: [
      'Bancada comunitária de madeira maciça',
      'Panelas e caçarolas servidas no centro da mesa',
      'Luz natural filtrada pelas janelas antigas',
    ],
    galeria: [
      {
        src: '/src/assets/images/ambiente_sala_1791491475936.jpg',
        alt: 'Salão da cantina com mesa de madeira comprida posta para refeição compartilhada sob iluminação acolhedora',
        aspectRatio: '4/3',
      },
      {
        src: '/src/assets/images/ambiente_cozinha_1791491484793.jpg',
        alt: 'Preparo artesanal de massa fresca na bancada de madeira enfarinhada com panela de ferro ao lado',
        aspectRatio: '3/4',
      },
      {
        src: '/src/assets/images/ambiente_detalhe_1791491494119.jpg',
        alt: 'Mesa de refeição com ervas aromáticas em tigela de barro, pão rústico partido e azeiteira ao entardecer',
        aspectRatio: '4/3',
      },
    ],
  },
  reservas: {
    enabled: true,
    id: 'reservas',
    kicker: 'Venha sem pressa',
    titulo: 'Mesas e Encontros',
    texto: 'Recebemos grupos na mesa comunitária e mesas menores no salão. Reserve com antecedência ou venha para a bancada.',
    aviso: 'Nenhum formulário necessário. Atendimento direto pela equipe.',
    botoes: {
      whatsapp: {
        label: 'Reservar pelo WhatsApp',
        href: '[link do WhatsApp]',
      },
      telefone: {
        label: 'Ligar para a casa',
        href: 'tel:[telefone]',
        display: '[telefone]',
      },
    },
  },
  visite: {
    enabled: true,
    id: 'visite',
    kicker: 'Localização e horários',
    titulo: 'Como Chegar',
    endereco: '[endereço]',
    horarios: [
      { dia: '[terça a quinta]', horario: '[12h às 15h / 19h às 23h]' },
      { dia: '[sexta e sábado]', horario: '[12h às 16h / 19h às 23h30]' },
      { dia: '[domingo]', horario: '[12h às 17h]' },
      { dia: '[segunda]', horario: '[fechado]' },
    ],
    observacao: '[estacionamento / acessibilidade]',
    mapa: {
      rotulo: '[mapa]',
      instrucao: 'Retângulo esquemático da localização no bairro [bairro]',
    },
  },
  faq: {
    enabled: true,
    id: 'faq',
    kicker: 'Tire suas dúvidas',
    titulo: 'Perguntas Frequentes',
    subtitulo: 'Dúvidas comuns sobre o dia a dia e o funcionamento da cantina.',
    itens: [
      {
        pergunta: 'Como funcionam as reservas para o salão?',
        resposta: 'As reservas são feitas diretamente pelo [link do WhatsApp] com antecedência mínima de [prazo]. A bancada e as mesas altas atendem por ordem de chegada.',
      },
      {
        pergunta: 'A casa recebe crianças e famílias?',
        resposta: 'Sim, dispomos de cadeirões infantis e preparos acolhedores na cozinha. Recomendamos avisar na reserva pelo [link do WhatsApp] para organizarmos os lugares.',
      },
      {
        pergunta: 'Há opções vegetarianas ou sem glúten?',
        resposta: 'Nosso cardápio diário inclui opções vegetarianas identificadas e sugestões sem trigo. [Consulte alergênicos com a equipe] antes de fazer seu pedido.',
      },
      {
        pergunta: 'Como funciona para grupos grandes na mesa compartilhada?',
        resposta: 'Acomodamos grupos de até [capacidade de grupo] mediante reserva prévia pelo [link do WhatsApp]. Cardápios combinados podem ser alinhados com o salão.',
      },
      {
        pergunta: 'Quais são as formas de pagamento aceitas?',
        resposta: 'Aceitamos cartões de débito, crédito e [outras formas de pagamento]. Informações detalhadas podem ser confirmadas pelo telefone [telefone].',
      },
    ],
  },
  rodape: {
    enabled: true,
    marca: 'Cantina Nô',
    descricao: 'Cozinha de panela, forno aceso e mesa compartilhada de bairro.',
    cnpj: '[CNPJ]',
    redes: '[redes sociais]',
    endereco: '[endereço]',
    links: [
      { label: 'Cardápio', href: '#cardapio' },
      { label: 'Ambiente', href: '#ambiente' },
      { label: 'Reservas', href: '#reservas' },
      { label: 'Visite', href: '#visite' },
      { label: 'Perguntas', href: '#faq' },
    ],
    botaoReduzirAnimacoes: {
      ativoText: 'Movimento reduzido ativo',
      inativoText: 'Reduzir animações',
    },
    direitos: '© Cantina Nô. Todos os direitos reservados.',
  },
  depoimentos: {
    enabled: false,
    items: [],
  },
};
