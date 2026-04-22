import Photo from '../images/Developer Frontend Developer Pin.jpeg'
import {Link}from 'react-router-dom'
function Home(){
    return(
<div className="hero_con">


    <div className='image'> 
        <img src={Photo} alt="profile pic" className='imagesection' />
    </div>
    <div className='details'>  
        <div className='namesection'>
            <h6>welcome to my portfolio</h6>
            <h2>Hi I'm <br></br>
            <span className='myname'>Kennedy Kimanzi</span> <br />
            crafting digital experience</h2>
           
         </div>
         <div className="paradiv">
 <h4>bio</h4>
            <p>A junior web developer passionate about  building clean,responsive ,and user-friendly website. 
                I love turning design ideas into functional web pages and solving  small problems with code. </p>
        <button> <Link to='/contact'>Contact Me</Link></button>
        </div>
    </div> 
    <div>
       
    </div>
</div>
    )
}
export default Home