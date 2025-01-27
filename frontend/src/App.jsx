import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Candi from "./components/Candi"
function App (){
    return <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/Candi" element={<Candi />} ></Route>

    </Routes>
}
export default App