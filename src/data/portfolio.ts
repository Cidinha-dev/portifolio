// ============================================================
// ARQUIVO DE CONFIGURACAO DO PORTFOLIO
// Edite este arquivo para personalizar todo o conteudo do site
// ============================================================

export interface ExperienceCard {
  id: string;
  label: string;
  title: string;
  date: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  projectUrl: string;
  githubUrl: string;
  features: string[];
}

export interface Skill {
  name: string;
  letter: string;
}

// ---- INFORMACOES PESSOAIS ----
export const personalInfo = {
  name: "Fernanda Lemas",
  title: "Engenheira de Software | Java \u00b7 Kotlin \u00b7 Spring Boot",
  greeting: "Ol\u00e1, eu sou",
  description:
    "Desenvolvendo solu\u00e7\u00f5es robustas com foco em backend, APIs REST e arquitetura limpa.",
  location: "S\u00e3o Paulo, SP",
  email: "cidinha.dev@gmail.com",
  phone: "(11) 97616-5708",
  linkedin: "https://linkedin.com/in/cidinha-dev",
  github: "https://github.com/Cidinha-dev",
  profilePhoto: "/profile-photo.jpg",
};

// ---- SECAO SOBRE ----
export const aboutSection = {
  label: "SOBRE MIM",
  heading: "Quem sou eu",
  paragraphs: [
    "Sou formanda em Engenharia de Software com foco em desenvolvimento backend utilizando Java e Spring Boot. Tenho experi\u00eancia pr\u00e1tica na constru\u00e7\u00e3o de APIs REST organizadas, escal\u00e1veis e com boas pr\u00e1ticas de mercado, incluindo Clean Code, SOLID e testes automatizados com JUnit e Mockito.",
    "Atuei por quase 2 anos no C6 Bank onde desenvolvi pipelines de dados, automa\u00e7\u00f5es em Python e trabalhei com BigQuery e Google Cloud Platform (GCP). Essa viv\u00eancia me proporcionou uma vis\u00e3o completa de sistemas \u2014 desde o processamento de dados at\u00e9 a entrega de valor para o neg\u00f3cio.",
    "Atualmente venho aprofundando meus estudos em arquitetura backend, mensageria, Docker e cloud, com o objetivo de evoluir na constru\u00e7\u00e3o de sistemas mais escal\u00e1veis e resilientes.",
  ],
};

// ---- EXPERIENCIA (CARDS 3D) ----
export const experienceCards: ExperienceCard[] = [
  {
    id: "c6-dados",
    label: "C6 Bank",
    title: "Estagi\u00e1ria em Engenharia de Dados e Plataforma",
    date: "Dez 2024 \u2013 Ago 2025",
    description:
      "Desenvolvimento de pipelines de dados, automa\u00e7\u00f5es Python, BigQuery, Google Cloud Platform. Deploy controlado em dev/hom/prod.",
  },
  {
    id: "c6-bi",
    label: "C6 Bank",
    title: "Estagi\u00e1ria em BI/MIS \u2014 Governan\u00e7a de TI",
    date: "Dez 2023 \u2013 Dez 2024",
    description:
      "Automa\u00e7\u00e3o de processos com Python e BigQuery, ETL, dashboards Power BI, governan\u00e7a de dados e documenta\u00e7\u00e3o.",
  },
  {
    id: "formacao",
    label: "Forma\u00e7\u00e3o",
    title: "Engenharia de Software",
    date: "IESB \u2014 2021-2026",
    description:
      "Bacharelado em Engenharia de Software com foco em desenvolvimento backend, arquitetura de software e boas pr\u00e1ticas.",
  },
  {
    id: "objetivo",
    label: "Objetivo",
    title: "Desenvolvedora Backend Java/Kotlin",
    date: "Spring Boot \u00b7 APIs REST",
    description:
      "Evoluindo em mensageria, Docker, cloud e arquitetura de microsservi\u00e7os. Buscando crescer em ambientes colaborativos.",
  },
];

// ---- HABILIDADES ----
export const skills: Skill[] = [
  { name: "Java 17/21", letter: "J" },
  { name: "Kotlin", letter: "K" },
  { name: "Spring Boot 3", letter: "S" },
  { name: "APIs REST", letter: "A" },
  { name: "PostgreSQL", letter: "P" },
  { name: "Docker", letter: "D" },
  { name: "Git/GitHub", letter: "G" },
  { name: "JUnit/Mockito", letter: "T" },
  { name: "BigQuery/GCP", letter: "C" },
  { name: "Python", letter: "P" },
  { name: "JWT/OAuth2", letter: "S" },
  { name: "HTML/CSS/JS", letter: "H" },
];

// ---- PROJETOS ----
export const projects: Project[] = [
  {
    id: "villa-park",
    title: "Villa Park API",
    description:
      "Sistema de gest\u00e3o de estacionamento com Spring Boot 3, JWT, Spring Security e documenta\u00e7\u00e3o Swagger.",
    longDescription:
      "API REST completa para gest\u00e3o de estacionamento, desenvolvida com Spring Boot 3, Spring Security, JWT e Spring Data JPA. Implementa autentica\u00e7\u00e3o stateless, auditoria de dados, documenta\u00e7\u00e3o autom\u00e1tica com Swagger/OpenAPI e testes end-to-end. Aplica padr\u00e3o DTO com ModelMapper, valida\u00e7\u00e3o de campos com Jakarta Bean Validation e boas pr\u00e1ticas de arquitetura em camadas.",
    tags: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    image: "/project-villa-park.jpg",
    projectUrl: "/#/projeto/villa-park",
    githubUrl: "https://github.com/Cidinha-dev/Api-Rest-SpringBoot3",
    features: [
      "Autentica\u00e7\u00e3o stateless com JWT",
      "Documenta\u00e7\u00e3o autom\u00e1tica Swagger/OpenAPI",
      "Testes end-to-end com JUnit",
      "Arquitetura em camadas com DTOs",
      "Valida\u00e7\u00e3o com Jakarta Bean Validation",
    ],
  },
  {
    id: "mercado-livre",
    title: "Mercado Livre API",
    description:
      "API RESTful inspirada no Mercado Livre para gerenciamento de produtos com opera\u00e7\u00f5es CRUD completas.",
    longDescription:
      "API RESTful inspirada no Mercado Livre para gerenciamento de detalhes de produtos, com opera\u00e7\u00f5es CRUD completas e persist\u00eancia em JSON. Inclui tratamento de erros padronizado, valida\u00e7\u00f5es de entrada, documenta\u00e7\u00e3o autom\u00e1tica no endpoint raiz e cole\u00e7\u00e3o de requisi\u00e7\u00f5es no Postman para testes.",
    tags: ["Java 17", "Spring Boot", "Maven", "JUnit 5"],
    image: "/project-mercado-livre.jpg",
    projectUrl: "/#/projeto/mercado-livre",
    githubUrl: "https://github.com/Cidinha-dev/mercado-livre-api",
    features: [
      "CRUD completo de produtos",
      "Persist\u00eancia em JSON",
      "Tratamento de erros padronizado",
      "Documenta\u00e7\u00e3o autom\u00e1tica",
      "Cole\u00e7\u00e3o Postman para testes",
    ],
  },
];

// ---- CONTATO ----
export const contactSection = {
  label: "CONTATO",
  heading: "Vamos conversar?",
  description:
    "Estou sempre aberta a novas oportunidades e conex\u00f5es. Se voc\u00ea tem um projeto ou uma vaga que combine com meu perfil, me chama!",
};
