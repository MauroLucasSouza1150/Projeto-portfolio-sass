import Foto from "../img/minha-foto-portfolio.jpg";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Foto} alt="Lucas Souza" />
      <p className="title">Desenvolvedor Front-End JR</p>
      <p>Contato:</p>
      <p>Sociais:</p>
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
};

export default Sidebar;