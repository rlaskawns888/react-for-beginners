import Button from './Button';
import styles from "./App.module.css";
import { useState, useEffect } from 'react';

function App() {
  const [counter, setConter] = useState(0);
  const [keyword, setKeyWord] = useState("");
  const onClick = () => setConter((prev) => prev + 1);
  const onChange = (e)  => setKeyWord(e.target.value);
  console.log('i run all the time');
  useEffect(() => {
    console.log('I run only once');
  }, []);
  // useEffect(1, 2)
  // 1: 한번만 실행할 부분을 적는다.
  // 2: [] 을 사용시, 한번만 실행됨.

  useEffect(() => {    
    console.log('I run when "keyword" changes', keyword);
  }, [keyword]);
  // 2 : 변화될떄만 동작하도록 설정 가능.
  // ex) 위의 keyword 가 변화될때만, 실행 하도록 처리

  useEffect(() => {
    console.log("I run when 'counter' changes ", counter);
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'counter' & 'keyword'");
  }, [keyword, counter]);
  return (
    <div>
      <input 
        value={keyword}
        onChange={onChange} 
        type="text" 
        placeholder='Search here...'
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Counter Btn</button>
    </div>
  );
}

export default App;
