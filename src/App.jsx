import { Outlet } from "react-router-dom"
import Nav from "./assets/components/nav"
function App(){
    return(
<>

<Nav/>
<Outlet/>

</>

    )
}
export default App