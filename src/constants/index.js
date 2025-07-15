import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  github,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  renuo,
  lewagon,
  xps,
  deloitte,
  jlt,
  leeds,

  bootstrap,
  ruby,
  python,
  saas,
  sql,
  regex,
  rails,
  django,
  angular,
  stimulus,
  postgresql,
  mysql,
  mongodb,
  postman,
  tableplus,
  heroku,
  vercel,
  aws,

  luv2shop,
  housepoints,
  deboggle,
  migratingmango,
  hammertime,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Technology",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Full-Stack Developer",
    icon: backend,
  },
  {
    title: "Solutions Architect",
    icon: creator,
  },
  {
    title: "Technical Consultant",
    icon: mobile,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Renuo AG, Zürich",
    icon: renuo,
    iconBg: "#23DCAE",
    date: "April 2023 - present",
    points: [
      "Led development of client-facing applications using React and Rails, including a property evaluation system and a multi-tenant onboarding platform for a major credit card provider.",
      "Engineered sophisticated web solutions featuring dynamic forms, PDF generation, and third-party integrations while ensuring robust service level agreements.",
      "Architected and implemented a Kubernetes-based hosting platform GUI, while taking ownership of technical documentation and knowledge sharing through migration guides and blog posts.",
      "Actively contributed across 20+ projects through code reviews, architectural discussions, and development of internal tools including a real-time project monitoring dashboard.",
      "Demonstrated versatility through exploration of emerging technologies, including machine learning prototypes and IoT experiments."
    ],
  },
  {
    title: "Full Stack Web Development",
    company_name: "Le Wagon, Zürich",
    icon: lewagon,
    iconBg: "#E4161B",
    date: "October 2022 - January 2023",
    points: [
      "Learnt the fundamentals of software development and programming: writing clean and efficient code with object-oriented programming, building MVC software from scratch, and mastering relational databases and SQL.",
      "Mastered front-end development and web design: developed responsive websites with HTML and CSS, designed user interfaces with Bootstrap and Figma, and built interactive web applications using JavaScript.",
      "Deployed fully-functional apps from scratch: designed and built complete web applications working as a team, deployed online using Heroku and a real domain, worked as a team to develop the application.",
      "Adopted best-in-class development workflow: understanding the importance of version control with Git and GitHub, and learned how to collaborate with other developers using GitHub, Slack, and Trello.",
      "Following the course, I also worked as a Teaching Assistant for Le Wagon."
    ],
  },
  {
    title: "Investment Consultant",
    company_name: "XPS Investment, Manchester",
    icon: xps,
    iconBg: "#FFFFFF",
    date: "October 2020 - August 2022",
    points: [
      "Lead consultant on around 20 clients - the largest with assets under management of c£1bn.",
      "Mentoring and overseeing junior level colleagues including support on examination process - both CFA and actuarial.",
      "Awarded discretionary pay rise for 'outstanding performance and contribution to the business'.",
      "Key member of multiple internal teams: modelling team, LDI asset class research team, ESG research team and firm-wide study committee.",
      "Held Chartered Financial Analyst (CFA) designation.",
    ],
  },
  {
    title: "Investment Consultant",
    company_name: "Deloitte LLP, Manchester",
    icon: deloitte,
    iconBg: "#000000",
    date: "November 2018 - September 2020",
    points: [
      "Supported office Partner on multiple large clients by drafting strategy reviews, performance reports and market research papers.",
      "Produced a research paper covering a variety of approaches to ESG equity investing, resulting in chargeable client services for the business.",
    ],
  },
  {
    title: "Associate Investment Consultant",
    company_name: "JLT Employee Benefits (now Mercer), Manchester",
    icon: jlt,
    iconBg: "#FFFFFF",
    date: "February 2017 - October 2018",
    points: [
    ],
  },
  {
    title: "Pensions Administrator",
    company_name: "JLT Employee Benefits (now Mercer), Manchester",
    icon: jlt,
    iconBg: "#FFFFFF",
    date: "August 2015 - September 2016",
    points: [
    ],
  },
  {
    title: "Bsc with Honours Class 1 in Mathematics",
    company_name: "University of Leeds, Leeds",
    icon: leeds,
    iconBg: "#FFFFFF",
    date: "September 2012 - July 2015",
    points: [
    ],
  },
];

const technologies = [
  {
    name: "Ruby",
    icon: ruby,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SAAS",
    icon: saas,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Ruby on Rails",
    icon: rails,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular JS",
    icon: angular,
  },
  {
    name: "Stimulus JS",
    icon: stimulus,
  },
  {
    name: "regex",
    icon: regex,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Table Plus",
    icon: tableplus,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "heroku",
    icon: heroku,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const othertechnologies = [
  {
    name: "regex",
    icon: regex,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Table Plus",
    icon: tableplus,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Tailwind",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "heroku",
    icon: heroku,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const projects = [
  {
    name: "3D Portfolio",
    description:
      "Portfolio website built using React, ThreeJS and TailwindCSS. The website was built to showcase my skills and experience in web development, responsive design and 3D graphics, as well as to provide a platform for me to share my work with others.",
    tags: [
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "framer-motion",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/oliveranthony17/3d-portfolio",
  },
  {
    name: "House Points",
    description:
      "House Points was created for my wife who is a teacher here in Switzerland and is used in her school 🇨🇭🎓. The app is designed to help keep track of the house points for her students. Built using Django, Bootstrap and deployed on Heroku.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "heroku",
        color: "pink-text-gradient",
      },
    ],
    image: housepoints,
    source_code_link: "https://github.com/oliveranthony17/housepoints",
  },
  {
    name: "Deboggle",
    description:
      'DeBoggle is an online game based on one of my favourite board games "Boggle" - a simple yet very addictive word game! The app was developed with the aim of learning React. There are plans to further develop a total score system, integrate Redux, and potentially build a backend to store the total scores.',
    tags: [
      {
        name: "reactJS",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
    ],
    image: deboggle,
    source_code_link: "https://github.com/oliveranthony17/deboggle",
  },
  {
    name: "luv2shop",
    description:
      "Web-based e-commerce platform built using Angular, Spring Boot and MySQLWorkbench that allows users to purchase books, mugs and mouse mats. The app was developed with the aim of learning the fundamentals of Angular and Spring Boot.",
    tags: [
      {
        name: "angularJS",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: luv2shop,
    source_code_link: "https://github.com/oliveranthony17/ecommerce-app-java-rest-api",
  },
  {
    name: "Migrating Mango",
    description:
      'In our group at Le Wagon we shared the common pain of navigating complex laws, multiple sources of information and never-ending to-do lists for migrating to Switzerland. This app was created with the aim of simplifying this process and providing a smooth user experience with a single source of information. We are very proud of what we achieved in only 2 weeks!',
    tags: [
      {
        name: "rubyonrails",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "stimulusJS",
        color: "green-text-gradient",
      },
    ],
    image: migratingmango,
    source_code_link: "https://github.com/oliveranthony17/migrating_mango",
  },
  {
    name: "Hammer Time",
    description:
      'This app was created as a marketplace for lending out and borrowing tools in your area. The app uses geocoding and Mapbox API to show your location compared to the listing location. A user can list their tools, and also request a booking for a listed tool. The app was built in 1 week as part of the Le Wagon bootcamp.',
    tags: [
      {
        name: "rubyonrails",
        color: "pink-text-gradient",
      },
      {
        name: "figma",
        color: "blue-text-gradient",
      },
      {
        name: "stimulusJS",
        color: "green-text-gradient",
      },
    ],
    image: hammertime,
    source_code_link: "https://github.com/oliveranthony17/hammer-time-clone",
  },
];

const testimonials = [
  {
    testimonial:
      "Oliver was able to pick up complex topics with total ease, while still having a remarkable commitment to learning. He was constantly going the extra mile to understand topics completely and never hesitated to ask questions, displaying a deep interest and passion for software development. His remarkable ability to break down complicated topics into well-structured and organised thoughts was a great asset to both the class and myself as teacher.",
    name: "Stephen Schüz",
    designation: "Teacher",
    company: "Le Wagon",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Oliver's House Point app has made my life so much easier, it is now quick and easy to award house points and I can even do this on the go on my phone which is perfect for break duty and working in small groups without needing to grab my laptop. The app has made house points more visual for the children, they can now keep track of their score and they particularly love the sort from highest to lowest function, it has enthused the kids and they are now more motivated and want to know what they can do to get their house point score up. Oliver thought of some additional functions that have been really useful such as \"award all\" which saves me even more time. The login allows for additional security for GDPR and the kids love the \"declare winner\" function.",
    name: "Hannah Valentine",
    designation: "Teacher",
    company: "Four Forest Bilingual International School",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I found him to be professional, competent and thorough in carrying out this role and was of good character. I have no hesitation in recommending him for future employment.",
    name: "James Leeming",
    designation: "Partner",
    company: "XPS Pensions Group",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  // {
  //   testimonial:
  //     "I can say with utmost certainty that he was an outstanding student, with exceptional capabilities! Oliver was able to pick up complex topics with total ease, while still having a remarkable commitment to learning.",
  //   name: "Stephen Schüz",
  //   designation: "Teacher",
  //   company: "Le Wagon",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  {
    testimonial:
      "He's a very good boy!",
    name: "Dianne Anthony",
    designation: "Oliver's Mum",
    company: "Home",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export { services, technologies, othertechnologies, experiences, testimonials, projects };
