import PropType from "prop-types";
import {
    Link
} from "react-router-dom";

/**
 * [Link]
 * : a href 로 페이지 전환시, 페이지를 다시그리는 문제가있음 
 * Link  로 사용하면 페이지 전체를 다시 그리지 않음.
 * 
 * 
 */
function Movie({id, coverImage, title, summary, genres}) {
    return (
        <div>
            <img src={coverImage} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>
                    {title}
                </Link>                
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g) => (
                    <li key={g}>{g}</li>

                ))}
            </ul>
        </div>
    );
}

Movie.PropType = {
    id : PropType.number.isRequired
    , coverImage : PropType.string.isRequired
    , title :PropType.string.isRequired
    , summary : PropType.string.isRequired 
    , genres : PropType.arrayOf(PropType.string).isRequired
}

export default Movie;