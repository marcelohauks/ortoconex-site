export type Locale = 'pt' | 'en';

export type Messages = (typeof translations)[Locale];

export const translations = {
  pt: {
    searchPlaceholder: 'Buscar produtos…',
    nav: {
      produtos: 'Produtos',
      quemSomos: 'Quem somos',
      mercados: 'Mercados',
      contato: 'Contato',
    },
    hero: {
      slide1Title: 'Inovação com expertise técnica',
      slide1Subtitle: 'Soluções em conexões, válvulas e suprimentos industriais.',
      slide2Title: 'Qualidade e confiabilidade',
      slide2Subtitle: 'Atendimento técnico do fornecimento ao pós-venda.',
      slide3Title: 'Parceria com o seu projeto',
      slide3Subtitle: 'Campinas e todo o Brasil.',
    },
    products: {
      title: 'Nossos produtos',
      subtitle:
        'Excelência na linha de conexões, válvulas e equipamentos para sua operação.',
      verMore: 'Ver mais',
      catalogTitle: 'Catálogo de produtos',
      backLink: 'Voltar ao site',
      noResults: 'Nenhum produto encontrado para sua busca.',
      requestQuote: 'SOLICITAR COTAÇÃO',
      closeModal: 'Fechar',
      backToCatalog: 'Voltar ao catálogo',
      otherProductsInListing: 'Outros produtos na listagem',
      moreProductsGrid: 'Mais produtos',
      searchPromptTitle: 'O que você procura:',
      catalogMetaDescription:
        'Catálogo Ortoconex: válvulas, conexões, suprimentos industriais e equipamentos.',
      metaProductDescription: '{{title}} — Ortoconex Suprimentos Industriais.',
      unknownProductTitle: 'Produto',
      /** Texto quando o produto não tem descrição longa cadastrada (use {{title}}). */
      descriptionFallback:
        'Entre em contato para especificações técnicas, disponibilidade e condições para {{title}}.',
      /** Mensagem pré-preenchida no WhatsApp; use {{title}} para o nome do produto. */
      quoteWhatsAppMessage: `Olá, tudo bem?

Gostaria de solicitar uma cotação e mais informações sobre o produto *{{title}}*. Poderia me auxiliar, por favor?`,
      productCopy: {
        'valvula-de-descarga-rapida': {
          title: 'Válvula de descarga rápida',
          tagline: 'Eficiência e agilidade na sua operação!',
          description: `A válvula de descarga rápida é um componente essencial nas linhas de ar de caminhões, garantindo respostas mais rápidas no sistema pneumático.

🔧 Ela libera o ar comprimido de forma imediata, reduzindo o tempo de acionamento e melhorando o desempenho dos freios e de outros sistemas.

✅ Mais segurança
✅ Mais eficiência
✅ Menor desgaste dos componentes

Para desempenho e confiabilidade na frota, investir nos componentes certos faz toda a diferença.

#ManutençãoIndustrial #LinhaPesada #Caminhões #SistemaPneumático`,
        },
        'valvula-reguladora-de-pressao': {
          title: 'Válvula reguladora de pressão de água',
          tagline: 'Mais controle, mais segurança!',
          description: `A pressão excessiva da água pode causar vazamentos, desgaste prematuro em tubulações e danos a equipamentos. A válvula reguladora de pressão mantém o fluxo estável, protege todo o sistema hidráulico e melhora a eficiência da operação.

✅ Pressão de água constante
✅ Proteção de tubulações e equipamentos
✅ Menos desperdício e custos de manutenção
✅ Maior vida útil do sistema

Na Ortoconex Suprimentos Industriais você encontra soluções confiáveis para manutenção industrial e sistemas hidráulicos. Entre em contato com nossa equipe.

#Ortoconex #ManutençãoIndustrial #SistemaHidráulico #PressãoDeÁgua`,
        },
        'painel-de-alarme-gases': {
          title: 'Painel de alarme para gases',
          tagline: 'Monitoramento de pressão que garante segurança',
          description: `O painel de alarme para gases monitora a pressão da linha e dispara alertas imediatos em caso de baixa pressão, evitando falhas no fornecimento de gases essenciais.

Indispensável em hospitais, clínicas e laboratórios.

✅ Alerta sonoro e visual
✅ Detecção rápida de queda de pressão
✅ Mais segurança para pacientes e equipes
✅ Atende exigências de normas técnicas

A Ortoconex Suprimentos Industriais fornece este equipamento com soluções confiáveis para sistemas de gases e manutenção industrial.

📩 contato@ortoconex.com.br
☎️ (19) 2209-1416
📱 (19) 99129-9358

#Ortoconex #GasesMedicinais #AlarmeDePressão #SegurançaHospitalar`,
        },
        'valvula-esfera-mini-inox': {
          title: 'Válvula esfera mini inox',
          tagline: 'Compacta, resistente e eficiente',
          description: `Compacta, resistente e extremamente eficiente — ideal quando a aplicação exige qualidade, durabilidade e precisão.

✔️ Diversas medidas disponíveis
✔️ Pronta entrega (consulte estoque)

Fale com a Ortoconex Suprimentos Industriais e garanta a solução certa para sua manutenção.

#Ortoconex #VálvulaEsfera #MiniInox #SuprimentosIndustriais`,
        },
        'conexao-inox-dupla-anilha': {
          title: 'Conexão inox dupla anilha',
          tagline: 'Qualidade, segurança e performance',
          description: `Na Ortoconex Suprimentos Industriais você encontra a linha completa de conexões inox dupla anilha, desenvolvidas para vedação confiável e alta resistência em sistemas de alta pressão.

Produzimos sob medida, conforme a necessidade de cada projeto — precisão, durabilidade e agilidade na entrega.`,
        },
        'conexoes-instantaneas-pneumaticas': {
          title: 'Conexões instantâneas pneumáticas',
          tagline: 'Cores diferenciadas para identificar circuitos',
          description: `Com cores diferenciadas, identificar circuitos fica mais simples: praticidade na montagem, menos erros na operação e manutenção mais organizada.

💡 Exemplo: conexão vermelha para destacar linhas específicas no projeto pneumático.

💨 Eficiência, segurança e organização em cada detalhe.

#Ortoconex #Pneumática #ConexõesInstantâneas #AutomaçãoIndustrial #ManutençãoIndustrial`,
        },
        'abracadeira-aco-inoxidavel': {
          title: 'Abraçadeira suporte em aço inoxidável',
          tagline: 'Resistência e precisão sob medida',
          description: `Fabricada em aço inoxidável, nossa abraçadeira suporte oferece alta resistência mecânica, durabilidade e proteção contra corrosão, inclusive em ambientes agressivos.

✔️ Desenvolvida sob medida, com encaixe preciso para a aplicação
✔️ Maior segurança e confiabilidade operacional
✔️ Acabamento que reduz desgaste e facilita a manutenção

Indicada para diferentes segmentos industriais que buscam eficiência e longa vida útil.

#Inox #ManutençãoIndustrial #Engenharia #Qualidade #SobMedida`,
        },
        'engate-hidraulico-face-plana': {
          title: 'Engate hidráulico face plana',
          tagline: 'Mais segurança, menos vazamentos',
          description: `✔ Evita contaminação do fluido
✔ Reduz entrada de ar no sistema
✔ Fácil de limpar e conectar

Ideal para máquinas agrícolas, construção civil, indústria e outras aplicações. Fale conosco e encontre o modelo ideal para sua necessidade.

#Hidráulica #EngateHidráulico #FacePlana #ManutençãoIndustrial #Ortoconex`,
        },
      },
    },
    about: {
      title: 'Quem somos',
      heading: 'Referência em suprimentos industriais',
      body1:
        'A Ortoconex atua com foco em conexões, válvulas e equipamentos para indústrias que exigem desempenho e segurança. Com experiência no mercado, oferecemos soluções alinhadas às normas e às necessidades de cada aplicação.',
      body2:
        'Nossa equipe apoia desde a especificação até o suporte pós-venda, com agilidade e transparência. Unimos tecnologia, estoque e parcerias com fabricantes para entregar o melhor custo-benefício.',
      videoCaption: 'Instalações e equipe Ortoconex',
    },
    markets: {
      title: 'Mercados atendidos',
      subtitle:
        'Atuamos em diversos segmentos industriais com produtos certificados e suporte especializado.',
      items: [
        'Alimentício e bebidas',
        'Químico e farmacêutico',
        'Metalmecânico e naval',
        'Óleo e gás',
        'Laboratórios',
        'Fluidos e granéis',
      ],
    },
    accessibility: {
      whatsappFloating: 'Abrir conversa no WhatsApp',
      instagramFloating: 'Abrir Instagram da Ortoconex',
      carouselPrev: 'Slide anterior',
      carouselNext: 'Próximo slide',
      carouselSlide: 'Ir para o slide {{n}}',
      navOpen: 'Abrir menu',
      navClose: 'Fechar menu',
      langPt: 'Português',
      langEn: 'English',
    },
    footer: {
      title: 'Fale conosco',
      addressLine1: 'Rua Antonio Augusto 185',
      addressLine2: 'Jd Novo Campos Eliseos — Campinas, SP',
      phoneLandline: '19 2209-1416',
      phoneMobile: '19 99129-9358',
      mapTitle: 'Localização',
      openMaps: 'Abrir no Google Maps',
      instagram: 'Instagram',
      rights: 'Todos os direitos reservados.',
    },
    siteMeta: {
      homeTitle: 'Ortoconex — Prévia',
      homeDescription:
        'Prévia do novo site Ortoconex: produtos, quem somos, mercados e contato.',
    },
  },
  en: {
    searchPlaceholder: 'Search products…',
    nav: {
      produtos: 'Products',
      quemSomos: 'About us',
      mercados: 'Markets',
      contato: 'Contact',
    },
    hero: {
      slide1Title: 'Innovation with technical expertise',
      slide1Subtitle: 'Solutions in fittings, valves and industrial supplies.',
      slide2Title: 'Quality and reliability',
      slide2Subtitle: 'Technical support from supply to after-sales.',
      slide3Title: 'Partnership for your project',
      slide3Subtitle: 'Campinas and all of Brazil.',
    },
    products: {
      title: 'Our products',
      subtitle:
        'Excellence across our line of fittings, valves and equipment for your operation.',
      verMore: 'See more',
      catalogTitle: 'Product catalog',
      backLink: 'Back to site',
      noResults: 'No products match your search.',
      requestQuote: 'REQUEST QUOTE',
      closeModal: 'Close',
      backToCatalog: 'Back to catalog',
      otherProductsInListing: 'Other products in this list',
      moreProductsGrid: 'More products',
      searchPromptTitle: 'What are you looking for:',
      catalogMetaDescription:
        'Ortoconex catalog: valves, fittings, industrial supplies and equipment.',
      metaProductDescription: '{{title}} — Ortoconex Industrial Supplies.',
      unknownProductTitle: 'Product',
      descriptionFallback:
        'Contact us for technical specifications, availability and terms for {{title}}.',
      quoteWhatsAppMessage: `Hello, how are you?

I would like to request a quote and more information about the product *{{title}}*. Could you help me, please?`,
      productCopy: {
        'valvula-de-descarga-rapida': {
          title: 'Quick discharge valve',
          tagline: 'Efficiency and agility for your operation!',
          description: `The quick discharge valve is essential in truck air lines, delivering faster response in the pneumatic system.

🔧 It releases compressed air immediately, reducing actuation time and improving brakes and other systems.

✅ More safety
✅ More efficiency
✅ Less wear on components

For fleet performance and reliability, the right components make all the difference.

#IndustrialMaintenance #HeavyDuty #Trucks #PneumaticSystem`,
        },
        'valvula-reguladora-de-pressao': {
          title: 'Water pressure regulating valve',
          tagline: 'More control, more safety!',
          description: `Excessive water pressure can cause leaks, premature pipe wear and equipment damage. A pressure regulating valve keeps flow stable, protects the entire hydraulic system and improves operating efficiency.

✅ Constant water pressure
✅ Protects piping and equipment
✅ Less waste and maintenance cost
✅ Longer system life

At Ortoconex Industrial Supplies you will find reliable solutions for industrial maintenance and hydraulic systems. Contact our team.

#Ortoconex #IndustrialMaintenance #HydraulicSystem #WaterPressure`,
        },
        'painel-de-alarme-gases': {
          title: 'Gas alarm panel',
          tagline: 'Pressure monitoring for safety',
          description: `The gas alarm panel monitors line pressure and triggers immediate alerts on low pressure, avoiding failures in the supply of essential gases.

Essential for hospitals, clinics and laboratories.

✅ Audible and visual alarm
✅ Fast detection of pressure drop
✅ Greater safety for patients and staff
✅ Meets technical standards

Ortoconex Industrial Supplies supplies this equipment with reliable solutions for gas systems and industrial maintenance.

📩 contato@ortoconex.com.br
☎️ +55 (19) 2209-1416
📱 +55 (19) 99129-9358

#Ortoconex #MedicalGases #PressureAlarm #HospitalSafety`,
        },
        'valvula-esfera-mini-inox': {
          title: 'Mini stainless steel ball valve',
          tagline: 'Compact, robust and efficient',
          description: `Compact, robust and highly efficient — ideal when the application demands quality, durability and precision.

✔️ Multiple sizes available
✔️ Stock availability (confirm with us)

Talk to Ortoconex Industrial Supplies and get the right solution for your maintenance needs.

#Ortoconex #BallValve #MiniStainless #IndustrialSupplies`,
        },
        'conexao-inox-dupla-anilha': {
          title: 'Stainless double-ferrule fitting',
          tagline: 'Quality, safety and performance',
          description: `At Ortoconex Industrial Supplies you will find a full line of stainless double-ferrule fittings, engineered for reliable sealing and high strength in high-pressure systems.

We manufacture to order according to each project — precision, durability and fast delivery.`,
        },
        'conexoes-instantaneas-pneumaticas': {
          title: 'Instant pneumatic fittings',
          tagline: 'Color coding for easy circuit ID',
          description: `With differentiated colors, identifying circuits is easier: faster assembly, fewer mistakes and more organized maintenance.

Example: red fittings to highlight specific lines in your pneumatic design.

💨 Efficiency, safety and organization in every detail.

#Ortoconex #Pneumatics #InstantFittings #IndustrialAutomation #IndustrialMaintenance`,
        },
        'abracadeira-aco-inoxidavel': {
          title: 'Stainless steel support clamp',
          tagline: 'Strength and precision made to measure',
          description: `Made of stainless steel, our support clamp offers high mechanical strength, durability and corrosion protection, even in aggressive environments.

✔️ Custom fabrication with precise fit for the application
✔️ Greater operational safety and reliability
✔️ Quality finish that reduces wear and eases maintenance

Suitable for many industrial segments that need efficiency and long service life.

#Stainless #IndustrialMaintenance #Engineering #Quality #CustomMade`,
        },
        'engate-hidraulico-face-plana': {
          title: 'Flat-face hydraulic coupling',
          tagline: 'More safety, fewer leaks',
          description: `✔ Helps prevent fluid contamination
✔ Reduces air ingress into the system
✔ Easy to clean and connect

Ideal for agricultural machinery, construction, industry and more. Contact us to find the right model.

#Hydraulics #HydraulicCoupling #FlatFace #IndustrialMaintenance #Ortoconex`,
        },
      },
    },
    about: {
      title: 'About us',
      heading: 'A reference in industrial supplies',
      body1:
        'Ortoconex focuses on fittings, valves and equipment for industries that demand performance and safety. With market experience, we deliver solutions aligned with standards and each application.',
      body2:
        'Our team supports you from specification to after-sales, with agility and transparency. We combine technology, stock and manufacturer partnerships for the best value.',
      videoCaption: 'Ortoconex facilities and team',
    },
    markets: {
      title: 'Markets we serve',
      subtitle:
        'We serve multiple industrial segments with certified products and specialized support.',
      items: [
        'Food and beverage',
        'Chemical and pharmaceutical',
        'Metalworking and marine',
        'Oil and gas',
        'Laboratories',
        'Fluids and bulk',
      ],
    },
    accessibility: {
      whatsappFloating: 'Open WhatsApp chat',
      instagramFloating: 'Open Ortoconex on Instagram',
      carouselPrev: 'Previous slide',
      carouselNext: 'Next slide',
      carouselSlide: 'Go to slide {{n}}',
      navOpen: 'Open menu',
      navClose: 'Close menu',
      langPt: 'Portuguese',
      langEn: 'English',
    },
    footer: {
      title: 'Contact us',
      addressLine1: '185 Antonio Augusto Street',
      addressLine2: 'Jd Novo Campos Eliseos — Campinas, SP, Brazil',
      phoneLandline: '+55 19 2209-1416',
      phoneMobile: '+55 19 99129-9358',
      mapTitle: 'Location',
      openMaps: 'Open in Google Maps',
      instagram: 'Instagram',
      rights: 'All rights reserved.',
    },
    siteMeta: {
      homeTitle: 'Ortoconex — Preview',
      homeDescription:
        'Preview of the new Ortoconex website: products, about us, markets and contact.',
    },
  },
} as const;
