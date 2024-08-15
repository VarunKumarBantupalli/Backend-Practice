import { useState } from 'react'
import './App.css'
import axios from 'axios'
import { useEffect } from 'react'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {

    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  
  })
  

  return (
    <>
    <h1>hello world!</h1>
    <p>jokes {jokes.length}</p>
      {
            jokes.map((joke , index) => {
              return (
              <div key={joke.id}>
                <h3>{joke.title}</h3>
                <h4>{joke.content}</h4>            
              </div>
              );
            })
            
      } 
    </>
  )
}

export default App
