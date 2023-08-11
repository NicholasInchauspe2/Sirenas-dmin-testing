import { Navigate, Route, Routes as RoutesDom } from "react-router-dom"
import NotFound from "../../pages/NotFound/NotFound"
import Home from "../../pages/Home/Home"
import Users from "../../pages/Users/Users"
import ProfileUser from "../../pages/ProfileUser/ProfileUser"
import Talleres from "../../pages/Workshops/Workshops"
import Taller from "../../pages/Workshop/Workshop"
import CreateWorkshop from "../../pages/CreateWorkshop/CreateWorkshop"

const Routes = () => {
    return (
        <RoutesDom>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Users />} />
            <Route path="/usuarios/:userId" element={<ProfileUser />} />
            <Route path="/talleres" element={<Talleres />} /> 
            <Route path="/talleres/:workshopId" element={<Taller />} /> 
            <Route path="/taller" element={<CreateWorkshop />} /> 
            <Route path="/usuario" element={<Users />} /> 
            <Route path="/calendario" element={<Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" />} />
        </RoutesDom>
    )
}

export default Routes