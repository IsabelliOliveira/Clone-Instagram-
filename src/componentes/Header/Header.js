import './Header.css'
import Item from './componentes/Item';
import { RiMessengerLine,RiSearchLine } from "react-icons/ri";
import { FiHeart, FiPlusSquare } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
import { FaBars } from "react-icons/fa";

export default  function Header(props) {
    return (
        <div className='Header'>
            <img src={props.logo} alt="Logo do Instagram" className="logoInstagram" />

            <div className='container'>
                <div className="listItem">
                
                    <div className="perfil-sidebar">
                        <img src={`https://avatars.githubusercontent.com/u/104120168?v=4`} />
                        <p>Perfil</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

