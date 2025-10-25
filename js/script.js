// ==================== TRANSLATIONS ====================
const translations = {
  pt: {
    nome: "Gabriel Augusto V. V. Rocha",
    cargo: "Estudante de Engenharia de Software",
    email: "augusto.rocha.real@gmail.com",
    objetivo: "OBJETIVO",
    objetivoTexto:
      "Colocar tudo o que tenho aprendido no curso de Engenharia de Software em prática, interagir com o mercado de tecnologia, aprender, cooperar e contribuir.",
    educacao: "EDUCAÇÃO",
    edu1Titulo: "Engenharia de Software",
    edu1Tipo: "Graduação, Universidade de Brasília - FCTE",
    edu1Inicio: "Início: Junho/2022",
    edu1Conclusao: "Previsão de conclusão: Junho/2027",
    edu2Titulo: "Técnico em Informática",
    edu2Tipo: "Escola Técnica de Brasília",
    edu2Inicio: "Início: Janeiro/2021",
    edu2Conclusao: "Conclusão: Dezembro/2022",
    edu3Titulo: "Operador de Computador, Assistente Administrativo e Inglês",
    edu3Tipo: "Grupo Evolução – FAEL",
    edu3Inicio: "Início: Outubro/2019",
    edu3Conclusao: "Conclusão: Fevereiro/2021",
    idioma: "IDIOMA",
    idiomaNome: "Inglês",
    idiomaNivel: "Nível: Avançado",
    idiomaEscola: "Centro Interescolar de Línguas de Taguatinga – CILT",
    idiomaInicio: "Início: Agosto/2015",
    idiomaConclusao: "Conclusão: Janeiro/2021",
    habilidades: "HABILIDADES",
    skill1: "Microsoft Office",
    skill2: "Programação orientada a objetos",
    skill3: "Máquina virtual Oracle (VM VirtualBox)",
    skill4: "Linguagens de programação: Java, C, Python",
    skill5: "HTML e CSS",
    skill6: "MySQL",
    experiencia: "EXPERIÊNCIA PROFISSIONAL",
    expTitulo: "Trainee - EngNet Consultoria",
    expAtividades:
      "Atividades: Planejar, desenvolver e implementar soluções de Software.",
    expPeriodo: "Período: Outubro/2025 - Atual",
    projetos: "PROJETOS",
    proj1Desc:
      "Uma plataforma web para escritores criarem e exibirem seus portfólios. Feito com Python (Django) e JavaScript.",
    proj2Desc:
      "Jogo de sobrevivência no estilo 'Vampire Survivors' feito com GameMaker.",
  },
  en: {
    nome: "Gabriel Augusto V. V. Rocha",
    cargo: "Software Engineering Student",
    email: "augusto.rocha.real@gmail.com",
    objetivo: "OBJECTIVE",
    objetivoTexto:
      "Apply everything I have learned in Software Engineering, interact with the technology market, learn, cooperate, and contribute.",
    educacao: "EDUCATION",
    edu1Titulo: "Software Engineering",
    edu1Tipo: "Bachelor’s Degree, University of Brasília - FCTE",
    edu1Inicio: "Start: June/2022",
    edu1Conclusao: "Expected graduation: June/2027",
    edu2Titulo: "IT Technician",
    edu2Tipo: "Technical School of Brasília - ETB",
    edu2Inicio: "Start: January/2021",
    edu2Conclusao: "Conclusion: December/2022",
    edu3Titulo: "Computer Operator, Administrative Assistant, and English",
    edu3Tipo: "Grupo Evolução – FAEL",
    edu3Inicio: "Start: October/2019",
    edu3Conclusao: "Conclusion: February/2021",
    idioma: "LANGUAGE",
    idiomaNome: "English",
    idiomaNivel: "Level: Advanced",
    idiomaEscola: "Interschool Language Center of Taguatinga – CILT",
    idiomaInicio: "Start: August/2015",
    idiomaConclusao: "Conclusion: January/2021",
    habilidades: "SKILLS",
    skill1: "Microsoft Office",
    skill2: "Object-Oriented Programming",
    skill3: "Oracle Virtual Machine (VM VirtualBox)",
    skill4: "Programming languages: Java, C, Python",
    skill5: "HTML and CSS",
    skill6: "MySQL",
    experiencia: "PROFESSIONAL EXPERIENCE",
    expTitulo: "Trainee - EngNet Consultoria",
    expAtividades:
      "Tasks: Plan, develop, and implement software solutions.",
    expPeriodo: "Period: October/2025 - Present",
    projetos: "PROJECTS",
    proj1Desc:
      "A web platform for writers to create and showcase their portfolios. Built with Python (Django) and JavaScript.",
    proj2Desc:
      "A survival game inspired by 'Vampire Survivors', developed in GameMaker.",
  },
};

// ==================== LANGUAGE SWITCHER ====================
const btnPt = document.getElementById("btn-pt");
const btnEn = document.getElementById("btn-en");

const elements = {};
document.querySelectorAll("[data-i18n]").forEach((el) => {
  elements[el.dataset.i18n] = el;
});

function setLanguage(lang) {
  const t = translations[lang];
  for (const key in t) {
    if (elements[key]) elements[key].textContent = t[key];
  }
  btnPt.classList.toggle("active", lang === "pt");
  btnEn.classList.toggle("active", lang === "en");
}

btnPt.addEventListener("click", () => setLanguage("pt"));
btnEn.addEventListener("click", () => setLanguage("en"));
setLanguage("pt");

// ==================== THEME TOGGLE ====================
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  const isDark = body.classList.contains("dark");
  themeToggle.innerHTML = isDark
    ? '<i class="fa-solid fa-moon"></i>'
    : '<i class="fa-solid fa-sun"></i>';
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
