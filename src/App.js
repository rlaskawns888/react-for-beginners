import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

/**
 * 
 * Movie API : https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year
 * 
 * - react-router-dom 을 통한 페이지 전환.
 *  : https://v5.reactrouter.com/web/guides/quick-start
 * => npm i react-router-dom@5.3.0 (6V 부터 달라짐.)
 * 
 * @returns 
 */

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/movie/:id">
                    <Detail/>
                </Route>
                <Route path="/">
                    <Home />
                </Route> 
            </Switch>
        </Router>
    );
    
}

export default App;