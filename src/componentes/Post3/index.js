import './style.css';
import { IconContext } from 'react-icons';

import { FiMoreHorizontal } from 'react-icons/fi';
import { IoMdHeartEmpty } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { BsChat } from 'react-icons/bs';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';

export default  function Post3() {
    return (
        <>
            <header className='header-post'>

                <div className="info-post">
                    <img src="https://instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-19/312284659_847903019719128_46428102607222577_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fgru8-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=e7Koi7_E72gAX_W9t9v&edm=ABmJApABAAAA&ccb=7-5&oh=00_AT9NBkO6y4ogwDeQu7PCcZzfdEWCMAjGuwiBt1Iww4GSqw&oe=635C2F2E&_nc_sid=6136e7" />
                    <p>_letrus_</p>
                </div>

                <FiMoreHorizontal />
            </header>

            <div className="img-post">
                <img src="https://instagram.fgru8-1.fna.fbcdn.net/v/t51.2885-15/311489062_110061798460838_8970765630142964092_n.jpg?stp=c0.21.1120.1120a_dst-jpg_e35_s320x320&_nc_ht=instagram.fgru8-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=n0H8yG_izEgAX_WPfSo&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8aaJawJyvByuV2MPkCi3JopRgIoa3C1rmmo5GoL_h8QQ&oe=635BB4E8&_nc_sid=8fd12b" />
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
                    <span>190 curtidas</span>
                </section>

                <div className="legend">
                    <p>
                        <strong>letrus__</strong> Falar em palavra é também falar em compromisso. E o nosso compromisso é com a educação. <br></br><br></br>

                        
                        <div className="time-post">
                    <time>1 sem</time>
                </div>

                <br></br> <strong>isabellioliveira29</strong> 😍😍 
                    </p>
                </div>

                <div className="time-post">
                    <time>12 sem</time>
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