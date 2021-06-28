import './navbar.scss'
import {Person, Mail} from "@material-ui/icons"

export default function navbar(){
    return(
        <div className='navbar' >
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className='logo'>iuvenius.</a>
                    <div className="itemContainer">
                        <Person className='icon'/>
                        <span>+49 0176 329 45 200</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className='icon'/>
                        <span>emrekurtt16@gmail.com</span>
                    </div>
                </div>
                <div className="right"></div>S
            </div>
        </div>
    )
}