
import Navbar from './components/navbar'
import {Route,Routes} from 'react-router-dom'
import {Login,Stats,Home} from "./components/index"

function App() {
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Stats" element={<Stats/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
