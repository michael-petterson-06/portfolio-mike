import {
  DiHtml5,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiMongodb,
  // DiPhp,
} from "react-icons/di";

import {
  SiJest,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiPrisma,
  SiTailwindcss
} from "react-icons/si";

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, descrition: 'Linguagem de marcação com objetivos de facilitar a manipulação dos elementos.' },
  { id: "css", name: "JEST", icon: <SiJest />, descrition: 'É um framework de teste em JavaScript.' },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, descrition: 'Permite a você implementar itens complexos em páginas web.' },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, descrition: 'Uma plataforma de JavaScript construída do lado do servidor.' },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, descrition: 'É um sistema de gerenciamento de banco de dados que utiliza SQL.' },
  { id: "react", name: "React", icon: <DiReact />, descrition: 'É uma biblioteca JavaScript com foco em criar páginas web.' },
  { id: "mongodb", name: "MongoDB", icon: <DiMongodb />, descrition: 'MongoDB é um software de banco de dados NoSQL orientado a documentos.' },
  // { id: "php", name: "PHP", icon: <DiPhp />, descrition: 'PHP é uma linguagem de aplicações atuantes no lado do servidor.' },
  { id: "next", name: "Next.js", icon: <SiNextdotjs />, descrition: 'Framework React para produção com renderização híbrida e geração de páginas estáticas.' },
  { id: "nestjs", name: "NestJS", icon: <SiNestjs />, descrition: 'Framework para aplicações Node.js eficientes, escaláveis e com arquitetura modular.' },
  { id: "ts", name: "TypeScript", icon: <SiTypescript />, descrition: 'Um superset do JavaScript que adiciona tipagem estática ao código.' },
  { id: "prisma", name: "Prisma", icon: <SiPrisma />, descrition: 'ORM moderno para Node.js e TypeScript, que facilita a manipulação de banco de dados.' },
  { id: "tailwind", name: "Tailwind", icon: <SiTailwindcss />, descrition: 'Framework CSS utilitário que permite criar layouts responsivos de forma rápida.' },
];

  
  const TechnologiesContainer = () => {
    return (
      <section className="technologies-container">
        <h2>Tecnologias</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <h3>{tech.name}</h3>
                {/* <p>{tech.descrition}</p> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TechnologiesContainer;
  