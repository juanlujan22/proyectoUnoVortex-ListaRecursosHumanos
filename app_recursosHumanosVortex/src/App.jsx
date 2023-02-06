import './App.css'
import { useSelector } from 'react-redux'

function App() {
  const employesState=useSelector(state => state.employes)
  console.log(employesState)
  return (
    <div className="App">
      <h1> Lista Recursos Humanos </h1> 
    </div>
  )
}

export default App
