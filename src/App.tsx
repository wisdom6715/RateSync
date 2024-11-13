import './App.css'
import Converter from './_components/converter/Converter'
import Header from './_components/header/Header'
import Graph from './_components/chart/Graph'
function App() {
  return (
    <>
      <div className='generalContainer'>
        <Header />
        <Converter />
        <Graph />
      </div>
      
    </>
  )
}

export default App
