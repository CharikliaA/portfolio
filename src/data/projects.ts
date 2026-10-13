export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  repoUrl: string;
  liveUrl: string;
};
export const projects: Project[] = [
  {
    id: 1,
    title: "Mars Bound Marauders",
    description:
      "Ett escape room-spel i webbläsaren, byggt i grupp. Lös sex pussel och samla bokstäver för att öppna portalen.",
    image: "/images/mars.jpg",
    tags: ["TypeScript", "HTML", "SCSS", "Vite"],
    repoUrl: "",
    liveUrl:
      "https://medieinstitutet.github.io/fed25d-js-intro-grupparbete-the-mars-bound-marauders/",
  },
  {
    id: 2,
    title: "Book API",
    description:
      "Fullstack-app för bokrecensioner, byggd i grupp. Jag byggde recensions-API:t och boksidan med formulär och validering.",
    image: "/images/bookapi.svg",
    tags: ["TypeScript", "MongoDB", "Node.js"],
    repoUrl: "https://github.com/RasmusFranssonHub/api-book-group",
    liveUrl: "",
  },
  {
    id: 3,
    title: "BUBS Passions-Punch",
    description:
      "Kampanjsida för en ny godissmak, designad i Figma och byggd i grupp. Responsiv layout med meny, cookie-ruta och kontaktformulär.",
    image: "/images/bubs.jpg",
    tags: ["HTML", "CSS"],
    repoUrl: "",
    liveUrl:
      "https://medieinstitutet.github.io/fed25d-grafiska-verktyg-golden-ratio/",
  },
  {
    id: 4,
    title: "Portfolio",
    description: "Min personliga portfolio med projektfilter",
    image: "",
    tags: ["React", "TypeScript", "Vite"],
    repoUrl: "https://github.com/CharikliaA/portfolio",
    liveUrl: "",
  },
  {
    id: 5,
    title: "Väderapp",
    description:
      "Väderapp som hämtar aktuellt väder för en vald stad från ett öppet API. Visar temperatur, väderikon och prognos.",
    image: "/images/weather.svg",
    tags: ["JavaScript", "HTML", "CSS"],
    repoUrl: "",
    liveUrl: "",
  },
  {
    id: 6,
    title: "Att göra-lista",
    description:
      "Att göra-lista där man kan lägga till, bocka av och ta bort uppgifter. Uppgifterna sparas i webbläsaren.",
    image: "/images/todo.svg",
    tags: ["React", "TypeScript"],
    repoUrl: "",
    liveUrl: "",
  },
];
