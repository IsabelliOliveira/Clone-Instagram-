import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default  function Post2() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-19/56843791_2052082151587009_1577045655321313280_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgru8-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=JW_698oaswUAX9JYOrb&edm=ALQROFkBAAAA&ccb=7-5&oh=00_AT_1iXjg3GrXWjaO3rbcCQoLl0sBB9RSPvlSoWyoe7QFGA&oe=635BA1E1&_nc_sid=30a2ef" />

                    <p>onubrasil</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-15/311008563_3168359560142056_1724612203413234887_n.jpg?stp=dst-jpg_e15_fr_s1080x1080&_nc_ht=instagram.fgru8-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=99uBl7BbYxIAX__f4dO&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjk0MzI5NTYzMTM1MTc0NjA3NQ%3D%3D.2-ccb7-5&oh=00_AT_VDFpQ5yhQnGH1sQMaqzzjv4ZwTfF8qAIDNLW467jTrQ&oe=635BFD86&_nc_sid=30a2ef" />
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
                    <span>998 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>onubrasil</strong> O Programa das Nações Unidas para o Desenvolvimento (@pnud_brasil) e o Banco de Desenvolvimento da América Latina (CAF) firmaram memorando de entendimento a fim de apoiar os países da região no alcance dos Objetivos de Desenvolvimento Sustentável (ODS) da Agenda 2030.<br></br><br></br>

                        A aliança busca impulsionar, aprimorar e promover um modelo de desenvolvimento sustentável em um momento em que a região enfrenta uma série de mudanças e desafios.<br></br><br></br>

                        Entre as temáticas de cooperação estão as áreas de governança democrática, digitalização e iniciativas de capacitação, ação climática, títulos dos ODS, igualdade de gênero, entre outros.<br></br><br></br>

                        Mais informações: https://bit.ly/3EoafsG<br></br><br></br>

                        📸 Raoni Libório/UNICEF<br></br><br></br>
                         
                    </p>
                </div>

                <div className="time-post">
                    <time>8 sem</time>
                </div>

                <div className="comment">

                    <div className="fake-comment">

                        <IconContext.Provider value={{ size: "25px" }}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>

                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />

                    </div>
                    <button>Publicar</button>
                </div>

            </div>
        </>
    )
}