import { Link } from "react-router-dom"
function Nav(){
    return(
<div className="container">

    <h1>Portfolio</h1>

    <ul>

        <li><Link to="/home" >Home</Link ></li>
        <li><Link to="/skills" >Skills</Link ></li>
        <li><Link to="/project" >Project</Link ></li>
        <li><Link to="/contact" >Contact</Link ></li>
        
    </ul>
</div>


    )
}
export default Nav