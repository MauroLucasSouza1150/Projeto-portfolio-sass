import { DiHtml5, DiCss3, DiJsBadge, DiReact, DiNodejsSmall, DiGit } from 'react-icons/di'

import '../styles/components/tecnologies.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, msg: "Experiência: 3 ou + anos de experiência." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, msg: "Experiência: 3 ou + anos de experiência." },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, msg: "Experiência: 3 anos de experiência." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, msg: "Experiência: 1 anos de experiência." },
  { id: "react", name: "React", icon: <DiReact />, msg: "Experiência: 2 anos de experiência." },
  { id: "git", name: "Git", icon: <DiGit />, msg: "Experiência: 2 anos e meio de experiência." },
];

const TecnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias:</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TecnologiesContainer