import { useState } from "react"
import { NavLink, Link } from "react-router"

function Header() {
    const [isToggle, setToggle] = useState(false)
    
    const HandleToggle = () => {
        setToggle(!isToggle)
    }
    const HandleClose = () => {
        setToggle(false)
    }


    return (
        <nav className="header-container">
        <div className="header-tittle">MuhammadAsrin</div>
            <button className="menu-toggle" onClick={HandleToggle}>
                ☰
            </button>
            <div className={`${isToggle ? "sidebar-open" : "sidebar-close"}`}>
            <ul className="header-list">
                <NavLink to='/' className={({isActive}) => isActive ? "active" : "list"} onClick={HandleClose}> About</NavLink>
                <NavLink to='/Skill' className={({isActive}) => isActive ? "active" : "list"} onClick={HandleClose}>Skill</NavLink>
                <NavLink to='/Contact' className={({isActive}) => isActive ? "active" : "list"}>Contact</NavLink>
            </ul>
            </div>
        </nav>
    )
}

export default Header