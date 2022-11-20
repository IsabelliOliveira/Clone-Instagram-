import './SidebarHeader.css';
import Item from './componentes/Item';
import { RiMessengerLine,RiSearchLine } from "react-icons/ri";
import { FiHeart, FiPlusSquare } from "react-icons/fi";
import { MdHomeFilled } from "react-icons/md";
import { FaBars } from "react-icons/fa";

function SidebarHeader(props) {
    return (
        <div className='SidebarHeader'>
            <img src={props.logo} alt="Logo do Instagram" className="logoInstagram" />

            <div className='container'>
                <div className="listItem">
                    <div> <Item icone={<MdHomeFilled />} nome={`Home`} /></div>
                    <div><Item icone={<RiSearchLine />} nome="Search" /></div>
                    <div><Item icone={<RiMessengerLine />} nome="Messages" /></div>
                    <div><Item icone={<FiHeart />} nome="Notifications" /></div>
                    <div><Item icone={<FiPlusSquare />} nome="Create" /></div>
                    <div className="perfil-sidebar">
                        <img src={`https://github.com/IsabelliOliveira.png`} />
                        <p>Perfil</p>
                    </div>
                    <div className='mais'><Item icone={<FaBars />} nome="More" /></div>
                </div>

            </div>

        </div>
    )
}

export default SidebarHeader;