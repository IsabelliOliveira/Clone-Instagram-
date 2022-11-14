import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default  function Post() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-19/309299310_1960658784130305_7678637655436843503_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgru8-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=n_oQm7-j7YsAX92QR_3&edm=ABmJApABAAAA&ccb=7-5&oh=00_AT-njl7n_hBLsU9KDSelyFKrWmLW7GeWlc3Uxvo71eQuvg&oe=635B99F2&_nc_sid=6136e7" />
                    <p>auroraseles</p>
                </div>
                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src={`https://instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-15/309335131_1891387861200488_5048207718254053909_n.webp?stp=dst-jpg_e35&_nc_ht=instagram.fgru8-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=VRmFlO9tUxUAX9hLfuA&tn=Ly0lEPM3LFo0j0OL&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkzOTA0NTQwMzc0ODcxNDgzOQ%3D%3D.2-ccb7-5&oh=00_AT8jIoMcwt91HYS2QqU1aaZxx5tAr3Bo6HhhsJnXgEwX-w&oe=635C885F&_nc_sid=30a2ef`} />
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
                    <span>325 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>auroraseles</strong> Pupilas e pupilos, Equipe 3,
                    </p>
                </div>

                <div className="time-post">
                    <time>3 sem</time>
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