import Foto from "../img/minha-foto-portfolio.jpg";
import Sociais from "./Sociais";
import Contacts from "./Contacts";

import "../styles/components/sidebar.sass";


const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Foto} alt="Lucas Souza" />
      <p className="title">Desenvolvedor JR</p>
      <Contacts />
      <Sociais />
      <a href="" className="btn">Download Currículo</a>
    </aside>
  );
};

export default Sidebar;