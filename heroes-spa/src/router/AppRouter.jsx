import { Route, Routes } from "react-router-dom"
import { HeroesRoutes } from "../heroes"
import { LoginPage } from "../auth"

export const AppRouter = () => {
  return (
    <>
      <Routes>
        {/*Para todas las rutas va a mostrar el login */}
        <Route path="/*" element={<HeroesRoutes />} />
        <Route path="login" element={<LoginPage />} />
        
      </Routes>
    </>
  )
}
