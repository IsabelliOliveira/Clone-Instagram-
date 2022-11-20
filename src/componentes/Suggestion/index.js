import { useState, useEffect } from 'react';
import './style.css';

export function Suggestion() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/IsabelliOliveira/following`)
            .then((response) => {
                return response.json()
            })
            .then((result) => {
                setSuggestions(result)
            })

            .catch((err) => {
                throw new Error(err)
            })

    }, [])

    return (
        <div className="container-suggestion">
            <div className="header-suggestion">
                <img src={`https://github.com/IsabelliOliveira.png`} />

                <div className="user-info-suggestion">
                    <div className="info" >
                        <span>Isabellioliveira29</span>
                        <p>Belli ✿</p>
                    </div>

                    <button className="switch">Mudar</button>
                </div>
            </div>

            <div className="header-main-suggestion">

                <p>Sugestoes para você</p>

                <span>Ver tudo</span>

            </div>

            <div className="user-suggestion">

                {slice.map((suggestion, key) => (
                    <div className="infos-suggestions" key={key}>
                        <img src={`https://github.com/${suggestion.login}.png`} />

                        <div className="info-suggestion">
                            <span>{suggestion.login}</span>
                            <p>Seguido por _adrianqueirooz</p>
                        </div>

                        <button className="follow">Seguir</button>
                    </div>
                ))}

            </div>

            <footer className="footer-suggestion" >
                <p>About &bull; Help &bull; Press &bull; API &bull; Jobs &bull; Privacy &bull; Teams &bull; Localions &bull; Lnaguage </p>
                <p>&copy; 2022 INSTAGRAM FROM META</p>
            </footer>
        </div>
    )
}
