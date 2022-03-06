/**
 * 
 * Cleanup
 * 
 */
import { useState, useEffect } from "react";

function Hello() {

  useEffect(() => {
    console.log('created :)');
    return () => console.log("destoryed :(");
  }, []);

  // function byFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log('created :)');
  //   return byFn;
  // }  
  // useEffect(hiFn, []);

  return <h1>Hello</h1>;
}
// Hello 컴포넌트가 사라질때 함수를 사용가능함. ex)click event 와 같은 이벤트 삭제가능.

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      { showing ? <Hello /> : null }
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;