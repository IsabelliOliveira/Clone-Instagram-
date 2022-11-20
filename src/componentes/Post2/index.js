import './style.css';
import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export function Post2() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://cdn.discordapp.com/attachments/1030653726173696010/1031356548364112012/download_1.png" />

                    <p>instituto.proa</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://images-ext-1.discordapp.net/external/tzpHIkzQwmgNuLq8-UICaj7s2o_8exuDE3GZJyPJF4U/%3Fstp%3Ddst-jpg_e35_p480x480%26_nc_ht%3Dinstagram.fgru8-1.fna.fbcdn.net%26_nc_cat%3D109%26_nc_ohc%3D5LYiF4Em5DYAX8jNgqf%26edm%3DALQROFkBAAAA%26ccb%3D7-5%26ig_cache_key%3DMjk2NzAyNDA5MDE1NTI0MzQ2NA%253D%253D.2-ccb7-5%26oh%3D00_AfDsv2Nq801MTGhbiyNf5rj4hx_dcspGL3ZuSDwaxF66xg%26oe%3D637EB294%26_nc_sid%3D30a2ef/https/instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-15/314516133_2942638316039037_1314175154722660106_n.webp" />
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
                    <span>589 likes</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>instituto.proa</strong> É com muito orgulho que compartilhamos com vocês a matéria especial do PROA de hoje no @valoreconomico! 📰<br></br><br></br>

                        "O ponto mais importante é a inclusão produtiva. É ela que rompe o ciclo da pobreza", afirma @alinidalmagro, CEO do Instituto PROA.<br></br><br></br>

                        Depois de mais de 36 mil vidas impactadas, vamos em busca dos 300 mil jovens empregados até 2027, esse é o objetivo! 💙💪🏼<br></br><br></br>

                        Acesse o link disponível nos stories e leia a matéria na íntegra. 🚀✨<br></br><br></br>

                        <strong>lilcas12</strong> PROA! 😍💙 
                    </p>
                </div>

                <div className="time-post">
                    <time>1w</time>
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