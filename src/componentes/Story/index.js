import './style.css';
import { useEffect, useState } from 'react';

export function Story() {

    const [suggestions, setSuggestions] = useState([])

    const [limitUsers, setLimitUsers] = useState(5)

    const slice = suggestions.slice(0, limitUsers)

    useEffect(() => {
        fetch(`https://api.github.com/users/IsabelliOliveira/followers`)
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
        <div className="story-container">
            {slice.map((suggestion, key) => (
            <div className="user-elements"  key={key} >

                <div>
                    <img className="image-user-story" src={`https://github.com/${suggestion.login}.png`} />
                </div>
                <span>{suggestion.login}</span>
            </div>
            ))}
        </div>
            
    )
}