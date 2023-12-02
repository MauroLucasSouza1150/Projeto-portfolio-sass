import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter } from 'react-icons/fa';

import '../styles/components/sociais.sass';

const socialMedia = [
    {name: "linkedin", icon: <FaLinkedinIn />},
    {name: "github", icon: <FaGithub />},
    {name: "instagram", icon: <FaInstagram />},
    {name: "twitter", icon: <FaTwitter />},
];

const Sociais = () => {

  return <section id='social-media'>
    {socialMedia.map((network) => (
        <a href="#" className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))};
  </section>
}

export default Sociais;