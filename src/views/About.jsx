import chef from "../assets/chef.png"

export default function About() {

    return (
        <div className="main-box">
        <h2> About DishDelights</h2>
        <div className="about-box">
        <img src={chef} alt="Portrait of Chef Alejandro" style={{ width: "400px", height: "auto", maxWidth: "30%"}}/>
        <p>Hi, I’m Alejandro Schneider, the creator of DishDelights. 
          Growing up in a family of chefs, I fell in love with cooking and its power to bring people together. 
        <br />Traveling the world inspired me to create DishDelights, a digital space where food lovers can explore, share, and save recipes with ease. 
        Whether you're a seasoned chef or a beginner, our platform makes cooking accessible and exciting. 
        Headquartered in Gourmet Town, Vienna, Austria, DishDelights is all about inspiring creativity in the kitchen and fostering a vibrant community. 
        We believe that every dish tells a story, and we are here to help you create and share yours. Join us and make every meal a delightful experience!
        </p>
        </div>
        </div>
    )
}