import { Route, Routes } from "react-router-dom";
import Home from "./home";



function PageRoutes(){
    return(
        <Routes>
            <Route path="/" exact element={Home} />
        </Routes>
    )

}

export default PageRoutes;