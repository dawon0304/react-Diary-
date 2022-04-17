
import { useState } from 'react';
import './App.css';

function App() {
  let [글내용,글내용변경] = useState(['오늘은 React 공부를 했다.','어제는 새우랑 산책헀다.']);
  let [입력값, 입력값변경] = useState('');
  return (
    <div className="App">
      <div className='header'>
        <div>세줄 Diary</div>
      </div>
      {
        글내용.map(function(a){
          return(
          <div className='list'>
            <h3> {a} </h3>
            <p>2022.04.17 작성</p>
            <button className='removeBtn'>삭제</button>
            <hr/>
          </div>
          )
        })
      }

      <div className='form'>
        <input onChange={ (e)=> {입력값변경(e.target.value)} }/>
        <button onClick={()=> {
          var arrayCopy = [...글내용]
          arrayCopy.unshift(입력값);
          글내용변경(arrayCopy);
        } }>추가하기</button>
      </div>
      
    </div>
  );
}

export default App;
