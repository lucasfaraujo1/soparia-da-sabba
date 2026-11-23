// Dados completos do Restaurante e Soparia da Sabbá (PT-BR e EN)
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
      titleEn: "Soups & Broths",
      subtitle: "",
      subtitleEn: "",
      banner: "assets/img/banner-sopa.jpg",
      items: [
        {
          name: "Porção de Sopa",
          nameEn: "Soup Bowl (Dine-In)",
          description: "",
          descriptionEn: "",
          price: 27.9
        },
        {
          name: "Porção de Sopa Viagem",
          nameEn: "Soup Bowl (Takeout)",
          description: "",
          descriptionEn: "",
          price: 30.9
        },
        {
          name: "1/2 Porção de Sopa (250 ml)",
          nameEn: "Half Soup Portion (250 ml / Dine-In)",
          description: "250 ml",
          descriptionEn: "250 ml",
          price: 17.9
        },
        {
          name: "1/2 Porção de Sopa (250 ml) Viagem",
          nameEn: "Half Soup Portion (250 ml / Takeout)",
          description: "",
          descriptionEn: "",
          price: 21.0
        },
        {
          name: "Rodízio Individual",
          nameEn: "All-You-Can-Eat Soup Buffet (Individual)",
          description: "Proibido Compartilhar Rodízio",
          descriptionEn: "No sharing allowed",
          price: 52.9,
          featured: true,
          badge: "Em destaque",
          badgeEn: "Popular"
        },
        {
          name: "Rodízio Viagem",
          nameEn: "Soup Sampler Box (Takeout)",
          description: "6 porções de 250 ml + 3 porções de complemento de 30 ml",
          descriptionEn: "6 soup portions of 250 ml + 3 side toppings of 30 ml",
          price: 74.9
        },
        {
          name: "Torrada Extra",
          nameEn: "Extra Garlic Toast",
          description: "Complementos Separados, preços a consultar 30 ml",
          descriptionEn: "Additional 30 ml toppings sold separately — ask for prices",
          price: 4.0
        }
      ]
    },
    {
      id: "massas",
      title: "Massas",
      titleEn: "Pasta",
      subtitle: "(Espaguete, Talharim, Penne) - Serve uma pessoa",
      subtitleEn: "(Spaghetti, Tagliatelle or Penne) — Serves 1",
      banner: "assets/img/banner-massas.jpg",
      items: [
        {
          name: "Carbonara",
          nameEn: "Carbonara",
          description: "Bacon, pimenta do reino, gema de ovo, creme de leite",
          descriptionEn: "Bacon, black pepper, egg yolk, heavy cream",
          price: 47.9
        },
        {
          name: "Bolonhesa",
          nameEn: "Bolognese",
          description: "Carne moída, pimenta-do-reino, molho vermelho, azeitona e manjericão",
          descriptionEn: "Ground beef, black pepper, tomato sauce, olives & basil",
          price: 45.9
        },
        {
          name: "Camarão com Requeijão",
          nameEn: "Creamy Shrimp Pasta",
          description: "Camarão fresco 150g, requeijão",
          descriptionEn: "150g fresh shrimp with Brazilian cream cheese",
          price: 62.9
        },
        {
          name: "Camarão à moda da casa",
          nameEn: "House-Style Shrimp Pasta",
          description: "Camarão fresco 150g, molho branco, brócolis, queijo gorgonzola",
          descriptionEn: "150g fresh shrimp, white sauce, broccoli & gorgonzola",
          price: 62.9
        }
      ]
    },
    {
      id: "lasanha",
      title: "Lasanha",
      titleEn: "Lasagna",
      subtitle: "Serve duas pessoas",
      subtitleEn: "Serves 2",
      banner: "assets/img/banner-lasanha.jpg",
      items: [
        {
          name: "Lasanha à Bolonhesa",
          nameEn: "Beef Bolognese Lasagna",
          description:
            "Carne moída, queijo mussarela, presunto, pimenta do reino, molho vermelho, manjericão, azeitona",
          descriptionEn:
            "Ground beef, mozzarella, ham, black pepper, tomato sauce, basil & olives",
          price: 64.9
        },
        {
          name: "Lasanha de Frango",
          nameEn: "Creamy Chicken Lasagna",
          description: "Frango desfiado, queijo mussarela, molho branco",
          descriptionEn: "Shredded chicken, mozzarella & white béchamel sauce",
          price: 64.9
        }
      ]
    },
    {
      id: "pratos-quentes",
      title: "Pratos Quentes",
      titleEn: "Hot Entrées",
      subtitle: "",
      subtitleEn: "",
      banner: "assets/img/banner-pratos-quentes.jpg",
      items: [
        {
          name: "Bife à Cavalo",
          nameEn: "Top Sirloin Steak & Fried Egg",
          description: "Bife de Alcatra, arroz, batata frita, ovo frito e farofa",
          descriptionEn: "Top sirloin steak, rice, fries, fried egg & farofa",
          price: 39.9
        },
        {
          name: "Escondidinho de Camarão",
          nameEn: "Shrimp & Mash Bake (Escondidinho)",
          description: "",
          descriptionEn: "",
          price: 39.9
        },
        {
          name: "Escondidinho de Carne Moída",
          nameEn: "Seasoned Ground Beef & Mash Bake (Escondidinho)",
          description: "",
          descriptionEn: "",
          price: 37.9
        },
        {
          name: "Escondidinho de Carne Seca",
          nameEn: "Shredded Cured Beef & Mash Bake (Escondidinho)",
          description: "",
          descriptionEn: "",
          price: 37.9
        },
        {
          name: "Filé à Parmegiana (2 pessoas)",
          nameEn: "Breaded Steak Parmigiana (Serves 2)",
          description: "Arroz com brócolis e purê de batata",
          descriptionEn: "Served with broccoli rice & mashed potatoes",
          price: 134.9
        },
        {
          name: "Isca de Frango",
          nameEn: "Sautéed Chicken Strips",
          description: "Isca de frango acebolado, arroz, farofa e macarrão",
          descriptionEn: "Onion-sautéed chicken strips, rice, farofa & pasta",
          price: 33.9
        },
        {
          name: "Panqueca de Carne",
          nameEn: "Savory Beef Crêpe",
          description: "Massa de panqueca, carne moída, arroz, farofa e purê",
          descriptionEn: "Rolled crêpe filled with ground beef, rice, farofa & mashed potatoes",
          price: 38.9
        },
        {
          name: "Pirarucu à Dorê (1 Pessoa)",
          nameEn: "Crispy Fried Amazonian Pirarucu Fish (Serves 1)",
          description: "Filé de pirarucu frito, arroz, farofa e vinagrete",
          descriptionEn: "Fried pirarucu fillet, rice, farofa & Brazilian vinaigrette salsa",
          price: 37.9
        },
        {
          name: "Pirarucu à Dorê (2 Pessoas)",
          nameEn: "Crispy Fried Amazonian Pirarucu Fish (Serves 2)",
          description: "Filé de pirarucu frito, arroz, farofa e vinagrete",
          descriptionEn: "Fried pirarucu fillet, rice, farofa & Brazilian vinaigrette salsa",
          price: 72.9
        },
        {
          name: "Frango à Milanesa (1 pessoa)",
          nameEn: "Crispy Breaded Chicken Breast (Serves 1)",
          description: "Peito de frango, arroz com raspas de cenoura, purê e farofa",
          descriptionEn: "Chicken breast, carrot rice, mashed potatoes & farofa",
          price: 38.9
        },
        {
          name: "Frango à Milanesa (2 pessoas)",
          nameEn: "Crispy Breaded Chicken Breast (Serves 2)",
          description: "Peito de frango, arroz com raspas de cenoura, purê e farofa",
          descriptionEn: "Chicken breast, carrot rice, mashed potatoes & farofa",
          price: 68.9
        },
        {
          name: "Prato Especial",
          nameEn: "House Special Beef Strips",
          description: "Isca de carne, arroz, farofa e salada",
          descriptionEn: "Sautéed beef strips, rice, farofa & salad",
          price: 34.9
        },
        {
          name: "Prato Kids - Filé Mignon",
          nameEn: "Kids Plate — Filet Mignon",
          description: "100g de filé mignon, arroz, batata frita e farofa",
          descriptionEn: "100g filet mignon, rice, fries & farofa",
          price: 39.9
        },
        {
          name: "Prato Kids - Peito de Frango Grelhado",
          nameEn: "Kids Plate — Grilled Chicken Breast",
          description: "100g de filé de frango, arroz, batata frita e farofa",
          descriptionEn: "100g chicken fillet, rice, fries & farofa",
          price: 29.9
        }
      ]
    },
    {
      id: "pizzas",
      title: "Pizzas",
      titleEn: "Pizzas",
      subtitle: "",
      subtitleEn: "",
      banner: "assets/img/banner-pizzas.jpg",
      items: [
        {
          name: "Mussarela",
          nameEn: "Mozzarella",
          description: "Queijo mussarela, orégano",
          descriptionEn: "Mozzarella cheese & oregano",
          price: 65.9
        },
        {
          name: "Calabresa",
          nameEn: "Brazilian Smoked Sausage (Calabresa)",
          description: "Calabresa fatiada, queijo mussarela, cebola e orégano",
          descriptionEn: "Sliced calabresa sausage, mozzarella, onions & oregano",
          price: 65.9
        },
        {
          name: "Portuguesa",
          nameEn: "Portuguese Style",
          description: "Queijo mussarela, presunto, cebola, azeitona e ovo",
          descriptionEn: "Mozzarella, ham, onions, olives & boiled egg",
          price: 65.9
        },
        {
          name: "Frango com Catupiry",
          nameEn: "Shredded Chicken & Catupiry",
          description: "Frango desfiado, catupiry, orégano, queijo mussarela",
          descriptionEn: "Shredded chicken, Catupiry cream cheese, oregano & mozzarella",
          price: 68.9
        }
      ]
    },
    {
      id: "sanduiches",
      title: "Sanduíches",
      titleEn: "Burgers & Sandwiches",
      subtitle: "Carne de Hambúrguer Artesanal",
      subtitleEn: "House-Made Beef Patties",
      banner: "assets/img/banner-sanduiches.jpg",
      items: [
        {
          name: "X-Tudo",
          nameEn: "The Works Burger (X-Tudo)",
          description:
            "Carne de hambúrguer, queijo prato, presunto, ovo, calabresa, salsicha, alface e tomate",
          descriptionEn:
            "Beef patty, prato cheese, ham, egg, calabresa sausage, hot dog sausage, lettuce & tomato",
          price: 39.9
        },
        {
          name: "X-Filé",
          nameEn: "Filet Mignon Steak Burger",
          description: "Filé mignon, queijo prato, alface e tomate",
          descriptionEn: "Filet mignon, prato cheese, lettuce & tomato",
          price: 28.99
        },
        {
          name: "X-Bacon",
          nameEn: "Bacon Cheeseburger",
          description: "Carne de hambúrguer, queijo prato, presunto, bacon, alface e tomate",
          descriptionEn: "Beef patty, prato cheese, ham, bacon, lettuce & tomato",
          price: 28.99
        },
        {
          name: "X-Burguer",
          nameEn: "Classic Cheeseburger",
          description: "Carne de hambúrguer, queijo prato, alface e tomate",
          descriptionEn: "Beef patty, prato cheese, lettuce & tomato",
          price: 19.99
        },
        {
          name: "Misto",
          nameEn: "Grilled Ham & Cheese",
          description: "Pão de forma, queijo prato e presunto",
          descriptionEn: "Sliced bread, prato cheese & ham",
          price: 14.0
        },
        {
          name: "Misto Duplo",
          nameEn: "Double-Decker Grilled Ham & Cheese",
          description: "3 pães de forma, 2 fatias de queijo prato e 2 fatias de presunto",
          descriptionEn: "3 slices of bread, 2 slices of prato cheese & 2 slices of ham",
          price: 19.9
        },
        {
          name: "Mistão",
          nameEn: "Triple-Decker Ham, Cheese & Egg Toastie",
          description: "3 pães de forma, queijo prato, presunto e ovo",
          descriptionEn: "3 slices of bread, prato cheese, ham & egg",
          price: 18.9
        },
        {
          name: "X-Salada",
          nameEn: "House Salad Burger",
          description: "Carne de hambúrguer, queijo prato, presunto e ovo, alface e tomate",
          descriptionEn: "Beef patty, prato cheese, ham, egg, lettuce & tomato",
          price: 25.99
        },
        {
          name: "Hambúrguer",
          nameEn: "Simple Cheeseburger",
          description: "100g de hambúrguer e queijo",
          descriptionEn: "100g beef patty & cheese",
          price: 16.99
        }
      ]
    },
    {
      id: "farofa",
      title: "Farofa",
      titleEn: "Farofa (Toasted Cassava Flour)",
      subtitle: "",
      subtitleEn: "",
      banner: "",
      items: [
        {
          name: "Farofa de Charque",
          nameEn: "Sun-Cured Beef Farofa (Charque)",
          description: "Charque, cebolinha, alho, pimenta-do-reino, cebola e farinha",
          descriptionEn: "Cured beef, scallions, garlic, black pepper, onions & toasted cassava flour",
          price: 33.9
        },
        {
          name: "Farofa de Ovo",
          nameEn: "Buttered Egg Farofa",
          description: "Ovo, manteiga, sal e farinha",
          descriptionEn: "Egg, butter, salt & toasted cassava flour",
          price: 15.9
        },
        {
          name: "Farofa de Filé",
          nameEn: "Beef Tenderloin Farofa",
          description: "Filé, cebola, alho, pimenta-do-reino, caldo de carne e farinha",
          descriptionEn: "Beef tenderloin, onions, garlic, black pepper, beef broth & cassava flour",
          price: 31.9
        },
        {
          name: "Farofa de Camarão",
          nameEn: "Amazonian Shrimp Farofa",
          description: "Camarão, cebola, cebolinha, pimenta de cheiro, sal, azeite e farinha",
          descriptionEn:
            "Shrimp, onions, scallions, sweet Amazonian pepper, salt, olive oil & cassava flour",
          price: 35.9
        }
      ]
    },
    {
      id: "combos",
      title: "Combos",
      titleEn: "Combo Meals",
      subtitle: "(Refrigerante do combo, consultar opção promocional disponível)",
      subtitleEn: "(Ask your server for available promo soft drink options)",
      banner: "assets/img/banner-combos.jpg",
      items: [
        {
          name: "Combo X-Salada",
          nameEn: "House Salad Burger Combo",
          description: "1 x-salada, batata frita pequena e 1 refrigerante 290ml",
          descriptionEn: "1 X-Salada burger, small fries & 290 ml soda",
          price: 40.99
        },
        {
          name: "Combo X-Bacon",
          nameEn: "Bacon Cheeseburger Combo",
          description: "1 x-bacon, batata frita pequena e 1 refrigerante 290ml",
          descriptionEn: "1 X-Bacon burger, small fries & 290 ml soda",
          price: 49.99
        },
        {
          name: "Combo X-Filé",
          nameEn: "Filet Mignon Burger Combo",
          description: "1 x-filé, batata frita pequena e 1 refrigerante 290ml",
          descriptionEn: "1 X-Filé burger, small fries & 290 ml soda",
          price: 44.99
        }
      ]
    },
    {
      id: "pasteis",
      title: "Pastéis",
      titleEn: "Crispy Brazilian Pastries (Pastéis)",
      subtitle: "",
      subtitleEn: "",
      banner: "assets/img/banner-pasteis.jpg",
      items: [
        {
          name: "Queijo",
          nameEn: "Cheese",
          description: "Queijo coalho",
          descriptionEn: "",
          price: 14.9
        },
        {
          name: "Famoso",
          nameEn: "House Famous",
          description: "Carne moída, queijo coalho e ovo",
          descriptionEn: "Seasoned ground beef, cheese & egg",
          price: 14.9
        },
        {
          name: "Banana e Queijo",
          nameEn: "Sweet Banana & Cheese",
          description: "Banana frita, açúcar, canela e queijo coalho",
          descriptionEn: "Fried sweet banana, sugar, cinnamon & cheese",
          price: 14.9
        },
        {
          name: "Camarão",
          nameEn: "Seasoned Shrimp",
          description: "Camarão salgado temperado",
          descriptionEn: "Savory spiced shrimp",
          price: 14.9
        }
      ]
    },
    {
      id: "bebidas",
      title: "Bebidas",
      titleEn: "Drinks",
      subtitle: "Bebidas Variadas, como Refrigerantes, Água, Cerveja, Sucos e Vitaminas",
      subtitleEn: "Assorted Drinks: Sodas, Water, Beer, Fresh Juices & Smoothies",
      banner: "assets/img/banner-bebidas.jpg",
      items: [
        { name: "Refrigerante de 2L", nameEn: "Soda (2L Bottle)", description: "", descriptionEn: "", price: 18.0 },
        { name: "Refrigerante de 1,5L", nameEn: "Soda (1.5L Bottle)", description: "", descriptionEn: "", price: 17.0 },
        { name: "Refrigerante de 1L", nameEn: "Soda (1L Bottle)", description: "", descriptionEn: "", price: 12.0 },
        { name: "Refrigerante em Lata (350 ml)", nameEn: "Canned Soda (350 ml)", description: "", descriptionEn: "", price: 8.0 },
        { name: "Coca-Cola Ks", nameEn: "Coca-Cola (290 ml Glass Bottle)", description: "", descriptionEn: "", price: 8.0 },
        { name: "Cerveja Long Neck", nameEn: "Long-Neck Beer (330–355 ml)", description: "", descriptionEn: "", price: 12.0 },
        { name: "Água com gás (350 ml)", nameEn: "Sparkling Water (350 ml)", description: "", descriptionEn: "", price: 5.0 },
        { name: "Água com gás (500 ml)", nameEn: "Sparkling Water (500 ml)", description: "", descriptionEn: "", price: 6.0 },
        { name: "Água Mineral (350 ml)", nameEn: "Still Mineral Water (350 ml)", description: "", descriptionEn: "", price: 3.0 },
        { name: "Água Mineral (500 ml)", nameEn: "Still Mineral Water (500 ml)", description: "", descriptionEn: "", price: 5.0 },
        { name: "Água Mineral (600 ml)", nameEn: "Still Mineral Water (600 ml)", description: "", descriptionEn: "", price: 6.0 },
        { name: "Água tônica (350 ml)", nameEn: "Tonic Water (350 ml)", description: "", descriptionEn: "", price: 8.0 },
        { name: "Água saborizada (500 ml)", nameEn: "Flavored Water (500 ml)", description: "", descriptionEn: "", price: 6.0 }
      ],
      subcategories: [
        {
          title: "Sucos",
          titleEn: "Fresh Juices",
          items: [
            {
              name: "Jarra de Suco 1 L",
              nameEn: "1 L Juice Pitcher",
              description: "Opções: graviola, acerola, goiaba, abacaxi, cupuaçu",
              descriptionEn: "Options: soursop (graviola), acerola cherry, guava, pineapple, Amazonian cupuaçu",
              price: 30.0
            },
            {
              name: "Jarra de Suco 500 ml",
              nameEn: "500 ml Juice Pitcher",
              description: "Opções: graviola, acerola, goiaba, abacaxi, cupuaçu",
              descriptionEn: "Options: soursop (graviola), acerola cherry, guava, pineapple, Amazonian cupuaçu",
              price: 18.0
            },
            {
              name: "Copo de Suco",
              nameEn: "Juice Glass",
              description: "Opções: graviola, acerola, goiaba, abacaxi, cupuaçu",
              descriptionEn: "Options: soursop (graviola), acerola cherry, guava, pineapple, Amazonian cupuaçu",
              price: 12.0
            },
            {
              name: "Jarra de Suco de Limão, Maracujá ou Morango 1 L",
              nameEn: "Lime, Passion Fruit or Strawberry Juice (1 L Pitcher)",
              description: "",
              descriptionEn: "",
              price: 35.0
            },
            {
              name: "Jarra de Suco de Limão, Maracujá ou Morango 500 ml",
              nameEn: "Lime, Passion Fruit or Strawberry Juice (500 ml Pitcher)",
              description: "",
              descriptionEn: "",
              price: 20.0
            },
            {
              name: "Copo de Suco de Limão, Maracujá ou Morango",
              nameEn: "Lime, Passion Fruit or Strawberry Juice (Glass)",
              description: "",
              descriptionEn: "",
              price: 15.0
            },
            {
              name: "Adição de leite ou hortelã",
              nameEn: "Add milk or fresh mint",
              description: "",
              descriptionEn: "",
              price: 2.0
            }
          ]
        },
        {
          title: "Vitaminas",
          titleEn: "Smoothies",
          items: [
            { name: "Vitamina Simples", nameEn: "Single-Fruit Milk Smoothie", description: "", descriptionEn: "", price: 17.0 },
            { name: "Vitamina Mista", nameEn: "Mixed-Fruit Milk Smoothie", description: "", descriptionEn: "", price: 20.0 }
          ]
        }
      ]
    },
    {
      id: "sobremesa",
      title: "Sobremesa",
      titleEn: "Desserts",
      subtitle: "Consultar a disponibilidade da sobremesa do dia",
      subtitleEn: "Ask your server for today's dessert availability",
      banner: "assets/img/banner-sobremesa.jpg",
      items: [
        {
          name: "Petit Gateau",
          nameEn: "Warm Chocolate Lava Cake (Petit Gâteau)",
          description: "Tempo de preparo: 20 a 30 minutos",
          descriptionEn: "Prep time: 20–30 minutes",
          price: 26.9
        },
        { name: "Pudim de Leite", nameEn: "Brazilian Condensed Milk Flan", description: "", descriptionEn: "", price: 15.0 },
        { name: "Torta de Banana", nameEn: "Caramelized Banana Pie", description: "", descriptionEn: "", price: 20.0 },
        { name: "Mousse de Maracujá", nameEn: "Passion Fruit Mousse", description: "", descriptionEn: "", price: 18.0 },
        { name: "Mousse de Limão", nameEn: "Key Lime Mousse", description: "", descriptionEn: "", price: 18.0 },
        { name: "Salada de Frutas", nameEn: "Fresh Fruit Salad", description: "", descriptionEn: "", price: 24.9 },
        { name: "Salada de Frutas com sorvete", nameEn: "Fresh Fruit Salad with Ice Cream", description: "", descriptionEn: "", price: 26.9 },
        {
          name: "Creme de Cupuaçu com Ovomaltine",
          nameEn: "Creamy Amazonian Cupuaçu with Ovaltine Crunch",
          description: "",
          descriptionEn: "",
          price: 18.0
        }
      ]
    },
    {
      id: "porcoes-extras",
      title: "Porções Extras",
      titleEn: "Sides & Add-Ons",
      subtitle: "",
      subtitleEn: "",
      banner: "",
      items: [
        { name: "Arroz branco", nameEn: "Steamed White Rice", description: "", descriptionEn: "", price: 10.0 },
        { name: "Arroz com Brócolis", nameEn: "Broccoli Rice", description: "", descriptionEn: "", price: 12.0 },
        { name: "Purê de Batata", nameEn: "Creamy Mashed Potatoes", description: "", descriptionEn: "", price: 15.0 },
        { name: "Farofa", nameEn: "Toasted Cassava Flour (Farofa)", description: "", descriptionEn: "", price: 5.0 },
        { name: "Batata Grande", nameEn: "Large French Fries", description: "450g", descriptionEn: "450g", price: 24.9 },
        { name: "Batata Pequena", nameEn: "Small French Fries", description: "150g", descriptionEn: "150g", price: 15.0 },
        { name: "Batatonese", nameEn: "Creamy Potato Salad", description: "", descriptionEn: "", price: 18.0 },
        { name: "Pão na Chapa", nameEn: "Griddle-Toasted Buttered Bread", description: "", descriptionEn: "", price: 3.0 },
        { name: "Hambúrguer extra", nameEn: "Extra Beef Patty", description: "100g", descriptionEn: "100g", price: 12.0 },
        { name: "Ovo frito", nameEn: "Fried Egg", description: "", descriptionEn: "", price: 3.0 },
        { name: "Bacon", nameEn: "Crispy Bacon", description: "", descriptionEn: "", price: 6.0 },
        { name: "Salsicha", nameEn: "Sausage", description: "", descriptionEn: "", price: 5.0 },
        { name: "Queijo ou Presunto", nameEn: "Extra Cheese or Ham", description: "", descriptionEn: "", price: 3.0 }
      ]
    }
  ]
};
