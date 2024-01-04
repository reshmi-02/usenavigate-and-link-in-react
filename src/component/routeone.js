import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Routeone=()=>{
    const navi=useNavigate()
    const gotonavi=()=>{
        navi("/navi")
    }
    return(
        <div>
            <h3>Why we use router in react?</h3>
            <li>The primary goal of Router in React JS is to supply the browser with an asynchronous URL that corresponds to the data that will show on the web page</li>
            <li>ReactJS Router is mainly used for developing Single Page Web Applications.</li>
            <li>React Router is used to define multiple routes in the application.</li>
            
        <li>When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</li>
            <div>
                <a href='#' onClick={gotonavi}>Known about usenavigate click here</a>
            </div>
            <div>
                <Link to={"links"}>Known about Link click here</Link>
            </div>
        </div>
    )
}


export default Routeone
