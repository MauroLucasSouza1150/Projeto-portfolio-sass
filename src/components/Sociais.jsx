import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

import '../styles/components/sociais.sass';

const socialMedia = [
    {name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/lucas-souza-446174209/"},
    {name: "github", icon: <FaGithub />, link: "https://github.com/MauroLucasSouza1150"}, 
    {name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/maurolucas_souza/?hl=pt-br"},
    {name: "twitter", icon: <FaTwitter />, link: "https://twitter.com/MauroLu17424925"},
];

const Sociais = () => {

  return <section id='social-media'>
    {socialMedia.map((network) => (
        <a href={network.link} target='_blank' className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))};
  </section>
}

export default Sociais;