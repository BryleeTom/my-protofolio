import { NavLink, Link } from "react-router"

function Header() {
    return (
        <nav className="header-container">
        <div className="header-tittle">MuhammadAsrin</div>
            <ul className="header-list">
                <NavLink to='/' className={({isActive}) => isActive ? "active" : "list"}> About</NavLink>
                <NavLink to='/Skill' className={({isActive}) => isActive ? "active" : "list"}>Skill</NavLink>
                <NavLink to='/Contact' className={({isActive}) => isActive ? "active" : "list"}>Contact</NavLink>
            </ul>
        </nav>
    )
}

export default Header