import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from 'react-icons/ai';

import '../styles/components/contact.sass';

const Contacts = () => {
  return (
    <section id='contacts'>
        <div className='contact-card'>
            <AiFillPhone id='phone-icon' />
                <div>
                    <h3>Telefone:</h3>
                    <p>(88) 9 8125-8154</p> 
                </div>
            <div className='contact-card'>
                <AiOutlineMail id='email-icon' />
                <div>
                    <h3>Email: </h3>
                    <p>maurolucas2014@gmail.com</p>
                </div>
            </div>
            <div className='contact-card'>
                <AiFillEnvironment id='pin-icon' />
                <div>
                    <h3>Localização:</h3>
                    <p>Siqueira, Fortaleza (CE)</p>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contacts;