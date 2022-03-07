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
 * - npm i gh-pages
 * : 결과물을 github pages 에 업로드 할 수 있게 해주는 패키지
 * 
 * 1) package.json 아래와 같이 추가.
 
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "deploy" : "gh-pages -d build",
    "predeploy" : "npm run build"
  },

  "homepage" : "https://rlaskawns888.github.io/react-for-beginners"

  2) npm run deploy 를 하면, predeploy 발생되고, 해당 URL 로 들어가면 올라간것을 볼수있음.

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