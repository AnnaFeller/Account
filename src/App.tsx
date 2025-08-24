import './App.css'
import Profile from "./components/Profile";
import {Navigate, Route, Routes} from "react-router";
import Guest from "./components/Guest";

function App() {
    const token = ''
return(
    <Routes>
    <Route path="/" element={token ? <Navigate to={'/profile'}/>: <Guest/>}/>
    <Route path={'/profile'} element={ token ? <Profile/> : <Navigate to={'/'}/> }/>
    </Routes>
)

}

export default App
