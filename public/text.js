export const HOME = {
  WELCOME: 'Bienvenue',
  I_AM: 'Je suis',
  FULLNAME: 'Clément BELLIER',
  TITLE: 'Développeur Fullstack JavaScript\nNodeJS - ReactJs',
}
export const NAVIGATION = {
  HOME: 'Accueil',
  ABOUT_ME: 'Qui suis-je ?',
  SKILLS: 'Compétences',
  PROJECTS: 'Projets',
  CSS_CHALLENGE: 'Css challenge',
  CONTACT: 'Contact',
  SCROLL_TO: "Faire défiler jusqu'à l'ancre",
}
export const ANCHORS = {
  HOME: 'home',
  ABOUT_ME: 'aboutme',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CSS_CHALLENGE: 'csschallenge',
  CONTACT: 'contact',
}
export const CONTACT = {
  TITLE: 'Me Retrouver',
  MY_NETWORKS: {
    TITLE: 'Mes réseaux',
    NETWORKS: [
      { NAME: 'Github', URL: 'https://github.com/ClementBellier' },
      {
        NAME: 'LinkedIn',
        URL: 'https://www.linkedin.com/in/clement-bellier-b08309179/',
      },
      { NAME: 'CodePen', URL: 'https://codepen.io/clementbellier' },
      { NAME: 'Twitter', URL: 'https://twitter.com/BremiumB' },
      {
        NAME: 'CodinGame',
        URL: 'https://www.codingame.com/profile/a288606b19f268c63304658157491fb70395194',
      },
      {
        NAME: 'WeLoveDevs',
        URL: 'https://welovedevs.com/app/fr/developer/clement-developpeur-frontend-junior-reactjs',
      },
    ],
  },
  MY_RESUME: {
    TITLE: 'Mon CV',
    URL: 'http://www.clementbellier.fr/assets/BELLIER-Clement_CV_DeveloppeurFullstack.pdf',
    IMAGE_URL: '/assets/Bellier_Clement_CV.png',
    ALT_TXT: "Mon CV - cliquez pour l'avoir en pdf",
  },
  MAIL_ME: {
    TITLE: 'Me Contacter',
    NAME: 'Votre Nom',
    EMAIL: 'Votre Email',
    MESSAGE: 'Votre Message',
    SUBMIT: "Envoyer"
  },
}
export const ABOUT_ME = {
  ME: `Je suis Clément, reconverti au développement web après 35 années à la recherche du métier passion.\nJ'ai eu plusieurs carrières dans ma vie, pâtissier, boulanger, surveillant dans un collège puis une formation de technicien informatique pour enfin trouver le domaine qui m'épanouit pleinement.\n`,
}
export const SKILLS = {
  TITLE: 'Mes Compétences principales',
  LOVE: {
    TITLE: "Ce que j'aime le plus",
    SKILL: [
      { NAME: 'ReactJs', SVG: '#reactjs' },
      { NAME: 'CSS', SVG: '#css' },
      { NAME: 'Javascript', SVG: '#javascript' },
    ],
  },
  HARD_SKILLS: {
    TITLE: 'Mes Hards Skills',
    SKILL: [
      { NAME: 'NodeJS', SVG: '#nodejs' },
      { NAME: 'Express', SVG: '#express' },
      { NAME: 'Sequelize', SVG: '#sequelize' },
      { NAME: 'Joomla!', SVG: '#joomla' },
      { NAME: 'MongoDB', SVG: '#mongodb' },
      { NAME: 'MariaDB', SVG: '#mariadb' },
    ],
  },
  SOFT_SKILLS: {
    TITLE: 'Mes Soft Skills',
    SKILL: [
      { NAME: 'Autonome', SVG: null },
      { NAME: 'Créatif', SVG: null },
      { NAME: 'Rigoureux', SVG: null },
      { NAME: 'Calme', SVG: null },
    ],
  },
  SENSITIZED: {
    TITLE: 'Je suis sensibilisé',
    SKILL: [
      { NAME: 'Clean Code', SVG: null },
      { NAME: 'Accessibilité', SVG: null },
      { NAME: 'Tests unitaires', SVG: null },
      { NAME: 'TDD', SVG: null },
      { NAME: 'SEO', SVG: null },
    ],
  },
  LEARNING: {
    TITLE: "J'apprends en ce moment",
    SKILL: [
      { NAME: 'Typescript', SVG: null },
      { NAME: 'Strapi', SVG: null },
      { NAME: 'Docker', SVG: null },
    ],
  }, 
}
export const PROJECTS = {
  TITLE: 'Mes Projets',
  LIVE_LINK: 'Site',
  CODE_LINK: 'Code',
  DOC_LINK: 'Documentation',
  PROJECTS_TO_DISPLAY: [
    'BAY',
    'AERONOTES',
    'POKEDEX',
    'BOOKI',
    'OHMYFOOD',
    'KANAP',
    'PIIQUANTE',
    'GROUPOMANIA',
  ],
  CATEGORIES: ['Professionel', 'Formation', 'Personnel'],
  SKILLS_NAMES: [
    'Javascript', //0
    'HTML', //1
    'CSS', //2
    'PHP', //3
    'Joomla!', //4
    'Virtuemart', //5
    'Matomo', //6
    'ReactJS', //7
    'NodeJs', //8
    'Express', //9
    'Sequelize', //10
    'MongoDB', //11
    'MariaDB', //12
    'SEO', //13
    'Accessibilité', //14
    'Clean Code', //15
    'Animations CSS', //16
    'Flexbox', //17
    'Git', //18
    'API', //19
  ],
  BAY: {
    TITLE: 'Bijoux Alex Yell',
    LIVE_URL: 'https://www.bijoux-alex-yell.fr',
    IMAGE_URL: '/assets/bijoux_alex_yell.png',
    SUBTITLE: 'Site de vente de bijoux',
    DESCRIPTION:
      "Implémentation sous Joomla et Virtuemart (choix des clientes)\nCréation libre de l'UX/UI, Intégration de Matomo (analytics)\nConfiguration de Paypal, Ajouts de boutons animés en CSS\nSuppression de la quantité des produits (bijoux uniques) en PHP",
    SKILLS: [4, 5, 3, 2, 6],
    CATEGORY: 0,
  },
  AERONOTES: {
    TITLE: 'Les Aeronotes',
    LIVE_URL: 'https://www.lesaeronotes.fr/',
    IMAGE_URL: '/assets/lesaeronotes.png',
    SUBTITLE: "Site de vitrine d'une chorale",
    DESCRIPTION:
      "Implémentation sous Joomla, Création libre de l'UX/UI\nCréation du template\nGestions de fichiers audios et textes pour les adhérents",
    SKILLS: [4, 3, 2],
    CATEGORY: 0,
  },
  POKEDEX: {
    TITLE: 'Pokédex',
    LIVE_URL: 'https://clementbellier.github.io/Pokedex-for-my-3years-kid/',
    CODE_URL: 'https://github.com/ClementBellier/Pokedex-for-my-3years-kid',
    IMAGE_URL: '/assets/pokedex.png',
    SUBTITLE: 'Pokédex pour mon fils de 3 ans qui ne sait pas lire',
    DESCRIPTION:
      "Affiche l'image et dit le nom du pokémon au clic\nAppel à la PokéAPI pour le nom et l'image du pokémon\nUtilisation de l'API Web Speech pour entendre le nom lors du clic",
    SKILLS: [0, 1, 2, 15, 19],
    CATEGORY: 2,
  },
  BOOKI: {
    TITLE: 'Booki',
    LIVE_URL: 'https://clementbellier.github.io/P2-Booki/',
    CODE_URL: 'https://github.com/ClementBellier/P2-Booki',
    IMAGE_URL: '/assets/booki.png',
    SUBTITLE: 'Transformez une maquette en site web avec HTML & CSS',
    DESCRIPTION:
      'Implémenter une interface responsive\nIntégrer du contenu conformément à une maquette',
    SKILLS: [1, 2, 17],
    CATEGORY: 1,
  },
  OHMYFOOD: {
    TITLE: 'ohmyfood',
    LIVE_URL: 'https://clementbellier.github.io/clementbellier_3_15032022/',
    CODE_URL: 'https://github.com/ClementBellier/clementbellier_3_15032022',
    IMAGE_URL: '/assets/ohmyfood.png',
    SUBTITLE: 'Dynamisez une page web avec des animations CSS',
    DESCRIPTION:
      "Mettre en œuvre des effets CSS graphiques avancés\nAssurer la cohérence graphique d'un site web\nMettre en place une structure de navigation pour un site web\nMettre en place son environnement Front-End\nUtiliser un système de gestion de versions pour le suivi du projet et son hébergement",
    SKILLS: [1, 2, 16, 17, 18],
    CATEGORY: 1,
  },
  KANAP: {
    TITLE: 'Kanap',
    CODE_URL: 'https://github.com/ClementBellier/P5-Kanap',
    IMAGE_URL: '/assets/kanap.png',
    SUBTITLE: 'Construisez un site e-commerce en JavaScript',
    DESCRIPTION:
      'Gérer des événements JavaScript\nInteragir avec un web service avec JavaScript (API)\nValider des données issues de sources externes\nCréer un plan de test pour une application',
    SKILLS: [0, 15, 18, 19],
    CATEGORY: 1,
  },
  PIIQUANTE: {
    TITLE: 'Piiquante',
    CODE_URL: 'https://github.com/ClementBellier/P6-Piiquante',
    DOC_URL:
      'https://app.swaggerhub.com/apis-docs/ClementBellier/OC_Piiquante/1.0.0',
    IMAGE_URL: '/assets/piiquante.png',
    SUBTITLE:
      "Construisez une API sécurisée pour une application d'avis gastronomiques",
    DESCRIPTION:
      'Implémenter un modèle logique de données conformément à la réglementation\nMettre en œuvre des opérations CRUD de manière sécurisée\nStocker des données de manière sécurisée',
    SKILLS: [0, 8, 9, 11, 19],
    CATEGORY: 1,
  },
  GROUPOMANIA: {
    TITLE: 'Groupomania',
    CODE_URL: 'https://github.com/ClementBellier/P7-Groupomania',
    DOC_URL:
      'https://app.swaggerhub.com/apis-docs/ClementBellier/OC_Groupomania/1.0.0',
    IMAGE_URL: '/assets/groupomania.png',
    SUBTITLE: 'Créez un réseau social d’entreprise',
    DESCRIPTION:
      'Authentifier un utilisateur et maintenir sa session\nDévelopper l’interface d’un site web grâce à un framework front-end\nImplémenter un stockage de données sécurisé en utilisant une base de données',
    SKILLS: [0, 2, 7, 8, 9, 10, 12, 14, 19],
    CATEGORY: 1,
  },
}
export const CSSCHALLENGE = {
  TITLE: '100 Days Css Challenge',
  TEXT: "Du 22 Mars 2022 au 29 Juin 2022, je me suis lancé le défi de réaliser ce challenge alors que je ne codais que depuis 1 mois. Ce fût difficile mais j'ai beaucoup appris, en CSS et HTML notamment mais j'ai aussi appris à m'organiser, me limiter dans le temps et dans ma créativité.",
  CHALLENGE_URL: 'https://100dayscss.com/',
  CHALLENGE_LINK: 'Voir le challenge',
  DAYS: [
    { DAY: 1, TITLE: '100 Days CSS', PEN: 'NWXROrg' },
    { DAY: 2, TITLE: 'Menu Icon', PEN: 'WNdoddv' },
    { DAY: 3, TITLE: 'The Pyramide', PEN: 'wvpoOEE' },
    { DAY: 4, TITLE: 'Loading', PEN: 'abEpxaw' },
    { DAY: 5, TITLE: 'Statistic', PEN: 'qBprPQL' },
    { DAY: 6, TITLE: 'Profile', PEN: 'RwxpvGE' },
    { DAY: 7, TITLE: 'Notifications, Search and Menu', PEN: 'bGaWLeP' },
    { DAY: 8, TITLE: 'Metaballs', PEN: 'XWVgRVp' },
    { DAY: 9, TITLE: 'Rainy Night', PEN: 'wvpqMOj' },
    { DAY: 10, TITLE: 'Watch', PEN: 'KKZvOpX' },
    { DAY: 11, TITLE: 'Walking Boots', PEN: 'dyJVKxZ' },
    { DAY: 12, TITLE: 'Tooltip', PEN: 'MWrOwRg' },
    { DAY: 13, TITLE: 'User Gallery', PEN: 'RwxjvWa' },
    { DAY: 14, TITLE: 'Byciclopter', PEN: 'KKZZqpE' },
    { DAY: 15, TITLE: 'Upload', PEN: 'ZEvrXeo' },
    { DAY: 16, TITLE: 'Blobby', PEN: 'wvpyVBN' },
    { DAY: 17, TITLE: 'Penrose Triangle', PEN: 'JjMLMjE' },
    { DAY: 18, TITLE: 'Elastic', PEN: 'zYpjLWQ' },
    { DAY: 19, TITLE: 'Slider with Radio Buttons', PEN: 'WNdJmMd' },
    { DAY: 20, TITLE: 'Send Mail', PEN: 'BaJVzWp' },
    { DAY: 21, TITLE: 'Pac-Man', PEN: 'XWVYLyo' },
    { DAY: 22, TITLE: 'Fitness Tracker', PEN: 'oNpPvRy' },
    { DAY: 23, TITLE: 'Animated Typography', PEN: 'zYpJpZb' },
    { DAY: 24, TITLE: 'Button', PEN: 'ZEvqpQx' },
    { DAY: 25, TITLE: 'Map Marker', PEN: 'dyJgEbG' },
    { DAY: 26, TITLE: 'Motivational Modal', PEN: 'ZEvmaeQ' },
    { DAY: 27, TITLE: 'Checklist', PEN: 'ZEvmVjx' },
    { DAY: 28, TITLE: 'Ring Ring', PEN: 'jOYXawo' },
    { DAY: 29, TITLE: 'Search Field', PEN: 'ExorWxW' },
    { DAY: 30, TITLE: 'Random Line', PEN: 'NWXJWQJ' },
    { DAY: 31, TITLE: 'Pendulum Wave', PEN: 'QWaoaNX' },
    { DAY: 32, TITLE: 'Counter', PEN: 'BaJEzEx' },
    { DAY: 33, TITLE: 'Sunny Day', PEN: 'rNpgBoJ' },
    { DAY: 34, TITLE: 'Hello', PEN: 'mdpYPxY' },
    { DAY: 35, TITLE: 'Loading Circle', PEN: 'BaJebrp' },
    { DAY: 36, TITLE: 'Tabs', PEN: 'dyJBVbz' },
    { DAY: 37, TITLE: 'Carousel', PEN: 'abEeJgv' },
    { DAY: 38, TITLE: 'Logo Transition', PEN: 'XWVvLge' },
    { DAY: 39, TITLE: 'Menu Toggle', PEN: 'WNMeWPd' },
    { DAY: 40, TITLE: 'Gallery', PEN: 'ExQxgbd' },
    { DAY: 41, TITLE: 'Error Modal', PEN: 'XWZWaoy' },
    { DAY: 42, TITLE: 'Stars', PEN: 'jOZOJKE' },
    { DAY: 43, TITLE: 'Lightbulb', PEN: 'vYdERqz' },
    { DAY: 44, TITLE: 'Twisted Pyramid', PEN: 'NWyqbxp' },
    { DAY: 45, TITLE: 'Button', PEN: 'NWyGWqY' },
    { DAY: 46, TITLE: 'Iris Circles', PEN: 'LYQpgrv' },
    { DAY: 47, TITLE: 'Pixel Art', PEN: 'yLveaQe' },
    { DAY: 48, TITLE: '3D Cube', PEN: 'qBxbYzp' },
    { DAY: 49, TITLE: 'CSS Follow', PEN: 'JjpXYEq' },
    { DAY: 50, TITLE: 'Easter Egg', PEN: 'abqZdPZ' },
    { DAY: 51, TITLE: 'CSS Counter', PEN: 'mdXEzav' },
    { DAY: 52, TITLE: 'Dot Wave', PEN: 'RwQGJyJ' },
    { DAY: 53, TITLE: 'Range Slider', PEN: 'ZErBBqb' },
    { DAY: 54, TITLE: 'Waves', PEN: 'QWQGMRx' },
    { DAY: 55, TITLE: 'Thermostat', PEN: 'vYdyMJE' },
    { DAY: 56, TITLE: 'Flower', PEN: 'gOvgWOm' },
    { DAY: 57, TITLE: 'Icosahedron', PEN: 'mdXWVVY' },
    { DAY: 58, TITLE: '3D Sphere', PEN: 'gOvWpEx' },
    { DAY: 59, TITLE: 'Slice Transition', PEN: 'vYdmrLB' },
    { DAY: 60, TITLE: 'Blurry Overlay', PEN: 'VwQWxRE' },
    { DAY: 61, TITLE: 'CSS Gradient Transition', PEN: 'YzeQBXB' },
    { DAY: 62, TITLE: 'Price Table', PEN: 'rNJzMGL' },
    { DAY: 63, TITLE: 'Hypnotic Ring', PEN: 'rNJzZVN' },
    { DAY: 64, TITLE: 'Button', PEN: 'ZErXXbp' },
    { DAY: 65, TITLE: 'Ellipses Animation', PEN: 'YzeEyWo' },
    { DAY: 66, TITLE: 'Sparkle Checkbox', PEN: 'ZErawwL' },
    { DAY: 67, TITLE: '3D Parasol', PEN: 'zYRpWmL' },
    { DAY: 68, TITLE: 'Recording', PEN: 'zYRRGMo' },
    { DAY: 69, TITLE: 'Eye', PEN: 'qBxxpQB' },
    { DAY: 70, TITLE: 'Calendar Days', PEN: 'VwQXZjm' },
    { DAY: 71, TITLE: 'Morse Code Keyboard', PEN: 'zYRWjjm' },
    { DAY: 72, TITLE: 'The Rings', PEN: 'OJQZRzy' },
    { DAY: 73, TITLE: 'Word Carousel', PEN: 'QWQxEaP' },
    { DAY: 74, TITLE: 'Pagination', PEN: 'rNJKGjZ' },
    { DAY: 75, TITLE: 'Spinning Discs', PEN: 'oNEMvOX' },
    { DAY: 76, TITLE: 'Reveal Key', PEN: 'yLvqgvr' },
    { DAY: 77, TITLE: 'Motion Blur', PEN: 'oNEMPBo' },
    { DAY: 78, TITLE: 'Hover Shadow', PEN: 'OJQoWWg' },
    { DAY: 79, TITLE: 'Lines Animation', PEN: 'GRQXLVP' },
    { DAY: 80, TITLE: 'Flexbox Accordeon', PEN: 'RwQemqO' },
    { DAY: 81, TITLE: 'Jumping Ball', PEN: 'poaQdoe' },
    { DAY: 82, TITLE: 'Action Button', PEN: 'ZErmmpa' },
    { DAY: 83, TITLE: 'Warp Drive', PEN: 'dydwyyg' },
    { DAY: 84, TITLE: 'Book Cover', PEN: 'KKQbewE' },
    { DAY: 85, TITLE: "It's something", PEN: 'rNJoXzo' },
    { DAY: 86, TITLE: "Newton's Cradle", PEN: 'NWyoByG' },
    { DAY: 87, TITLE: 'Ruby', PEN: 'mdXorBe' },
    { DAY: 88, TITLE: 'Candle', PEN: 'NWyJevb' },
    { DAY: 89, TITLE: 'Animated Pattern', PEN: 'YzeMGwB' },
    { DAY: 90, TITLE: 'Mouse Trap', PEN: 'WNMWPNO' },
    { DAY: 91, TITLE: 'Cube Loader', PEN: 'NWyVWje' },
    { DAY: 92, TITLE: 'Dancing Points', PEN: 'yLvWEqq' },
    { DAY: 93, TITLE: 'Padlock', PEN: 'XWZLdRB' },
    { DAY: 94, TITLE: 'Tree', PEN: 'wvyLRYw' },
    { DAY: 95, TITLE: 'Pig', PEN: 'xxYvdWy' },
    { DAY: 96, TITLE: 'Jumping Square', PEN: 'zYRgQNP' },
    { DAY: 97, TITLE: 'Puppet', PEN: 'NWYKRge' },
    { DAY: 98, TITLE: 'Plopp', PEN: 'MWVgRzW' },
    { DAY: 99, TITLE: 'Circle-Square', PEN: 'yLKLYjj' },
    { DAY: 100, TITLE: 'Neon Light', PEN: 'qBoBJvK' },
  ],
}
