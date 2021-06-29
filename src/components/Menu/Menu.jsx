import './menu.scss'

export default function Menu({hamburgerMenu, setHamburgerMenu}) {

    const setFalse = () => {
        setHamburgerMenu(false)
    }

    return (
        <div className={"menu " + (hamburgerMenu && 'active')}>
            <ul>
                <li onClick={()=> setFalse()}><a href="#intro">Home</a></li>
                <li onClick={()=> setFalse()}><a href="#portfolio">Portfolio</a></li>
                <li onClick={()=> setFalse()}><a href="#works">Works</a></li>
                <li onClick={()=> setFalse()}><a href="#testimonials">Testimonials</a></li>
                <li onClick={()=> setFalse()}><a href="#contact">Contact</a></li>
            </ul>
        </div>
    )
}