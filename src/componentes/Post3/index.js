import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post3() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://images-ext-1.discordapp.net/external/wmFt4xyDzqANbiqX2NBEcCaeGpEyFZwH_2bayu5tgwE/%3Fstp%3Ddst-jpg_s150x150%26_nc_ht%3Dinstagram.fgru8-1.fna.fbcdn.net%26_nc_cat%3D100%26_nc_ohc%3DNQ4gCKjH7gcAX-J-y_a%26edm%3DABmJApABAAAA%26ccb%3D7-5%26oh%3D00_AfCzikaAFZsiWUYh4yMIlzbhMfKtHKCzCfxH8xJ19DlAPw%26oe%3D637FC7AE%26_nc_sid%3D6136e7/https/instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-19/312284659_847903019719128_46428102607222577_n.jpg" />

                    <p>letrus__</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://images-ext-1.discordapp.net/external/GEN9zey6rc9WwCfpdNc9lI1JU1gyNl-BKFETisvuC3I/%3Fstp%3Ddst-jpg_e15%26_nc_ht%3Dinstagram.fgru8-1.fna.fbcdn.net%26_nc_cat%3D107%26_nc_ohc%3DTenUrJ3Q6jEAX-c0ccU%26edm%3DALQROFkAAAAA%26ccb%3D7-5%26ig_cache_key%3DMjk3MzA1Njc1OTk5Njk1MDEzMQ%253D%253D.2-ccb7-5%26oh%3D00_AfA4U6fasdyMP0RXYHkM9pyivqrUsLB7CdPv-kcZnH9SGQ%26oe%3D637EA403%26_nc_sid%3D30a2ef/https/instagram.fgru8-1.fna.fbcdn.net/v/t39.30808-6/315571436_505451468268847_811187886512387561_n.jpg?width=609&height=632" />
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
                    <span>1,250 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>letrus__</strong> A minha solução esta boa? Existe uma maneira perfeita de resolver esse problema? Estou inseguro e não sei se consegui fazer da melhor maneira.<br></br><br></br>

                        Na programação existem diversas maneiras de encontrar a solução a um problema, mas a nossa insegurança nos faz aqueles questionamentos que acabam nos travando na evolução dos estudos.<br></br><br></br>

                        Não espere encontrar a solução perfeita, encontre a solução que resolve um problema e segue o jogo!<br></br>
                        <div className="time-post">
                    <time>22 sem</time>
                </div>

                <br></br> <strong>isabellioliveira29</strong> 👏👏 arrasaram demais!
                    </p>
                </div>

                <div className="time-post">
                    <time>3d</time>
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