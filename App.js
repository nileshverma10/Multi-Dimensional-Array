
import { useEffect,useRef ,useState} from 'react'
import './App.css'
// import Index from './component/Index'

function App() {
  const [counter, setCounter] = useState(0);
  const ref = useRef(null);
      useEffect(() =>{
         handleStart();
       }, []);

       const handleStart = () =>{
        ref.current=  setInterval(() =>{
          setCounter(p=> p+1)
        },1000);
        return() =>{
          clearInterval(ref.current)
        }
       };
  return <div className="App">
  <h1>Counter:{counter}</h1>
    <button onClick={() =>{
      clearInterval(ref.current)
    }}>Stop</button>
  <button onClick={handleStart}>Start</button>
  <button onClick={() =>{
    clearInterval(ref.current)
    setCounter(0)
  }}>Reset</button>
  </div>
}

export default App
