import { Link } from "react-router-dom";
import logo from "../assets/logo_128x128.png"

export default function Header() {

    return (
        <>
        <nav className="top-nav">
            <img src={logo} alt="Logo" className="nav-logo" />
            <div nav-links-container>
                <Link className="top-link" to="">Home</Link>
                <Link className="top-link" to="about">About</Link>
                <Link className="top-link" to="recipesDishDelights">Find Recipes</Link>
                <Link className="top-link" to="recipesPersonal">Your Favourites</Link>
                <Link className="top-link" to="contact">Contact</Link>
            </div> 
        </nav>

        </>
    )
}