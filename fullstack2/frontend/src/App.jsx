import './App.css'

import { useState ,useEffect } from 'react'

function App() {

  const [students, setStudents] = useState([]);
  const fetchData = async () => {
    let a = await fetch('/api/masterstudents')
    let data = await a.json();
    setStudents(data)
  };
  useEffect(() => {
    fetchData();
  },[]);

  return (
    <>
      <h1>hello world!</h1>
      {
        students.map((student, index) => {
          return (
            <div key={student.id}>
              <h3>{student.id}</h3>
              <h3>{student.code}</h3>
            </div>
          );
        }
        )
      }
    </>
  )
}

export default App
