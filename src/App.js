import './styles/global.css';
import logoInsta from './imagens/Instagram_logo.svg.png';
import SidebarHeader from './componentes/SidebarHeader/SidebarHeader';
import { Layout } from './componentes/Layout';


function App() {
  return (
    <div>
      <SidebarHeader logo={logoInsta} />
      <Layout />
    </div>
  )
}

export default App;
