// Dados completos do Restaurante e Soparia da Sabbá
// Para alterar preços, nomes ou descrições, basta editar os valores abaixo e salvar.

window.SOPARIA_DATA = {
  restaurant: {
    name: "Restaurante e Soparia da Sabbá",
    shortName: "Soparia da Sabbá",
    logo: "assets/img/logo.png",
    contactBanner: "assets/img/banner-contato.jpg",
    deliveryUrl: "https://linktr.ee/sopariadasabba",
    serviceFee: "Taxa de Serviço 10%",
    paymentNotice:
      "Aceitamos pagamento em dinheiro, PIX, cartão débito e crédito VISA, MASTERCARD e ELO (não aceitamos vale-refeição!)",
    ordersNotice: "Aceitamos encomendas!",
    address: {
      street: "Av. Gov. José Lindoso, 1394",
      neighborhood: "Novo Aleixo",
      cityState: "Manaus/AM",
      cep: "CEP 69058-600",
      full: "Av. Gov. José Lindoso, 1394 - Novo Aleixo, Manaus/AM, CEP 69058-600",
      mapsLink: "https://maps.app.goo.gl/cdSXMoAjE1xvRJGz9",
      mapsEmbedQuery:
        "Av. Gov. José Lindoso, 1394 - Novo Aleixo, Manaus - AM, 69058-600"
    },
    contact: {
      phoneDisplay: "+55 (92) 99339-4839",
      phoneRaw: "+5592993394839",
      whatsappUrl: "https://api.whatsapp.com/send?phone=5592993394839",
      instagramUrl: "https://www.instagram.com/sopariadasabba/",
      facebookUrl: "https://www.facebook.com/sopariadasabba/"
    },
    hours: {
      dineIn: {
        label: "Aberto ao Público",
        days: "Todos os dias",
        time: "De 16:30 às 22:30",
        openMinutes: 16 * 60 + 30,
        closeMinutes: 22 * 60 + 30
      },
      delivery: {
        label: "Entrega (Delivery)",
        days: "Todos os dias",
        time: "De 11:00 às 22:30",
        openMinutes: 11 * 60,
        closeMinutes: 22 * 60 + 30
      }
    }
  },

  categories: [
    {
      id: "sopa",
      title: "Sopa",
      subtitle: "",
      banner: "assets/img/banner-sopa.jpg",
      items: [
        { name: "Porção de Sopa", description: "", price: 27.9 },
        { name: "Porção de Sopa Viagem", description: "", price: 30.9 },
        { name: "1/2 Porção de Sopa (250 ml)", description: "250 ml", price: 17.9 },
        { name: "1/2 Porção de Sopa (250 ml) Viagem", description: "", price: 21.0 },
        {
          name: "Rodízio Individual",
          description: "Proibido Compartilhar Rodízio",
          price: 52.9,
          featured: true,
          badge: "Em destaque"
        },
        {
          name: "Rodízio Viagem",
          description: "6 porções de 250 ml + 3 porções de complemento de 30 ml",
          price: 74.9
        },
        {
          name: "Torrada Extra",
          description: "Complementos Separados, preços a consultar 30 ml",
          price: 4.0
        }
      ]
    },
    {
      id: "massas",
      title: "Massas",
      subtitle: "(Espaguete, Talharim, Penne) - Serve uma pessoa",
      banner: "assets/img/banner-massas.jpg",
      items: [
        {
          name: "Carbonara",
          description: "Bacon, pimenta do reino, gema de ovo, creme de leite",
          price: 47.9
        },
        {
          name: "Bolonhesa",
          description: "Carne moída, pimenta-do-reino, molho vermelho, azeitona e manjericão",
          price: 45.9
        },
        {
          name: "Camarão com Requeijão",
          description: "Camarão fresco 150g, requeijão",
          price: 62.9
        },
        {
          name: "Camarão à moda da casa",
          description: "Camarão fresco 150g, molho branco, brócolis, queijo gorgonzola",
          price: 62.9
        }
      ]
    },
    {
      id: "lasanha",
      title: "Lasanha",
      subtitle: "Serve duas pessoas",
      banner: "assets/img/banner-lasanha.jpg",
      items: [
        {
          name: "Lasanha à Bolonhesa",
          description:
            "Carne moída, queijo mussarela, presunto, pimenta do reino, molho vermelho, manjericão, azeitona",
          price: 64.9
        },
        {
          name: "Lasanha de Frango",
          description: "Frango desfiado, queijo mussarela, molho branco",
          price: 64.9
        }
      ]
    },
    {
      id: "pratos-quentes",
      title: "Pratos Quentes",
      subtitle: "",
      banner: "assets/img/banner-pratos-quentes.jpg",
      items: [
        {
          name: "Bife à Cavalo",
          description: "Bife de Alcatra, arroz, batata frita, ovo frito e farofa",
          price: 39.9
        },
        { name: "Escondidinho de Camarão", description: "", price: 39.9 },
        { name: "Escondidinho de Carne Moída", description: "", price: 37.9 },
        { name: "Escondidinho de Carne Seca", description: "", price: 37.9 },
        {
          name: "Filé à Parmegiana (2 pessoas)",
          description: "Arroz com brócolis e purê de batata",
          price: 134.9
        },
        {
          name: "Isca de Frango",
          description: "Isca de frango acebolado, arroz, farofa e macarrão",
          price: 33.9
        },
        {
          name: "Panqueca de Carne",
          description: "Massa de panqueca, carne moída, arroz, farofa e purê",
          price: 38.9
        },
        {
          name: "Pirarucu à Dorê (1 Pessoa)",
          description: "Filé de pirarucu frito, arroz, farofa e vinagrete",
          price: 37.9
        },
        {
          name: "Pirarucu à Dorê (2 Pessoas)",
          description: "Filé de pirarucu frito, arroz, farofa e vinagrete",
          price: 72.9
        },
        {
          name: "Frango à Milanesa (1 pessoa)",
          description: "Peito de frango, arroz com raspas de cenoura, purê e farofa",
          price: 38.9
        },
        {
          name: "Frango à Milanesa (2 pessoas)",
          description: "Peito de frango, arroz com raspas de cenoura, purê e farofa",
          price: 68.9
        },
        {
          name: "Prato Especial",
          description: "Isca de carne, arroz, farofa e salada",
          price: 34.9
        },
        {
          name: "Prato Kids - Filé Mignon",
          description: "100g de filé mignon, arroz, batata frita e farofa",
          price: 39.9
        },
        {
          name: "Prato Kids - Peito de Frango Grelhado",
          description: "100g de filé de frango, arroz, batata frita e farofa",
          price: 29.9
        }
      ]
    },
    {
      id: "pizzas",
      title: "Pizzas",
      subtitle: "",
      banner: "assets/img/banner-pizzas.jpg",
      items: [
        { name: "Mussarela", description: "Queijo mussarela, orégano", price: 65.9 },
        {
          name: "Calabresa",
          description: "Calabresa fatiada, queijo mussarela, cebola e orégano",
          price: 65.9
        },
        {
          name: "Portuguesa",
          description: "Queijo mussarela, presunto, cebola, azeitona e ovo",
          price: 65.9
        },
        {
          name: "Frango com Catupiry",
          description: "Frango desfiado, catupiry, orégano, queijo mussarela",
          price: 68.9
        }
      ]
    },
    {
      id: "sanduiches",
      title: "Sanduíches",
      subtitle: "Carne de Hambúrguer Artesanal",
      banner: "assets/img/banner-sanduiches.jpg",
      items: [
        {
          name: "X-Tudo",
          description:
            "Carne de hambúrguer, queijo prato, presunto, ovo, calabresa, salsicha, alface e tomate",
          price: 39.9
        },
        {
          name: "X-Filé",
          description: "Filé mignon, queijo prato, alface e tomate",
          price: 28.99
        },
        {
          name: "X-Bacon",
          description: "Carne de hambúrguer, queijo prato, presunto, bacon, alface e tomate",
          price: 28.99
        },
        {
          name: "X-Burguer",
          description: "Carne de hambúrguer, queijo prato, alface e tomate",
          price: 19.99
        },
        {
          name: "Misto",
          description: "Pão de forma, queijo prato e presunto",
          price: 14.0
        },
        {
          name: "Misto Duplo",
          description: "3 pães de forma, 2 fatias de queijo prato e 2 fatias de presunto",
          price: 19.9
        },
        {
          name: "Mistão",
          description: "3 pães de forma, queijo prato, presunto e ovo",
          price: 18.9
        },
        {
          name: "X-Salada",
          description: "Carne de hambúrguer, queijo prato, presunto e ovo, alface e tomate",
          price: 25.99
        },
        {
          name: "Hambúrguer",
          description: "100g de hambúrguer e queijo",
          price: 16.99
        }
      ]
    },
    {
      id: "farofa",
      title: "Farofa",
      subtitle: "",
      banner: "",
      items: [
        {
          name: "Farofa de Charque",
          description: "Charque, cebolinha, alho, pimenta-do-reino, cebola e farinha",
          price: 33.9
        },
        {
          name: "Farofa de Ovo",
          description: "Ovo, manteiga, sal e farinha",
          price: 15.9
        },
        {
          name: "Farofa de Filé",
          description: "Filé, cebola, alho, pimenta-do-reino, caldo de carne e farinha",
          price: 31.9
        },
        {
          name: "Farofa de Camarão",
          description: "Camarão, cebola, cebolinha, pimenta de cheiro, sal, azeite e farinha",
          price: 35.9
        }
      ]
    },
    {
      id: "combos",
      title: "Combos",
      subtitle: "(Refrigerante do combo, consultar opção promocional disponível)",
      banner: "assets/img/banner-combos.jpg",
      items: [
        {
          name: "Combo X-Salada",
          description: "1 x-salada, batata frita pequena e 1 refrigerante 290ml",
          price: 40.99
        },
        {
          name: "Combo X-Bacon",
          description: "1 x-bacon, batata frita pequena e 1 refrigerante 290ml",
          price: 49.99
        },
        {
          name: "Combo X-Filé",
          description: "1 x-filé, batata frita pequena e 1 refrigerante 290ml",
          price: 44.99
        }
      ]
    },
    {
      id: "pasteis",
      title: "Pastéis",
      subtitle: "",
      banner: "assets/img/banner-pasteis.jpg",
      items: [
        { name: "Queijo", description: "Queijo coalho", price: 14.9 },
        { name: "Famoso", description: "Carne moída, queijo coalho e ovo", price: 14.9 },
        {
          name: "Banana e Queijo",
          description: "Banana frita, açúcar, canela e queijo coalho",
          price: 14.9
        },
        { name: "Camarão", description: "Camarão salgado temperado", price: 14.9 }
      ]
    },
    {
      id: "bebidas",
      title: "Bebidas",
      subtitle: "Bebidas Variadas, como Refrigerantes, Água, Cerveja, Sucos e Vitaminas",
      banner: "assets/img/banner-bebidas.jpg",
      items: [
        { name: "Refrigerante de 2L", description: "", price: 18.0 },
        { name: "Refrigerante de 1,5L", description: "", price: 17.0 },
        { name: "Refrigerante de 1L", description: "", price: 12.0 },
        { name: "Refrigerante em Lata (350 ml)", description: "", price: 8.0 },
        { name: "Coca-Cola Ks", description: "", price: 8.0 },
        { name: "Cerveja Long Neck", description: "", price: 12.0 },
        { name: "Água com gás (350 ml)", description: "", price: 5.0 },
        { name: "Água com gás (500 ml)", description: "", price: 6.0 },
        { name: "Água Mineral (350 ml)", description: "", price: 3.0 },
        { name: "Água Mineral (500 ml)", description: "", price: 5.0 },
        { name: "Água Mineral (600 ml)", description: "", price: 6.0 },
        { name: "Água tônica (350 ml)", description: "", price: 8.0 },
        { name: "Água saborizada (500 ml)", description: "", price: 6.0 }
      ],
      subcategories: [
        {
          title: "Sucos",
          items: [
            {
              name: "Jarra de Suco 1 L",
              description: "Opções: graviola, acerola, goiaba, abacaxi, cupuaçu",
              price: 30.0
            },
            {
              name: "Jarra de Suco 500 ml",
              description: "Opções: graviola, acerola, goiaba, abacaxi, cupuaçu",
              price: 18.0
            },
            {
              name: "Copo de Suco",
              description: "Opções: graviola, acerola, goiaba, abacaxi, cupuaçu",
              price: 12.0
            },
            {
              name: "Jarra de Suco de Limão, Maracujá ou Morango 1 L",
              description: "",
              price: 35.0
            },
            {
              name: "Jarra de Suco de Limão, Maracujá ou Morango 500 ml",
              description: "",
              price: 20.0
            },
            {
              name: "Copo de Suco de Limão, Maracujá ou Morango",
              description: "",
              price: 15.0
            },
            {
              name: "Adição de leite ou hortelã",
              description: "",
              price: 2.0
            }
          ]
        },
        {
          title: "Vitaminas",
          items: [
            { name: "Vitamina Simples", description: "", price: 17.0 },
            { name: "Vitamina Mista", description: "", price: 20.0 }
          ]
        }
      ]
    },
    {
      id: "sobremesa",
      title: "Sobremesa",
      subtitle: "Consultar a disponibilidade da sobremesa do dia",
      banner: "assets/img/banner-sobremesa.jpg",
      items: [
        {
          name: "Petit Gateau",
          description: "Tempo de preparo: 20 a 30 minutos",
          price: 26.9
        },
        { name: "Pudim de Leite", description: "", price: 15.0 },
        { name: "Torta de Banana", description: "", price: 20.0 },
        { name: "Mousse de Maracujá", description: "", price: 18.0 },
        { name: "Mousse de Limão", description: "", price: 18.0 },
        { name: "Salada de Frutas", description: "", price: 24.9 },
        { name: "Salada de Frutas com sorvete", description: "", price: 26.9 },
        { name: "Creme de Cupuaçu com Ovomaltine", description: "", price: 18.0 }
      ]
    },
    {
      id: "porcoes-extras",
      title: "Porções Extras",
      subtitle: "",
      banner: "",
      items: [
        { name: "Arroz branco", description: "", price: 10.0 },
        { name: "Arroz com Brócolis", description: "", price: 12.0 },
        { name: "Purê de Batata", description: "", price: 15.0 },
        { name: "Farofa", description: "", price: 5.0 },
        { name: "Batata Grande", description: "450g", price: 24.9 },
        { name: "Batata Pequena", description: "150g", price: 15.0 },
        { name: "Batatonese", description: "", price: 18.0 },
        { name: "Pão na Chapa", description: "", price: 3.0 },
        { name: "Hambúrguer extra", description: "100g", price: 12.0 },
        { name: "Ovo frito", description: "", price: 3.0 },
        { name: "Bacon", description: "", price: 6.0 },
        { name: "Salsicha", description: "", price: 5.0 },
        { name: "Queijo ou Presunto", description: "", price: 3.0 }
      ]
    }
  ]
};
