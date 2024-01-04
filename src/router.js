import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Routeone from "./component/routeone.js"
import Navi from "./component/navi.js"
import Links from "./component/links.js"
const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Routeone/>}></Route>
                <Route path="/navi" element={<Navi/>}></Route>
                <Route path="/links" element={<Links/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router