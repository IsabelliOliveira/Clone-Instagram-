import './styles/global.css';
import logoInsta from './imagens/Instagram_logo.svg.png';
import Header from  './componentes/Header/Header';
import Layout  from './componentes/Layout/Layout';


function App(){
  return (
    <div>
      <Header logo={logoInsta}/>
      <Layout/>
    </div>
  )
}

export default App;




