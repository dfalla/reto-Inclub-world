import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Form } from "../components"
import { Layout } from "../components/layout/Layout"
import { ListPage } from "../pages/ListPage"
import { NotFound } from "../pages/NotFound"
export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<ListPage/>}/>
                <Route path='servicios/crear-servicio' element={<Form/>}/>
                <Route path='servicio/:id' element={<Form/>}/>

                <Route path='/*' element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

