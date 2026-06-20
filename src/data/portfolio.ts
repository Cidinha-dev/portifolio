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
  title: "Engenheira de Software | Java · Kotlin · Spring Boot",
  greeting: "Olá, eu sou",
  description:
    "Desenvolvendo soluções robustas com foco em backend, APIs REST e arquitetura limpa.",
  location: "São Paulo, SP",
  email: "cidinha.dev@gmail.com",
  phone: "(11) 97616-5708",
  linkedin: "https://linkedin.com/in/cidinha-dev",
  github: "https://github.com/Cidinha-dev",
  profilePhoto: "./images/profile-photo.jpg",
};

// ---- SECAO SOBRE ----
export const aboutSection = {
  label: "SOBRE MIM",
  heading: "Quem sou eu",
  paragraphs: [
    "Sou formanda em Engenharia de Software com foco em desenvolvimento backend utilizando Java e Spring Boot. Tenho experiência prática na construção de APIs REST organizadas, escaláveis e com boas práticas de mercado, incluindo Clean Code, SOLID e testes automatizados com JUnit e Mockito.",
    "Atuei por quase 2 anos no C6 Bank onde desenvolvi pipelines de dados, automações em Python e trabalhei com BigQuery e Google Cloud Platform (GCP). Essa vivência me proporcionou uma visão completa de sistemas — desde o processamento de dados até a entrega de valor para o negócio.",
    "Atualmente venho aprofundando meus estudos em arquitetura backend, mensageria, Docker e cloud, com o objetivo de evoluir na construção de sistemas mais escaláveis e resilientes.",
  ],
};

// ---- EXPERIENCIA (CARDS 3D) ----
export const experienceCards: ExperienceCard[] = [
  {
    id: "c6-dados",
    label: "C6 Bank",
    title: "Estagiária em Engenharia de Dados e Plataforma",
    date: "Dez 2024 – Ago 2025",
    description:
      "Desenvolvimento de pipelines de dados, automações Python, BigQuery, Google Cloud Platform. Deploy controlado em dev/hom/prod.",
  },
  {
    id: "c6-bi",
    label: "C6 Bank",
    title: "Estagiária em BI/MIS — Governança de TI",
    date: "Dez 2023 – Dez 2024",
    description:
      "Automação de processos com Python e BigQuery, ETL, dashboards Power BI, governança de dados e documentação.",
  },
  {
    id: "formacao",
    label: "Formação",
    title: "Engenharia de Software",
    date: "IESB — 2021-2026",
    description:
      "Bacharelado em Engenharia de Software com foco em desenvolvimento backend, arquitetura de software e boas práticas.",
  },
  {
    id: "objetivo",
    label: "Objetivo",
    title: "Desenvolvedora Backend Java/Kotlin",
    date: "Spring Boot · APIs REST",
    description:
      "Evoluindo em mensageria, Docker, cloud e arquitetura de microsserviços. Buscando crescer em ambientes colaborativos.",
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
      "Sistema de gestão de estacionamento com Spring Boot 3, JWT, Spring Security e documentação Swagger.",
    longDescription:
      "API REST completa para gestão de estacionamento, desenvolvida com Spring Boot 3, Spring Security, JWT e Spring Data JPA. Implementa autenticação stateless, auditoria de dados, documentação automática com Swagger/OpenAPI e testes end-to-end. Aplica padrão DTO com ModelMapper, validação de campos com Jakarta Bean Validation e boas práticas de arquitetura em camadas.",
    tags: ["Java", "Spring Boot", "JWT", "PostgreSQL"],
    image: "./images/project-villa-park.jpg",
    projectUrl: "#/projeto/villa-park",
    githubUrl: "https://github.com/Cidinha-dev/Api-Rest-SpringBoot3",
    features: [
      "Autenticação stateless com JWT",
      "Documentação automática Swagger/OpenAPI",
      "Testes end-to-end com JUnit",
      "Arquitetura em camadas com DTOs",
      "Validação com Jakarta Bean Validation",
    ],
  },
  {
    id: "mercado-livre",
    title: "Mercado Livre API",
    description:
      "API RESTful inspirada no Mercado Livre para gerenciamento de produtos com operações CRUD completas.",
    longDescription:
      "API RESTful inspirada no Mercado Livre para gerenciamento de detalhes de produtos, com operações CRUD completas e persistência em JSON. Inclui tratamento de erros padronizado, validações de entrada, documentação automática no endpoint raiz e coleção de requisições no Postman para testes.",
    tags: ["Java 17", "Spring Boot", "Maven", "JUnit 5"],
    image: "./images/project-mercado-livre.jpg",
    projectUrl: "#/projeto/mercado-livre",
    githubUrl: "https://github.com/Cidinha-dev/mercado-livre-api",
    features: [
      "CRUD completo de produtos",
      "Persistência em JSON",
      "Tratamento de erros padronizado",
      "Documentação automática",
      "Coleção Postman para testes",
    ],
  },
];

// ---- CONTATO ----
export const contactSection = {
  label: "CONTATO",
  heading: "Vamos conversar?",
  description:
    "Estou sempre aberta a novas oportunidades e conexões. Se você tem um projeto ou uma vaga que combine com meu perfil, me chama!",
};