import "./menu.scss"


export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")} id="menu"> {/* if menuOpen is True, make it active ----- need to have the space " " after "topbar " for this to work*/}
            <ul>
                <li onClick={()=>setMenuOpen(false)}> {/* closes the menu list when an li item is clicked on-- whenever it is FALSE, when I click it will turn TRUE (See state in app.jsx)*/}
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#blog">Blog</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>

        </div>

    )
}