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
      <a href="https://drive.google.com/u/1/uc?id=1q-Bf1a5_1pWjMFDe_lC3EyLaJkYA-hTN&export=download" target="_blank" className="btn">Download Currículo</a>
    </aside>
  );
};

export default Sidebar;