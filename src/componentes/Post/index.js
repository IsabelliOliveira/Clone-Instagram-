import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/160726/regular_onu.png" />
                    <p>ONU Brasil</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src={`https://images-ext-1.discordapp.net/external/3whu06P6ETbLfQnwz4BxNewpUchWmtJqXHIDz99-R48/%3Fstp%3Ddst-jpg_e15%26_nc_ht%3Dinstagram.fgru8-1.fna.fbcdn.net%26_nc_cat%3D108%26_nc_ohc%3DU4qER-6V5UUAX9uYwYq%26edm%3DALQROFkBAAAA%26ccb%3D7-5%26ig_cache_key%3DMjk1ODI4MjMwODU3OTE5ODgwNg%253D%253D.2-ccb7-5%26oh%3D00_AfD0lYZ_5VGJUU0RRn_XksyJNR0k6u3sWaFLdBLLCUg7Vw%26oe%3D637E9CED%26_nc_sid%3D30a2ef/https/instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-15/312700396_1168392034092728_219533999243599713_n.jpg?width=632&height=632`} />
            </div>

            <div className="footer-post">
                <IconContext.Provider value={{ size: "30px" }}>
                    <section className="engagement-post">
                        <div className="icons-1">
                            <div className="icon">  <IoMdHeartEmpty /></div>
                            <div className="icon">  <BsChat /></div>
                            <div className="icon">  <FiSend /></div>
                        </div>

                        <div className="icon">  <BsBookmark /></div>

                    </section>
                </IconContext.Provider>

                <section className="like">
                    <span>1,230 likes</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>ONU Brasil</strong> SO Fundo das Na????es Unidas para a Inf??ncia (@unicefbrasil) alerta que, at?? 2050, todas as crian??as e todos os adolescentes do mundo estar??o expostos a ondas de calor. Um novo relat??rio revela que, mesmo nos n??veis mais baixos de aquecimento global, em apenas tr??s d??cadas, ondas de calor mais regulares ser??o inevit??veis para crian??as e adolescentes de todos os lugares.<br></br><br></br>

                        O documento j?? estima que atualmente 559 milh??es de crian??as e adolescentes est??o expostos a ondas de calor frequentes. A quanto mais ondas de calor meninas e meninos estiverem expostos, maior a chance de problemas de sa??de, incluindo doen??as respirat??rias cr??nicas, asma e doen??as cardiovasculares. Beb??s e crian??as pequenas correm o maior risco de mortalidade relacionada ao calor.<br></br><br></br>

                        O UNICEF defende que ?? necess??rio aumentar, urgentemente, o financiamento para adaptar os servi??os p??blicos e proteger crian??as, adolescentes e comunidades vulner??veis do agravamento das ondas de calor e outros choques clim??ticos.<br></br><br></br>

                        ???? Fani Llaurado/UNICEF
                    </p>
                </div>

                <div className="time-post">
                    <time>OCTOBER 27</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: "25px" }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>

                        </IconContext.Provider>

                        <input placeholder="Add a comment..." />

                    </div>
                    <button>Post</button>
                </div>

            </div>
        </>
    )
}