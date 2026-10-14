# Portfolio - Chariklia Sait

Min personliga portfolio, byggd som en React single page application med TypeScript och Vite. Här presenterar jag mig själv, mina kompetenser och mina projekt. Projekten kan filtreras på teknik, och sidan fungerar på alla skärmstorlekar, från mobil till desktop. 

🔗 **Live:** https://portfolio-chariklia.vercel.app

🎨 **Figma:** https://www.figma.com/design/YUwl2apshDPO8fjG6CfCvj/Portfolio?node-id=0-1&t=BFx4uwTvA8t9EORg-1

## Tech stack 
- React
- TypeScript
- Vite
- CSS
- Figma 
- Git och GitHub
- Vercel

## Funktioner
- Responsiv design från 360px upp till desktop
- Projektfilter med `useState`, där man väljer en teknik-tagg i taget eller visar alla projekt
- Den filtrerade listan räknas fram vid rendering
- Mobilmeny (hamburgarmeny) med `useState`
- Projektdata i en separat fil (`data/projects.ts`), renderad med `.map()` och `key`
- Återanvändbara komponenter med props
- Transitions på knappar och länkar

## Kör projektet lokalt
1. Klona repot: git clone https://github.com/CharikliaA/portfolio.git
2. Gå in i mappen: cd portfolio
3. Installera beroenden: npm install
4. Starta utvecklingsservern: npm run dev

## Ändringar från Figma-skissen
- **Färger:** Skissen gjordes i gråskala. Under arbetet valde jag en ljus blå färgpalett med rosa accentfärg.
- **Kompetenser:** Jag lade till SCSS, Vite, MongoDB och Node.js, eftersom jag har använt dem i mina projekt.
- **Filterknappar:** Fler filterknappar än i skissen, så att alla tekniktaggar i projekten går att filtrera på.
- **Projektkort:** Fick pillerformade länkar för Repo och Live, för att matcha resten av designen.
- **Hero-bilden:** Platshållare byttes mot ett foto av mig. 
