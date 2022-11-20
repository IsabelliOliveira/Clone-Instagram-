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
                        <strong>ONU Brasil</strong> SO Fundo das Nações Unidas para a Infância (@unicefbrasil) alerta que, até 2050, todas as crianças e todos os adolescentes do mundo estarão expostos a ondas de calor. Um novo relatório revela que, mesmo nos níveis mais baixos de aquecimento global, em apenas três décadas, ondas de calor mais regulares serão inevitáveis para crianças e adolescentes de todos os lugares.<br></br><br></br>

                        O documento já estima que atualmente 559 milhões de crianças e adolescentes estão expostos a ondas de calor frequentes. A quanto mais ondas de calor meninas e meninos estiverem expostos, maior a chance de problemas de saúde, incluindo doenças respiratórias crônicas, asma e doenças cardiovasculares. Bebês e crianças pequenas correm o maior risco de mortalidade relacionada ao calor.<br></br><br></br>

                        O UNICEF defende que é necessário aumentar, urgentemente, o financiamento para adaptar os serviços públicos e proteger crianças, adolescentes e comunidades vulneráveis do agravamento das ondas de calor e outros choques climáticos.<br></br><br></br>

                        📸 Fani Llaurado/UNICEF
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