import { Navigate, Route, Routes} from "react-router-dom"
import { HomePage } from "./HomePage"
import {LoginPage} from "./LoginPage"
import {AboutPage} from "./AboutPage"
import { Navbar } from "./Navbar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <Navbar/>
      <hr />
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>} aria-label="login"/>
        <Route path="about" element={<AboutPage/>}/>

        {/* <Route path="/*" element={<LoginPage/>}/> */}
        {/* Te redirecciona a la ruta */}
        <Route path="/*" element={<Navigate to={<AboutPage/>}/>}/>

      </Routes>
    </UserProvider>
  )
}
