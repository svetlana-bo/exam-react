import mainLogo from "../assets/logo_cropped.png"
import { Link } from "react-router-dom"

export default function DefaultPage() {

    return (
        <div className="main-box">
        <img src={mainLogo} alt="Logo Image" style={{ width: "300px", height: "auto" }} />
        <h1>DishDelights</h1>
        <p>Welcome to DishDelights, your go-to destination for discovering and enjoying incredible recipes from around the world. 
        <br />
        <br />Whether you're an experienced chef or a home cook looking for inspiration, our platform offers a vast collection of carefully curated recipes to suit every taste and dietary preference.</p>
        <Link className="button" to="recipesDishDelights">Find Recipes</Link>
        </div>
    )
}