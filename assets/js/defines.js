let path = 'images';
const projects = {
    'PHP' : [
        {
            title: 'Truelink Calendar',
            description: '[Imagine aqui a melhor descrição rápida que você já viu na vida]',
            project: 'truelink',
            image: 'Mobile_Truelink03.jpg',
            imageWebP: 'Mobile_Truelink03.webp'
        },
        {
            title: 'Imagine | Organize | Compartilhe',
            description: 'Que projeto incrível! :D',
            project: 'truelink',
            image: 'Mobile_Truelink04.jpg',
            imageWebP: 'Mobile_Truelink04.webp'
        },
        {
            title: 'Envia',
            description: 'Melhor ferramenta, vai. pode confessar! :P',
            project: 'envia',
            image: 'Mobile_Envia05.jpg',
            imageWebP: 'Mobile_Envia05.webp'
        },
        {
            title: 'Envia',
            description: 'Olha quantas funcionalidades! Haha',
            project: 'envia',
            image: 'Mobile_Envia04.jpg',
            imageWebP: 'Mobile_Envia04.webp'
        }
    ]
};

const features = [
    {
        icon: 'fa-paper-plane-o',
        title: 'PHP',
        personalText: 'A linguagem que me possibilitou ser expositor no <em>FatechDay Expo</em> na <em>Faculdade de Tecnologia do Estado de São Paulo (FATEC) de Osasco</em> enquanto cursava o <em>Ensino Técnico</em> na <em>Escola Técnica Estadual (ETEC) de Embu</em>.',
        professionalText: `"O PHP [...] é uma linguagem de script open source de uso geral, muito utilizada, 
                e especialmente adequada para o desenvolvimento web. [...] O código (PHP) é executado no servidor, gerando o HTML que é então enviado para o navegador."`,
        reference: {
          title: 'PHP.net (2019)',
          link: 'https://www.php.net/manual/pt_BR/intro-whatis.php'
        },
        projectFilter: 'PHP'
    },
    {
        icon: 'fa-laptop',
        title: 'Java',
        personalText: 'A linguagem que possuo mais afinidade e conhecimento das peculiaridades técnicas graças à <em>Academia Java Oracle Edition</em> na <em>Globalcode</em>.',
        professionalText: `"Java é uma linguagem de programação e plataforma computacional. [...] O Java é 
                rápido, seguro e confiável. De laptops a datacenters, consoles de games a supercomputadores 
                científicos, telefones celulares à Internet, o Java está em todos os lugares!"`,
        reference: {
          title: 'Java.com (2015)',
          link: 'https://www.java.com/pt_BR/download/faq/whatis_java.xml'
        },
        projectFilter: 'none'
    },
    {
        icon: 'fa-code',
        title: 'Node.js',
        personalText: 'A tecnologia mais recente em meus estudos, a qual estudo por conta graças à <em>plataforma online Udemy</em> e ao curso da comunidade <em>#NodeBR!</em>',
        professionalText: `"Node.js é uma plataforma construída sobre o motor JavaScript [...] para facilmente 
                construir aplicações de rede rápidas e escaláveis. [...] leve e eficiente, ideal para aplicações 
                em tempo real com troca intensa de dados através de dispositivos distribuídos."`,
        reference: {
          title: 'NodeBR.com (2016)',
          link: 'http://nodebr.com/o-que-e-node-js/'
        },
        projectFilter: 'none'
    },
    {
        icon: 'fa-headphones',
        title: 'C#',
        personalText: 'Minha linguagem preferida para estudos sobre lógica de programação e análise de algoritmos, graças a um dos meus mestres durante o <em>Ensino Técnico</em> na <em>Etec de Embu</em>.',
        professionalText: `"C# é uma linguagem elegante, [...] que permite que os desenvolvedores criem uma 
                variedade de aplicativos robustos e seguros [...]. Você pode usar C# para criar aplicativos 
                de cliente do Windows, serviços Web XML, componentes distribuídos, aplicativos 
                cliente-servidor, aplicativos de banco de dados e muito, muito mais."`,
        reference: {
          title: 'Docs.microsoft.com (2015)',
          link: 'https://docs.microsoft.com/pt-br/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework'
        },
        projectFilter: 'none'
    },
    {
        icon: 'fa-heart-o',
        title: 'Javascript',
        personalText: 'A linguagem que comecei a aprender para aplicar ao meu <em>Trabalho de Conclusão de Curso</em> durante o <em>Ensino Técnico</em> na <em>Etec de Embu</em> e é essencial em qualquer projeto Web.',
        professionalText: `"JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web [...] (como) criar conteúdo que se atualiza dinamicamente, 
                controlar múltimídias, imagens animadas, e tudo o mais que há de intessante."`,
        reference: {
          title: 'Developer.mozila.org (2019)',
          link: 'https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript'
        },
        projectFilter: 'none'
    },
    {
        icon: 'fa-flag-o',
        title: 'VB',
        personalText: 'Uma linguagem que marcou meu desenvolvimento em lógica de programação durante o <em>Ensino Técnico</em> na <em>Etec de Embu</em> e, caso necessário, serve como quebra-galho. :D',
        professionalText: `"O Visual Basic permite que os desenvolvedores usem o Windows, a Web e os dispositivos 
                móveis como destino. Assim como acontece com todas as linguagens que visam o Microsoft 
                .NET Framework"`,
        reference: {
          title: 'Docs.microsoft.com (2018)',
          link: 'https://docs.microsoft.com/pt-br/dotnet/visual-basic/'
        },
        projectFilter: 'none'
    },
    {
        icon: 'fa-database',
        title: 'MySQL',
        personalText: 'A linguagem SQL que marca meu desenvolvimento desde o <em>Ensino Técnico</em> na <em>Etec de Embu</em> até atualmente no <em>Ensino Superior</em> na <em>USJT</em>.',
        professionalText: `"O MySQL é o banco de dados de código aberto mais conhecido no mundo. 
                Com comprovado desempenho, confiabilidade e facilidade de uso, o MySQL tornou-se a principal 
                opção de banco de dados para aplicativos baseados na Web, usado por propriedades da Web de 
                alto perfil, incluindo Facebook, Twitter, YouTube e todos os cinco sites principais."`,
        reference: {
          title: 'Oracle.com.br (2019)',
          link: 'https://www.oracle.com/br/mysql/'
        },
        projectFilter: 'none'
    },
    {
        icon: 'fa-code',
        title: 'MongoDB',
        personalText: 'Uma linguagem Not Only SQL que estou aprendendo para aplicar nos projetos mais recentes e nos estudos de Node.js na <em>plataforma online Udemy</em>.',
        professionalText: `"MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need. [...] MongoDB’s document model is simple for developers to learn and use, while still providing all the capabilities needed to meet the most complex requirements at any scale."`,
        reference: {
          title: 'MongoDB.com (2019)',
          link: 'https://www.mongodb.com/what-is-mongodb'
        },
        projectFilter: 'none'
    },
    {
        icon: 'fa-terminal',
        title: 'React.js',
        personalText: 'Uma biblioteca Javascript para criação de interfaces de usuário em Javascript utilizando orientação a componentes que comecei a aprender por meio do Bootcamp GoStack da Rocketseat, testes da codenation e têm sido minha principal tecnologia junto com Node.js e React Native até então!',
        professionalText: `"Uma biblioteca JavaScript para criar interfaces de usuário. React faz com que a criação de UIs interativas seja uma tarefa fácil [...] o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam. [...] Crie componentes encapsulados que gerenciam seu próprio estado e então, combine-os para criar UIs complexas."`,
        reference: {
          title: 'ReactJS.org (2019)',
          link: 'https://pt-br.reactjs.org/'
        },
        projectFilter: 'none'
    },
    ,
    {
        icon: 'fa-mobile',
        title: 'React Native',
        personalText: 'Um framework baseado em React.js criado pelo Facebook para permitir a criação de aplicações Android/IOS de forma nativa \o/ Também adquirida durante meu tempo de Bootcamp da Rocketseat, Codenation e diversos desafios de programação internet afora.',
        professionalText: `"React Native lets you build mobile apps using only JavaScript. It uses the same design as React, letting you compose a rich mobile UI using declarative components.[...] The apps you are building with React Native aren't mobile web apps because React Native uses the same fundamental UI building blocks as regular iOS and Android apps." `,
        reference: {
          title: 'Facebook.github.io (2019)',
          link: 'https://facebook.github.io/react-native/'
        },
        projectFilter: 'none'
    }

];

const certificates = [
    {
        name: 'Prêmio MB',
        href: `${path}/certificates/original/Premio MB.jpg`,
        image: 'Premio MB.jpg',
        imageWebP: 'Premio MB.webp'
    },
    {
        name: 'Certificado Globalcode',
        href: `${path}/certificates/original/Certificado Globalcode.jpg`,
        image: 'Certificado Globalcode.jpg',
        imageWebP: 'Certificado Globalcode.webp'
    },
    {
        name: 'Certificado Microlins',
        href: `${path}/certificates/original/Certificado Microlins.jpg`,
        image: 'Certificado Microlins.jpg',
        imageWebP: 'Certificado Microlins.webp'
    }, 
    {
        name: 'Enterprise Design Thinking Practioner Certificate',
        href: `${path}/certificates/original/Enterprise Design Thinking Practioner Certificate.pdf`,
        image: 'Enterprise Design Thinking Practioner Certificate.jpg',
        imageWebP: 'Enterprise Design Thinking Practioner Certificate.webp'
    },
    {
        name: 'Watson Assistant Foundations (ILP-WAC_273)',
        href: `${path}/certificates/original/Watson Assistant Foundations (ILP-WAC_273).pdf`,
        image: 'Watson Assistant Foundations (ILP-WAC_273).jpg',
        imageWebP: 'Watson Assistant Foundations (ILP-WAC_273).webp'
    },
    {
        name: 'IBM Cloud Private Foundation Technology Series - Cloud Foundry (ITS-DL09303G)',
        href: `${path}/certificates/original/IBM Cloud Private Foundation Technology Series - Cloud Foundry (ITS-DL09303G).pdf`,
        image: 'IBM Cloud Private Foundation Technology Series - Cloud Foundry (ITS-DL09303G).jpg',
        imageWebP: 'IBM Cloud Private Foundation Technology Series - Cloud Foundry (ITS-DL09303G).webp'
    },
    {
        name: 'IBM Cloud Private Foundation Technology Series - Containers and Docker (ITS-DL09300G)',
        href: `${path}/certificates/original/IBM Cloud Private Foundation Technology Series - Containers and Docker (ITS-DL09300G).pdf`,
        image: 'IBM Cloud Private Foundation Technology Series - Containers and Docker (ITS-DL09300G).jpg',
        imageWebP: 'IBM Cloud Private Foundation Technology Series - Containers and Docker (ITS-DL09300G).webp'
    },
    {
        name: 'IBM Cloud Private Foundation Technology Series - Kubernetes and Helm (ITS-DL09301G)',
        href: `${path}/certificates/original/IBM Cloud Private Foundation Technology Series - Kubernetes and Helm (ITS-DL09301G).pdf`,
        image: 'IBM Cloud Private Foundation Technology Series - Kubernetes and Helm (ITS-DL09301G).jpg',
        imageWebP: 'IBM Cloud Private Foundation Technology Series - Kubernetes and Helm (ITS-DL09301G).webp'
    },
    {
        name: 'IBM Cloud Private Foundation Technology Series - Twelve-factor, Microservices, and Istio (ITS-DL09302G)',
        href: `${path}/certificates/original/IBM Cloud Private Foundation Technology Series - Twelve-factor, Microservices, and Istio (ITS-DL09302G).pdf`,
        image: 'IBM Cloud Private Foundation Technology Series - Twelve-factor, Microservices, and Istio (ITS-DL09302G).jpg',
        imageWebP: 'IBM Cloud Private Foundation Technology Series - Twelve-factor, Microservices, and Istio (ITS-DL09302G).webp'
    },
    {
        name: 'ITA-WATSON-AI',
        href: `${path}/certificates/original/ITA-WATSON-AI.pdf`,
        image: 'ITA-WATSON-AI.jpg',
        imageWebP: 'ITA-WATSON-AI.webp'
    },
    {
        name: 'ITA-BLOCKCHAIN',
        href: `${path}/certificates/original/ITA-BLOCKCHAIN.pdf`,
        image: 'ITA-BLOCKCHAIN.jpg',
        imageWebP: 'ITA-BLOCKCHAIN.webp'
    },
    {
        name: 'WATSON-ASSISTANT',
        href: `${path}/certificates/original/WATSON-ASSISTANT.pdf`,
        image: 'WATSON-ASSISTANT.jpg',
        imageWebP: 'WATSON-ASSISTANT.webp'
    },
    {
        name: 'IBM Cloud Private Foundation Technology Series - Containers and Docker',
        href: `${path}/certificates/original/IBM Cloud Private Foundation Technology Series - Containers and Docker.pdf`,
        image: 'IBM Cloud Private Foundation Technology Series - Containers and Docker.jpg',
        imageWebP: 'IBM Cloud Private Foundation Technology Series - Containers and Docker.webp'
    },
    {
        name: 'IBM Cloud Private Foundations Technology Series Cloud Foundry',
        href: `${path}/certificates/original/IBM Cloud Private Foundations Technology Series Cloud Foundry.pdf`,
        image: 'IBM Cloud Private Foundations Technology Series Cloud Foundry.jpg',
        imageWebP: 'IBM Cloud Private Foundations Technology Series Cloud Foundry.webp'
    },
    {
        name: 'IBM Cloud Private Foundation Technology Series - Kubernetes and Helm',
        href: `${path}/certificates/original/IBM Cloud Private Foundation Technology Series - Kubernetes and Helm.pdf`,
        image: 'IBM Cloud Private Foundation Technology Series - Kubernetes and Helm.jpg',
        imageWebP: 'IBM Cloud Private Foundation Technology Series - Kubernetes and Helm.webp'
    },
    {
        name: 'IBM Cloud Private Foundation Technology Series Twelve-factor, Microservices, and certificate',
        href: `${path}/certificates/original/IBM Cloud Private Foundation Technology Series Twelve-factor, Microservices, and certificate.pdf`,
        image: 'IBM Cloud Private Foundation Technology Series Twelve-factor, Microservices, and certificate.jpg',
        imageWebP: 'IBM Cloud Private Foundation Technology Series Twelve-factor, Microservices, and certificate.webp'
    }
];

const badges = [
    {
        image: 'https://images.youracclaim.com/images/993f0916-3c26-4d06-89ff-76c29e986d68/Watson%2BAssistant%2B-%2BFoundations.png',
        imageWebP : 'https://images.youracclaim.com/images/993f0916-3c26-4d06-89ff-76c29e986d68/Watson%2BAssistant%2B-%2BFoundations.png',
        link: 'https://www.youracclaim.com/badges/fedbc5ec-e19c-4ee8-a7f8-9296e73b9345/linked_in_profile'
    },
    {
        image: 'https://images.youracclaim.com/images/39b80b52-77e4-4da5-9a52-7933c1d3bdd7/IBM%2BCloud%2BPrivate%2B-%2BFoundation%2BTechnology.png',
        imageWebP : 'https://images.youracclaim.com/images/39b80b52-77e4-4da5-9a52-7933c1d3bdd7/IBM%2BCloud%2BPrivate%2B-%2BFoundation%2BTechnology.png',
        link: 'https://www.youracclaim.com/badges/a5d26be5-024d-4bee-a7d3-f933823d8305/linked_in_profile'
    },
    {
        image: 'https://images.youracclaim.com/images/84ac9eff-b8a2-4683-846b-f59887a73801/Python%2B101%2BData%2BScience.png',
        imageWebP : 'https://images.youracclaim.com/images/84ac9eff-b8a2-4683-846b-f59887a73801/Python%2B101%2BData%2BScience.png',
        link: 'https://www.youracclaim.com/badges/36bb3749-64e5-401d-9577-1d2172167e62/linked_in_profile'
    },
    {
        image: 'https://images.youracclaim.com/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07%2BPractitioner.png',
        imageWebP : 'https://images.youracclaim.com/images/bc08972c-3c7d-4b99-82a0-c94bcca36674/Badges_v8-07%2BPractitioner.png',
        link: 'https://www.youracclaim.com/badges/0bd01166-32ab-4979-9523-8a8574b747a6/linked_in_profile'
    }

    // {
    //     image: '',
    //     link: ''
    // }
]
const eventsImagePath = path + '/events';
const events = [
    {
        image: `${eventsImagePath}/fatechday.jpg`,
        imageWebP: `${eventsImagePath}/fatechday.webp`,
        title: 'FatechDay Expo!',
        subtitle:'Expositor pela primeira vez? :D',
        shortDescription: `Minha primeira grande experiência apresentando um projeto e
                possívelmente o motivo da minha certeza em seguir como desenvolvedor!`,
        text: ` #++++
                    Yeah! Primeira vez como expositor! Mas afinal, o que raios é FatechDay?
                ++++#
                #~ O que raios é FatechDay??~#
                #++++
                    De tempos em tempos o #bCentro Paula Souzab# - organização que rege as #bEscolas Técnicas Estaduais (ETECs)b# e
                    #bFaculdades de Tecnologia do Estado de São Paulo (FATECs)b# - organiza algumas feiras de tecnologia com objetivo de mostrar o potencial de seus
                    alunos de diferentes cursos e unidades por meio da apresentação de projetos desenvolvidos no
                    decorrer de sua estadia nas instituições do centro.#ln
                    E eu, como aluno do curso técnico em informática na #bETEC de embub#, tive a
                    honra de ser convidado a representá-la no #bFaTechDay Expob#: um evento que
                    reuniu cerca de 200 projetos, tanto de ETECs quanto de FATECs, na #bgigantesca FATEC de
                    Osascob#! #ln
                    E sim! Este foi sem dúvidas o pontapé inicial para meu ingresso na área!!
                ++++#
                #~ E qual a importância desse dia??~#
                #++++
                    Apresentar meu projeto de conclusão de curso e ver a reação extremamente receptiva do
                    público que estava ali no dia foi simplesmente #bSENSACIONAL!b# <3 #ln
                    #lnOuvir frases como:
                    #ln#tab"Cara, como não implementaram isso ainda?"
                    #ln#tab"Como ninguém pensou nisso antes?"
                    #ln#tab"Eu preciso disso pra ontem! haha"
                    #ln#tab"Ah se eu pudesse organizar minha rotina com
                    isso <3"#ln
                    e muito mais foi o que me fez perceber o quão satisfatório é ter uma idéia, desenvolver um
                    projeto e ver ele ali, paupável, quase pronto e... #bFUNCIONANDO!!b##ln
                    Literalmente era meu primeiro "filho" ali indo ao mundo, cerca de poucos meses antes de ser
                    apresentado à banca final e me permitir ser #boficialmente um técnico em informática
                        formado!b#
                ++++#`,
        date: '03/06/2017',
        gallery: [],
        categories: []
    },
    {
        image: `${eventsImagePath}/Palestra ETIM - ETEC Taboao.jpg`,
        imageWebP: `${eventsImagePath}/Palestra ETIM - ETEC Taboao.webp`,
        title: 'Oficialmente minha primeira palestra!',
        subtitle:'Minha primeira palestra? :O',
        shortDescription: `A estréia da minha recém escrita palestra #em Desconstrua
                coisas complexas em# com um público novo e simplesmente inesquecível!`,
        text: ` #++++
                    No dia 29 de outubro de 2018 foi definitivamente o dia de realizar minha primeira palestra diante dos olhares
                    atentos
                    de um público totalmente novo, recém chegado à recém inaugurada #bEscola Técnica Estadual (ETEC) de
                        Taboãob#: #ln
                    #bOs alunos do Ensino Técnico Integrado ao Médio em Informática!b#
                ++++#
                
                #~ E como isso foi possível?? ~#

                #++++
                    A convite da coordenadora de curso #bMarta Abadb#, pude trazer um pouco
                    da minha vivência para os novatos estreiando minha recém escrita palestra
                    #b#emDesconstruindo coisas complexasem#b# na #bprimeira semana técnica
                        desta unidade
                        da ETEC!b#
                ++++#

                #~ A tão esperada hora: A PALESTRA!! ~#
                
                #++++
                    E foi assim, em meio à correria dos novatos para apresentar seus projetos, ao empenho dos
                    professores em avaliá-los e à Marta tentando achar um tempinho na agenda para conseguir
                    comparecer
                    ali naquela hora.#ln
                    Enfrentando alguns problemas técnicos e contando com a incrível organização e cooperação dos
                    alunos
                    para conseguirem preparar um laboratório com cadeiras suficientes para que todos pudessem se
                    reunir ali
                    para assistir, bem apertadinhos, em tempo record - que consegui #bapresentar minha
                        primeira palestra!b# :D
                ++++#   
                
                #~ Então é de se esperar que tenhamos uma moral da história?? ~#
                
                #++++
                    A idéia era incentivar os alunos, contando um pouco da minha tragetória e descontruindo ela
                    em
                    alguns pontos fundamentais que podem ser aplicados em diferentes situações,
                    mostrando assim um pouco como a relação entre coisas simples, quando bem organizadas,
                    conseguem se tornar coisas absolutamente complexas, #bmas no fim eu é que acabei incentivado
                    graças à recepção assustadoramente calorosa desses alunos inesquecíveisb#, desde o fervor das
                    palmas
                    no fim da apresentação até o feedback individual de alguns depois da palestra! <3
                ++++#

                #~ E finalmente: ~#
                
                #++++
                    #bMuitíssimo obrigadob# a todos os envolvidos e quero que saibam que vocês não só fizeram parte
                    deste
                    início como colaboraram para tornar ele o melhor possível! <3
                ++++#
        `,
        date: '29/10/2018',
        gallery: [],
        categories: []
    },
    {
        image: `${eventsImagePath}/Palestra DS - ETEC Taboao.jpg`,
        imageWebP: `${eventsImagePath}/Palestra DS - ETEC Taboao.webp`,
        title: 'Variando um pouco o público!',
        subtitle:'Desenvolvimento de Sistemas \o/',
        shortDescription: `A segunda apresentação da minha palestra #emDesconstrua coisas
                            complexasem#, dessa vez para um público de todas as idades no
                            #emcurso técnico em Desenvolvimento de Sistemasem# da #emEscola Técnica Estadual (ETEC) de Taboãoem#! :D`,
        text: ` #++++
                    Após minha primeira palestra na #bEscola Técnica Estadual (ETEC)b# de Taboão para os alunos do #bEnsino Médio 
                    Integrado ao Técnico em Informáticab# durante a manhã, chegou a hora de apresentar para os alunos do #bcurso 
                    técnico em Desenvolvimento de Sistemasb# durante a noite.
                ++++#
                
                #~ Outro curso, outro período, outro público ~#
                
                #++++
                    Desta vez sob convite do coordenador e meu antigo professor #bRicardo Castrob# e com a confiança 
                    decorrente do excelente feedback do público da manhã, pude apresentar novamente a palestra 
                    #b#emDesconstruindo Coisas Complexasem#b#, agora para #bindivíduos de todas as idadesb#, 
                    com diferentes vivências e diferentes aspirações, desde experientes engenheiros eletricistas até 
                    jovens designers aspirantes à programadores recém ingressados no ensino técnico. 
                ++++#
                
                #~ Coincidências da vida? ~#
                
                #++++
                    E, para minha surpresa, neste mesmo dia iria palestrar um antigo amigo dos meus tempos de técnico e 
                    #batualmente professor em outra Escola Técnica Estadualb#, que me deu a honra de tê-lo na platéia aquele dia.
                ++++#
                
                #~ Sem mais delongas ~#
                
                #++++
                    Novamente o #bsingelo feedbackb# dos ali presentes ao fim da apresentação me motivou ainda mais a seguir 
                    palestrando e, inclusive, pude retornar no dia seguinte para apresentar desta vez minha segunda palestra, 
                    que terá uma publicação própria aqui neste portfólio.
                ++++#`,
        date: '01/11/2018',
        gallery: [],
        categories: []
    },
    {
        image: `${eventsImagePath}/Palestra DS - future jobs.jpg`,
        imageWebP: `${eventsImagePath}/Palestra DS - future jobs.webp`,
        title: 'Uma Palestra inesperada',
        subtitle:'Bons imprevistos às vezes são bem vindos!',
        shortDescription: `Dia de cobrir um palestrante faltante com uma palestra explorando um pouco do que vi em eventos como 
                #em Oracle OpenWorld, The Developers Conference, Microsoft InsidersDevTour em# e dentre outros! :D`,
        text: ` #~ Contextualizando ~#
        
                #++++
                    Aproveitando que fui convidado a palestrar, me ofereci para #bajudar a coordenar as semanas técnicas de técnologiab#, 
                    tanto na #bEscola Técnica Estadual de Embub#, quanto nos dois períodos da #bEscola Técnica Estadual de Taboãob#, 
                    levando alguns #bpalestrantesb# que tive a honra de conhecer no meio desta jornada indo em diferentes #beventos de 
                    técnologia e meetupsb#, tais como #bOracle OpenWorldb#, 
                    #bThe Developers Conferenceb#, #bMicrosoft InsidersDevTourb# e dentre outros.
                ++++#
                
                #~ E como chegamos a mais uma palestra minha inesperada? ~#
                
                #++++
                    As apresentações destes palestrantes e amigos foram simplesmente sensacionais, dignas de um post separado 
                    neste portfólio.#ln 
                    
                    Entretanto, no dia #em31 de outubro de 2018em# um dos meus convidados, que iria palestrar no dia seguinte à minha 
                    palestra, infelizmente não pôde comparecer devido a alguns problemas e #bme ofereci para cobri-lob#.
                ++++#
                
                #~ Quem diria, não é mesmo?  ~#
                
                #++++
                    E foi assim que pude falar rápidamente sobre #bnovas técnologiasb# que pude presenciar em ascenção no mercado. #ln
                    Estabelecendo uma #bsutil conexãob# entre como estes #b"novos" ramosb# da computação #bse co-relacionamb# e os #bavanços 
                    em um influenciam e viabilizam diretamente os demaisb#! <3
                ++++#
                
                #~ Mas por quê? ~#
                
                #++++
                    Como tive que preparar a palestra no dia, durante o horário de almoço na IBM
                    me concentrei principalmente em reunir imagens e preparar explicações da forma mais didática possível 
                    a fim de poder aproveitar o tempo e a explicação de cada área para estabelecer uma linha de raciocínio e já conectar
                    com as demais para #bnão só apresentar cada uma separadamenteb# aos que ainda não conheciam, #bmas também estabelecer uma ponte entre
                    elasb# aos que já tinham certo conhecimento prévio do assunto. #ln
                    
                    O que não foi nem um pouco difícil puxando na memória o que 
                    aprendi em #bvárias palestras e conversasb# que pude ter em eventos 
                    como #bOracle OpenWorldb#, #bMicrosoft InsidersDevTourb#, #bThe Developers Conferenceb# e as próprias 
                    #bBluetalks da IBMb# sobre como estas áreas relativamente "distintas" se relacionam.
                ++++#
                
                #~ E é possível falar disso tudo numa só noite?? ~#
                
                #++++
                    Claramente cada um desses assuntos por si só renderiam semanas de palestras próprias com muitos profissionais 
                    extremamente mais experientes que eu, mas sem dúvidas pode-se dizer que foi um dia indescritívelmente único, 
                    afinal não é sempre que se tem a oportunidade de cobrir um palestrante faltante e #bcomplementar sua palestra do 
                    dia anteriorb# dando uma pincelada rápida em #bMachine Learningb#, #bData Scienceb#, #bBig Datab#, #bBlockchainb#, #bIoTb# 
                    e afins, #bpodendo instigar ainda mais os novatosb#! <3
                ++++#`,
        date: '31/10/2018',
        gallery: [],
        categories: []
    },
    {
        image: `${eventsImagePath}/Palestra info - ETEC Taboao.jpg`,
        imageWebP: `${eventsImagePath}/Palestra info - ETEC Taboao.webp`,
        title: 'Uma palestra para meus mestres',
        subtitle:'Finalmente o grande dia!',
        shortDescription: `Depois deste percurso de palestras em diferentes cursos e Escolas Técnicas Estaduais, 
                finalmente a hora de voltar às origens e apresentar no grandioso lugar em que tudo isso começou! :D`,
        text: ` #~ O grande dia ~#
        
                #++++
                    E, finalmente, chegou o dia de poder trazer não só um pouco da vivência que originou a palestra 
                    #b#em Desconstruindo Coisas Complexas em#b#, mas também as experiências de já tê-la apresentado à outras 
                    turmas, cursos e #bEscolas Técnicas Estaduais (ETECs)b# às origens de tudo isso, onde tive #bmeu primeiro contato com programaçãob#, #bdesenvolvi meus primeiros 
                    projetosb# e conheci #bmeus primeiros mestresb# e #bamigos na áreab#: a minha casa, #bETEC de Embub#! <3
                ++++#
                
                #~ E quanto ao ambiente? ~#
                
                #++++
                    Como se já não bastasse a emoção de rever e poder #bapresentar o resultado do empenho 
                    de meus mestres à eles mesmosb#, ainda foi o dia de #bconcluir a primeira semana técnica 
                    que ajudei a organizarb#! #ln
                    
                    Concluindo assim a semana #bno mesmo palcob# em que palestraram #bcientistas 
                    e engenheiros biomédicos à nível TEDxTalksb#, #bpalestrantes internacionaisb#, #bprofessores PhDb#, 
                    #bcoordenadores de trilha do The Developers Conferenceb# e #bex-alunos da própria ETEC de Embub#!!
                ++++#
                
                #~ Chegou a hora!? ~#
                
                #++++
                    E foi assim, #bcom amigos e conhecidos na platéiab# e tendo a honra de 
                    poder fechar a semana com chave de ouro que pude #bapresentar pela ultima vez até então minha 
                    primeira palestra originalb#, seguindo os ensinamentos de carreira do #bJavaman Bruno Souzab#, 
                    fazendo valer um pouco da confiança depositada em mim por aqueles que me ajudaram no decorrer 
                    desta jornada #bque está apenas no iníciob#. 
                ++++#
                
                #~ E por último, mas não menos importante ~#
                
                #++++
                    Ficam aqui os #bagradecimentosb# à #bcada nova dicab#, #bcada ensinamentob#, #bcada convite 
                    a conhecer empresas gigantescas e fazer parte de projetos incríveisb#, 
                    #bcada risadab#, #bcada ajuda pedidab#, #bcada feedback dadob#, #bcada mínima demonstração 
                    de que coisas simples podem deixar marcas gigantescas ao longo de uma vida <3b# #ln
                    #bMeu mais sincero obrigado a cada um dos que me ajudaram a chegar até aqui!b# <3 
                ++++#
                <!-- #++++
                    Nota: Implementei a opção de comentários exclusivamente graças à esse acontecimento, então sinta-se à vontade para dizer o que quiser aqui em baixo <3 deixar mais alguma marca, lembrar de algo engraçado, dizer "eu tava lá", pedir dinheiro (nesse caso até te ajudo a pedir, pq realmente num tá fácil hahaha), ou simplesmente deixar seu nome aqui registrado pra garantir que eu não vá esquecer. 
                    Obrigado por me acompanhar até aqui! :D
                ++++# -->`,
        date: '24/11/2018',
        gallery: [],
        categories: []
    }
    // ,
    // {
    //     image: '',
    //     title: '',
    //     subtitle:'',
    //     shortDescription: '',
    //     text: '',
    //     date: '',
    //     gallery: [],
    //     categories: []
    // }
];

const futureProjects = [
  {
    title: 'Palestras:',
    items: [
      {
        name: 'Soft Skills! (o segredo da vida)'
      },
      { 
        name: 'Git para professores de algumas Escolas Técnicas Estaduais (ETECs)' 
      },
      { 
        name: 'Encubadoras e Startups na Faculdade de Tecnologia do Estado de São Paulo (FATEC)' 
      },
      { 
        name: 'Live Code - WebSockets em Node.js com Socket.IO e Express na trilha de Node / TypeScript na NerdZão Week' 
      },
    ]
  },
  {
    title: 'Preparar cursos, talvez? :',
    items: [
      {
        name: 'Que tal um pouco de Machine Learning com Tensor Flow? Nem o céu é o limite!'
      },
      {
        name: 'Configurar ambiente em um só comando? Por quê não explorar Docker?'
      },
      {
        name: 'Um projeto na prática de Websockets em NodeJS? Que tal essa parceria com a comunidade NerdZão?'
      },
    ]
  },
  {
    title: 'Projetos:',
    items: [
      {
        name: 'Envia - Uma startup de comunicação escola-aluno para fidelização e bom relacionamento com os alunos? A receita pro sucesso!</li>'
      },
      {
        name: 'eBaySearchAPI - que tal uma integração com a API de busca no eBay para permitir que usuários criem alertas de produtos para receber promoções por e-mail em intervalos de tempo determinados!? Um teste de programação passado por um grande amigo, mas com um belo potencial (usando NodeJS, ReactJS, MongoDB, Docker e já nem sei mais o quê)</li>'
      },
    ]
  },
  {
    title: 'Iniciação científica:',
    items: [
      {
        name: 'Realidade Aumentada com Google ARCore? Agora vai!</li>'
      },
    ]
  },
  // {
  //   title: 'XXXXXX:',
  //   items: [
  //     {
  //       name: 'XXXXXXXX'
  //     },
  //   ]
  // },
];