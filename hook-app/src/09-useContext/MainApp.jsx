import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "./HomePage"
import {LoginPage} from "./LoginPage"
import {AboutPage} from "./AboutPage"

export const MainApp = () => {
  return (
    <>
      <h1>MainApp</h1>
      <hr />
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/login">Login</a>
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="about" element={<AboutPage/>}/>

        {/* <Route path="/*" element={<LoginPage/>}/> */}
        {/* Te redirecciona a la ruta */}
        <Route path="/*" element={<Navigate to={<AboutPage/>}/>}/>

      </Routes>
    </>
  )
}
