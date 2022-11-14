import { useState, useEffect } from 'react';
import './style.css';

export function Suggestion() {

    const [sugestao, setsugestao] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = sugestao.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/LucasFranca0/followers`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setsugestao(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, [])

    return (
        <div className="container-sugestao">
            <div className="header-sugestao">
                <img src={`https://github.com/IsabelliOliveira`} />

                <div className="user-info-sugestao">
                    <div className="info" >
                        <span>isabellioliveira29</span>
                        <p>Isabelli Oliveira</p>
                    </div>

                    <button className="switch">Mudar</button>
                </div>
            </div>

            <div className="header-main-sugestao">

                <p>Sugestoes para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-sugestao">

                {slice.map((sugestao, key) => (
                    <div className="infos-sugestao" key={key}>
                        <img src={`https://github.com/${sugestao.login}.png`} />

                        <div className="info-suggestion">
                            <span>{sugestao.login}</span>
                            <p>Seguido por Instituto PROA</p>
                        </div>

                        <button className="follow">Seguir</button>
                    </div>
                ))}

            </div>

            <footer className="footer-sugestao" >
                <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &ebull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}