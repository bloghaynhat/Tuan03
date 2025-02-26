import "./NavBar.css"
import avatar from "../assets/avatar-cute-1.jpg"
function NavBar() {
    return ( <div className="navbar-container">
        <div className="logo">
            <span className="logo-icon">🥗</span>
        <span className="logo-text">Chefify</span>
        </div>
        
        <div className="search-box">
            <span>🔍</span>
            <input type="text" />
        </div>
        <div className="menu">
            <a href="">What to cook</a>
            <a href="">Recipes</a>
            <a href="">Ingredients</a>
            <a href="">Occasions</a>
            <a href="">About us</a>
        </div>
        <button className="button-ne"><img src="" alt="" />Your Recipe Box</button>
        <img src={avatar} alt="" className="avatar"/>
    </div> );
}

export default NavBar;