import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import {
    useParams
} from "react-router-dom";

function Detail() {
    const {id} = useParams();
    const [movie, setMovies] = useState([]);
    const getMovie = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/list_movies.json?movie_id=${id}`)
        ).json();
        setMovies(json.data.movies);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            {
                movie.map((item) => (                    
                    <div>
                        <img src={item.medium_cover_image} alt={item.title}/>
                        <h2>
                            {item.title}              
                        </h2>
                        <p>{item.summary}</p>
                        <ul>
                            {item.genres.map((g) => (
                                <li key={g}>{g}</li>
    
                            ))}
                        </ul>
                    </div>
                ))
            }
        </div>
    );
}

export default Detail;