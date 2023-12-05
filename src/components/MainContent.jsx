import '../styles/components/maincontent.sass'
import AboutContainer from './AboutContainer';
import MyProjects from './MyProjects';
import TecnologiesContainer from './TecnologiesContainer';

const MainContent = () => {
  return (
    <main id='main-content'>
      <AboutContainer />
      <MyProjects />
      <TecnologiesContainer />
    </main>
  )
}

export default MainContent;