
import { Project, SkillCategory, Experience, SocialLink, Publication, LocalizedString } from './types';

// Personal Info
export const PROFILE_NAME = "Pablo Torrado";
export const PROFILE_ROLE: LocalizedString = {
  en: "ELE Lecturer & Toolmaker",
  es: "Profesor de ELE y programador de herramientas"
};

export const PROFILE_BIO: LocalizedString = {
  en: "Lecturer at the University of Hong Kong (HKU) specializing in Spanish as a Foreign Language (ELE). I combine applied linguistics with web development to create engaging educational games and digital tools that transform the language learning experience.",
  es: "Profesor de ELE desde 2008, lingüista a ratos, doliente de una tesis doctoral sin terminar, y feliz de probar cosas nuevas en la educación. Actualmente trabajo en la Universidad de Hong Kong coordinando el primer año y sus cursos. Bienvenido a mi laboratorio digital."
};

export const ABOUT_ME: LocalizedString = {
  en: "Beyond my classes, I am a curious person who enjoys exploring new ways of learning and teaching. I love spending time with friends, nature, birding, brewing beer, playing board games, coding small games and photography.",
  es: "Más allá de mis clases, soy una persona curiosa a la que le encanta explorar nuevas formas de aprender y enseñar. Disfruto de mis amigos, la naturaleza, pajarear (birding), hacer cerveza, jugar a juegos de mesa, programar jueguitos y la fotografía."
};

export const PHOTOGRAPHY_BIO: LocalizedString = {
  en: "Since 2016 I have been using various Olympus or OM Systems gear to experiment with photography. I especially enjoy capturing nature, birds, macro insects (thanks to the cygnustech diffuser) and underwater scenes when I get the chance to dive.",
  es: "Desde 2016 vengo usando diferentes equipos de la gama de Olympus o OM Systems para probar en la fotografía. Disfruto especialmente fotografiando en la naturaleza, pájaros, macro de insectos (gracias al difusor de cygnustech) y fotografía submarina cuando tengo tiempo para bucear."
};

// Projects - Educational Games & Tools
export const PROJECTS: Project[] = [
  {
    id: 'conjugator',
    title: 'The Conjugator',
    description: {
      en: 'A conjugation game with a Terminator theme. Advanced verb selection and multiple game modes. Perfect for practising verb tenses while dodging killer robots.',
      es: 'Un juego de conjugación con temática de Terminator. Selección de verbo avanzada y múltiples modos de juego. Perfecto para practicar los tiempos verbales mientras esquivas robots asesinos.'
    },
    technologies: ['JavaScript', 'Gamification', 'CSS Animation'],
    imageUrl: '/imagenes/conjuchuache.webp',
    demoUrl: 'https://conjugator.pablotorrado.site'
  },
  {
    id: 'palabrero',
    title: 'SPAN1001 Palabrero',
    description: {
      en: 'SPAN1001 Palabrero is an interactive word game designed for students in the SPAN1001 Spanish course at the HKU. Each day presents a new word drawn from the textbook vocabulary.',
      es: 'SPAN1001 Palabrero es un juego de palabras interactivo diseñado para estudiantes del curso de español SPAN1001 en la HKU. Cada día se presenta una nueva palabra extraída del vocabulario del libro.'
    },
    technologies: ['React', 'TypeScript', 'Education'],
    imageUrl: '/imagenes/palabrero.webp',
    demoUrl: 'https://1001palabrero.pablotorrado.site'
  },
  {
    id: 'desencripta',
    title: 'Desencripta',
    description: {
      en: 'Digital adaptation of the acclaimed team-based deduction board game, Decrypto. Developed entirely with HTML, CSS and JavaScript. Extensive vocabulary with over 900 lexical units.',
      es: 'Desencripta es una adaptación digital del aclamado juego de mesa de deducción por equipos, Decrypto. Desarrollado íntegramente con HTML, CSS y JavaScript. Amplio vocabulario con más de 900 unidades léxicas.'
    },
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WebSockets'],
    imageUrl: '/imagenes/desencripta.webp',
    demoUrl: 'https://desencripta.pablotorrado.site'
  },
  {
    id: 'batalla',
    title: 'Batalla Verbal',
    description: {
      en: 'An innovative game designed to make learning Spanish verb conjugation fun and effective. It combines the strategy of the classic sink the fleet game with grammar practice.',
      es: 'Un innovador juego diseñado para hacer el aprendizaje de la conjugación de verbos en español divertido y efectivo. Combina la estrategia del clásico juego de hundir la flota con la práctica de gramática.'
    },
    technologies: ['Game Logic', 'UI Design', 'Interactive Learning'],
    imageUrl: '/imagenes/batalla.webp',
    demoUrl: 'https://batallaverbal.pablotorrado.site'
  },
  {
    id: 'atun',
    title: 'Atún Feliz',
    description: {
      en: 'A digital adaptation of the card game Happy Salmon, created for educational purposes to practice vocabulary and reflexes. Includes animations and sound effects to enliven the experience.',
      es: 'Adaptación digital del juego de cartas Happy Salmon, creado con fines educativos para practicar vocabulario y reflejos. Incluye animaciones y sonidos que amenizan la experiencia.'
    },
    technologies: ['Audio API', 'Animation', 'Mobile First'],
    imageUrl: '/imagenes/atunfeliz.webp',
    demoUrl: 'https://atunfeliz.pablotorrado.site'
  },
  {
    id: 'charaditas',
    title: 'Charaditas',
    description: {
      en: 'Our personal version of Charades with A1-A2 CEFR vocabulary.',
      es: 'Nuestra versión personal de Charades pero con vocabulario de A1 y A2 del MCERL.'
    },
    technologies: ['Vocabulary', 'Party Game', 'Mobile Web'],
    imageUrl: '/imagenes/charaditas.webp',
    demoUrl: 'https://charaditas.pablotorrado.site'
  },
  {
    id: 'palabras-clave',
    title: 'Palabras Clave',
    description: {
      en: 'A secret code-style game for Spanish students using the CVC word bank (Level A1-A2). Perfect for revising vocabulary and encouraging teamwork.',
      es: 'Juego tipo código secreto para estudiantes de español con el banco de palabras del CVC (Nivel A1-A2). Ideal para repasar vocabulario y fomentar el trabajo en equipo.'
    },
    technologies: ['Teamwork', 'Vocabulary', 'CVC'],
    imageUrl: '/imagenes/palabrasclave.webp',
    demoUrl: 'https://palabrasclave.pablotorrado.site'
  },
  {
    id: 'buenas-notas',
    title: '#BuenasNotas',
    description: {
      en: 'A notes competition organised in Bangkok (2020) among university students to encourage sharing and creativity in learning Spanish. Students from several universities took part.',
      es: 'Un concurso de "apuntes bonitos" organizado en Bangkok (2020) para fomentar la creatividad en el aprendizaje del español. Participaron estudiantes de varias universidades.'
    },
    technologies: ['Community', 'Creativity', 'Competition'],
    imageUrl: '/imagenes/buenasnotas.webp',
    demoUrl: '/documentos/Buenasnotas2020.pdf'
  },
  {
    id: 'bangkok',
    title: 'Camina Bangkok',
    description: {
      en: 'A project where B1-level students created audio tours of Bangkok in Spanish for tourists. This initiative allowed students to offer their knowledge to Spanish-speaking visitors.',
      es: 'Un proyecto en el que estudiantes de nivel B1 crearon audioguías de Bangkok en español para turistas. Esta iniciativa permitió a los estudiantes ofrecer sus conocimientos a los visitantes.'
    },
    technologies: ['Audio Production', 'Geolocation', 'Content Creation'],
    imageUrl: '/imagenes/izi.webp',
    demoUrl: 'https://izi.travel/en/thailand/city-guides-in-bangkok'
  },
  {
    id: 'lunatico',
    title: 'Lunático',
    description: {
      en: 'A template for designing and printing your own copy of the Lunático game. Simply match each number with an image and an expression, cut them out, and play!',
      es: 'Una plantilla para diseñar e imprimir tu propia copia del juego Lunático. Simplemente relaciona cada número con una imagen y una expresión, recorta y ¡juega!'
    },
    technologies: ['Print & Play', 'Classroom Material', 'Design'],
    imageUrl: '/imagenes/lunatico.webp',
    demoUrl: '/documentos/Lunatico.docx'
  }
];

// Publications
export const PUBLICATIONS: Publication[] = [
  {
    id: 'genial-a1',
    title: "Creator of Manuals and Teaching Materials",
    spanishTitle: "Creador de Manuales y Materiales Didácticos",
    event: {
      en: "enClave-ELE Publishing House",
      es: "Editorial enClave-ELE"
    },
    year: "2017",
    type: "Book",
    imageUrl: "/imagenes/genial.jpg",
    publisherUrl: "https://enclave-ele.net/product/genial-a1-curso-de-espanol/",
    amazonUrl: "https://www.amazon.com/%C2%A1Genial-A1-espa%C3%B1ol-edici%C3%B3n-Spanish/dp/8418731176",
    description: {
      en: "Contributor to a publishing house specializing in Spanish language learning. Design of digital activities for teaching Spanish. Author of the manual ¡Genial! A1, Curso de Español (2017). ISBN-10: 8416108773",
      es: "Colaborador en una editorial especializada en el aprendizaje del español. Diseño de actividades digitales de ELE. Autor del manual ¡Genial! A1, Curso de Español (2017). ISBN-10: 8416108773"
    }
  },
  {
    id: 'teacher-coder',
    title: "The Teacher Coder",
    spanishTitle: "El profe programador",
    event: {
      en: "Independent talk on combining programming and ELE teaching",
      es: "Charla independiente sobre combinar programación y la enseñanza de ELE"
    },
    year: "2024",
    type: "Conference",
    downloadUrls: {
      en: "/documentos/The 'Teacher  Coder'.pdf",
      es: "/documentos/El profe programador.pdf"
    },
    languages: ['es', 'en']
  },
  {
    id: 'beijing2025',
    title: "Level Up Your Language Lessons",
    spanishTitle: "¡A jugar se aprende! Juegos de mesa en español en eventos y en clase",
    event: {
      en: "ELE Conference Beijing",
      es: "Jornadas de ELE de Beijing"
    },
    year: "2025",
    type: "Conference",
    downloadUrl: "/documentos/¡A jugar se aprende! Pekín 2025 Pablo Torrado.pdf"
  },
  {
    id: 'hku2023',
    title: "From glossary to Anki",
    spanishTitle: "Del glosario a Anki: adaptación del léxico de un curso a tarjetas enriquecidas con Anki e IA",
    event: {
      en: "ELE Teacher Training Conference, HKU",
      es: "Jornadas De Formación Del Profesorado De ELE, HKU"
    },
    year: "2023",
    type: "Workshop",
    downloadUrls: {
      es: "/documentos/Jornadas HKU 2023 Pablo Torrado.zip",
      en: "/documentos/2024 - From a Course Glossary to Anki Flashcards with the help of AI.pdf"
    },
    languages: ['es', 'en']
  },
  {
    id: 'bkk2020',
    title: "Walk Bangkok: mobile audio guides",
    spanishTitle: "Camina Bangkok: un proyecto para crear audioguías para móviles",
    event: {
      en: "ELE Conference Bangkok, Chulalongkorn University",
      es: "Jornadas ELE Bangkok, Chulalongkorn University"
    },
    year: "2020",
    type: "Conference",
    downloadUrl: "/documentos/Camina Bangkok.pdf"
  },
  {
    id: 'webinar2018',
    title: "Mobile APP-renticeship",
    spanishTitle: "APPrendizaje móvil: cómo, cuándo y por qué usar flashcards digitales",
    event: {
      en: "Webinar – EnClaveEle",
      es: "Seminario web – EnClaveEle"
    },
    year: "2018",
    type: "Article"
  }
];

// Skills
export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    name: { en: "Education & Linguistics", es: "Educación y Lingüística" },
    skills: [
      { en: "ELE Pedagogy", es: "Pedagogía de ELE" },
      { en: "Curriculum Design", es: "Diseño curricular" },
      { en: "Gamification", es: "Gamificación" },
      { en: "Anki & Spaced Repetition", es: "Anki y repetición espaciada" },
      { en: "Vocabulary Acquisition", es: "Adquisición de vocabulario" }
    ]
  },
  {
    name: { en: "Web Development", es: "Desarrollo Web" },
    skills: [
      { en: "HTML5/CSS3", es: "HTML5/CSS3" },
      { en: "JavaScript/TypeScript", es: "JavaScript/TypeScript" },
      { en: "React", es: "React" },
      { en: "Tailwind CSS", es: "Tailwind CSS" },
      { en: "Responsive Design", es: "Diseño adaptable" }
    ]
  },
  {
    name: { en: "Tools & Platforms", es: "Herramientas y Plataformas" },
    skills: [
      { en: "Moodle", es: "Moodle" },
      { en: "Canvas", es: "Canvas" },
      { en: "Zoom", es: "Zoom" },
      { en: "Audio/Video Editing", es: "Edición de audio y video" },
      { en: "Adobe Creative Suite", es: "Adobe Creative Suite" },
      { en: "Git", es: "Git" }
    ]
  }
];

// Experience Timeline Data
export const EXPERIENCE: Experience[] = [
  {
    id: 'phd',
    role: { en: 'Doctoral Thesis', es: 'Tesis Doctoral' },
    company: { en: 'University of Jaén', es: 'Universidad de Jaén' },
    period: '2023 - Present',
    description: {
      en: 'Improving vocabulary acquisition in A1 Spanish courses: Integrating Anki and classroom input.',
      es: 'Mejora del aprendizaje de vocabulario en cursos de español A1: La integración de Anki y el input del aula.'
    },
    location: { en: 'Spain', es: 'España' },
    type: 'education',
    isProminent: true
  },
  {
    id: 'hku',
    role: { en: 'Spanish Teacher and Coordinator', es: 'Profesor de español y Coordinador' },
    company: { en: 'University of Hong Kong', es: 'Universidad de Hong Kong' },
    period: '2020 - Present',
    description: {
      en: 'Coordinator for the subjects SPAN1001 and SPAN1002. Design and implementation of a specialized Spanish curriculum for diverse learning needs.',
      es: 'Profesor en diversas asignaturas optativas y troncales. Coordinador de las asignaturas SPAN1001 y SPAN1002. Diseño y ejecución de un currículo especializado.'
    },
    location: { en: 'Hong Kong', es: 'Hong Kong' },
    type: 'work',
    isProminent: true
  },
  {
    id: 'fao',
    role: { en: 'Spanish Teacher', es: 'Profesor de español' },
    company: { en: 'Food and Agricultural Organization (FAO)', es: 'FAO' },
    period: '2019',
    description: {
      en: 'Teaching Spanish for groups, levels A1 to B1. Classes aimed at professionals from various sectors.',
      es: 'Enseñanza de español para grupos, niveles A1 a B1. Clases dirigidas a profesionales de distintos sectores.'
    },
    location: { en: 'Thailand', es: 'Tailandia' },
    type: 'work',
    isProminent: false
  },
  {
    id: 'asia-spirit',
    role: { en: 'Spanish Teacher and Consultant', es: 'Profesor y consultor de español' },
    company: { en: 'Asia Spirit', es: 'Asia Spirit' },
    period: '2018 - 2019',
    description: {
      en: 'Development of training materials for tourist guides. Advisory services to improve communication with international tourists.',
      es: 'Desarrollo de materiales formativos para guías turísticos. Asesoramiento para mejorar la comunicación con turistas internacionales.'
    },
    location: { en: 'Thailand', es: 'Tailandia' },
    type: 'work',
    isProminent: false
  },
  {
    id: 'thammasat',
    role: { en: 'AECID Lecturer', es: 'Lector AECID' },
    company: { en: 'Thammasat University', es: 'Universidad Thammasat' },
    period: '2016 - 2020',
    description: {
      en: 'Curriculum development, implementation, and evaluation (1200 hours). Courses taught: general Spanish, conversation, Hispanic culture, and Spanish-American literature.',
      es: 'Desarrollo, ejecución y evaluación de currículos (1200 horas). Cursos impartidos: español general, conversación, cultura hispana y literatura hispanoamericana.'
    },
    location: { en: 'Thailand', es: 'Tailandia' },
    type: 'work',
    isProminent: true
  },
  {
    id: 'master',
    role: { en: 'Master\'s Degree: Applied Linguistics (ELE)', es: 'Máster en Lingüística Aplicada ELE' },
    company: { en: 'Antonio de Nebrija University', es: 'Universidad Antonio de Nebrija' },
    period: '2013 - 2016',
    description: {
      en: 'Specialization in lexicon acquisition and the use of ICT in teaching Spanish.',
      es: 'Especialización en adquisición de léxico y el uso de TICS en ELE.'
    },
    location: { en: 'Madrid, Spain', es: 'Madrid, España' },
    type: 'education',
    isProminent: true
  },
  {
    id: 'ail',
    role: { en: 'Spanish Teacher', es: 'Profesor de español' },
    company: { en: 'AIL Madrid', es: 'AIL Madrid' },
    period: '2014 - 2015',
    description: {
      en: 'Teacher for individual and group classes (341 hours). Teaching students of different ages and levels.',
      es: 'Profesor para clases individuales y grupos (341 horas). Enseñanza a estudiantes de diferentes edades y niveles.'
    },
    location: { en: 'Madrid, Spain', es: 'Madrid, España' },
    type: 'work',
    isProminent: false
  },
  {
    id: 'khon-kaen',
    role: { en: 'AECID Lecturer', es: 'Lector AECID' },
    company: { en: 'Khon Kaen University', es: 'Universidad de Khon Kaen' },
    period: '2009 - 2012',
    description: {
      en: 'Curriculum development (1200 hours). Subjects: grammar, conversation, reading, writing, Spanish for business, Hispanic culture.',
      es: 'Desarrollo, ejecución y evaluación de currículos (1200 horas). Asignaturas: gramática, conversación, lectura, escritura, español para los negocios.'
    },
    location: { en: 'Thailand', es: 'Tailandia' },
    type: 'work',
    isProminent: true
  },
  {
    id: 'cap',
    role: { en: 'Certificate of Pedagogical Aptitude', es: 'Certificado de Aptitud Pedagógica' },
    company: { en: 'University of Salamanca', es: 'Universidad de Salamanca' },
    period: '2009',
    description: {
      en: 'Professional teaching certification.',
      es: 'Certificado profesional de enseñanza.'
    },
    location: { en: 'Salamanca, Spain', es: 'Salamanca, España' },
    type: 'education',
    isProminent: false
  },
  {
    id: 'filologia',
    role: { en: 'Hispanic Philology', es: 'Filología Hispánica' },
    company: { en: 'University of Salamanca', es: 'Universidad de Salamanca' },
    period: '2004 - 2008',
    description: {
      en: 'Bachelor\'s Degree in Hispanic Philology.',
      es: 'Licenciatura en Filología Hispánica.'
    },
    location: { en: 'Salamanca, Spain', es: 'Salamanca, España' },
    type: 'education',
    isProminent: true
  }
];

// Socials
export const SOCIALS: SocialLink[] = [
  {
    platform: 'HKU Profile',
    url: 'https://www.web.smlc.hku.hk/teachingstaff/torrado-solo-de-zaldivar-pablo',
    icon: 'Linkedin'
  },
  {
    platform: 'Email',
    url: 'mailto:pablot@hku.hk',
    icon: 'Mail'
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/balpomorelitm',
    icon: 'Github'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/pablotorrapics',
    icon: 'Instagram'
  },
  {
    platform: 'Birds Instagram',
    url: 'https://www.instagram.com/pablotorrabirdies/',
    icon: 'Bird'
  }
];
